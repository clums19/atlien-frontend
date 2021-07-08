import Popup from "reactjs-popup";

function ClubIndex(props){

  const loaded = () => {
    return props.club.map((club) => (
        <div key={club._id} className='foods'>
          <div id='section'>
            <Popup
              trigger={<span className='span'>{club.title}</span>}
              modal
              nested>
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                <div className="header">{club.title}</div>
                    <div className="content">
                      {' '}
                        {club.description}
                      <br />
                        <p>Distance: {club.distance} from Atlanta Center</p>
                      <br />
                        <a href={club.web} target='_blank' rel='noreferrer'>
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
            {club.image && <img src={club.image} alt={club.title}/>}
          </div>
        </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  }
    return props.club ? loaded() : loading();
  } 
  
  export default ClubIndex;