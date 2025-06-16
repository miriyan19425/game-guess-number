function Button({handleOnClick, label}){
    return <button type='button' onClick={handleOnClick}>{label}</button>;
}

export default Button;
