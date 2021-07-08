import Popup from "reactjs-popup";
import {Link} from 'react-router-dom';


function AttractionIndex(props){

  const loaded = () => {
    
    return props.attraction.map((attraction) => (
      <div key={attraction._id} className='foods'>
          <div id='section'>
      <Popup
          trigger={<span className='span'>{attraction.title}</span>}
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
                {attraction.description}
              <br />
                <p>Distance: {attraction.distance} from Atlanta Center</p>
              <br />
                <a href={attraction.web} target='_blank'>
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
    {attraction.image && <img src={attraction.image} alt={attraction.title}/>}
      </div>
    </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  }
    return props.attraction ? loaded() : loading();
  } 
  
  export default AttractionIndex;