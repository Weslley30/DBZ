import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import  * as date  from "../../Dados/arquivos";
const Infor = () => {
    const navigate = useNavigate()

    const handleHistory = () =>{
        navigate("/")
    }

    const [ dadosPersonagem, setDadosPersonagem] = useState([])

    useEffect(() => { 
        const items = JSON.parse(localStorage.getItem('DadosPersonagem'));
        setDadosPersonagem(items);
    });

    let { action } = useParams();

    return(
        <div>
            Test para ver o {action}

            <button onClick={handleHistory}>Voltar</button>

            <p>{dadosPersonagem.Nome}</p>
        </div>
    );
}

export default Infor;