import { Link } from "react-router-dom";

const Teams = ({teams}) => {
    const {thambel, service_name, id} = teams;
    return (
        <Link to={`/teams/${id}`}>
            <div className="card w-80 h-[300px] bg-base-100 shadow-xl">
                <div className="card-body h-2/6">
                    <h2 className="card-title">{service_name}</h2>
                    <p></p>
                </div>
                <figure><img className="w-80 h-44" src={thambel} /></figure>
            </div>
        </Link>
    );
};

export default Teams;