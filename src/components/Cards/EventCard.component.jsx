import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({title, context, link, imageName}) => (
    <div className="container py-3 px-5">
        {/* card Start */}
        <div className="card">
          <div className="row">
            <div className="col-md-7 px-3">
              <div className="card-block px-6">
                <h4 className="card-title">
                  {title}
                </h4>
                <p className="card-text">
                  {context}
                </p>
                <Link to={link}>
                  <a href="#" className="mt-auto btn btn-primary">
                    Read More
                  </a>
                </Link>
              </div>
            </div>
            {/* Carousel Start */}
            <div className="col-md-5">
              <div className="card-image">
                <img
                  src={require('../../images/'+imageName)}
                  alt="event_image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
);

export default EventCard;