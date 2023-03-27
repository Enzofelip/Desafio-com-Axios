import "./New.css"
import { useEffect, useState } from "react";
import blogFetch from "../axios/config";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const [name, setName] = useState();
    const [body, setBody] = useState();

    const navigat = useNavigate();

    const {id} = useParams();

    const pegandoDados = async() => {
        try{
            const resul = await blogFetch.get(`/arquivos/${id}`);

            const dete = resul.data;
            
            setName(dete.name);
            setBody(dete.body);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        pegandoDados();
    }, []);

    const handleDados = async(e) => {
        e.preventDefault();

        const puts = {
            name,
            body,
        }

        await blogFetch.put(`/arquivos/${id}`,puts);

        navigat("/");
    }
    return(
        <div className="conteiner">
            <h2>Edit seu post</h2>
            <form onSubmit={(e) => handleDados(e)}>
                <div className="form_control">
                    <label htmlFor="title">Titulo:</label>
                    <input type="text" name="title" id="title" placeholder="Digite o titulo" onChange={(e) => setName(e.target.value)} value={name || ""}/>                    
                </div>

                <div className="form_control">
                    <label htmlFor="body">Conteúdo:</label>
                   <textarea name="body" id="body" placeholder="Digite sua menssagem" onChange={(e) => setBody(e.target.value)} value={body || ""}></textarea>                
                </div>

                <input type="submit" value="Enviar post" className="btn"/>
            </form>
        </div>
    )
}

export default Edit;