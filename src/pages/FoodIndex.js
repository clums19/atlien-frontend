
function FoodIndex(props){

  const loaded = () => {
    return props.food.map((food) => (
      <div key={food._id} className='food'>
        <h3>{food.title}</h3>
        <img src={food.image} alt={food.title}/>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  }
    return props.food ? loaded() : loading();
  } 
  
  export default FoodIndex;