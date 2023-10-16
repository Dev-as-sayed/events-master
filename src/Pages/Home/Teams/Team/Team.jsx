import { useLoaderData, useParams } from "react-router-dom";
import TeamGroup from "./TeamGroup";

const Team = () => {

    const deparments = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const deparmentFind = deparments.find( deparmentFind => idInt == deparmentFind.id)
    
    const teamMambers = deparmentFind.team;

    return (
        <div className="flex flex-col justify-center">
            <div className="w-fit p-6   rounded-2xl bg-slate-300 lg:m-24 lg:grid grid-cols-2 gap-10 shadow-xl ">
                {
                    teamMambers.map( mambers => <TeamGroup 
                        key={mambers.idT}
                        mambers={mambers}
                    ></TeamGroup>)
                }
            </div>
        </div>
        
    );
};

export default Team;