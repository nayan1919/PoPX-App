import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className="card">
            <h2>Create your PopX account</h2>
            <label>Full Name*</label>
            <input defaultValue="Marry Doe" />
            <label>Phone number*</label>
            <input defaultValue="1234567890" />
            <label>Email address*</label>
            <input defaultValue="marry@gmail.com" />
            <label>Password *</label>
            <input defaultValue="******" />
            <label>Company name</label>
            <input defaultValue="PopX Inc." />

            <p>Are you an Agency?*</p>
            <div className="radio-group">
                <label><input type="radio" name="agency" defaultChecked /> Yes</label>
                <label><input type="radio" name="agency" /> No</label>
            </div>

            <button className="btn-primary" onClick={() => navigate('/profile')}>Create Account</button>
        </div>
    );
};

export default Register;