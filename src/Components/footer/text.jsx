

const text = ({head,text}) => {
  return (
    <div className="text-[15px] font-nt text-gray-700 flex flex-col gap-2 " >

        <div>
              <h4 className="uppercase">{head}</h4>
        </div>
     

       <div className="leading-[1.1]">
        <p className="text-[13px]">{text}</p>
       </div>
       
    </div>
  )
}

export default text