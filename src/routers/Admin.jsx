import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Admin.css"

const Admin = () => {
    const [dados, setDados] = useState([]);

    const resulDados = async() => {
        try{
            const resultado = await blogFetch.get("/arquivos");
            
            const dete = resultado.data;

            setDados(dete);
        }catch(err){
            console.log(err);
        }
    };

    useEffect(() => {
        resulDados();
    }, []);

    const handleSubmit = async(id) => {
        console.log("Clicou");
        console.log(id);

        try{
           await blogFetch.delete(`arquivos/${id}`);
            resulDados();
        }catch(err){
            console.log(err);
        }
    } 
    
   

    return(
        <div className="admin">
            <h1>Admin</h1>
            {dados.length === 0 ? (
                <p>Carregando...</p>
            ) : (
                dados.map((itens) => (
                    <div className="conteineritens" key={itens.id}>
                        <h2>{itens.name}</h2>
                        <p>{itens.body}</p>
                        <div className="actions">
                            <Link className=" edit-btn" to={`/posts/edit/${itens.id}`}>Editar</Link>
                            <button className=" delete-btn" onClick={() => handleSubmit(itens.id)}>Excluir</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Admin