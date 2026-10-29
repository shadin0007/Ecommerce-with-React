
import Tootlip from './tootlip'


const shopCard = ({img,name,price,code}) => {
  return (
    

      <div className='w-[320px] h-[100vh]  shrink-0 relative group py-15 '>

          <div className=' transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-[1]'>
             <Tootlip />

          </div>
         
       
        <img src={img} alt="" className='w-full h-full object-cover ' />

         <div className='font-nt text-[1vw] uppercase text-gray-800 px-5 py-4'>
        <h4>{name} 
            <sup>{code}</sup>
            </h4>
            <p>{price}</p>
      </div>

      </div>
     
      
      
    
  )
}

export default shopCard
