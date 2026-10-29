import Img from '../../assets/banner.jpg'

const banner = () => {
  return (
    <div className='w-full h-full my-8'>
      <img src={Img} alt=""  className='w-[100%] h-[100vh] object-fill '/>
    </div>
  )
}

export default banner
