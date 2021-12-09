import React, { useState, useEffect } from "react";
import axios from 'axios'
import EventListItem from "./EventListItem";
import "./css/styles.css";

const Events = () => {
    const [loading,setLoading]  = useState(true)
	const [eventData,setEventData] = useState({})

    useEffect(() => {
		setLoading(true)
      axios({
        method: 'GET',
        url: 'http://localhost:4000/events/list'
      }).then(res =>{
        console.log(JSON.stringify(res.data))
		setEventData(res.data)
		setLoading(false)
      }).catch(err =>{
		  console.error(err)
	  })

    }, [])
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
