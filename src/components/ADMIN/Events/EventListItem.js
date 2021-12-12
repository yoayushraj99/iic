import React from "react";
import { Link } from "react-router-dom";

const EventListItem = (param) => {

  return (
    <div className="event-item bg-white d-flex align-items-center position-relative">
      <div className="date text-white">{param.date}</div>
        <img src={param.thumbnail} alt="" onError={e => {e.target.onerror = null; e.target.src="https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png"} }/>
      <a className="title text-dark" href={`/event${param.id}`}>
        {param.title}
      </a>
      <i className="fas fa-ellipsis-h position-absolute" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><Link class="dropdown-item" to= {{ pathname:`edit-event/${param.id}`, state: param.id}}  >Edit</Link></li>
        <li><h6 class="dropdown-item py-1 cursorP" onClick={() =>param.DeleteEvent(param.id)}>Delete</h6></li>
      </ul>

    </div>
  );
};

export default EventListItem;
