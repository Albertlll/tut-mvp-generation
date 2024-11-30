import { create } from "zustand";
export interface Ifile {url : string, type : string, name : string}


type Store = {
    files : Array<Ifile>,
    addFile : (file : Ifile) => void,
    removeFile : (index : number) => void,
}


const useStore = create<Store>()((set) => ({
    files: [],
    addFile: (file : Ifile) => set(state => ({ files: [...state.files, file] })),
    removeFile: (index : number) => set(state => ({ files: [...state.files.slice(0, index),...state.files.slice(index + 1)] })),
    // updateFile: (index : number, file : Ifile) => set(state => ({ files: [...state.files.slice(0, index), file,...state.files.slice(index + 1)] })),
}));

export default useStore;