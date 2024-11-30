import { useState } from "react";
import FileLabel from "../../labels/FileLabel/FileLabel";
import { Ifile } from "../../pages/CourseGenPage/CourseGenPage";

function FilesList(props : {files: Array<Ifile>}) {



    return (
        <ul className="flex gap-2 w-full flex-wrap mt-4">
            {
                props.files.map((file, index) => (
                    <li key={index} className="max-w-full">
                        <FileLabel filename={file.name} />
                    </li>
                )) 
            }
        </ul>
    );
}

export default FilesList;