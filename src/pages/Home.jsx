import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); 
    return (
        <div className='card'>
            <h2>Welcome to PoPX</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <button className="btn-primary" onClick={() => navigate('/register')}>Create Account</button>
            <button className="btn-secondary" onClick={() => navigate('/login')}>Already Registered? Login</button>
        </div>
    );
};

export default Home;