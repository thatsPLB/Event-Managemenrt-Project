import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div>
           <div className='p-4'>
            <h2 className="text-3xl">Login With</h2>
            <button className="btn btn-outline w-45">
                <FaGoogle></FaGoogle>
                Login With Google
                </button>
            
            </div> 
            <button className="btn btn-outline w-45">
                <FaGithub></FaGithub>
                Login With GitHUB
                </button>
        </div>
    );
};

export default RightSideNav;