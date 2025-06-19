import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <h2>Signin to your PopX account</h2>
      <p className='lap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <label className='jonty'>Email Address</label>
      <input type="email" placeholder="Enter email address" />
      <label className='jonty'>Password</label>
      <input type="password" placeholder="Enter password" autoComplete="current-password" />
      <button className="btn-disabled" disabled onClick={() => navigate('/profile')}>Login</button>
    </div>
  );
};

export default Login;
