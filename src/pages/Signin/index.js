import { useState } from "react";
import * as S from "./styles";
import Button from "../../components/button";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Input from "../../components/input";

const Signin = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const[error, setError] = useState("");

    const handleLogin = () => {
        if(!email | !senha){
            setError("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha);

        if(res){
            setError(res);
            return;
        }

        navigate("/home");
    }

    return(
        <S.Container>
            <S.Label>SISTEMA DE LOGIN</S.Label>
            <S.Content>
                <Input 
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <S.labelError>{error}</S.labelError>
                <Button Text="Entra" onClick={handleLogin} />
                <S.LabelSignup>
                    Não tem uma conta?
                </S.LabelSignup>
                <S.Strong>
                    <Link to="/signup">&nbsp;Registre-se</Link>
                </S.Strong>
            </S.Content>
        </S.Container>
    );
}

export default Signin;