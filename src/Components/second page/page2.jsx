import Text from '../second page/text'
import Shopcard from '../second page/shopCard'

const page2 = ({data,title}) => {
    
  return (
    <div className='min-h-screen w-screen '>
      <Text t={title}/>
      <div className='flex h-auto w-screen relative overflow-x-auto overflow-y-hidden'>
        {data.map((n)=>{
            return(
                <Shopcard img={n.image}
                name={n.name} price={n.price} code={n.code}  />
            )
        })}
      </div>
     

    </div>
  )
}

export default page2
