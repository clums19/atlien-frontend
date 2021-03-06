import {Link} from 'react-router-dom';

function Main(props){
    return (
        <nav className='mainNav'>
            <Link to='/foods'>
                <h2>Food</h2>
            </Link>
            <Link to='/bars'>
                <h2>Bars/ Lounges</h2>
            </Link>
            <Link to='/clubs'>
                <h2>Gentlemen Clubs</h2>
            </Link>
            <Link to='/parks'>
                <h2>Parks</h2>
            </Link>
            <Link to='/attractions'>
                <h2>Attractions</h2>
            </Link>
            <Link to='/form' style={{backgroundColor: '#F7934C'}}>
                <h2>Add Place</h2>
            </Link>
        </nav>
    );
  } 
  
  export default Main;