import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllPetPosts, updatePetPost } from '../../services/petPostService';
import "./UpdateMyPost.css";

export const UpdateMyPost = () => {
  const navigate = useNavigate();
  const { petPostId } = useParams();
  const [petPostBeingEdited, setPetPostBeingEdited] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null); // State to hold selected file

  useEffect(() => {
    const fetchPetPost = async () => {
      try {
        const petPostsArray = await getAllPetPosts();
        const petPost = petPostsArray.find(petPost => petPost.id === parseInt(petPostId));
        setPetPostBeingEdited(petPost);
      } catch (error) {
        console.error('Failed to fetch petPosts', error);
      }
    };
    fetchPetPost();
  }, [petPostId]);

  const handleEditSave = async (event) => {
    event.preventDefault();
    try {
      if (selectedFile) {
        const imageUrl = await uploadImage(selectedFile);
        setPetPostBeingEdited({ ...petPostBeingEdited, photo: imageUrl });
      }

      await updatePetPost(petPostBeingEdited);
      navigate('/myPosts');
    } catch (error) {
      console.error('Failed to update petPost', error);
      alert('Failed to update petPost');
    }
  };


  const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'photos'); // Replace with your Cloudinary upload preset name
        formData.append('cloud_name', 'fwee1996'); // Replace with your Cloudinary cloud name
        
        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/fwee1996/image/upload`, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const data = await response.json();
            console.log('Uploaded image URL:', data.secure_url);
            return data.secure_url;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw new Error('Failed to upload image');
        }
    };

  const handleCancel = () => {
    navigate('/myPosts');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Render loading state if petPostBeingEdited is null
  if (!petPostBeingEdited) {
    return <div>Loading...</div>;
  }

  return (
    <form className="new-form">
      <h2>Edit Pet Post</h2>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={petPostBeingEdited.name || ''}
          onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, name: event.target.value })}
        />
      </div>

      <div className="form-group">
        <label>Age</label>
        <div className="age-ageUnit">
          <input
            type="number"
            className="form-control"
            placeholder="Enter age"
            value={petPostBeingEdited.age}
            onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, age: event.target.value })}
            required
          />
          <select
            className="form-control ml-2"
            value={petPostBeingEdited.ageUnit}
            onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, ageUnit: event.target.value })}
          >
            <option value="weeks">{petPostBeingEdited.age === '1' ? 'Week' : 'Weeks'}</option>
            <option value="months">{petPostBeingEdited.age === '1' ? 'Month' : 'Months'}</option>
            <option value="years">{petPostBeingEdited.age === '1' ? 'Year' : 'Years'}</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Breed</label>
        <input
          type="text"
          className="form-control"
          value={petPostBeingEdited.breed || ''}
          onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, breed: event.target.value })}
        />
      </div>

      <div className="form-group">
        <label>Species</label>
        <input
          type="text"
          className="form-control"
          value={petPostBeingEdited.species || ''}
          onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, species: event.target.value })}
        />
      </div>

      <div className="form-group">
        <label>Medical Condition</label>
        <input
          type="text"
          className="form-control"
          value={petPostBeingEdited.medicalCondition || ''}
          onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, medicalCondition: event.target.value })}
        />
      </div>

      <div className="form-group">
        <label>Behavioral Issues</label>
        <input
          type="text"
          className="form-control"
          value={petPostBeingEdited.behavioralIssues || ''}
          onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, behavioralIssues: event.target.value })}
        />
      </div>

      <div className="form-group">
        <label>Reason for Rehoming</label>
        <input
          type="text"
          className="form-control"
          value={petPostBeingEdited.reasonForRehoming || ''}
          onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, reasonForRehoming: event.target.value })}
        />
      </div>

      <div className="form-group">
        <label>Upload New Photo or Keep Current: </label>
        <input
          type="file"
          className="form-control"
          onChange={handleFileChange}
          accept="image/*"
          placeholder={petPostBeingEdited.photo || "Current Photo"}
        />
      </div>

      <div className='button-group'>
        <button type='submit' className='btn btn-success' onClick={handleEditSave}>Save</button>
        <button type='button' className='btn btn-warning' onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
};

