import "./New.css"
import { useEffect, useState } from "react";
import blogFetch from "../axios/config";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const [title, setTitle] = useState();
    const [userid, setUserId] = useState();

    const navigat = useNavigate();

    const {id} = useParams();

    const pegandoDados = async() => {
        try{
            const resul = await blogFetch.get(`/todos/${id}`);

            const dete = resul.data;
            
            setTitle(dete.title);
            setUserId(dete.userId);
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
            title,
            userid,
        }

        await blogFetch.put(`/todos/${id}`,puts);

        navigat("/");
    }
    return(
        <div className="conteiner">
            <h2>Edit seu post: {title}</h2>
            <form onSubmit={(e) => handleDados(e)}>
                <div className="form_control">
                    <label htmlFor="title">Titulo:</label>
                    <input type="text" name="title" id="title" placeholder="Digite o titulo" onChange={(e) => setTitle(e.target.value)} value={title || ""}/>                    
                </div>

                <div className="form_control">
                    <label htmlFor="body">Conteúdo:</label>
                   <textarea name="body" id="body" placeholder="Digite sua menssagem" onChange={(e) => setUserId(e.target.value)} value={userid || ""}></textarea>                
                </div>

                <input type="submit" value="Enviar post" className="btn"/>
            </form>
        </div>
    )
}

export default Edit;