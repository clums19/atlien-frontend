import { useState, useEffect } from "react";
import AttractionIndex from "../pages/AttractionIndex";
import FoodIndex from "../pages/FoodIndex"


function UpdateDelete(props, {newForm}){
    const [post, setPost] =useState(null);

    const getPost = async () => {
        const response = await fetch('https://atlien-backend.herokuapp.com/');
        const data = await response.json();
        setPost(data);
    };
    const URL = `https://atlien-backend.herokuapp.com/${newForm.category}`;

    const updatePost = async (newForm, id) => {
        await fetch(URL + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(newForm),
        });
        getPost();
      }
      const deletePost = async (newForm, id) => {
        await fetch(URL + id, {
          method: "DELETE",
        })
        getPost();
      }
    useEffect(() => getPost(), []);

    return (
        <main>
            <AttractionIndex 
                post={post}
                updatePost={updatePost}
                deletePost={deletePost}
            />  
            <FoodIndex
                post={post}
                updatePost={updatePost}
                deletePost={deletePost}
            />         
        </main>
    )
}
export default UpdateDelete;