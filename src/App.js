import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './commonComponent/navbar/Navbar'
import HeaderSection from './pages/headerSection/HeaderSection.js'
import FirstSection from './pages/firstSection/FirstSection';
import LastSection from './pages/lastSection/LastSection';
import FooterSection from './commonComponent/footerSection/FooterSection';
import HeaderSection1 from './pages/aboutUs/HeaderSection1'
import FirstSection1 from './pages/aboutUs/firstSection1/FirstSection1';
import SecondSection1 from './pages/aboutUs/2ndSection/SecondSection1';
import ThiredSection1 from './pages/aboutUs/3rdSection/ThiredSection1';
import FourthSection1 from './pages/aboutUs/4thsection/FourthSection1';
import LastSection1 from './pages/aboutUs/lastSection1/LastSection1';
import HeaderSection2 from './pages/pricing/headerSection2/HeaderSection2';


function App() {
  return (
    <div>

      <Navbar />
      <HeaderSection />
      <FirstSection />
      <LastSection />
      <FooterSection />
      <HeaderSection1 />
      <FirstSection1 />
      <SecondSection1 />
      <ThiredSection1 />
      <FourthSection1 />
      <LastSection1 />
      <HeaderSection2/>
    </div>
  );
}

export default App;
