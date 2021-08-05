import React from "react";
import EventCard from '../Cards/EventCard.component'
import ButtonsOnRight from '../ButtonsOnRight/ButtonsOnRight'

const Events = ({posts, loading}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
        <ButtonsOnRight/>
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
