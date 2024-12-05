import { useState } from "react";
import useStore, { ICourse } from "../../../store/store";
import { PenLine, Sparkles } from "lucide-react";
import ChangeModulePopup from "../../popups/ChangeModule/ChangeModulePopup";
import { httpClient } from "../../../api/httpClient";

export function ModuleLabelNotGenered(props : {title: string, duration: number, moduleIndex : number}) {


    const { generatedCourse, setGeneratedCourse } = useStore();

    const genLessons = () => {


        if (generatedCourse == null) return;

        console.log("Начал генерировать")

        httpClient.post('api/v1/modules/generate/structure', 
            {
                module_title: generatedCourse.modules[props.moduleIndex].moduleTitle,
                module_description : generatedCourse.modules[props.moduleIndex].moduleDescription,
                module_hours : generatedCourse.durationHours

            }
        )
        .then((response) => {

            console.log(response)

            const generated = response.data


            const newCourse : ICourse = generatedCourse

            newCourse.modules[props.moduleIndex].lessons = generated.lessons.map(
                (value : {lesson_title : string, lesson_minutes_count : number, description : string}) => {
                    return {
                        lessonTitle : value.lesson_title,
                        durationMinutes : value.lesson_minutes_count,
                        lessonDescription : value.description,
                        lessonContent : ""
                    }
                }
            )

            setGeneratedCourse(newCourse)
            


        })
        .catch((error) => {
            console.log("ашибка")
            console.log(error);

        });





        
    }

    // hover:after:w-[80px]
    // hover:after:p-2
    // hover:after:absolute
    // hover:after:right-[-100px]

    // hover:after:font-bold
    // hover:after:opacity-55
    // hover:after:h-full
    // hover:after:text-secondary
    // hover:after:content-['Создать_уроки!']






    const [isChangePopupOpen, setIsChangePopupOpen] = useState<boolean>(false)

    // hover:bg-secondary hover:text-white

    const [isSelected, setIsSelected] = useState<boolean>(false);

    console.log(isSelected)

    return (
        <>



        <ChangeModulePopup moduleIndex={props.moduleIndex} setIsOpen={setIsChangePopupOpen} isOpen={isChangePopupOpen}/>




         <div className=" w-[70%] gap-2 flex justify-start"
                onMouseEnter={() => {setIsSelected(true)}}
                onMouseLeave={() => {setIsSelected(false)}}> 
            <div
                
            className="h-[70px] text-primary shadow-[0px_0px_50px_rgba(64,143,255,0.2)] relative rounded-[20px] border-l-[24px] border-secondary flex grow min-w-10 max-w-[100%]
        
            ">

                <div className=" flex pr-[24px] pl-[42px] w-full h-full items-center justify-between" >
                    <h2 className=" text-[20px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
                        {props.title}
                    </h2>

                    <h2 className="text-[20px] font-medium">
                        {props.duration}ч
                    </h2>

                </div>

            </div>

            {isSelected && (
                <div className=" text-white flex justify-center items-center gap-3 grow-0">
                    <button onClick={() => {setIsChangePopupOpen(true)}} className="  w-[40px] h-[40px] flex bg-primary rounded-full items-center justify-center hover:bg-secondary">
                        <PenLine className=" text-white"/>
                    </button>

                    <button onClick={() => genLessons()} className=" w-[40px] h-[40px] flex bg-primary rounded-full items-center justify-center hover:bg-secondary">
                        <Sparkles className=" text-white"/>
                    </button>


                </div>
            )}

        </div>

        </>
    );
}

export function ModuleLabelGenered(props : {title: string, duration: number}) {

    return (
        <div className=" w-[70%] h-[70px] text-primary shadow-[0px_0px_50px_rgba(64,143,255,0.2)] relative rounded-[20px] border-l-[24px] border-primary flex">

            <div className=" flex pr-[24px] pl-[42px] w-full h-full items-center justify-between" >
                <h2 className=" text-[20px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
                    {props.title}
                </h2>

                <h2 className="text-[20px] font-medium">
                    {props.duration}ч
                </h2>

            </div>

        </div>
    );
}



export default function ModuleLabel(props : {title: string, duration: number, isLessonsGenered: boolean, moduleIndex : number}) {

    if (props.isLessonsGenered) {
        return <ModuleLabelGenered title={props.title} duration={props.duration}/>
    }

    return <ModuleLabelNotGenered moduleIndex={props.moduleIndex} title={props.title} duration={props.duration}/>

}