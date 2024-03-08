import { Container, Profile, Form } from "./styles"
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiAtSign } from "react-icons/fi";
import { BiMessageAltDetail } from "react-icons/bi";
import { Slide } from "react-awesome-reveal";
import { useState } from "react";
import emailjs from "@emailjs/browser"
import { toast } from "sonner";  


export function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function sendEmail(e){
        e.preventDefault();

        if (name === "" || email === "" || message === "") {
            toast.error('Preencha todos os campos')
            return
        }

        const templateParams = {
            from_name: name,
            email: email,
            message: message
        }
      
        emailjs.send("service_kudwu8k", "template_5cg0kxq", templateParams, "HthGvLxBk-DdSwwa8")
        .then(() => {
            toast.success('E-mail enviado!')
            setName("")
            setEmail("")
            setMessage("")
        }, (err) => {
            console.log("ERRO: ", err)
        })
        
    }

    return (
        <Container id="Contact">

         <h1>Contatos</h1>

        <div className="contatos">

        <Slide>
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
            </Slide>

            <Slide direction="right">
             <Form onSubmit={sendEmail}>

                <div className="name">
                    <span><CgProfile/></span>
                    <input
                     type="text" 
                     placeholder="Nome"
                     onChange={(e) => setName(e.target.value)}
                     value={name}
                     />
                </div>

                <div className="email">
                    <span><FiAtSign/></span>
                    <input
                      type="text"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      />
                </div>

                <div className="message">
                    <span className="messageIcon"><BiMessageAltDetail/></span>
                    <textarea
                     type="text"
                     cols="30" rows="10"
                     placeholder="Menssagem..."
                     onChange={(e) => setMessage(e.target.value)}
                     value={message}
                     />
                </div>

                <button>Enviar</button>
            </Form>
            </Slide>
        </div>

        </Container>
    )
}