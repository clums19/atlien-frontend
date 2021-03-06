import Popup from "reactjs-popup";

function BarIndex(props){

  const loaded = () => {
      return props.bar.map((bar) => (
          <div key={bar._id} className='foods'>
            <div id='section'>
              <span>{bar.title}</span>
            <Popup
              trigger={<span className='span'>{bar.image && <img src={bar.image} alt={bar.title}/>}</span>}
              modal
              nested>
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                <div className="header">{bar.title}</div>
                    <div className="content">
                      {' '}
                      {bar.image && <img src={bar.image} alt={bar.title}/>}
                      <br />
                      {bar.description}
                      <br />
                        <p>Distance: {bar.distance} from Atlanta Center</p>
                      <br />
                        <a href={bar.web} target='_blank' rel='noreferrer'>
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
    return props.bar ? loaded() : loading();
  } 
  
  export default BarIndex;