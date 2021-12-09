import React from "react";
import "./css/styles.css";
import EventListItem from "./EventListItem";

const Events = () => {
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
              <EventListItem />
              <EventListItem />
              <EventListItem />
              <EventListItem />
              <EventListItem />
              <EventListItem />
              <EventListItem />
              <EventListItem />
              <EventListItem />
              <EventListItem />
              <EventListItem />
              <EventListItem />
              <EventListItem />
              <EventListItem />
              <EventListItem />
              <EventListItem />
            </div>
      </div>
    </>
  );
};

export default Events;
