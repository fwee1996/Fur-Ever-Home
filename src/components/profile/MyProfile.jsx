

// import React, { useEffect, useState } from 'react';
// import { deleteUserProfile, getUserById, updateUserProfile } from "../../services/userService";
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';



// export const MyProfile = ({ currentUser }) => {
//   const [myPosts, setMyPosts] = useState([]);
// const [allUsers,setAllUsers]=useState([])
// const [existingUser,setExistingUsers]=useState([])
// const [userBeingEdited, setUserBeingEdited] = useState({})
// const navigate = useNavigate() // useNavigate hook
// const [user,setUser]=useState([])
// //updateUserProfile
// //deleteUserProfile

//   // // fetch all articles on initial render
//   // useEffect(() => { 
//   //   getAllNews().then((articlesArray) => 
//   //     setAllArticles(articlesArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))))
//   // }, []) 

//   // // handle editing article
//   // const handleEditClick = (article) => {  
//   //   setArticleBeingEdited({ ...article, originalTimestamp: article.timestamp })
//   // }

//   // // handle saving the edited article
//   // const handleEditSave = async (event) => {
//   //   event.preventDefault() // prevent default form submission
//   //   if (!articleBeingEdited.title || !articleBeingEdited.synopsis || !articleBeingEdited.url) {
//   //     alert('Please fill out the title, synopsis, and URL!')
//   //     return
//   //   }
//   //   await modifyArticle(articleBeingEdited)
//   //   setArticleBeingEdited({}) // exit editing mode
//   //   getAllNews().then((articlesArray) => setAllArticles(articlesArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))))
//   // }

//   // // handle deleting an article
//   // const handleDeleteArticle = async (articleId) => { 
//   //   await deleteArticle(articleId)
//   //   getAllNews().then((articlesArray) => {
//   //     setAllArticles(articlesArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)))
//   //   })
//   // }


//   useEffect(() => {
//     getUserById().then((usersArray) => {
//         const user = usersArray.filter(user => user.id === currentUser.id);
//         setUser(user);
//     });
// }, [currentUser.id]);


// // Handle delete functionality
// const handleDeleteProfile = async (profileToDelete) => {
//   const confirmDelete = window.confirm(`Are you sure you want to delete your profile?`);
//   if (confirmDelete) {
//       await deleteUserProfile(profileToDelete.id);
//       // Update profiles state by filtering out the deleted post
//       setExistingUsers(existingUsers => existingUsers.filter(profile => profile.id !== postToDelete.id));
//       alert(`Successfully deleted profile`);
//     }
// };

// // Handle modify functionality (placeholder)
// // const handleUpdateProfile = async (profile) => {
// //   //updateUserProfile
// //   await updateUserProfile(profileToDelete.id);
// //   console.log("Modify pet post:", profile);
// //   // Implement modify logic as needed
// // };

//   return (
//     <div>
//       <h1>My Profile</h1>
//       <div><img src={currentUser.photo} alt={currentUser.fullName} className="user-photo"/></div>
//       <p>Full Name: {currentUser.fullName}</p>
//       <p>Email: {currentUser.email}</p>
//       <p>Phone Number: {currentUser.phoneNumber}</p>
//       <p>City: {currentUser.city}</p>
//       <p>State: {currentUser.state}</p>
//       <Button variant="warning" onClick={() => navigate(`/updateProfile`)}>Update Profile</Button>
//       <Button variant="success" onClick={() => handleDeleteProfile(petDetails)}>Delete Profile</Button>
//     </div>
//   );
// };



// import React, { useEffect, useState } from 'react';
// import { deleteUserProfile, getAllUsers } from "../../services/userService";
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

