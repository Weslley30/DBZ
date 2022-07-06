import * as C from "./styles";

const Input = ({ type, placeholder, value, onchange}) => {
    return(
        <>
            <C.Input
            value={value}
            onchange={onchange}
            type={type}
            placeholder={placeholder}
            />
        </>
    );
}

export default Input;