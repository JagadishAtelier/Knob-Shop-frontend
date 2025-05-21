import 'modern-css-reset/dist/reset.min.css';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarTop from './Components/Navbar/NavbarTop/NavbarTop';
import Footer from './Components/Footer/Footer';
import Location from './Components/Location/Location';
import OurServices from './Components/OurServices/OurServices';
import FAQ from './Components/FAQ/FAQ';
import Testimonals from './Components/Testimonals/Testimonals';
import Brand from './Components/Brand/Brand';
function App() {
  return (
    <div>
      {/* <NavbarTop/> */}
      <Brand/>
      <Testimonals/>
      <FAQ/>
      <OurServices/>
      <Location/>
      <Footer/>
    </div>
  )
}

export default App
