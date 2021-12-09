import React from "react";

const EventListItem = (param) => {

  return (
    <div className="event-item bg-white d-flex align-items-center position-relative">
      <div className="date text-white">{param.date}</div>
        <img src={param.thumbnail} alt="" />
      <a className="title text-dark" href="/">
        {param.title}
      </a>
      <i className="fas fa-ellipsis-h position-absolute" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href={`edit-event/${param.id}`}>Edit</a></li>
        <li><h6 class="dropdown-item py-1 cursorP" >Delete</h6></li>
      </ul>

    </div>
  );
};

export default EventListItem;
