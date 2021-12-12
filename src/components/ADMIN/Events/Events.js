import React, { useState, useEffect } from "react";
import axios from 'axios'
import EventListItem from "./EventListItem";
import Pagination from '@material-ui/lab/Pagination';
import "./styles.css";
import Swal from "sweetalert2";


const Events = () => {
    const [loading,setLoading]  = useState(true)
	const AuthToken = localStorage.getItem('authToken')
	const [eventData,setEventData] = useState({})
	const [noOfEvents,setNoOfEvents] = useState(0)
	const [currentPage,setCurrentPage] = useState(1)
	const [sort,setSort] = useState(-1)

    useEffect(() => {
      axios({
        method: 'GET',
        url: `http://localhost:4000/events/list?page=${currentPage}&sort=${sort}&limit=10`
      }).then(res =>{
		setNoOfEvents(res.data.totalEvents)
		setEventData(res.data.resultArray)
		setLoading(false)
      }).catch(err =>{
		  console.error(err)
		  Swal.fire('Error !',`${err}`,'error')
	  })
    }, [loading,currentPage,sort])

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
				  headers: {'Authorization' : AuthToken },
				  url: `http://localhost:4000/events/${eventId}`
			  }).then(res =>{
				  setLoading(true)
				  Swal.fire('Event Deleted Successfully','','success')
			  }).catch(err =>{
				setLoading(false)
				if (err.response.status === 401) {
					window.location.href="/login"
				}else if(err.response.status === 500) {
					Swal.fire('Server Error !','Contact Support Immediately !','error')
				}else{
					Swal.fire('Unexpected Error Occured !','Contact Support Immediately !','error')
				}
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
            <li class="dropdown-item cursorP" onClick={() =>setSort(-1)}>Newer</li>
            <li class="dropdown-item cursorP" onClick={() =>setSort(1)}>Older</li>
          </ul>
		  <Pagination
			count={Math.ceil(noOfEvents / 10)}
			page={currentPage}
			onChange={(event, value) => setCurrentPage(value)}
			color="primary"
		/>
        </div>
		<p className="text-center total-events">Total: {noOfEvents}</p>
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
