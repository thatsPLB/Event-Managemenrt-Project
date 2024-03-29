import { FaFacebook, FaTwitter,FaInstagram } from 'react-icons/fa';
import Navbar from '../Navbar';
import Header from '../Header';



const Contact = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
              <div className='p-4 mb-6'>
        <h2 className="text-3xl mb-4">Contact Us on</h2>
        <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
            <FaFacebook className='mr-3'></FaFacebook>
            <span>Facebook</span>
        </a>
            <a className='p-4 flex text-lg items-center border-x' href="">
                <FaTwitter className='mr-2'></FaTwitter>
                <span>Twitter</span>
            </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
                    <FaInstagram className='mr-2'></FaInstagram>
                    <span>Facebook</span>
                </a>
    </div>
        </div>
    );
};

export default Contact;