

const ServiceCard = ({service}) => {
    const {title,image,description,price} = service
    return (
        <div className="grid lg:grid-cols-3">
            <div className="card w-96 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="text-end">
                    <p>Price: {price}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full">Details</button>
                    </div>
                </div>
            </div>
        </div>
   
    );
};

export default ServiceCard;