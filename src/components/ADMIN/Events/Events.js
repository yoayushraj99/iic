import React, { useState, useEffect } from "react";
import axios from 'axios'
import EventListItem from "./EventListItem";
import "./styles.css";
import Swal from "sweetalert2";

const Events = () => {
    const [loading,setLoading]  = useState(true)
	const [eventData,setEventData] = useState({})

    useEffect(() => {
      axios({
        method: 'GET',
        url: 'http://localhost:4000/events/list'
      }).then(res =>{
		setEventData(res.data)
		setLoading(false)
      }).catch(err =>{
		  console.error(err)
		  Swal.fire('Error !',`${err}`,'error')
	  })
    }, [loading])

	const DeleteEvent = (eventId) =>{
		Swal.fire({
			title: 'Are you sure you want to delete this event?',
			showCancelButton: true,
			icon:'warning',
			confirmButtonText: 'Delete',
			confirmButtonColor: 'red',
			denyButtonText: `Cancel`,
		  }).then((result) => {
			if (result.isConfirmed) {
			  axios({
				  method: 'DELETE',
				  headers: {'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiMjE1ZTgwZjVmZjYxNjlkNjY3NDk3In0sImlhdCI6MTYzOTEyMjM0NCwiZXhwIjoxNjM5NzI3MTQ0fQ.PJJ7VuqH-I1iA1LPkviFLinHMScZTFFOgsIXrWhTISY'},
				  url: `http://localhost:4000/events/${eventId}`
			  }).then(res =>{
				  setLoading(true)
				  Swal.fire('Event Deleted Successfully','','success')
			  }).catch(err =>{
				  console.error(err)
				  Swal.fire(
					  `Error !`,`${err}`,'error'
				  )
			  })
			}
		  })
	}

  return (<>
    <div className="admin-events-container">
        <h2 className="heading p-4">Events List</h2>
        <div className="control-bar mx-3 my-4">
          <button className="btn text-white" style={{background:'#1F51FF'}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Sort By</button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" href="#">Newer</a></li>
            <li><a class="dropdown-item" href="#">Older</a></li>
          </ul>
        </div>
          <div className="events-list-container">
			{loading ? <h1>Loading</h1>:
				eventData.map((data,index) => {
					return (<>
						<EventListItem 
							key={data._id} 
							id={data._id} 
							title={data.title} 
							thumbnail={data.thumbnail} 
							date={data.date}
							DeleteEvent ={eventId => DeleteEvent(eventId)} 
						/>
					</>)
				})
			}
            </div>
      </div>
    </>
  );
};

export default Events;
