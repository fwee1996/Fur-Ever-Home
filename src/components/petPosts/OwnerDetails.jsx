//this works! just petPOsts instead of availPets
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';


// export const OwnerDetails = () => {
//   const { petPostId } = useParams();
//   const [petPost, setPetPost] = useState(null);
//   const [user, setUser] = useState(null);



//   useEffect(() => {
//     const fetchPetPost = async () => {
      
//         // Fetch pet post data with ownersPets and owners expanded
//         const response = await fetch(`http://localhost:8088/petPosts/${petPostId}?_expand=owner&_embed=ownersPets`);
    
//         const data = await response.json();
//         setPetPost(data);

//         if (data && data.owner) {
//           const ownerId = data.owner.id;
//           // Fetch user data using ownerId from expanded owner
//           const userResponse = await fetch(`http://localhost:8088/users/${ownerId}`);
//           const userData = await userResponse.json();
//           setUser(userData);
//         }

//     };

//     fetchPetPost();
//   }, [petPostId]);


//   return (
//     <div>
//       <h2>Contact Owner</h2>
//       <div>
//         {user && (
//           <div>
//             <div><img src={user.photo} alt={user.fullName} className="owner-details-photo" /></div>
//             <p>Full Name: {user.fullName}</p>
//             <p>Phone Number: {user.phoneNumber}</p>
//             <p>Email: {user.email}</p>
//             <p>City: {user.city}</p>
//             <p>State: {user.state}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OwnerDetails;



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';


// export const OwnerDetails = () => {
//   const { petPostId } = useParams();
//   const [petPost, setPetPost] = useState(null);
//   const [user, setUser] = useState(null);



//   useEffect(() => {
//     const fetchPetPost = async () => {
      
//         // Fetch pet post data with ownersPets and owners expanded
//         const response = await fetch(`http://localhost:8088/petPosts/${petPostId}?_expand=owner&_embed=ownersPets`);
    
//         const data = await response.json();
//         setPetPost(data);

//         if (data && data.owner) {
//           const ownerId = data.owner.id;
//           // Fetch user data using ownerId from expanded owner
//           const userResponse = await fetch(`http://localhost:8088/users/${ownerId}`);
//           const userData = await userResponse.json();
//           setUser(userData);
//         }

//     };

//     fetchPetPost();
//   }, [petPostId]);


//   return (
//     <div>
//       <h2>Contact Owner</h2>
//       <div>
//         {user && (
//           <div>
//             <div><img src={user.photo} alt={user.fullName} className="owner-details-photo" /></div>
//             <p>Full Name: {user.fullName}</p>
//             <p>Phone Number: {user.phoneNumber}</p>
//             <p>Email: {user.email}</p>
//             <p>City: {user.city}</p>
//             <p>State: {user.state}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OwnerDetails;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './OwnerDetails.css'; // Import the CSS file

export const OwnerDetails = () => {
  const { petPostId } = useParams();
  const [petPost, setPetPost] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchPetPost = async () => {
      try {
        // Fetch pet post data with ownersPets and owners expanded
        const response = await fetch(`http://localhost:8088/petPosts/${petPostId}?_expand=owner&_embed=ownersPets`);
        const data = await response.json();
        setPetPost(data);

        if (data && data.owner) {
          const ownerId = data.owner.id;
          // Fetch user data using ownerId from expanded owner
          const userResponse = await fetch(`http://localhost:8088/users/${ownerId}`);
          const userData = await userResponse.json();
          setUser(userData);
        }
      } catch (error) {
        console.error('Failed to fetch pet post or owner details', error);
      }
    };

    fetchPetPost();
  }, [petPostId]);

  return (
    <div className='main-container'>
    <div className="owner-details-container">
      <h2>Contact Owner</h2>
      <div className="owner-info">
        {user && (
          <div>
            <div><img src={user.photo} alt={user.fullName} className="owner-details-photo" /></div>
            <p><strong>Full Name:</strong> {user.fullName}</p>
            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.city}</p>
            <p><strong>State:</strong> {user.state}</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default OwnerDetails;
