import FileLabel from "../../labels/FileLabel/FileLabel";
import useStore from "../../../store/store";
function FilesList() {

    const {files} = useStore()

    return (
        <ul className="flex gap-2 w-full flex-wrap my-6">
            {
                files.map((file, index) => (
                    <li key={index} className="max-w-full">
                        <FileLabel index={index} filename={file.name} />
                    </li>
                )) 
            }
        </ul>
    );
}

export default FilesList;