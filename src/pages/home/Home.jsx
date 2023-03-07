import './home.scss'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact/Contact'
// import { useEffect } from 'react'
// import axios from 'axios'





const Home = () => {


//   useEffect(()=>{
// const fetchApi = async() =>{
//    const res = await axios.get(process.env.REACT_APP_URL+'/products?populate=*', {headers:{
//     Authorization: 'bearer'+ process.env.REACT_APP_TOKEN
//    }})

//    console.log(res)
// }

// fetchApi()

//   }, [])



  return (
    <div className="home">
      <Slider/>
      <FeaturedProducts type="Featured" />
      <Categories/>
      <FeaturedProducts type="Trending" />
      <Contact/>
    </div>
  )
}

export default Home