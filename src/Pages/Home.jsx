import { useLoaderData } from 'react-router-dom';
import Services from '../Services/Services';
import Header from './Shared/Header';
import Navbar from './Shared/Navbar';

import ServiceCard from './ServiceCard';
import Banner from '../Banner/Banner';


const Home = () => {
    const service = useLoaderData();
    // console.log(service);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Banner></Banner>
           

            <div className=' items-center lg:grid-cols-3 gap-6'>
                {/* <h2 className='text-3xl font-poppins font-bold'>THis is Home</h2> */}
                <div className='text-center grid'>
                    <Services></Services>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                        {
                            service.map(aService => <ServiceCard
                                key={aService.id}
                                service={aService}
                            ></ServiceCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;