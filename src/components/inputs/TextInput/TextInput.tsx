import { InputHTMLAttributes, KeyboardEvent } from "react";

type pr =  InputHTMLAttributes<HTMLInputElement>;


function TextInput(props : pr) {


    function isNumberKey(evt: React.KeyboardEvent<HTMLInputElement>): boolean {
        const charCode = evt.key

        console.log(charCode)
        return !isNaN(Number(charCode)) || charCode === 'Backspace'
        // return !(charCode > 31 && (charCode < 48 || charCode > 57)); 

        return true;
    }
  
    
    return (
        <div className="w-full h-[67px] border-primary rounded-[25px] outline-none border-[3px]">
            {
                props.type === 'number' ?

            <input {...props} className=" outline-none border-none placeholder:text-[#A8CCFF] w-full h-full rounded-[25px] px-[48px] text-primary text-[25px]"
            
            onKeyDown={
                
            (e : KeyboardEvent<HTMLInputElement>) =>
                {
                if (!isNumberKey(e)) {
                    e.preventDefault();
                }
            }
        
        }
            
            

            
            />


                :

            <input {...props} className=" outline-none border-none placeholder:text-[#A8CCFF] w-full h-full rounded-[25px] pl-[48px] text-primary text-[25px]"/>


            }
        </div>
    );
}

export default TextInput;