import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllUsers, updateUserProfile } from '../../services/userService';
import "./UpdateProfile.css"

export const UpdateProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Ensure this matches the route parameter
  const [profileBeingEdited, setProfileBeingEdited] = useState(null); // Initialize as null

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const usersArray = await getAllUsers();
        const profile = usersArray.find(profile => profile.id === parseInt(id));
        setProfileBeingEdited(profile);
      } catch (error) {
        console.error('Failed to fetch users', error);
      }
    };
    fetchProfile();
  }, [id]);

  const handleEditSave = async (event) => {
    event.preventDefault();
    try {
      await updateUserProfile(profileBeingEdited);
      navigate('/myProfile');
    } catch (error) {
      console.error('Failed to update profile', error);
      alert('Failed to update profile');
    }
  };

  const handleCancel = () => {
    navigate('/myProfile');
  };

  // Render nothing or a loading message if profileBeingEdited is null
  if (!profileBeingEdited) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form className='update-profile-form'>
      <h2>Edit Profile</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={profileBeingEdited.fullName || ''}
            onChange={(event) => setProfileBeingEdited({ ...profileBeingEdited, fullName: event.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            value={profileBeingEdited.email || ''}
            onChange={(event) => setProfileBeingEdited({ ...profileBeingEdited, email: event.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            value={profileBeingEdited.phoneNumber || ''}
            onChange={(event) => setProfileBeingEdited({ ...profileBeingEdited, phoneNumber: event.target.value })}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            value={profileBeingEdited.city || ''}
            onChange={(event) => setProfileBeingEdited({ ...profileBeingEdited, city: event.target.value })}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            className="form-control"
            value={profileBeingEdited.state || ''}
            onChange={(event) => setProfileBeingEdited({ ...profileBeingEdited, state: event.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Photo</label>
          <input
            type="text"
            className="form-control"
            value={profileBeingEdited.photo || ''}
            onChange={(event) => setProfileBeingEdited({ ...profileBeingEdited, photo: event.target.value })}
          />
        </div>
        <div className='button-group'>
          <button type='submit' className='btn btn-success' onClick={handleEditSave}>Save</button>
          <button type='button' className='btn btn-warning' onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
