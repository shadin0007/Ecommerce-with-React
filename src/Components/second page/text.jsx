import Left from '../second page/left'
import Right from '../second page/right'


const text = ({t}) => {
  console.log(t)
  return (
    <div className='flex justify-between py-3  px-5'>
     <div className='flex gap-4'>
      {t.map((e)=>{
        return(
          <Left t={e.title}/>
        )
      })}
     </div>
      <Right />
    </div>
  )
}

export default text
