import {Link} from 'react-router-dom';

function Main(props){
    return (
        <nav className='mainNav'>
            <Link to='/foods'>
                <h2>Food</h2>
            </Link>
        </nav>
    );
  } 
  
  export default Main;