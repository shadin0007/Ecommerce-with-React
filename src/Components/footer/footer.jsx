import News from './news'
import Text from './text'
import Head from './head'
const footer = ({social,about,help}) => {
  return (
   <div>


  <div className='w-screen min-h-auto px-7 py-3 flex justify-between'>


        <div>
        {social.map((e)=>{
            return(
                <Text head={e.head} text={e.name} />
            )
        })}
        </div>


        <div>
        {about.map((e)=>{
            return(
                <Text head={e.head} text={e.name} />
            )
        })}
        </div>


         <div>
        {help.map((e)=>{
            return(
                <Text head={e.head} text={e.name} />
            )
        })}
        </div>

            <News />
           
    </div>


     <div className='w-screen flex justify-between items-center h-auto  py-3 px-5 mt-6'>
        <Head />
         <Head />
     </div>


   </div>
  )
}

export default footer
