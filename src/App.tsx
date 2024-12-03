// import ModuleLabel from "./components/labels/ModuleLabel/ModuleLabel"
import CourseGenPage from "./components/pages/CourseGenPage/CourseGenPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GeneratedCoursePage from "./components/pages/GeneratedCoursePage/GeneratedCoursePage"
import LessonReadPage from "./components/pages/LessonReadPage/LessonReadPage"
import AllCources from "./components/pages/AllCources/AllCources"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<CourseGenPage/>} />
          <Route path="/generated" element={<GeneratedCoursePage/>} />
          <Route path="/generated/lesson" element={<LessonReadPage/>} />
          <Route path="/my_courses" element={<AllCources/>} />

          {/* <Route path="/" element={<ModuleLabel title="Существа" duration={2} />} /> */}
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