// export const MyProfile = ({ currentUser }) => {
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   const fetchUser = async () => {
//   //     try {
//   //       const fetchedUser = await getUserById(currentUser.id);
//   //       setUser(fetchedUser);
//   //     } catch (error) {
//   //       console.error('Failed to fetch user', error);
//   //     }
//   //   };
//   //   fetchUser();
//   // }, [currentUser.id]);

//   useEffect(() => {
//     getAllUsers().then((usersArray) => {
//         const userProfiles = usersArray.filter(profile => profile.ownerId === currentUser.id);
//         setMyProfiles(userProfiles);
//     });
// }, [currentUser.id]);

//   const handleDeleteProfile = async () => {
//     const confirmDelete = window.confirm('Are you sure you want to delete your profile?');
//     if (confirmDelete) {
//       try {
//         await deleteUserProfile(currentUser.id);
//         alert('Profile successfully deleted');
//         navigate('/login'); // Redirect to login or another appropriate page
//       } catch (error) {
//         console.error('Failed to delete profile', error);
//         alert('Failed to delete profile');
//       }
//     }
//   };

// //handleModifyProfile:navigate(`/updateProfile/${currentUser.id}` then rerender


//   return (
//     <div>
//       <h1>My Profile</h1>
//       <div><img src={currentUser.photo} alt={currentUser.fullName} className="user-photo" /></div>
//       <p>Full Name: {currentUser.fullName}</p>
//       <p>Email: {currentUser.email}</p>
//       <p>Phone Number: {currentUser.phoneNumber}</p>
//       <p>City: {currentUser.city}</p>
//       <p>State: {currentUser.state}</p>
//       <Button variant="warning" onClick={() => navigate(`/updateProfile/${currentUser.id}`)}>Update Profile</Button>  
//       <Button variant="danger" onClick={handleDeleteProfile}>Delete Profile</Button>
//     </div>
//   );
// };






// import React, { useEffect, useState } from 'react';
// import { deleteUserProfile, getAllUsers } from "../../services/userService";
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

// export const MyProfile = ({ currentUser }) => {
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();


//   useEffect(() => {
//     getAllUsers().then((usersArray) => {
//         const userProfile = usersArray.filter(user => user.id === currentUser.id);
//         setUser(userProfile);
//     });
// }, [currentUser.id]);

//   const handleDeleteProfile = async () => {
//     const confirmDelete = window.confirm('Are you sure you want to delete your profile?');
//     if (confirmDelete) {
//       try {
//         await deleteUserProfile(currentUser.id);
//         alert('Profile successfully deleted');
//         navigate('/login'); // Redirect to login or another appropriate page
//       } catch (error) {
//         console.error('Failed to delete profile', error);
//         alert('Failed to delete profile');
//       }
//     }
//   };

// //handleModifyProfile:navigate(`/updateProfile/${currentUser.id}` then rerender


//   return (
//     <div>
//       <h1>My Profile</h1>
//       <div><img src={currentUser.photo} alt={currentUser.fullName} className="user-photo" /></div>
//       <p>Full Name: {currentUser.fullName}</p>
//       <p>Email: {currentUser.email}</p>
//       <p>Phone Number: {currentUser.phoneNumber}</p>
//       <p>City: {currentUser.city}</p>
//       <p>State: {currentUser.state}</p>
//       <Button variant="warning" onClick={() => navigate(`/updateProfile/${currentUser.id}`)}>Update Profile</Button>  
//       <Button variant="danger" onClick={handleDeleteProfile(currentUser)}>Delete Profile</Button>
//     </div>
//   );
// };



// import React, { useEffect, useState } from 'react';
// import { deleteUserProfile, getAllUsers } from "../../services/userService";
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

// export const MyProfile = ({ currentUser }) => {
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     getAllUsers().then((usersArray) => {
//       const userProfile = usersArray.find(user => user.id === currentUser.id);
//       setUser(userProfile);
//     });
//   }, [currentUser.id]);

//   const handleDeleteProfile = async () => {
//     const confirmDelete = window.confirm('Are you sure you want to delete your profile?');
//     if (confirmDelete) {
//       try {
//         await deleteUserProfile(currentUser.id);
//         alert('Profile successfully deleted');
//         navigate('/login'); // Redirect to login or another appropriate page
//       } catch (error) {
//         console.error('Failed to delete profile', error);
//         alert('Failed to delete profile');
//       }
//     }
//   };

//   return (
//     <div>
//       <h1>My Profile</h1>
//       <div><img src={user.photo} alt={user.fullName} className="user-photo" /></div>
//       <p>Full Name: {user.fullName}</p>
//       <p>Email: {user.email}</p>
//       <p>Phone Number: {user.phoneNumber}</p>
//       <p>City: {user.city}</p>
//       <p>State: {user.state}</p>
//       <Button variant="warning" onClick={() => navigate(`/updateProfile/${currentUser.id}`)}>Update Profile</Button>  
//       <Button variant="danger" onClick={handleDeleteProfile}>Delete Profile</Button>
//     </div>
//   );
// };



// import React, { useEffect, useState } from 'react';
// import { deleteUserProfile, getAllUsers } from "../../services/userService";
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import './MyProfile.css'; // Import the CSS file

// export const MyProfile = ({ currentUser }) => {
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     getAllUsers().then((usersArray) => {
//       const userProfile = usersArray.find(user => user.id === currentUser.id);
//       setUser(userProfile);
//     });
//   }, [currentUser.id]);

//   const handleDeleteProfile = async () => {
//     const confirmDelete = window.confirm('Are you sure you want to delete your profile?');
//     if (confirmDelete) {
//       try {
//         await deleteUserProfile(currentUser.id);
//         alert('Profile successfully deleted');
//         navigate('/login'); // Redirect to login or another appropriate page
//       } catch (error) {
//         console.error('Failed to delete profile', error);
//         alert('Failed to delete profile');
//       }
//     }
//   };

//   return (
//     <div className='full-profile-container'>
//     <div className="profile-container">
//       <h1 className="profile-title">My Profile</h1>
//       <div className="profile-photo-container">
//         <img src={user.photo} alt={user.fullName} className="user-photo" />
//       </div>
//       <div className="profile-details">
//         <p><strong>Full Name:</strong> {user.fullName}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
//         <p><strong>City:</strong> {user.city}</p>
//         <p><strong>State:</strong> {user.state}</p>
//       </div>
//       <div className="profile-buttons">
//         <Button variant="warning" onClick={() => navigate(`/updateProfile/${currentUser.id}`)}>Update Profile</Button>
//         <Button variant="danger" onClick={handleDeleteProfile}>Delete Profile</Button>
//       </div>
//     </div>
//     </div>
//   );
// };












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
