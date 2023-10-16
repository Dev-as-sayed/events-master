import { Link } from "react-router-dom";

const Event = ({ singleEvent }) => {
    
    const {event_type, description, event_image, id} = singleEvent;
    return (
        <Link to={`/eventDetail/${id}`}>
            <div className="card w-[330px] h-44 bg-base-100 image-full">
                <figure><img className="w-[330px] h-40 opacity-60 " src={event_image} alt="Shoes" /></figure>
                <div className="card-body h-full ">
                    <h2 className="card-title">{event_type}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
        
    );
};

export default Event;