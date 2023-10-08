

const DetailsCard = ({detail}) => {
    const {title,image,description,price} = detail
    return (
        <div className="card shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p className="text-2xl text-end">Price : {price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-danger w-full">Booking Now</button>
    </div>
  </div>
</div>
    );
};

export default DetailsCard;