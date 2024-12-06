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
                generatedCourse.modules.map((module, moduleIndex) => {
                    return (
                        <div key={moduleIndex} className="mb-3">
                        <ModuleLabel moduleIndex={moduleIndex} isLessonsGenered={module.lessons.length != 0} title={module.moduleTitle} duration={module.durationHours}/>

                            <div className="mb-3 mt-3">
                                {
                                    module.lessons.map((lesson, lessonIndex) => {
                                        return (
                                            <div key={lessonIndex} className="mt-2">
                                            <LessonLabel moduleIndex={moduleIndex} lessonIndex={lessonIndex} title={lesson.lessonTitle} duration={lesson.durationMinutes}/>

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