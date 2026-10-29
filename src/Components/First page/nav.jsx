import Svg from './svg'
import Navright from './navright'


const nav = () => {
  return (
    <div className='w-screen h-[11vh]  flex justify-between items-center px-5 sticky  top-0 z-99 bg-white'>
        <div>
            <ul className='font-nt flex gap-4 items-center text-[1.2vw] font-light capitalize'>
                <li>women</li>
                <li>men</li>
                <li>samoe x end</li>
                <li>our space</li>
            </ul>
        </div>

        <div>
            <Svg />
        </div>

        <div>
            <Navright />
        </div>

      
    
    </div>
  )
}

export default nav
