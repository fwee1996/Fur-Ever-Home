import React, { useEffect, useState } from 'react';
import { deleteUserProfile, getAllUsers } from "../../services/userService";
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './MyProfile.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons'; // Import FontAwesome icons

export const MyProfile = ({ currentUser }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user profile details when currentUser.id changes
    const fetchUserProfile = async () => {
      try {
        const usersArray = await getAllUsers();
        const userProfile = usersArray.find(user => user.id === currentUser.id);
        if (userProfile) {
          setUser(userProfile);
        }
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };

    fetchUserProfile();
  }, [currentUser.id]);

  // Handle profile deletion
  const handleDeleteProfile = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your profile?');
    if (confirmDelete) {
      try {
        await deleteUserProfile(currentUser.id);
        alert('Profile successfully deleted');
        // Simulate logout by clearing local storage
        localStorage.removeItem("furEverHome_user");
        navigate('/login'); // Redirect to login page after deletion
      } catch (error) {
        console.error('Failed to delete profile', error);
        alert('Failed to delete profile');
      }
    }
  };

  return (
    <div className='full-profile-container'>
      <div className="profile-container">
        <h1 className="profile-title">My Profile</h1>
        <div className="profile-photo-container">
          <img src={user.photo} alt={user.fullName} className="user-photo" />
        </div>
        <div className="profile-details">
          <p><strong>Full Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
          <p><strong>City:</strong> {user.city}</p>
          <p><strong>State:</strong> {user.state}</p>
        </div>
        <div className="profile-buttons">
          {/* Button to navigate to update profile page */}
          <Button variant="warning" onClick={() => navigate(`/updateProfile/${currentUser.id}`)} style={{ backgroundColor: 'rgb(163, 194, 159)', borderColor: 'rgb(132, 168, 128)' }}>
            <FontAwesomeIcon icon={faPenToSquare} /> Update
          </Button>
          {/* Button to delete profile */}
          <Button variant="danger" onClick={handleDeleteProfile}style={{ backgroundColor: 'rgb(189, 87, 87)', borderColor: 'rgb(145, 57, 57)' }}>
            <FontAwesomeIcon icon={faTrashAlt} /> Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
