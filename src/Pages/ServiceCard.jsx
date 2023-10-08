import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {title,image,description,price,id} = service
    return (
        <div className="grid lg:grid-cols-3">
            <div className="card w-96 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    
                        {
                        
                        <p>{description}</p>
                        }
                        <div>
                            <p className="text-2xl">Price: {price}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/service/${id}`}>
                                <button className="btn btn-danger">See Details</button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
   
    );
};

export default ServiceCard;