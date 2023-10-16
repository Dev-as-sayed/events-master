import { useLoaderData } from "react-router-dom";
import Event from "./Event/Event";

const Events = () => {

    const events = useLoaderData();
    console.log(events);
    
    return (
        <div className="hero min-h-screen " style={{backgroundImage: 'url(https://i.ibb.co/J7xPczh/Event-Concept-and-Design.jpg)'}}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="lg:m-24 lg:grid grid-cols-3 gap-8">
                {
                    events.map( singleEvent => <Event
                        key={singleEvent.id}
                        singleEvent={singleEvent}
                    ></Event>)
                }
            </div> 
        </div>
    );
};

export default Events;