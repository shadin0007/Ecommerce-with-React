import Nav from './nav'
import Hero from './hero'

const page1 = ({data}) => {
 
  return (
    <div className='min-h-screen w-screen '>
      <Nav />

      <div className='flex'>
        {data.map((e)=>{
         return <Hero title={e.title}
          img={e.img} />
        })}
      </div>
     

    </div>
  )
}

export default page1
