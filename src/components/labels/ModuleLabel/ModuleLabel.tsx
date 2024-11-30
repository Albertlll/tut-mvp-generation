function ModuleLabel(props : {title: string, duration: number}) {
    return (
        <div className="h-[80px] text-primary shadow-[0px_0px_50px_rgba(64,143,255,0.2)] relative rounded-[20px] border-l-[24px] border-primary w-full flex">

            <div className=" flex mr-[24px] ml-[42px] w-full h-full items-center justify-between" >
                <h2 className=" text-[30px] font-semibold">
                    {props.title}
                </h2>

                <h2 className="text-[30px] font-medium">
                    {props.duration}ч
                </h2>

            </div>

        </div>
    );
}

export default ModuleLabel;