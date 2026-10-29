import { Bookmark } from 'lucide-react'

const tootlip = () => {
  return (
    <div className='w-[90%] left-[50%] translate-x-[-50%] h-[6vh] absolute bg-white bottom-[50px] px-2 flex justify-between items-center '>
   
              <div className='flex  items-center gap-1 w-full h-full'> 
               <span><Bookmark size={18} strokeWidth={1.75} />
               </span>
               <span className='text-[1vw]'>Save</span>
              </div>
               
               <h3 className='text-[1vw]  text-nowrap font-nt'>QUICK SHOP</h3>
            
   
           </div>
  )
}

export default tootlip
