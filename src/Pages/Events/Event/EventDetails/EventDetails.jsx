import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {

    const eventDetails = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const eventDetailFind = eventDetails.find( detail => detail.id == idInt);

    const {event_type, description, event_image} = eventDetailFind;

    const [stepEvent, setStepEvent] = useState(0);

    const handeOneStepEventRevars = () => {
        if(stepEvent > 0){
            setStepEvent(stepEvent - 1)
        }
    };

    return (
        <div className="min-h-[80vh] mb-6">
            <div className="card card-compact w-96 mx-auto my-auto bg-base-100 shadow-xl">
                <figure><img src={event_image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{event_type}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-center">
                        <Link to='/event'>
                            <button className="btn btn-primary" onClick={handeOneStepEventRevars}>Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default EventDetails;