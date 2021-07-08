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
        <div className="header">{attraction.title}</div>
            <div className="content">
              {' '}
              {attraction.description}
              <br />
              <p>Distance: {attraction.distance}</p>
              <br />
              <Link to={attraction.web}>
                Click to go to Website
              </Link> 
            </div>
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