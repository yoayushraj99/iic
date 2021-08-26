import React from "react";
import EventCard from '../Cards/EventCard.component'

const Events = ({posts, loading}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {posts.map((post, index) => {
        const { title, ...otherProps } = post;
        return (
          <EventCard key={index} title={title} {...otherProps}/>
        );
      })}
    </div>
  );
}

export default Events;
