

const hero = ({title,img}) => {
  return (
    <div className=" group h-screen w-1/2  relative ">
       <div className= '  font-nt uppercase text-[13px] flex gap-4   py-3 px-5 tracking-lighter absolute'>

        <p>{title}</p>
        <p className=' opacity-0 transition-all duration-300
        
       group-hover:opacity-[1] '>shop now</p>

       </div>
      <img src={img} alt="" className='h-full w-full object-cover object-top '/>
    </div>
  )
}

export default hero
