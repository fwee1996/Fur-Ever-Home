// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { getAllPetPosts, deletePetPost } from '../../services/petPostService';
// import './PetDetails.css';

// export const PetDetails = ({currentUser}) => {
//   const { petPostId } = useParams(); //// Extract petPostId from URL params
//   const navigate = useNavigate();
//   const [petDetails, setPetDetails] = useState(null); //  // State to store pet details and fetch them

//   useEffect(() => {
//     fetchPetPostDetails();
//   }, [petPostId]);

//   const fetchPetPostDetails = async () => {
//       const petPostArray = await getAllPetPosts();
//       const petPostObject = petPostArray.find(petPost => petPost.id.toString() === petPostId);
//       setPetDetails(petPostObject);
//   };

//   const handleModify = (petPost) => {
//     console.log("Modify pet post:", petPost);
//     // Implement modify logic as needed
//   };

//   const handleDelete = async (postToDelete) => {
//     const confirmDelete = window.confirm(`Are you sure you want to delete the pet post for ${postToDelete.name}?`);
//     if (confirmDelete) {
//         await deletePetPost(postToDelete.id);
//         // alert(`Successfully deleted pet post for ${postToDelete.name}`);
//         navigate('/'); // Navigate back to the list after deletion
//     }
//   };

//   const handleContactOwner = () => {
//     if (currentUser) {
//       navigate(`/petPosts/petDetails/${petPostId}/ownerDetails`);
//     } else {
//       navigate('/login');
//     }
//   };

//   if (!petDetails) return <div>Loading...</div>;

//   return (
//     <div className="petDetails-container">
//       <h2>{petDetails.name}'s Details</h2>

//       <section className="pet-Details-Post">
        
//         <div key={petDetails.id} className="pet-details-card">

//         <div className="photo-and-info">
//             <div><img src={petDetails.photo} alt={petDetails.name} className="pet-details-photo" /></div>

//             <div className='info'>
//             <header className="petPost-header">{petDetails.name}</header>
//             <div className="petDetails-info">Age: {petDetails.age}</div>
//             <div className="petDetails-info">Species: {petDetails.species}</div>
//             <div className="petDetails-info">Breed: {petDetails.breed}</div>
//             <div className="petDetails-info">Medical Condition: {petDetails.medicalCondition}</div>
//             <div className="petDetails-info">Behavioral Issues: {petDetails.behavioralIssues}</div>
//             <div className="petDetails-info">Reason For Rehoming: {petDetails.reasonForRehoming}</div>
//             </div>
//         </div>

//           <div className='button-group'>
//             {/* <Button variant="warning" onClick={() => navigate(`/updateMyPost/${petPostId}`)}>Modify</Button>
//             <Button variant="success" onClick={() => handleDelete(petDetails)}>Delete</Button> */}
//             <Button variant="warning" onClick={() => navigate(`/petPosts/petDetails/${petPostId}/ownerDetails`)}>Contact Owner</Button>
//           </div>
//         </div>

//       </section>
//     </div>
//   );
// };

// export default PetDetails;







// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { getAllPetPosts } from '../../services/petPostService';
// import './PetDetails.css';

// export const PetDetails = ({ currentUser }) => {
//   const { petPostId } = useParams();
//   const navigate = useNavigate();
//   const [petDetails, setPetDetails] = useState(null);

//   useEffect(() => {
//     fetchPetPostDetails();
//   }, [petPostId]);

//   const fetchPetPostDetails = async () => {
//     const petPostArray = await getAllPetPosts();
//     const petPostObject = petPostArray.find(petPost => petPost.id.toString() === petPostId);
//     setPetDetails(petPostObject);
//   };

//   const handleContactOwner = () => {
//     if (currentUser) {
//       navigate(`/availablePets/petDetails/${petPostId}/ownerDetails`);
//     } else {
//       navigate('/login');
//     }
//   };

//   if (!petDetails) return <div>Loading...</div>;

//   return (
//     <div className='main-container'>
//     <div className="petDetails-container">
//       {/* <h2>{petDetails.name}'s Details</h2> */}

//       <section className="pet-Details-Post">
//       <h2>{petDetails.name}'s Details</h2>
//         <div key={petDetails.id} className="pet-details-card">
//           <div className="photo-and-info">
//             <div><img src={petDetails.photo} alt={petDetails.name} className="pet-details-photo" /></div>
//             <div className='info'>
//               {/* <header className="petPost-header">{petDetails.name}</header> */}
//               <div className="petDetails-info"><strong>Age:</strong> {petDetails.age}</div>
//               <div className="petDetails-info"><strong>Species:</strong> {petDetails.species}</div>
//               <div className="petDetails-info"><strong>Breed:</strong> {petDetails.breed}</div>
//               <div className="petDetails-info"><strong>Medical Condition:</strong> {petDetails.medicalCondition}</div>
//               <div className="petDetails-info"><strong>Behavioral Issues:</strong> {petDetails.behavioralIssues}</div>
//               <div className="petDetails-info"><strong>Reason For Rehoming:</strong> {petDetails.reasonForRehoming}</div>
//             </div>
//           </div>

// {/* alt1: */}
//           {/* <div className='button-group'>
//             {currentUser ? (
//               <Button variant="warning" onClick={() => navigate(`/availablePets/petDetails/${petPostId}/ownerDetails`)}>
//                 Contact Owner
//               </Button>
//             ) : (
//               <Button variant="warning" onClick={() => navigate('/login')}>
//                 Login to Contact Owner
//               </Button>
//             )}
//           </div> */}

