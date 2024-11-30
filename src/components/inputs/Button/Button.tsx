function Button(props : { text : string}) {
    return (
        <button className="w-full h-full p-2 bg-primary text-white hover:bg-secondary rounded-[15px]">
            {props.text}
        </button>
    );
}

export default Button;