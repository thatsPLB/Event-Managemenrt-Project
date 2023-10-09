

function Newslatter() {
  return (
    <div>
        <div className='w-full bg-blue-200 border-2 border-solid border-blue-800 rounded flex items-center justify-center flex-col mb-4' style={{height: "50vh"}}>
            <div className='text-center text-blue-800 font-mono'>
                <h3 className='font-bold text-2xl tracking-tight'>Join the newsletter!</h3>
                <p className='text-black w-2/3 m-auto tracking-tighter font-medium'>Subscribe to get latest content by email and to become a member of <span className=' tex '>PLB Event Solution</span></p>
            </div>
            <div className='flex flex-col w-full px-20'>
                <input type="text" placeholder='Your name' className='my-4 bg-white text-black outline-none p-2 rounded'/>
                <input type="email" placeholder='Your email address' className='my-4 bg-white text-black outline-none p-2 rounded'/>
                <button className='text-white uppercase bg-blue-800 mb-6'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Newslatter