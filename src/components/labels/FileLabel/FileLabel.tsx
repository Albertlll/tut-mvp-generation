import useStore from "../../../store/store";

function FileLabel(props : { filename: string, index: number }) {

    const { removeFile } = useStore();


    const badgeDelete = (ind : number) => {
        removeFile(ind);
      }
    

    return (
        <button onClick={() => badgeDelete(props.index)} className=" bg-primary overflow-hidden hover:bg-angry px-2 rounded-[10px] text-white max-w-full h-full">
            <div className=" text-ellipsis text-nowrap overflow-hidden">
                {props.filename}
            </div>
        </button>
    );
}

export default FileLabel;