import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import "./Home.css"
import blogFetch from "../axios/config";
const Home = () => {

    const [dados, setDados] = useState([]);
    
    const getInfor = async() => {
       try{
        const resultado = await blogFetch.get("/comments");

        const date = resultado.data;

        console.log(date);
        setDados(date);
       }catch(error){
        console.log(error)
       }
    }

    useEffect(() => {
        getInfor();
    },[])


    return(
        <div className="home">
            <h1>Todos os dados</h1>
            {dados.length === 0 ? (
                <p>Carregando...</p>
            ):(
                dados.map((itens) => (
                    <div className="conteineritens" key={itens.id}>
                        <h2>{itens.name}</h2>
                        <p>{itens.email}</p>
                        <Link to={`/posts/${itens.id}`} className="btn">Ler mais</Link>
                    </div>
                ))
            )}

        </div>
    )
}

export default Home;