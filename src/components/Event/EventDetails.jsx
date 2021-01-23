import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";

const styleBg = {
    backgroundColor: "#EEF0F1"
}

const EventDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch();

    return (
        <div>
            { isPending && <div>...Loading</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>Event Details - { id }</h2>
                    <h2>{ blog.title }</h2>
                    <p>{ blog.content }</p>
                </article>
                )}
        </div>
    )
}

export default EventDetails;