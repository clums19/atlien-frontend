import Popup from "reactjs-popup";

function ParkIndex(props){

  const loaded = () => {
    return props.park.map((park) => (
        <div key={park._id} className='foods'>
          <div id='section'>
          <Popup
              trigger={<span className='span'>{park.title}</span>}
              modal
              nested>
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                <div className="header">{park.title}</div>
                    <div className="content">
                      {' '}
                        {park.description}
                      <br />
                        <p>Distance: {park.distance} from Atlanta Center</p>
                      <br />
                        <a href={park.web} target='_blank' rel='noreferrer'>
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
            {park.image && <img src={park.image} alt={park.title}/>}
          </div>
        </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  }
    return props.park ? loaded() : loading();
  } 
  
  export default ParkIndex;