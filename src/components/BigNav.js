import {Link} from 'react-router-dom';

function BigNav(props){
    return (
        <nav className='bigNav'>
            <Link to='/foods'>
                Food
            </Link>
            <Link to='/bars'>
                Bars/ Lounges
            </Link>
            <Link to='/clubs'>
                Gentlemen Clubs
            </Link>
            <Link to='/parks'>
                Parks
            </Link>
            <Link to='/attractions'>
                Attractions
            </Link>
        </nav>
    );
  } 
  
  export default BigNav;