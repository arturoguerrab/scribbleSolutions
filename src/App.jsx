import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import DevSample from "./components/DevSamples/DevSample"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Gallery from "./components/Gallery/Gallery"
import Pricing from "./components/Pricing/Pricing"
import Contact from "./components/Contact/Contact"


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<DevSample name={'ERROR 404 - NOT FOUND'}/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
