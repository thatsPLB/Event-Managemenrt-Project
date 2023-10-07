

const Services = () => {
    return (
        <div className='container '>
            <h1 className="text-3xl font-poppins font-semibold">Our Services</h1>
            <div className="home-container">
                <div className="card-container">
                    {/* {
                    data.map(data => (
                    <div key={data.id} className="card">
                        <div className="card-img">
                            <img className='photo' src={data.image_url} alt="" />
                            </div>
                            <h2>{data.name}</h2>
                            <p><small>{data.description}</small></p>
                            <div className="info">
                                <p>Price: {data.price}</p>
                                <p>Credit:  {data.credit}hrs</p>
                            </div>
                            <button onClick={()=> handleSelect(data)} className='card-btn'>Select</button>
                            
                        </div>
                        ))
                     } */}
                    </div>
                    {/* <div className="cart">
                    <Cart selectedData={selectedData}
                    remaining={remaining}
                    total ={total}></Cart>
                    </div> */}
                </div>
                
                
            </div>
        );
    };

export default Services;