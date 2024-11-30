function FileLabel(props : { filename: string}) {
    return (
        <button className=" bg-primary overflow-hidden hover:bg-angry px-2 rounded-[10px] text-white max-w-full">
            <div className=" text-ellipsis text-nowrap overflow-hidden">
                {props.filename}
            </div>
        </button>
    );
}

export default FileLabel;