import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDeatles = () => {

    const deatails = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = deatails.find( detail => idInt == detail.id)
    const {thambel, service_name, description, price} = detail;

    const [step, setStep] = useState(0);

    const handeOneStepRevars = () => {
        if(step > 0){
            setStep(step - 1)
        }
    };

    return (
        <div className="min-h-[80vh] mb-6">
            <div className="card card-compact w-96 mx-auto my-auto bg-base-100 shadow-xl">
                <figure><img src={thambel} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-center">
                        <p className="text-xl mt-2">{price} $</p>
                        <Link to='/booking'>
                            <button className="btn btn-secondary" >Boocking</button>
                        </Link>
                        <Link to='/'>
                            <button className="btn btn-primary" onClick={handeOneStepRevars}>Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default ServiceDeatles;