import "./New.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogFetch from "../axios/config";
const New = () => {
    const [name, setName] = useState();
    const [body, setBody] = useState();

    const navigat = useNavigate();

    const handleDados = async(e) => {
        e.preventDefault();

      const port = {
                name,
                body,
            }

       await blogFetch.post("/todos", port);

        navigat("/");
    }

    return(
        <div className="conteiner">
            <h2>Inserir novo post</h2>
            <form onSubmit={(e) => handleDados(e)}>
                <div className="form_control">
                    <label htmlFor="title">Titulo:</label>
                    <input type="text" name="title" id="title" placeholder="Digite o titulo" onChange={(e) => setName(e.target.value)}/>                    
                </div>

                <div className="form_control">
                    <label htmlFor="body">Conteúdo:</label>
                   <textarea name="body" id="body" placeholder="Digite sua menssagem" onChange={(e) => setBody(e.target.value)}></textarea>                
                </div>

                <input type="submit" value="Enviar post" className="btn-enviar"/>
            </form>
        </div>
    )
}

export default New;