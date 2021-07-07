
function ParkIndex(props){

  const loaded = () => {
    return props.park.map((park) => (
        <div key={park._id} className='foods'>
          <div id='section'>
            <h2>{park.title}</h2>
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