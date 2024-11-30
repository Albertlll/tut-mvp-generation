// import ModuleLabel from "./components/labels/ModuleLabel/ModuleLabel"
import CourseGenPage from "./components/pages/CourseGenPage/CourseGenPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<CourseGenPage/>} />
          {/* <Route path="/" element={<ModuleLabel title="Существа" duration={2} />} /> */}
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
