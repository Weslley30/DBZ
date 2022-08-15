import { useParams, useNavigate } from "react-router-dom";
import  * as date  from "../../Dados/arquivos";
const Infor = () => {
    const navigate = useNavigate()

    const handleHistory = () =>{
        navigate("/")
    }

    let { action } = useParams();

    return(
        <div>
            Test para ver o {action}

            <button onClick={handleHistory}>Voltar</button>
        </div>
    );
}

export default Infor;