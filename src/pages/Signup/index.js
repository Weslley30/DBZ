import { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import * as C from "./styles";
import { Link, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
    const { Signup } = useAuth();
    const navigate = useNavigate();

    const[email, setEmail] = useState("");
    const[emailConf, setEmailConf] = useState("");
    const[senha, setSenha] = useState("");
    const[error, setError] = useState("");

    const handleSignup = () => {
        if(!email | !emailConf | !senha){
            setError("Preencha todos os campos");
            return;
        }else if(email !== emailConf){
            setError("Os emails não são iguais");
            return;
        }

        const res = Signup(email, senha);

        if(res){
            setError(res);
            return;
        }

        alert("Usuario cadastrado com sucesso!")
        navigate("/");
    }

    return(
        <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.Label>
            <C.Content>
                <Input 
                    type="email"
                    placeholder="Digite seu Email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input 
                    type="email"
                    placeholder="Confirme seu Email"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />
                <Input 
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChanger={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="Increva-se" onClick={handleSignup}/>
                <C.LabelSignin>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/">&nbsp;Entre</Link>
                    </C.Strong>
                </C.LabelSignin>
            </C.Content>
        </C.Container>
    );
}

export default Signup;