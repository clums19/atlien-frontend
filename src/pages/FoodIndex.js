
function FoodIndex(props){

  const loaded = () => {
    return props.food.map((food) => (
        <div key={food._id} className='foods'>
          <div id='section'>
            <h2>{food.title}</h2>
            {food.image && <img src={food.image} alt={food.title}/>}
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