// {/* alt2: */}
// {/* <div className='button-group'>
//             <Button variant="warning" onClick={handleContactOwner}>Contact Owner</Button>
//           </div> */}

// {/* alt3: */}
// {/* <div className='button-group'>
//             <Button variant="warning" onClick={() => handleContactOwner({ currentUser })}>Contact Owner</Button>
//           </div> */}

//           <div className='button-group'>
//             <Button variant="warning" onClick={() => navigate(`/availablePets/petDetails/${petPostId}/ownerDetails`)}>Contact Owner</Button>
//           </div>
//         </div>
//       </section>
//     </div>
//     </div>
//   );
// };

// export default PetDetails;













// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import { getAllPetPosts } from '../../services/petPostService';
// import './PetDetails.css';

// export const PetDetails = ({ currentUser }) => {
//   const { petPostId } = useParams();
//   const navigate = useNavigate();
//   const [petDetails, setPetDetails] = useState(null);

//   useEffect(() => {
//     fetchPetPostDetails();
//   }, [petPostId]);

//   const fetchPetPostDetails = async () => {
//     const petPostArray = await getAllPetPosts();
//     const petPostObject = petPostArray.find(petPost => petPost.id.toString() === petPostId);
//     setPetDetails(petPostObject);
//     console.log(petPostObject); // Log the pet post object
//     if (petPostObject) {
//       console.log(petPostObject.photo); // Log the photo URL
//     }
//   };

//   const handleContactOwner = () => {
//     if (currentUser) {
//       navigate(`/availablePets/petDetails/${petPostId}/ownerDetails`);
//     } else {
//       navigate('/login');
//     }
//   };

//   if (!petDetails) return <div>Loading...</div>;

//   return (
//     <div className='main-container'>
//       <div className="petDetails-container">
//         <section className="pet-Details-Post">
//           <h2>{petDetails.name}'s Details</h2>
//           <div key={petDetails.id} className="pet-details-card">
//             <div className="photo-and-info">
//               <div>
//                 <img src={petDetails.photo} alt={petDetails.name} className="pet-details-photo" />
//               </div>
//               <div className='info'>
//                 <div className="petDetails-info"><strong>Age:</strong> {petDetails.age}</div>
//                 <div className="petDetails-info"><strong>Species:</strong> {petDetails.species}</div>
//                 <div className="petDetails-info"><strong>Breed:</strong> {petDetails.breed}</div>
//                 <div className="petDetails-info"><strong>Medical Condition:</strong> {petDetails.medicalCondition}</div>
//                 <div className="petDetails-info"><strong>Behavioral Issues:</strong> {petDetails.behavioralIssues}</div>
//                 <div className="petDetails-info"><strong>Reason For Rehoming:</strong> {petDetails.reasonForRehoming}</div>
//               </div>
//             </div>
//             <div className='button-group'>
//               <Button variant="warning" onClick={() => navigate(`/availablePets/petDetails/${petPostId}/ownerDetails`)}>Contact Owner</Button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PetDetails;









//This works!!!!!
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { getAllPetPosts } from '../../services/petPostService';
import './PetDetails.css';

export const PetDetails = ({ currentUser }) => {
  const { petPostId } = useParams();
  const navigate = useNavigate();
  const [petDetails, setPetDetails] = useState(null);

  useEffect(() => {
    fetchPetPostDetails();
  }, [petPostId]);

  // get and set:
  const fetchPetPostDetails = async () => {
    const petPostArray = await getAllPetPosts();
    const petPostObject = petPostArray.find(petPost => petPost.id.toString() === petPostId);
    // make sure photo path is absolute
    if (petPostObject) {
      petPostObject.photo = petPostObject.photo.replace('./', '/');
    }
    setPetDetails(petPostObject);
    //console.log(petPostObject); // just checking
  };

  // const handleContactOwner = () => {
  //   if (currentUser) {
  //     navigate(`/availablePets/petDetails/${petPostId}/ownerDetails`);
  //   } else {
  //     navigate('/login');
  //   }
  // };---------done this through App <Authorized></Authorized>

  if (!petDetails) return <div>Loading...</div>;

  return (
    <div className='main-container'>
      <div className="petDetails-container">
        <section className="pet-Details-Post">
          <h2>{petDetails.name}'s Details</h2>
          <div key={petDetails.id} className="pet-details-card">
            <div className="photo-and-info">
              <div>
                <img src={petDetails.photo} alt={petDetails.name} className="pet-details-photo" />
              </div>
              <div className='info'>
                <div className="petDetails-info"><strong>Age:</strong> {petDetails.age}</div>
                <div className="petDetails-info"><strong>Species:</strong> {petDetails.species}</div>
                <div className="petDetails-info"><strong>Breed:</strong> {petDetails.breed}</div>
                <div className="petDetails-info"><strong>Medical Condition:</strong> {petDetails.medicalCondition}</div>
                <div className="petDetails-info"><strong>Behavioral Issues:</strong> {petDetails.behavioralIssues}</div>
                <div className="petDetails-info"><strong>Reason For Rehoming:</strong> {petDetails.reasonForRehoming}</div>
              </div>
            </div>
            <div className='button-group'>
              <Button variant="warning" onClick={() => navigate(`/availablePets/petDetails/${petPostId}/ownerDetails`)}>Contact Owner</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PetDetails;
