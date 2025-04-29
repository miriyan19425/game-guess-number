function Button({handleOnClick, children}){
    return <button type='button' onClick={handleOnClick}>{children}</button>;
}

export default Button;