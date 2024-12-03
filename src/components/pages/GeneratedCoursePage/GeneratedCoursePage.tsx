import { useState } from "react";
import useStore from "../../../store/store";
import LessonLabel from "../../labels/LessonLabel/LessonLabel";
import ModuleLabel from "../../labels/ModuleLabel/ModuleLabel";
import NavPanel from "../../widgets/NavPanel/NavPanel";
import ChangeModulePopup from "../../popups/ChangeModule/ChangeModulePopup";

function GeneratedCoursePage() {

    const {generatedCourse} = useStore()

    return (

        <>

        <NavPanel/>




        {generatedCourse ?
        <div className="p-[60px]">

            <h1 className="text-[25px]">{generatedCourse.courseName}</h1>

            <div className="mt-[39px]">

            {
                generatedCourse.modules.map((module, index) => {
                    return (
                        <div key={index} className="mb-3">
                        <ModuleLabel moduleIndex={index} isLessonsGenered={module.lessons.length != 0} title={module.moduleTitle} duration={12}/>

                            <div className="mb-3 mt-3">
                                {
                                    module.lessons.map((lesson, index) => {
                                        return (
                                            <div key={index} className="mt-2">
                                            <LessonLabel key={index} title={lesson.lessonTitle} duration={2}/>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        
                    )
                })
            }    

            </div>

        </div>

        :

        <div>
            Курс не создан
        </div>
        }
        </>  
    );
}

export default GeneratedCoursePage;