import {Link} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Main from './Main';

function Home(props) {
    return (
        <div className='indexNav'>
            <h1>ATLien: Welcome to Atlanta</h1>
            <Route path='/nav'>
                <Main />
            </Route>
            <Link to='/nav'>
                <div>Explore</div>
            </Link>
        </div>
    )
}
export default Home;