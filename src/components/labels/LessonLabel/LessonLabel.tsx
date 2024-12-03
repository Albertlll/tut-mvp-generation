import { Link } from "react-router-dom";

function LessonLabel(props : {title : string, duration : number}) {
    return (
        <Link to="lesson" className="h-[70px] text-primary relative w-[60%] flex">


            <div className="flex aspect-square h-full items-center justify-center">

                <div className=" rounded-full w-3 h-3 bg-primary"></div>
                
            </div>

            <div className=" shadow-[0px_0px_50px_rgba(64,143,255,0.2)]  rounded-[20px]  flex pr-[24px] pl-[42px] w-full h-full items-center justify-between gap-2" >
                <h2 className=" text-[20px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
                    {props.title}
                </h2>

                <h2 className="text-[20px] font-medium">
                    {props.duration}ч
                </h2>

            </div>

        </Link>
    );
}

export default LessonLabel;