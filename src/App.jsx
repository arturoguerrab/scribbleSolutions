import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/LayoutContainer"
import DevSample from "./components/DevSamples/DevSample"


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DevSample name={'HOME'}/>}/>
          <Route path="/about" element={<DevSample name={'ABOUT'}/>}/>
          <Route path="/gallery" element={<DevSample name={'GALLERY'}/>}/>
          <Route path="/pricing" element={<DevSample name={'PRICING'}/>}/>
          <Route path="/contact" element={<DevSample name={'CONTACT'}/>}/>
          <Route path="*" element={<DevSample name={'ERROR 404 - NOT FOUND'}/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
