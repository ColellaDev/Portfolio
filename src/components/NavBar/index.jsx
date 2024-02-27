import { Container } from "./styles"

export function NavBar() {
    return (
        <Container>
            <h1>Marcos Colella</h1>

            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Profile">Profile</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Projetos">Projetos</a></li>
                <li><a href="#Contato">Contato</a></li>
            </ul>

            <button>switch</button>

        </Container>
    )
}