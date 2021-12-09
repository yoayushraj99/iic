import React from "react";

const EventListItem = () => {
  return (
    <div className="event-item bg-white d-flex align-items-center position-relative">
      <div className="date text-white">27/02/2001</div>
        <img src={require('../../../images/Event15.PNG')} alt="" />
      <a className="title text-dark" href="/">
      IIIC Session with Dr. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab amet sequi voluptatem alias, molestias, quaerat vel eos fuga reiciendis nulla fugit distinctio. Minima, natus eligendi.
      </a>
      <i className="fas fa-ellipsis-h position-absolute" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></i>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Edit</a></li>
        <li><a class="dropdown-item" href="#">Delete</a></li>
      </ul>

    </div>
  );
};

export default EventListItem;
