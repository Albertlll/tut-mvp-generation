import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { httpClient } from "../../../api/httpClient";
import Markdown from 'react-markdown';
import useStore from "../../../store/store";
import preloader from "./preloader.gif"
import  "./reactMarkDown.css"
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

function LessonReadPage() {

    const [generating, setGenerating] = useState<boolean>(true);

    const { state } = useLocation();



    const {generatedCourse, setGeneratedCourse} = useStore();


    const setContent = (content : string) => {
        if (!generatedCourse) return;

        console.log(generatedCourse)

        const newCourse = generatedCourse;
        newCourse.modules[state.moduleIndex].lessons[state.lessonIndex].lessonContent = content;

        setGeneratedCourse(newCourse)



    }

    useEffect(() => {


        if (generatedCourse?.modules[state.moduleIndex].lessons[state.lessonIndex].lessonContent) {
            setGenerating(false);
            return;
        }



        console.log(state);
        httpClient.post("/api/v1/lessons/generate", state.forRequest).then(
            (response) => {


                setContent(response.data.content);
                console.log(response.data.content);

                
                setGenerating(false);
            }
        )
    }, [])


    // const getContent = () => {
    //     if (!generatedCourse) return "";

    //     return generatedCourse.modules[state.moduleIndex].lessons[state.lessonIndex].lessonContent;
    // }


    // const nowContent = getContent();



    return (

        <>

        {
            generating ? 

            <div className="w-full h-full flex items-center justify-center">
                <img src={preloader} alt="Тут предовадер..." />
            </div>

            :

        <div className="max-w-[1200px] mx-auto p-4">
            <Markdown className="markdownCss"
            
            components={{
                code(props) {
                  const {children, className, node, ...rest} = props
                  const match = /language-(\w+)/.exec(className || '')
                  return match ? (
                    <SyntaxHighlighter
                      PreTag="div"
                      children={String(children).replace(/\n$/, '')}
                      language={match[1]}
                      style={dark}
                    />
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  )
                }
              }}
            >

                {generatedCourse?.modules[state.moduleIndex].lessons[state.lessonIndex].lessonContent}
                
            </Markdown>
        </div>
        }

        
        </>

    );
}

export default LessonReadPage;