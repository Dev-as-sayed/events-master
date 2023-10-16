import { useEffect, useState } from "react";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import Teams from "./Teams/Teams";

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
            .then( res => res.json())
            .then(data => {
                setServices(data);

            })
    });

    return (
        <div>
            <div>              
                <Hero></Hero>
            </div>
            <div className="lg:m-24 lg:grid grid-cols-3 gap-6">
                {
                    services.map( service => <Service
                        key={service.id}
                        service={service}
                    ></Service> )
                }
            </div> 
            <div className="bg-red-100 p-24 flex flex-col">
                <div className="mx-auto pb-8">
                    <h1 className="text-4xl text-center text-black opacity-60">TEAM SECTION</h1>
                    <p className="text-xl text-center">If you want to see team mamber, click on card..!</p>
                </div>
                <div className="  lg:grid grid-cols-3 gap-6 ">
                    {
                        services.map( teams => <Teams
                            key={teams.id}
                            teams={teams}
                        ></Teams>)
                    }
                </div>        
            </div> 
        </div>
    );
};

export default Home;