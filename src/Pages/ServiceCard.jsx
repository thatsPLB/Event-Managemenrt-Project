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
                        description.length > 200
                        ? <p>{description.slice(0,202)} <Link to={`/service/${id}`} 
                        className="text-blue-900 font=-bold" > Read more...</Link> </p>
                        :
                        <p>{description}</p>
                        }                   
                   
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-danger w-full">Price: {price}</button>
                    </div>
                </div>
            </div>
        </div>
   
    );
};

export default ServiceCard;