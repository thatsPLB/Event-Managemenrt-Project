import { useLoaderData, useParams, } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import { useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";


const Details = () => {

    const [detail, setDetail] = useState({})
    const {id} = useParams();
    // console.log(id);
    const details = useLoaderData()
    // console.log(details);
    useEffect(()=>{
        const findDetails = details?.find(detail=>detail.id == id)
        // console.log(findDetails);
        setDetail(findDetails)
    },[id,details,])
    return (
        <div>
           <Header></Header> 
           <Navbar></Navbar>
           <DetailsCard detail={detail}></DetailsCard>
 
           
        </div>
    );
};

export default Details;