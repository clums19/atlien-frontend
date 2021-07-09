import Popup from "reactjs-popup";
// import { useState, useEffect } from 'react';

function AttractionIndex(props){
  // const [posted, setPosted] = useState(null)
  // useEffect(() => {
  //   if(post) {
  //     const id = match.params.id;
  //     const posted = post.find(p => p._id === id);
  //     setPosted(posted)
  //   }
  // }, [posted,match])
  const loaded = () => {
    
    return props.attraction.map((attraction) => (
      <div key={attraction._id} className='foods'>
          <div id='section'>
            <span>{attraction.title}</span>
      <Popup
          trigger={<span className='span'>{attraction.image && <img src={attraction.image} alt={attraction.title}/>}</span>}
          modal
          nested>
            {close => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
        <div className="header">{attraction.title}</div>
            <div className="content">
              {' '}
              {attraction.image && <img src={attraction.image} alt={attraction.title}/>}
              <br />
                {attraction.description}
              <br />
                <p>Distance: {attraction.distance} from Atlanta Center</p>
              <br />
                <a href={attraction.web} target='_blank' rel='noreferrer'>
                  Click to go to Website
                </a> 
            </div>
        <button
          className="button"
          onClick={() => {
            close();
          }}> Close
        </button>
        </div>
        )}
      </Popup>
      </div>
      {/* <button onClick={() => handleDelete(attraction._id)}>X</button> */}
    </div>
    ));
  };
  
  
  const loading = () => {
    return <h1>Loading...</h1>;
  }
  // const handleDelete = (id) => {
  //   deletePost(id);
  //   history.push('/attractions');
  // }
    return props.attraction ? loaded() : loading();
  } 
  
  export default AttractionIndex;