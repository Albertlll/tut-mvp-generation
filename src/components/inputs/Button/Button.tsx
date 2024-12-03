import { ButtonHTMLAttributes } from "react";
import preloader from './preloader.gif'
type pr =  ButtonHTMLAttributes<HTMLButtonElement> & {text : string, generating : boolean};

function Button(props : pr) {
    return (
        <button {...props} className="w-full h-full p-2 bg-primary text-white hover:bg-secondary rounded-[15px] flex items-center justify-center">

            {props.generating ?
             
             <img src={preloader} alt="Loading..." className="h-[25px] w-[25px] ml-[10px]"/>
            
             :
             props.text            
            }

        </button>
    );
}

Button.defaultProps = {generating : false};

export default Button;