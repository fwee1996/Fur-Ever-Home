// import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
// import { getAllPetPosts, deletePetPost } from '../../services/petPostService';
// import './PetPosts.css';
// import { useNavigate } from 'react-router-dom'


// export const PetPost = () => {
//   const [petPosts, setPetPosts] = useState([]);
//   const navigate = useNavigate() // useNavigate hook

//   // Fetch all pet posts from the API
//   const fetchAllPetPosts = async () => {
//       const petPostArray = await getAllPetPosts();
//       setPetPosts(petPostArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
//   };

//   useEffect(() => {
//     fetchAllPetPosts();
//   }, []);

//   // Handle delete functionality
//   const handleDelete = async (postToDelete) => {
//     const confirmDelete = window.confirm(`Are you sure you want to delete the pet post for ${postToDelete.name}?`);
//     if (confirmDelete) {
//         await deletePetPost(postToDelete.id);
//         // Update petPosts state by filtering out the deleted post
//         setPetPosts(currentPetPosts => currentPetPosts.filter(petPost => petPost.id !== postToDelete.id));
//         alert(`Successfully deleted pet post for ${postToDelete.name}`);
//       }
//   };

//   //alt using.then instead of async/ await:
//   // deletePetPost(postToDelete.id)
//   //     .then(() => {
//   //       setPetPosts(currentPetPosts => currentPetPosts.filter(petPost => petPost.id !== postToDelete.id));
//   //       // Optionally show a success message to the user
//   //       alert(`Successfully deleted pet post for ${postToDelete.name}`);


//   return (
    
//     <div className="petPosts-container">
//       <h2>Available Pets</h2>
//       <section className="pet-post">
//         {petPosts.map(petPost => (
//           <div key={petPost.id} className="pet-card">
//             <header className="petPost-header">{petPost.name}, {petPost.age} {petPost.ageUnit}</header> 
//             {/* instead of {petPost.ageUnit} */}
//             <div><img src={petPost.photo} alt={petPost.name} className="pet-photo" onClick={() => navigate(`/petPosts/petDetails/${petPost.id}`)}/></div>
//             {/* <Button variant="warning" onClick={() => navigate(`/updateMyPost/${petPost.id}`)}>Modify</Button>
//             <Button variant="success" onClick={() => handleDelete(petPost)}>Delete</Button> */}
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default PetPost;





//changing to avail pets
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { getAllPetPosts, deletePetPost } from '../../services/petPostService';
import './PetPosts.css';
import { useNavigate } from 'react-router-dom'


export const PetPost = () => {
  const [petPosts, setPetPosts] = useState([]);
  const navigate = useNavigate() // useNavigate hook

  // Fetch all pet posts from the API
  const fetchAllPetPosts = async () => {
      const petPostArray = await getAllPetPosts();
      setPetPosts(petPostArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
  };

  useEffect(() => {
    fetchAllPetPosts();
  }, []);

  // Handle delete functionality
  const handleDelete = async (postToDelete) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the pet post for ${postToDelete.name}?`);
    if (confirmDelete) {
        await deletePetPost(postToDelete.id);
        // Update petPosts state by filtering out the deleted post
        setPetPosts(currentPetPosts => currentPetPosts.filter(petPost => petPost.id !== postToDelete.id));
        alert(`Successfully deleted pet post for ${postToDelete.name}`);
      }
  };

  //alt using.then instead of async/ await:
  // deletePetPost(postToDelete.id)
  //     .then(() => {
  //       setPetPosts(currentPetPosts => currentPetPosts.filter(petPost => petPost.id !== postToDelete.id));
  //       // Optionally show a success message to the user
  //       alert(`Successfully deleted pet post for ${postToDelete.name}`);


  return (
    
    <div className="petPosts-container">
      <h2>Available Pets</h2>
      <section className="pet-post">
        {petPosts.map(petPost => (
          <div key={petPost.id} className="pet-card">
            <header className="petPost-header">{petPost.name}</header> 
            {/* instead of {petPost.ageUnit} */}
            <div><img src={petPost.photo} alt={petPost.name} className="pet-photo" onClick={() => navigate(`/availablePets/petDetails/${petPost.id}`)}/></div>
            {/* <Button variant="warning" onClick={() => navigate(`/updateMyPost/${petPost.id}`)}>Modify</Button>
            <Button variant="success" onClick={() => handleDelete(petPost)}>Delete</Button> */}
          </div>
        ))}
      </section>
    </div>
  );
};

export default PetPost;