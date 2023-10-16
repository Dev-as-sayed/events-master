
const TeamGroup = ({ mambers}) => {

    const {name, email, post_category, image} = mambers;

    return (
        <div className="card card-side w-[430px] h-40 bg-base-100 shadow-xl">
            <figure><img src={image} className='h-40'/></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Post Category: {post_category}</p>
            </div>
        </div>
    );
};

export default TeamGroup;