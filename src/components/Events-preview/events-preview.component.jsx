import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import Navbar from "../Nav-foot/Navbar";
import Footer from "../Nav-foot/Footer";
import IncubationNAv from "../Nav-foot/IncubationNav";
import EventCard_RJ from '../Event/EventCard_RJ'

function EventsPreview() {

  const [loading, setLoading] = useState(false);
	const [currentPage,setCurrentPage] = useState(1)
	const [noOfEvents,setNoOfEvents] = useState(0)
  const [eventData,setEventData] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `http://localhost:4000/events/list?page=${currentPage}&sort=-1`
    }).then(res =>{
        setNoOfEvents(res.data.totalEvents)
        setEventData(res.data.resultArray)
    }).catch(err =>{
      console.error(err)
    })
    
  }, [loading,currentPage])

  return (
    <div>
        <IncubationNAv />
        <Navbar />
      <div className="container">
        <img
          src={require("../../images/upcoming_event.webp")}
          alt="Upcoming Events"
          className="guideline-img"
        />
        {
          eventData.map((data,index) => {
            return(<>
              <EventCard_RJ 
                id={data._id}
                thumbnail={data.thumbnail}
                title={data.title}
                date={data.date} 
                smallDescription={data.smallDescription} />
            </>)
          })
        }
      </div>
      

      <div className="d-flex justify-content-center" >
      <Pagination
        count={Math.ceil(noOfEvents / 2)}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        color="primary"
      />
      </div>

      <Footer />
    </div>
  );
}

export default EventsPreview;