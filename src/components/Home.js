import { login, logout } from '../services/firebase';
import {Link} from 'react-router-dom';

function Home(props) {
    return (
        <div className='indexNav'
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <h1>ATLien: Welcome to Atlanta</h1>
            <Link to='/nav'>
                <div>Explore</div>
            </Link>
            <div style={{display: 'flex'}}>
                <div onClick={login} style={{cursor: 'pointer', marginRight: 10}}>Login</div>
                <div onClick={logout} style={{cursor: 'pointer', marginRight: 10}}>Logout</div>
            </div>
            <Link to='/form'>
                <div>Create a New Place</div>
            </Link>
        </div>
    )
}
export default Home;