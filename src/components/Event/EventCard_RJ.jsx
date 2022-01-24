import React from "react";

const EventCard_RJ = (props) => {
    require('./eventCard.css')

    return (
        <div className="event-card">
            <div className="desc d-flex flex-column justify-content-between">
                <div>
                    <h4>{props.title}</h4>
                    <br />
                    <p>{props.smallDescription}</p>
                </div>
                <a className="btn btn-primary text-white m-2" href={`event${props.id}`}>Read More</a>
            </div>
            <div className="img-container d-flex justify-content-center align-items-center">
                <img className="img-fluid" src={props.thumbnail} alt={props.title} />
            </div>
        </div>
    )
}

export default EventCard_RJ
