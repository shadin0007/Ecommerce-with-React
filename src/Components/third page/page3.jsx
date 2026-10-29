import Hero from '../First page/hero'
import Left from '../second page/left'
import Right from '../second page/right'
import Shopcard from '../second page/shopCard'
import Banner from './banner'

const page3 = ({data,title,product}) => {
  return (
    <div className='min-h-[100vh] w-full mt-15 relative '>


     <div className='flex'>
        {data.map((e)=>{
            return(
             <Hero title={e.title} img={e.img} />
            )
        })}
     </div>


     <div className='flex justify-between px-5 py-3'>
    
    <div className='flex gap-3'>
      {title.map((e)=>{
        return(
          <Left t={e.title} />
        )
      })}
    </div>

      <Right />
     </div>

     <div className='flex h-auto w-screen relative  overflow-x-auto overflow-y-hidden '>
     {product.map((e)=>{
      return(
        <Shopcard img={e.img}  name={e.name} price={e.price} code={e.code} />

      )
     })}
     </div>

    <div className='py-4'>
 <Banner />
    </div>
     
    
     
    </div>
  )
}

export default page3
