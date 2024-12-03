import { InputHTMLAttributes } from "react";

type pr =  InputHTMLAttributes<HTMLInputElement>;


function TextInput(props : pr) {
    return (
        <div className="w-full h-[67px] border-primary rounded-[25px] outline-none border-[3px]">
            <input {...props} className=" outline-none border-none placeholder:text-[#A8CCFF] w-full h-full rounded-[25px] pl-[48px] text-primary text-[25px]"/>
        </div>
    );
}

export default TextInput;