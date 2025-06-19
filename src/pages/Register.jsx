import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        agency: 'Yes'
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = 'Full name is required';
        if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Valid phone number is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.password || formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log('Form Submitted:', formData);
            navigate('/profile', { state: { userData: { fullName: formData.fullName, email: formData.email } } });
        }
    };

    return (
        <div className="card">
            <h2>Create your PopX account</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <label>Full Name*</label>
                <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Marry Doe"
                    className={errors.fullName ? 'input-error' : ''}
                />
                {errors.fullName && <p className="error">{errors.fullName}</p>}

                <label>Phone number*</label>
                <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Marry Doe"
                    className={errors.phone ? 'input-error' : ''}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}

                <label>Email address*</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Marry Doe"
                    className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <label>Password*</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Marry Doe"
                    className={errors.password ? 'input-error' : ''}
                />
                {errors.password && <p className="error">{errors.password}</p>}

                <label>Company name</label>
                <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Marry Doe"
                />

                <p>Are you an Agency?*</p>
                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            name="agency"
                            value="Yes"
                            checked={formData.agency === 'Yes'}
                            onChange={handleChange}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="agency"
                            value="No"
                            checked={formData.agency === 'No'}
                            onChange={handleChange}
                        />
                        No
                    </label>
                </div>

                <button type="submit" className="btn-primary">Create Account</button>
            </form>
        </div>
    );
};

export default Register;