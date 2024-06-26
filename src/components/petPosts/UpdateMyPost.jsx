// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { getAllPetPosts, updatePetPost } from '../../services/petPostService';
// import "./UpdateMyPost.css"

// export const UpdateMyPost = () => {
//   const navigate = useNavigate();
//   const { petPostId } = useParams(); // Use petPostId to match the route parameter
//   const [petPostBeingEdited, setPetPostBeingEdited] = useState(null); // Initialize as null

//   useEffect(() => {
//     const fetchPetPost = async () => {
//       try {
//         const petPostsArray = await getAllPetPosts();
//         const petPost = petPostsArray.find(petPost => petPost.id === parseInt(petPostId));
//         setPetPostBeingEdited(petPost);
//       } catch (error) {
//         console.error('Failed to fetch petPosts', error);
//       }
//     };
//     fetchPetPost();
//   }, [petPostId]);

//   const handleEditSave = async (event) => {
//     event.preventDefault();
//     try {
//       await updatePetPost(petPostBeingEdited); // Fixed typo in function call
//       navigate('/myPosts'); // Corrected navigate route
//     } catch (error) {
//       console.error('Failed to update petPost', error);
//       alert('Failed to update petPost');
//     }
//   };

//   const handleCancel = () => {
//     navigate('/myPosts'); // Corrected navigate route
//   };

//   // Render nothing or a loading message if petPostBeingEdited is null
//   if (!petPostBeingEdited) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Edit PetPost</h2>
//       <form>
//         <div className="form-group">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={petPostBeingEdited.name || ''}
//             onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, name: event.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Age</label>
//           <div className='age-ageUnit'>
//           <input
//             type="number"
//             className="form-control"
//             value={petPostBeingEdited.age || ''}
//             onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, age: event.target.value })}
//           />
//           <select
//             className="form-control ml-2"
//             value={petPostBeingEdited.ageUnit}
//             onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, ageUnit: event.target.value })}
//           >
//             <option value="weeks">{petPostBeingEdited.age === 1 ? 'Week' : 'Weeks'}</option>
//             <option value="months">{petPostBeingEdited.age === 1 ? 'Month' : 'Months'}</option>
//             <option value="years">{petPostBeingEdited.age === 1 ? 'Year' : 'Years'}</option>
//           </select>
//           </div>
//         </div>
//         <div className="form-group">
//           <label>Breed</label>
//           <input
//             type="text"
//             className="form-control"
//             value={petPostBeingEdited.breed || ''}
//             onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, breed: event.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Species</label>
//           <input
//             type="text"
//             className="form-control"
//             value={petPostBeingEdited.species || ''}
//             onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, species: event.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Medical Condition</label>
//           <input
//             type="text"
//             className="form-control"
//             value={petPostBeingEdited.medicalCondition || ''}
//             onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, medicalCondition: event.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Behavioral Issues</label>
//           <input
//             type="text"
//             className="form-control"
//             value={petPostBeingEdited.behavioralIssues || ''}
//             onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, behavioralIssues: event.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Reason for Rehoming</label>
//           <input
//             type="text"
//             className="form-control"
//             value={petPostBeingEdited.reasonForRehoming || ''}
//             onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, reasonForRehoming: event.target.value })}
//           />
//         </div>
//         <div className="form-group">
//           <label>Photo</label>
//           <input
//             type="text"
//             className="form-control"
//             value={petPostBeingEdited.photo || ''}
//             onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, photo: event.target.value })}
//           />
//         </div>
//         <div className='button-group'>
//           <button type='submit' className='btn btn-success' onClick={handleEditSave}>Save</button>
//           <button type='button' className='btn btn-warning' onClick={handleCancel}>Cancel</button>
//         </div>
//       </form>
//     </div>
//   );
// };

















import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllPetPosts, updatePetPost } from '../../services/petPostService';
import "./UpdateMyPost.css"

export const UpdateMyPost = () => {
  const navigate = useNavigate();
  const { petPostId } = useParams(); // Use petPostId to match the route parameter
  const [petPostBeingEdited, setPetPostBeingEdited] = useState(null); // Initialize as null

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
      await updatePetPost(petPostBeingEdited); // Fixed typo in function call
      navigate('/myPosts'); // Corrected navigate route
    } catch (error) {
      console.error('Failed to update petPost', error);
      alert('Failed to update petPost');
    }
  };

  const handleCancel = () => {
    navigate('/myPosts'); // Corrected navigate route
  };

  // Render nothing or a loading message if petPostBeingEdited is null
  if (!petPostBeingEdited) {
    return <div>Loading...</div>;
  }

  return (
    // <form className="form" onSubmit={handleAddPost}>
    // <div className="form">
      
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
        <div className="form-group age-ageUnit">
          <label>Age</label>
          <div className="age-ageUnit">
            <input
              type="number"
              className="form-control"
              value={petPostBeingEdited.age || ''}
              onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, age: event.target.value })}
            />
            <select
              className="form-control ml-2"
              value={petPostBeingEdited.ageUnit}
              onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, ageUnit: event.target.value })}
            >
              <option className='option' value="weeks">{petPostBeingEdited.age === 1 ? 'Week' : 'Weeks'}</option>
              <option className='option' value="months">{petPostBeingEdited.age === 1 ? 'Month' : 'Months'}</option>
              <option className='option' value="years">{petPostBeingEdited.age === 1 ? 'Year' : 'Years'}</option>
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
          <label>Photo</label>
          <input
            type="text"
            className="form-control"
            value={petPostBeingEdited.photo || ''}
            onChange={(event) => setPetPostBeingEdited({ ...petPostBeingEdited, photo: event.target.value })}
          />
        </div>
        <div className='button-group'>
          <button type='submit' className='btn btn-success' onClick={handleEditSave}>Save</button>
          <button type='button' className='btn btn-warning' onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    // </div>
  );
};
