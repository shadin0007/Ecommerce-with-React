import Page1 from './Components/First page/page1'
import Img1 from './assets/filters_quality(75).jpeg'

import Img2 from './assets/filters_quality(76).jpeg'
import Page2 from './Components/second page/page2'
import First from './assets/first.jpg'
import Sec from './assets/sec.jpg'
import Third from './assets/third.jpg'
import Four from './assets/four.jpg'
import Five from './assets/five.jpg'
import Six from './assets/six.jpg'
import Seven from './assets/seven.jpg'
import Eight from './assets/eight.jpg'
import Nine from './assets/nine.jpg'
import Ten from './assets/ten.jpg'
import Eleven from './assets/eleven.jpg'
import Twelve from './assets/twelve.jpg'

import Page3 from './Components/third page/page3'
import Img3 from './assets/filters_quality(77).jpeg'
import Img4 from './assets/filters_quality(78).jpeg'
import Footer from './Components/footer/footer'




const App = () => {
   const gallery=[
    {
      title:`women's outerwear`,
      img:Img1
    },
    {
      title:`men's outerwear`,
      img:Img2
    }
  ]

   const gallery2=[
    {
      title:`women's new arrivals`,
      img:Img3
    },
    {
      title:`men's new arrivals`,
      img:Img4
    }
  ]

  const productCard = [
   { name: "SAALMA COAT", price:'570.00 GBP', code: "16188", image: First },
  { name: "SAFALCO COAT",  price:'470.00 GBP', code: "16172", image: Sec },
  { name: "FALCON COAT", price:'420.00 GBP', code: "11104", image: Third },
  { name: "SAVINCE COAT",  price:'680.00 GBP', code: "16188", image: Four },
  { name: "ALMA COAT",  price:'500.00 GBP', code: "14895", image:Five },
  { name: "SAFALCO COAT", price:'470.00 GBP', code: "16172", image: Six },
  { name: "SAALMYS COAT", price:'340.00 GBP', code: "15923", image: Seven }
];


const products = [
  {
    img:Eight,
    name: "SABONNIA TROUSERS",
    price: '150.00 GBP',
    code: "16227",
  },
  {
     img:Nine,
    name: "SATIMOTHY TWIST JEANS",
    price: '190.00 GBP',
    code: "15769",
  },
 
  {
     img:Ten,
    name: "SATIMOTHY JEANS",
    price: '190.00 GBP',
    code: "16277",
  },
  {
     img:Eleven,
    name: "SAHARPER JEANS",
    price: '170.00 GBP',
    code: "15059",
  },
  {
     img:Twelve,
    name: "SANOAH FLEX TROUSERS",
    price: '160.00 GBP',
    code: "16086",
  },
];

const title1=[
  {title:'shop outwear'},
  {title:'Women'},
  {title:'men'}
  
]

const title2=[
  {title:`men's new arrivals`},
  {title:'Women'},
  {title:'men'}
  
]


const social = [
  { head: "Social" },
  { name: "Facebook" },
  { name: "Instagram" },
  { name: "LinkedIn" },
  { name: "Pinterest" },
  { name: "TikTok" },
];

const about = [
  { head: "About" },
  { name: "Our Story" },
  { name: "Samsøe Søciety" },
  { name: "CSR – How We Care" },
  { name: "Careers" },
  { name: "Sales & Showroom" },
  { name: "Press" },
  { name: "Terms & Conditions" },
  { name: "Terms & Conditions – Samsøe Søciety" },
  { name: "Privacy Policy" },
  { name: "Cookie Policy" },
];

const help = [
  { head: "Help" },
  { name: "FAQs" },
  { name: "Contact" },
  { name: "Shipping & Delivery" },
  { name: "Click & Collect" },
  { name: "Returns & Exchanges" },
  { name: "Withdrawal" },
  { name: "Store Finder" },
  { name: "Size Guides" },
  { name: "Material Highlights" },
  { name: "The Herø Bag – Care Guide" },
  { name: "Cookie Settings" },
];




  return (
    <div className='w-full h-full'>
     <Page1 data={gallery} />

      <Page2  data={productCard} title={title1} />

      <Page3 data={gallery2} title={title2} product={products}/>


      <Footer social={social} about={about} help={help} />
    </div>
  ) 
}

export default App
