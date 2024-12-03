import { create } from "zustand";
import { persist } from "zustand/middleware";
export interface Ifile {url : string, type : string, name : string}

export interface ICourse {
    courseName: string,
    additionalInfo: string,
    durationHours: number,
    modules: Array<IModule>
}

export interface IModule     {
    moduleTitle: string,
    durationHours: number,
    moduleDescription: string,
    lessons: Array<ILesson>,
}

export interface ILesson {
    lessonTitle: string,
    lessonContent: string,
    durationMinutes: number
}



type Store = {
    files : Array<Ifile>,
    addFile : (file : Ifile) => void,
    removeFile : (index : number) => void,
    generatedCourse : ICourse | null,
    setGeneratedCourse : (course : ICourse) => void,
    addLessonsToModule : (ind : number, lessons : Array<ILesson>) => void,
    savedCourses : Array<ICourse>,
    rememberCourse : (course : ICourse) => void,
    setGeneratedCourseModuleInfo: (index : number, newName : string, newDuration : number) => void
}


const useStore = create<Store>()(persist(
    (set) => ({
        files: [],
        addFile: (file : Ifile) => set(state => ({ files: [...state.files, file] })),
        removeFile: (index : number) => set(state => ({ files: [...state.files.slice(0, index),...state.files.slice(index + 1)] })),
        generatedCourse: null,
        setGeneratedCourse: (course : ICourse) => set({ generatedCourse : course }),
        addLessonsToModule: ( ind : number, lessons : Array<ILesson>) => set(
        (state) => {

            if (state.generatedCourse === null) return { generatedCourse : state.generatedCourse }

            const newCourse = state.generatedCourse;
            newCourse.modules[ind].lessons = lessons

            return {generatedCourse : newCourse}
        }
        ),


        setGeneratedCourseModuleInfo: (index : number, newName : string, newDuration : number) => set(state =>{
            if (state.generatedCourse === null) return { generatedCourse : state.generatedCourse }

            const newCourse = state.generatedCourse;
            newCourse.modules[index].moduleTitle = newName
            newCourse.modules[index].durationHours = newDuration
            
            return {generatedCourse : newCourse}
        }),

        savedCourses : [],
        rememberCourse: (course : ICourse) => set( state => ({ savedCourses : [...state.savedCourses, course] }))


    // updateFile: (index : number, file : Ifile) => set(state => ({ files: [...state.files.slice(0, index), file,...state.files.slice(index + 1)] })),
    }),
    {

        name: "savedCourses",
        partialize: (state) => ({savedCources : state.savedCourses})

    })
);

export default useStore;