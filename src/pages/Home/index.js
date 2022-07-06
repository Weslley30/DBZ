import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import useAuth from "../../hooks/useAuth";
import { Container, Title } from "./styles";


const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();
    return(
        <Container>
            <Title>Home</Title>
            <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
                Sair
            </Button>
        </Container>
    );
}

export default Home;