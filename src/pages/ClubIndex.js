
function ClubIndex(props){

  const loaded = () => {
    return props.club.map((club) => (
        <div key={club._id} className='foods'>
          <div id='section'>
            <h2>{club.title}</h2>
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