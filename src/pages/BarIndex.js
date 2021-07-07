function BarIndex(props){

  const loaded = () => {
      return props.bar.map((bar) => (
          <div key={bar._id} className='foods'>
            <div id='section'>
              <span className="title">{bar.title}</span>
              {bar.image && <img src={bar.image} alt={bar.title}/>}
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