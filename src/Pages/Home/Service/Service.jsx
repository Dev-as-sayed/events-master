import { Link } from "react-router-dom";

const Service = ({service}) => {

    const {thambel, service_name, description, id} = service;
    
    return (
        <Link to={`/serviceDeatles/${id}`}>
            <div className="card w-[320px] h-[340px] bg-base-300  shadow-md image-full">
                <figure><img className="opacity-40" src={thambel} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title mb-5">{service_name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
        
    );
};

export default Service;