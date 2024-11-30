import TextInput from "../../inputs/TextInput/TextInput";
import FilesList from "../../widgets/FilesList/FilesList";
import Button from "../../inputs/Button/Button";
import useStore from "../../../store/store";


function CourseGenPage() {


    const { addFile, files} = useStore();


    



    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files == null) return


        addFile(
            {
                url : URL.createObjectURL(event.target.files[0]),
                name : event.target.files[0].name,
                type : event.target.files[0].type
            }
        )
    };
      




    return (
        <div className=" p-10 relative m-auto shadow-[0px_0px_50px_rgba(64,143,255,0.5)] rounded-[30px] max-w-[800px] bg-white mt-10">
            
            
            
            <div className="">
                <TextInput placeholder="Название"/>
            </div>

            <div className="mt-4 flex justify-center gap-2">
                <TextInput placeholder="Дополнительно"/>

                <input onChange={handleFileChange} accept=".txt, .docx, .pdf"  type="file" name="" id="fileUppload" className="hidden">
                </input>

                <label className="flex justify-center items-center cursor-pointer p-2 text-white hover:bg-secondary bg-primary rounded-[25px]" htmlFor="fileUppload">
                Загрузить
                </label>

            </div>


            {
                files.length > 0 &&
                <FilesList/>

            }


            <div className="mt-4">
            <Button text="Создать"/>
            </div>




        </div>
    );
}

export default CourseGenPage;