import { useState, useEffect } from "react";
import AddPlace from "../pages/AddPlace";


function Form(props){
    const [post, setPost] =useState(null);

    const getPost = async () => {
        const response = await fetch('https://atlien-backend.herokuapp.com/');
        const data = await response.json();
        setPost(data);
    };
    const createPost = async (newForm) => {
        // console.log(newForm)
        await fetch(
            `https://atlien-backend.herokuapp.com/${newForm.category}`, {
            method: "POST",
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(newForm),
        });
        getPost();
    }
    useEffect(() => getPost(), []);

    return (
        <main>
            <AddPlace post={post} createPost={createPost}/>        
        </main>
    )
}
export default Form;