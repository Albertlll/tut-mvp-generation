function TextInput(props : {placeholder: string}) {
    return (
        <div className="w-full h-[67px] border-primary rounded-[25px] outline-none border-[3px]">
            <input type="text" className=" outline-none border-none placeholder:text-[#A8CCFF] w-full h-full rounded-[25px] pl-[48px] text-primary text-[30px]" placeholder={props.placeholder}/>
        </div>
    );
}

export default TextInput;