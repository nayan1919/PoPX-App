import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const { state } = location;
  const userData = state?.userData || { fullName: 'Marry Doe', email: 'marry@gmail.com' };

  return (
    <div className="card hard">
      <h2>Account Settings</h2>
      <div className="profile lap">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
          className="avatar"
        />
        <div>
          <h3 className="jonty">{userData.fullName}</h3>
          <p>{userData.email}</p>
        </div>
      </div>
      <p>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
        Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default Profile;