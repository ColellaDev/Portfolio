import { Container, About, Avatar } from "./styles"
import { useTheme } from "styled-components"
import avatarDark from "../../assets/avatarDark.png"
import avatarLight from "../../assets/avatarLight.png"


export function Profile() {

    const { TITLE } = useTheme()

    return(
        <Container>

            <About>
            <h4>Olá,  eu sou</h4>
            <h2>Marcos Colella</h2>
            <h3><span>Desenvolvedor Front End</span></h3>
            <p>
            Criação de interfaces responsivas para diversos dispositivos aplicando conceitos de clean code
             e reutilização de código.
            </p>
            </About>

            <Avatar>
                { TITLE == "dark" ? 
                  <img src={avatarDark} alt="Foto Perfil Marcos Colella"/> :
                  <img src={avatarLight} alt="Foto Perfil Marcos Colella"/>
                }
            </Avatar>

        </Container>
    )
}