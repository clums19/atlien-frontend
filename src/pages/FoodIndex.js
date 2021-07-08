import Popup from "reactjs-popup";

function FoodIndex(props){

  const loaded = () => {
    return props.food.map((food) => (
        <div key={food._id} className='foods'>
          <div id='section'>
          <span>{food.title}</span>
          <Popup
              trigger={<span className='span'>{food.image && <img src={food.image} alt={food.title}/>}</span>}
              modal
              nested>
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                <div className="header">{food.title}</div>
                    <div className="content">
                      {' '}
                      {food.image && <img src={food.image} alt={food.title}/>}
                      <br />
                        {food.description}
                      <br />
                        <p>Distance: {food.distance} from Atlanta City Center</p>
                      <br />
                        <a href={food.web} target='_blank' rel='noreferrer'>
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
        </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  }
    return props.food ? loaded() : loading();
  } 
  
  export default FoodIndex;