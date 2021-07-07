
function AttractionIndex(props){

  const loaded = () => {
    return props.attraction.map((attraction) => (
        <div key={attraction._id} className='foods'>
          <div id='section'>
            <h2>{attraction.title}</h2>
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