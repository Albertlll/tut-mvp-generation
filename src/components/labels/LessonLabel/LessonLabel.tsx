import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../../store/store";

function LessonLabel(props : {title : string, duration : number, lessonIndex : number, moduleIndex : number}) {
    
    const {generatedCourse} = useStore();
    const navigate = useNavigate();
    console.log(generatedCourse?.modules[props.moduleIndex].lessons[props.lessonIndex])

    const generateLesson = () => {
        console.log("Сгенерировать урок")

        navigate("lesson", {state: {

            moduleIndex : props.moduleIndex,
            lessonIndex : props.lessonIndex,


            forRequest : {
                course_title : generatedCourse?.courseName,
                course_description : generatedCourse?.additionalInfo,
                module_title: generatedCourse?.modules[props.moduleIndex].moduleTitle,
                module_description : generatedCourse?.modules[props.moduleIndex].moduleDescription,
                lesson_title : generatedCourse?.modules[props.moduleIndex].lessons[props.lessonIndex].lessonTitle,
                lesson_description : generatedCourse?.modules[props.moduleIndex].lessons[props.lessonIndex].lessonDescription,
                
            }


        }})
        


    }
    
    
    return (
        <button onClick={() => generateLesson()} className="h-[70px] text-primary relative w-[60%] flex">


            <div className="flex aspect-square h-full items-center justify-center">
                {
                    generatedCourse?.modules[props.moduleIndex].lessons[props.lessonIndex].lessonContent == "" ? 
                    <div className=" rounded-full w-3 h-3 bg-secondary"></div>
                    :
                    <div className=" rounded-full w-3 h-3 bg-primary"></div>

                }
            </div>

            <div className=" shadow-[0px_0px_50px_rgba(64,143,255,0.2)]  rounded-[20px]  flex pr-[24px] pl-[42px] w-full h-full items-center justify-between gap-2" >
                <h2 className=" text-[20px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
                    {props.title}
                </h2>

                <h2 className="text-[20px] font-medium">
                    {props.duration}ч
                </h2>

            </div>

        </button>
    );
}

export default LessonLabel;