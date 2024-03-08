import  { Container, Profile, Form } from "./styles"
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiAtSign } from "react-icons/fi";
import { BiMessageAltDetail } from "react-icons/bi";


export function Contact() {

    return (
        <Container id="Contact">

         <h1>Contatos</h1>

        <div className="contatos">
            <Profile>
                <div className="info">
                    <h2>Me contate diretamente:</h2>
                     <div className="contactMe">
                         <FaWhatsapp/> <p>(11) 99464-2726</p>
                     </div>
                    <div className="contactMe">
                        <HiOutlineMailOpen/><p>marcos.colella@gmail.com</p>
                    </div>
                </div>

                <div className="address">
                     <h2>Endereço:</h2>
                     <p>São Paulo, SP</p>
                </div>

                <div className="profiles">
                    <h2>Perfis:</h2>
                    <a href="https://www.linkedin.com/in/marcos-colella-esteves-952a3866/" target="_blank"><CiLinkedin /></a>
                    <a href="https://github.com/ColellaDev" target="_blank"><AiOutlineGithub /></a>
                </div>

            </Profile>

             <Form>
                <div className="name">
                    <span><CgProfile/></span>
                    <input type="text" placeholder="Nome"/>
                </div>
                <div className="email">
                    <span><FiAtSign/></span>
                    <input type="text" placeholder="Email"/>
                </div>
                <div className="message">
                     <span className="messageIcon"><BiMessageAltDetail/></span>
                    <textarea type="text" cols="30" rows="10" placeholder="Menssagem..."/>
                </div>
                <button>Enviar</button>
            </Form>
        </div>


        </Container>
    )
}