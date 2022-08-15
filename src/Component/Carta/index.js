import { DivCarta, Div } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Dados from "../../Dados/dados";




export const Carta = () => {
    const navigate = useNavigate()
    const [dateName, setDateName] = useState('');

    const handleHistory = () =>{
        navigate(`/${dateName}`)
    }

    return(
        <Div>
            {Dados.map((date) => {
                return(
                    <DivCarta>
                        <img src={date.img} />
                        <p><b>Nome: {date.Nome}</b></p>
                        <p><b>HP: {date.HP}</b></p>
                        <p><b>KI: {date.KI}</b></p>
                        <p><b>ATK: {date.ATK}</b></p>
                        <p><b>DEF: {date.DEF}</b></p>
                        <p><b>LV: {date.LV}</b></p>
                        <p><b>Prox.lv: {date.Prox_lv}</b></p>
                        <button onClick={async()  => {
                            setDateName(date.Nome);
                            handleHistory();
                        }}>Ver {date.Nome}</button>
                    </DivCarta>
                );
            })}            
        </Div>
    );
}