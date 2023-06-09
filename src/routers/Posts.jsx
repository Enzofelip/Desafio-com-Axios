import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import blogFetch from "../axios/config";
import "./Posts.css"
const Posts = () => {

    const [dados, setDados] = useState([]);

    const {id} = useParams();

    const pegandoDados = async() => {
        try{
            const resul = await blogFetch.get(`/comments/${id}`);

            const dete = resul.data;

            setDados(dete);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        pegandoDados();
    }, []);

    return(
        <div className="conteiner_post">
            <h1>Posts</h1>
            <p>{dados.name}</p>
            <p>{dados.email}</p>
            <p>{dados.body}</p>
        </div>
    )
}

export default Posts;