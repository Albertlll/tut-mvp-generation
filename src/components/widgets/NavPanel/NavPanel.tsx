import { BrainCog, Folder } from "lucide-react";
import { Link } from "react-router-dom";

function NavPanel() {
    return (
        <div className=" flex p-2 fixed right-[40px] top-[40px] shadow-[0px_0px_50px_rgba(64,143,255,0.2)] rounded-[10px] bg-white flex-col justify-between gap-4">


            <Link to='/'>
                <BrainCog className=" w-7 h-7 text-secondary hover:opacity-55"/>
            </Link>         


            <Link to='/my_courses'>
                <Folder className=" w-7 h-7 text-secondary  hover:opacity-55"/>
            </Link>            
   

        </div>
    );
}

export default NavPanel;