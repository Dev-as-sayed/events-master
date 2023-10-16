import { useLoaderData, useParams } from "react-router-dom";

const Mambers = () => {

    const mambers = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    // const mamber = mambers.find( mamber => idInt == mamber.id)
    console.log(mambers);

    return (
        <div>
            
        </div>
    );
};

export default Mambers;