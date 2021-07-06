import {Link} from 'react-router-dom';

function Home(props) {
    return (
        <div className='indexNav'>
            <h1>ATLien: Welcome to Atlanta</h1>
            <Link to='/nav'>
                <div>Explore</div>
            </Link>
        </div>
    )
}
export default Home;