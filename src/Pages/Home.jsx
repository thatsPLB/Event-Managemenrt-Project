

import { useLoaderData } from 'react-router-dom';
import Services from '../Services/Services';
import Header from './Shared/Header';
import Navbar from './Shared/Navbar';
import RightSideNav from './Shared/RightSideNav/RightSideNav';
import ServiceCard from './ServiceCard';


const Home = () => {
    const service = useLoaderData();
    // console.log(service);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            
            <div className=' items-center grid-cols-1 lg:grid-cols-3 gap-6'>
            {/* <h2 className='text-3xl font-poppins font-bold'>THis is Home</h2> */}
                <div className='text-center'>
                    <Services></Services>
                    {
                        service.map(aService => <ServiceCard
                            key={aService.id}
                            service={aService}
                        ></ServiceCard>)
                    }
                </div>
                <div className='text-end'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;