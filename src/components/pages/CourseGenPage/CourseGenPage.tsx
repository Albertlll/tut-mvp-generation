import TextInput from "../../inputs/TextInput/TextInput";
import FilesList from "../../widgets/FilesList/FilesList";
import Button from "../../inputs/Button/Button";
import useStore, { ICourse } from "../../../store/store";
import { httpClient } from "../../../api/httpClient";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

function CourseGenPage() {


    const { addFile, files, setGeneratedCourse} = useStore();


    const [courseName, setCourseName] = useState<string>('');
    const [courseDuration, setCourseDuration] = useState<number>(0);
    const [courseDescription, setCourseDescription] = useState<string>('');

    const [isGenerationStarted, setIsGenerationStarted] = useState<boolean>(false);



    const navigate = useNavigate()


    



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


    const handleSendPrompt = () => {


        console.log(courseName)
        console.log(courseDuration)
        console.log(courseDescription)

        
        setIsGenerationStarted(true);

        httpClient.post('/api/v1/courses/generate/structure', 
            {
                title : courseName,
                hours_count : courseDuration,
                description : courseDescription,
                document : ''
            }
        )
        .then((response) => {

            const generated = response.data


            const newCourse : ICourse = {
                courseName : generated.course_title,
                durationHours : generated.hours_count,
                modules : generated.modules_info.modules.map((value : {module_title : string, module_description : string, module_hours_count : number}) => {
                    return {
                        moduleTitle : value.module_title,
                        durationHours : value.module_hours_count,
                        moduleDescription : value.module_description,
                        lessons : []
                    }
                }),
                additionalInfo : ''

            };


            setGeneratedCourse(newCourse);

            navigate("/generated");


            console.log(response)

        })
        .catch((error) => {
            console.log(error);
            // setGeneratedCourse();

            navigate("/generated");

        });


    };







    return (
        <div className=" box-border p-10 relative m-auto shadow-[0px_0px_50px_rgba(64,143,255,0.5)] rounded-[30px] max-w-[800px] bg-white top-10">
            
            
            
            <TextInput onChange={(e : ChangeEvent<HTMLInputElement>) => {setCourseName(e.target.value)}} type="text" placeholder="Название"/>

            
            <div className="mt-4">
            <TextInput type="number" onChange={(e : ChangeEvent<HTMLInputElement>) => {

                setCourseDuration(Number(e.target.value))
            
            }

            
            
            
            }
            
            
            placeholder="Длительность курса" />

            </div>



            <div className="mt-4 flex justify-center gap-2">
                <TextInput onChange={(e : ChangeEvent<HTMLInputElement>) => {setCourseDescription(e.target.value)}} type="text" placeholder="Дополнительно"/>

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
                <Button onClick={handleSendPrompt} text="Создать" generating={isGenerationStarted}/>
            </div>




        </div>
    );
}

export default CourseGenPage;