import { useParams } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";


const Details = () => {
    const {id} = useParams();
    return (
        <div>
           <Header></Header> 
           <Navbar></Navbar>
           <div className="grid md:grid-cols-4">
            <div className="col-span-3">
                
                <p>{id}</p>
            </div>

           </div>
        </div>
    );
};

export default Details;