import { useState } from "react";

const Bookin = () => {

    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    const handelBooking = e => {
        e.preventDefault();

        const firstName = e.target.firstname.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        const time = e.target.time.value;
        const date = e.target.date.value;

        console.log(firstName, lastName, email, number, time, date);


        if(handelBooking){
            setBookingConfirmed(true)
        }


    }
    
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/J7xPczh/Event-Concept-and-Design.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="w-[640px] px-5 py-8 rounded-lg bg-gray-300 bg-opacity-50">
                {   
                    bookingConfirmed ? 
                    <div className="toast toast-top toast-end">
                        <div className="alert alert-info">
                            <span>Booking confirmed! Thank you for your reservation.</span>
                        </div>
                    </div>
                    :
                    <></>
                }
                <form className="" onSubmit={handelBooking}>
                        <div className="my-4">
                            <input type="text" name="firstname" placeholder="Your first name" className="w-72 h-10 pl-2 mr-4 border-2 text-white bg-transparent rounded" required/>
                            <input type="text" name="lastName" placeholder="Your last name" className="w-72 h-10 pl-2 border-2 text-white bg-transparent rounded"/>
                        </div>
                        <div className="my-4">
                            <input type="email" name="email" placeholder="Email" className="w-72 h-10 pl-2 mr-4 border-2 text-white bg-transparent rounded" required/>
                            <input type="number" name="number" placeholder="Number" className="w-72 h-10 pl-2 border-2 text-white bg-transparent rounded" required/>
                        </div>
                        <div className="my-4">
                            <input type="number" name="time" placeholder="Time" className="w-72 h-10 pl-2 mr-4 border-2 text-white bg-transparent rounded" required/>
                            <input type="number" name="date" placeholder="Date" className="w-72 h-10 pl-2 border-2 text-white bg-transparent rounded" required/>
                        </div>
                        <div className="w-full flex">
                            <button type="submit" className="btn-primary h-12 w-1/3 mx-auto rounded-lg">Book</button>
                        </div>
                    </form>
            </div>
        </div>
    );
};

export default Bookin;