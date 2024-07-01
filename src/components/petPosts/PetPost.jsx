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
//             <header className="petPost-header">{petPost.name}</header> 
//             {/* instead of {petPost.ageUnit} */}
//             <div><img src={petPost.photo} alt={petPost.name} className="pet-photo" onClick={() => navigate(`/availablePets/petDetails/${petPost.id}`)}/></div>
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
// import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
// import { getAllPetPosts, deletePetPost } from '../../services/petPostService';
// import './PetPosts.css';
// import { useNavigate } from 'react-router-dom'
// import { FilterBar } from "./FilterBar"

// export const PetPost = () => {
//   const [petPosts, setPetPosts] = useState([]);
//   const navigate = useNavigate() // useNavigate hook
//   const  [searchTerm,setSearchTerm]= useState("")//user input





//   // Fetch all pet posts from the API
//   const fetchAllPetPosts = async () => {
//       const petPostArray = await getAllPetPosts();
      
//       // Sort pet posts by timestamp in descending order
//       const sortedPosts = petPostArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

//       // Filter sorted posts based on searchTerm (species or medicalCondition)
//       const filteredPosts = sortedPosts.filter(petPost =>
//         petPost.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         petPost.medicalCondition.toLowerCase().includes(searchTerm.toLowerCase())||
//         petPost.behavioralIssues.toLowerCase().includes(searchTerm.toLowerCase())||
//         petPost.reasonForRehoming.toLowerCase().includes(searchTerm.toLowerCase())
//       );

//  // Apply age filtering based on state or selected option
//  filteredPosts = applyAgeFilter(filteredPosts);

//   setPetPosts(filteredPosts);

//   };




//   //age range selection
//   const handleAgeFilter = (selectedAgeRange) => {
//     let filteredPosts = [];
  
//     switch (selectedAgeRange) {
//       case "1":
//         filteredPosts = petPosts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) <= 1;
//           } else {
//             return true; // Consider all if ageUnit is not "years" (e.g., weeks, months)
//           }
//         });
//         break;
//       case "2":
//         filteredPosts = petPosts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) >= 2 && parseInt(post.age) <= 9;
//           } else {
//             return false; // Exclude posts with ageUnit other than "years"
//           }
//         });
//         break;
//       case "3":
//         filteredPosts = petPosts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) >= 10;
//           } else {
//             return false; // Exclude posts with ageUnit other than "years"
//           }
//         });
//         break;
//       default:
//         filteredPosts = petPosts;
//         break;
//     }
  
//     setPetPosts(filteredPosts);
//   };



//   useEffect(() => {
//     fetchAllPetPosts();
//   }, [searchTerm, petPosts]);



//   const applyAgeFilter = (posts) => {
//     switch (selectedAgeRange) {
//       case "1":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) <= 1;
//           } else {
//             return true; // Consider all if ageUnit is not "years" (e.g., weeks, months)
//           }
//         });
//       case "2":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) >= 2 && parseInt(post.age) <= 9;
//           } else {
//             return false; // Exclude posts with ageUnit other than "years"
//           }
//         });
//       case "3":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) >= 10;
//           } else {
//             return false; // Exclude posts with ageUnit other than "years"
//           }
//         });
//       default:
//         return posts;
//     }
//   };
  



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
//       <div className='filter'>
//          {/* onChange={(event) => setNewPost({ ...newPost, ageUnit: event.target.value })} */}
         
//         <select name="age" id="age" >
//                         <option value="0">All Ages</option>
//                         <option value="1">0-1 Years</option>
//                         <option value="2">2-9 Years</option>
//                         <option value="3">10+ Years</option>

//         </select>
//         <FilterBar setSearchTerm={setSearchTerm}/>
//         </div>
//       <section className="pet-post">
//         {petPosts.map(petPost => (
//           <div key={petPost.id} className="pet-card">
//             <header className="petPost-header">{petPost.name}</header> 
//             {/* instead of {petPost.ageUnit} */}
//             <div><img src={petPost.photo} alt={petPost.name} className="pet-photo" onClick={() => navigate(`/availablePets/petDetails/${petPost.id}`)}/></div>
//             {/* <Button variant="warning" onClick={() => navigate(`/updateMyPost/${petPost.id}`)}>Modify</Button>
//             <Button variant="success" onClick={() => handleDelete(petPost)}>Delete</Button> */}
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default PetPost;











// import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
// import { getAllPetPosts, deletePetPost } from '../../services/petPostService';
// import './PetPosts.css';
// import { useNavigate } from 'react-router-dom';
// import { FilterBar } from "./FilterBar";

// export const PetPost = () => {
//   const [petPosts, setPetPosts] = useState([]);
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState(""); // User input
//   const [selectedAgeRange, setSelectedAgeRange] = useState("0"); // Default to "All Ages"
//   const [selectedSpecies, setSelectedSpecies] = useState("0"); // Default to "All Species"
//   const [filteredPosts, setFilteredPosts] = useState([]); // State to hold filtered posts

//   // Fetch all pet posts from the API
//   const fetchAllPetPosts = async () => {
//     const petPostArray = await getAllPetPosts();
    
//     // Sort pet posts by timestamp in descending order
//     const sortedPosts = petPostArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
//     let updatedPosts = sortedPosts;

//      // Apply species filter if selected
//   if (selectedSpecies !== "0") {
//     updatedPosts = updatedPosts.filter(post => {
//       if (selectedSpecies === "3") {
//         return post.species.toLowerCase() !== "dog" && post.species.toLowerCase() !== "cat";
//       } else {
//         return post.species.toLowerCase() === mapSpeciesFilter(selectedSpecies).toLowerCase();
//       }
//     });
//   }

//     // Apply species filter if selected
//     // if (selectedSpecies !== "0") {
//     //   updatedPosts = updatedPosts.filter(post => post.species.toLowerCase() === mapSpeciesFilter(selectedSpecies).toLowerCase());
//     // }

//     // Apply age filter if selected
//     updatedPosts = applyAgeFilter(updatedPosts);

//     // Apply search term filter
//     updatedPosts = applySearchFilter(updatedPosts);

//     setFilteredPosts(updatedPosts);
//   };

//   useEffect(() => {
//     fetchAllPetPosts();
//   }, [searchTerm, selectedAgeRange, selectedSpecies]); // Include selectedAgeRange and selectedSpecies in dependencies

//   // Function to apply age filtering
//   const applyAgeFilter = (posts) => {
//     switch (selectedAgeRange) {
//       case "1":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) <= 1;
//           } else {
//             return true; // Consider all if ageUnit is not "years" (e.g., weeks, months)
//           }
//         });
//       case "2":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) >= 2 && parseInt(post.age) <= 9;
//           } else {
//             return false; // Exclude posts with ageUnit other than "years"
//           }
//         });
//       case "3":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) >= 10;
//           } else {
//             return false; // Exclude posts with ageUnit other than "years"
//           }
//         });
//       default:
//         return posts;
//     }
//   };

//   // Function to map species filter option to corresponding string
//   const mapSpeciesFilter = (selectedSpeciesOption) => {
//     switch (selectedSpeciesOption) {
//       case "1":
//         return "dog";
//       case "2":
//         return "cat";
//       case "3":
//         return "others";
//       default:
//         return "";
//     }
//   };


 

  

//   // Function to apply search term filter
//   const applySearchFilter = (posts) => {
//     if (searchTerm.trim() === "") {
//       return posts; // If no search term, return all posts
//     }
//     return posts.filter(post =>
//       post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.medicalCondition.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.behavioralIssues.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.reasonForRehoming.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   };




//   // Render the component
//   return (
//     <div className="petPosts-container">
//       <h2>Available Pets</h2>
//       <div className='filter'>
//         <select name="species" id="species" onChange={(event) => setSelectedSpecies(event.target.value)}>
//           <option value="0">All Species</option>
//           <option value="1">Dogs</option>
//           <option value="2">Cats</option>
//           <option value="3">Others</option>
//         </select>
//         <select name="age" id="age" onChange={(event) => setSelectedAgeRange(event.target.value)}>
//           <option value="0">All Ages</option>
//           <option value="1">0-1 Years</option>
//           <option value="2">2-9 Years</option>
//           <option value="3">10+ Years</option>
//         </select>
//         <FilterBar setSearchTerm={setSearchTerm} />
//       </div>
//       <section className="pet-post">
//         {filteredPosts.length === 0 ? (
//           <p>No posts found.</p>
//         ) : (
//           filteredPosts.map(petPost => (
//             <div key={petPost.id} className="pet-card">
//               <header className="petPost-header">{petPost.name}</header>
//               <div><img src={petPost.photo} alt={petPost.name} className="pet-photo" onClick={() => navigate(`/availablePets/petDetails/${petPost.id}`)} /></div>
//               {/* <Button variant="warning" onClick={() => navigate(`/updateMyPost/${petPost.id}`)}>Modify</Button>
//               <Button variant="success" onClick={() => handleDelete(petPost)}>Delete</Button> */}
//             </div>
//           ))
//         )}
//       </section>
//     </div>
//   );
// };

// export default PetPost;






// import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
// import { getAllPetPosts, deletePetPost } from '../../services/petPostService';
// import './PetPosts.css';
// import { useNavigate } from 'react-router-dom';
// import { FilterBar } from './FilterBar';

// export const PetPost = () => {
//   const [petPosts, setPetPosts] = useState([]);
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState(""); // User input
//   const [selectedAgeRange, setSelectedAgeRange] = useState("0"); // Default to "All Ages"
//   const [selectedSpecies, setSelectedSpecies] = useState("0"); // Default to "All Species"
//   const [filteredPosts, setFilteredPosts] = useState([]); // State to hold filtered posts
//   const [currentPage, setCurrentPage] = useState(1); // Current page number
//   const postsPerPage = 20; // Number of posts per page

//   // Fetch all pet posts from the API
//   const fetchAllPetPosts = async () => {
//     const petPostArray = await getAllPetPosts();
    
//     // Sort pet posts by timestamp in descending order
//     const sortedPosts = petPostArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
//     let updatedPosts = sortedPosts;

//     // Apply species filter if selected
//     if (selectedSpecies !== "0") {
//       updatedPosts = updatedPosts.filter(post => {
//         if (selectedSpecies === "3") {
//           return post.species.toLowerCase() !== "dog" && post.species.toLowerCase() !== "cat";
//         } else {
//           return post.species.toLowerCase() === mapSpeciesFilter(selectedSpecies).toLowerCase();
//         }
//       });
//     }

//     // Apply age filter if selected
//     updatedPosts = applyAgeFilter(updatedPosts);

//     // Apply search term filter
//     updatedPosts = applySearchFilter(updatedPosts);

//     setFilteredPosts(updatedPosts);
//   };

//   useEffect(() => {
//     fetchAllPetPosts();
//   }, [searchTerm, selectedAgeRange, selectedSpecies]); // Include selectedAgeRange and selectedSpecies in dependencies

//   // Function to apply age filtering
//   const applyAgeFilter = (posts) => {
//     switch (selectedAgeRange) {
//       case "1":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) <= 1;
//           } else {
//             return true; // Consider all if ageUnit is not "years" (e.g., weeks, months)
//           }
//         });
//       case "2":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) >= 2 && parseInt(post.age) <= 9;
//           } else {
//             return false; // Exclude posts with ageUnit other than "years"
//           }
//         });
//       case "3":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) >= 10;
//           } else {
//             return false; // Exclude posts with ageUnit other than "years"
//           }
//         });
//       default:
//         return posts;
//     }
//   };

//   // Function to map species filter option to corresponding string
//   const mapSpeciesFilter = (selectedSpeciesOption) => {
//     switch (selectedSpeciesOption) {
//       case "1":
//         return "dog";
//       case "2":
//         return "cat";
//       case "3":
//         return "others";
//       default:
//         return "";
//     }
//   };

//   // Function to apply search term filter
//   const applySearchFilter = (posts) => {
//     if (searchTerm.trim() === "") {
//       return posts; // If no search term, return all posts
//     }
//     return posts.filter(post =>
//       post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.medicalCondition.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.behavioralIssues.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.reasonForRehoming.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   };

//   // Pagination logic
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Render the component
//   return (
//     <div className="petPosts-container">
//       <h2>Available Pets</h2>
//       <div className="filter">
//         <select name="species" id="species" onChange={(event) => setSelectedSpecies(event.target.value)}>
//           <option value="0">All Species</option>
//           <option value="1">Dogs</option>
//           <option value="2">Cats</option>
//           <option value="3">Others</option>
//         </select>
//         <select name="age" id="age" onChange={(event) => setSelectedAgeRange(event.target.value)}>
//           <option value="0">All Ages</option>
//           <option value="1">0-1 Years</option>
//           <option value="2">2-9 Years</option>
//           <option value="3">10+ Years</option>
//         </select>
//         <FilterBar setSearchTerm={setSearchTerm} />
//       </div>
//       <section className="pet-post">
//         {currentPosts.length === 0 ? (
//           <p>No posts found.</p>
//         ) : (
//           currentPosts.map(petPost => (
//             <div key={petPost.id} className="pet-card">
//               <header className="petPost-header">{petPost.name}</header>
//               <div><img src={petPost.photo} alt={petPost.name} className="pet-photo" onClick={() => navigate(`/availablePets/petDetails/${petPost.id}`)} /></div>
//               {/* <Button variant="warning" onClick={() => navigate(`/updateMyPost/${petPost.id}`)}>Modify</Button>
//               <Button variant="success" onClick={() => handleDelete(petPost)}>Delete</Button> */}
//             </div>
//           ))
//         )}
//       </section>
//       {/* Pagination */}
//       <ul className="pagination">
//         {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
//           <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
//             <button onClick={() => handlePageChange(i + 1)} className="page-link">
//               {i + 1}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PetPost;















//this take me to the top of page each time!
// import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
// import { getAllPetPosts, deletePetPost } from '../../services/petPostService';
// import './PetPosts.css';
// import { useNavigate } from 'react-router-dom';
// import { FilterBar } from './FilterBar';

// export const PetPost = () => {
//   const [petPosts, setPetPosts] = useState([]);
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState(""); // User input
//   const [selectedAgeRange, setSelectedAgeRange] = useState("0"); // Default to "All Ages"
//   const [selectedSpecies, setSelectedSpecies] = useState("0"); // Default to "All Species"
//   const [filteredPosts, setFilteredPosts] = useState([]); // State to hold filtered posts
//   const [currentPage, setCurrentPage] = useState(1); // Current page number
//   const postsPerPage = 20; // Number of posts per page

//   // Fetch all pet posts from the API
//   const fetchAllPetPosts = async () => {
//     const petPostArray = await getAllPetPosts();
    
//     // Sort pet posts by timestamp in descending order
//     const sortedPosts = petPostArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
//     let updatedPosts = sortedPosts;

//     // Apply species filter if selected
//     if (selectedSpecies !== "0") {
//       updatedPosts = updatedPosts.filter(post => {
//         if (selectedSpecies === "3") {
//           return post.species.toLowerCase() !== "dog" && post.species.toLowerCase() !== "cat";
//         } else {
//           return post.species.toLowerCase() === mapSpeciesFilter(selectedSpecies).toLowerCase();
//         }
//       });
//     }

//     // Apply age filter if selected
//     updatedPosts = applyAgeFilter(updatedPosts);

//     // Apply search term filter
//     updatedPosts = applySearchFilter(updatedPosts);

//     setFilteredPosts(updatedPosts);
//   };

//   useEffect(() => {
//     fetchAllPetPosts();
//   }, [searchTerm, selectedAgeRange, selectedSpecies]); // Include selectedAgeRange and selectedSpecies in dependencies

//   // Function to apply age filtering
//   const applyAgeFilter = (posts) => {
//     switch (selectedAgeRange) {
//       case "1":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) <= 1;
//           } else {
//             return true; // Consider all if ageUnit is not "years" (e.g., weeks, months)
//           }
//         });
//       case "2":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) >= 2 && parseInt(post.age) <= 9;
//           } else {
//             return false; // Exclude posts with ageUnit other than "years"
//           }
//         });
//       case "3":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) >= 10;
//           } else {
//             return false; // Exclude posts with ageUnit other than "years"
//           }
//         });
//       default:
//         return posts;
//     }
//   };

//   // Function to map species filter option to corresponding string
//   const mapSpeciesFilter = (selectedSpeciesOption) => {
//     switch (selectedSpeciesOption) {
//       case "1":
//         return "dog";
//       case "2":
//         return "cat";
//       case "3":
//         return "others";
//       default:
//         return "";
//     }
//   };

//   // Function to apply search term filter
//   const applySearchFilter = (posts) => {
//     if (searchTerm.trim() === "") {
//       return posts; // If no search term, return all posts
//     }
//     return posts.filter(post =>
//       post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.medicalCondition.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.behavioralIssues.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.reasonForRehoming.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   };

//   // Pagination logic
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     // Scroll to the top of the page
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Handle click on pet card to navigate to petDetails
//   const navigateToPetDetails = (postId) => {
//     // Store current page in local storage
//     localStorage.setItem('currentPage', currentPage.toString());
//     navigate(`/availablePets/petDetails/${postId}`);
//   };

//   // Render the component
//   return (
//     <div className="petPosts-container">
//       <h2>Available Pets</h2>
//       <div className="filter">
//         <select name="species" id="species" onChange={(event) => setSelectedSpecies(event.target.value)}>
//           <option value="0">All Species</option>
//           <option value="1">Dogs</option>
//           <option value="2">Cats</option>
//           <option value="3">Others</option>
//         </select>
//         <select name="age" id="age" onChange={(event) => setSelectedAgeRange(event.target.value)}>
//           <option value="0">All Ages</option>
//           <option value="1">0-1 Years</option>
//           <option value="2">2-9 Years</option>
//           <option value="3">10+ Years</option>
//         </select>
//         <FilterBar setSearchTerm={setSearchTerm} />
//       </div>
//       <section className="pet-post">
//         {currentPosts.length === 0 ? (
//           <p>No posts found.</p>
//         ) : (
//           currentPosts.map(petPost => (
//             <div key={petPost.id} className="pet-card">
//               <header className="petPost-header">{petPost.name}</header>
//               <div><img src={petPost.photo} alt={petPost.name} className="pet-photo" onClick={() => navigateToPetDetails(petPost.id)} /></div>
//               {/* <Button variant="warning" onClick={() => navigate(`/updateMyPost/${petPost.id}`)}>Modify</Button>
//               <Button variant="success" onClick={() => handleDelete(petPost)}>Delete</Button> */}
//             </div>
//           ))
//         )}
//       </section>
//       {/* Pagination */}
//       <ul className="pagination">
//         {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
//           <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
//             <button onClick={() => handlePageChange(i + 1)} className="page-link">
//               {i + 1}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PetPost;











//this takes me back to correct page and row but not when i click pg button it dont take me to the top
// import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
// import { getAllPetPosts, deletePetPost } from '../../services/petPostService';
// import './PetPosts.css';
// import { useNavigate } from 'react-router-dom';
// import { FilterBar } from './FilterBar';

// export const PetPost = () => {
//   const [petPosts, setPetPosts] = useState([]);
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState(""); // User input
//   const [selectedAgeRange, setSelectedAgeRange] = useState("0"); // Default to "All Ages"
//   const [selectedSpecies, setSelectedSpecies] = useState("0"); // Default to "All Species"
//   const [filteredPosts, setFilteredPosts] = useState([]); // State to hold filtered posts
//   const [currentPage, setCurrentPage] = useState(1); // Current page number
//   const postsPerPage = 20; // Number of posts per page

//   // Fetch all pet posts from the API
//   const fetchAllPetPosts = async () => {
//     const petPostArray = await getAllPetPosts();
    
//     // Sort pet posts by timestamp in descending order
//     const sortedPosts = petPostArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
//     let updatedPosts = sortedPosts;

//     // Apply species filter if selected
//     if (selectedSpecies !== "0") {
//       updatedPosts = updatedPosts.filter(post => {
//         if (selectedSpecies === "3") {
//           return post.species.toLowerCase() !== "dog" && post.species.toLowerCase() !== "cat";
//         } else {
//           return post.species.toLowerCase() === mapSpeciesFilter(selectedSpecies).toLowerCase();
//         }
//       });
//     }

//     // Apply age filter if selected
//     updatedPosts = applyAgeFilter(updatedPosts);

//     // Apply search term filter
//     updatedPosts = applySearchFilter(updatedPosts);

//     setFilteredPosts(updatedPosts);
//   };

//   useEffect(() => {
//     fetchAllPetPosts();

//     // Retrieve and set currentPage from local storage
//     const storedPage = localStorage.getItem('currentPage');
//     const initialPage = storedPage ? parseInt(storedPage) : 1;
//     setCurrentPage(initialPage);

//     // Scroll to the stored scroll position
//     const storedScrollPosition = localStorage.getItem('scrollPosition');
//     if (storedScrollPosition) {
//       window.scrollTo({ top: parseInt(storedScrollPosition), behavior: 'auto' });
//     }

//     // Clean up local storage after using it
//     localStorage.removeItem('currentPage');
//     localStorage.removeItem('scrollPosition');

//   }, [searchTerm, selectedAgeRange, selectedSpecies]);


//   // Function to apply age filtering
//   const applyAgeFilter = (posts) => {
//     switch (selectedAgeRange) {
//       case "1":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) <= 1;
//           } else {
//             return true; // Consider all if ageUnit is not "years" (e.g., weeks, months)
//           }
//         });
//       case "2":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) >= 2 && parseInt(post.age) <= 9;
//           } else {
//             return false; // Exclude posts with ageUnit other than "years"
//           }
//         });
//       case "3":
//         return posts.filter(post => {
//           if (post.ageUnit === "years") {
//             return parseInt(post.age) >= 10;
//           } else {
//             return false; // Exclude posts with ageUnit other than "years"
//           }
//         });
//       default:
//         return posts;
//     }
//   };

//   // Function to map species filter option to corresponding string
//   const mapSpeciesFilter = (selectedSpeciesOption) => {
//     switch (selectedSpeciesOption) {
//       case "1":
//         return "dog";
//       case "2":
//         return "cat";
//       case "3":
//         return "others";
//       default:
//         return "";
//     }
//   };

//   // Function to apply search term filter
//   const applySearchFilter = (posts) => {
//     if (searchTerm.trim() === "") {
//       return posts; // If no search term, return all posts
//     }
//     return posts.filter(post =>
//       post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.medicalCondition.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.behavioralIssues.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.reasonForRehoming.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   };

//   // Pagination logic
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
    

//     // Store current page and scroll position in local storage
//     localStorage.setItem('currentPage', pageNumber.toString());
//     localStorage.setItem('scrollPosition', window.pageYOffset.toString());
//   };

//     //   // Handle page change
//     // const handlePageChange = (pageNumber) => {
//     //   setCurrentPage(pageNumber);
//     //   // Scroll to the top of the page
//     //   window.scrollTo({ top: 0, behavior: 'smooth' });
//     // };

//   // Handle click on pet card to navigate to petDetails
//   const navigateToPetDetails = (postId) => {
//     // Store current page and scroll position in local storage
//     localStorage.setItem('currentPage', currentPage.toString());
//     localStorage.setItem('scrollPosition', window.pageYOffset.toString());
//     navigate(`/availablePets/petDetails/${postId}`);
//   };

//   // Render the component
//   return (
//     <div className="petPosts-container">
//       <h2>Available Pets</h2>
//       <div className="filter">
//         <select name="species" id="species" onChange={(event) => setSelectedSpecies(event.target.value)}>
//           <option value="0">All Species</option>
//           <option value="1">Dogs</option>
//           <option value="2">Cats</option>
//           <option value="3">Others</option>
//         </select>
//         <select name="age" id="age" onChange={(event) => setSelectedAgeRange(event.target.value)}>
//           <option value="0">All Ages</option>
//           <option value="1">0-1 Years</option>
//           <option value="2">2-9 Years</option>
//           <option value="3">10+ Years</option>
//         </select>
//         <FilterBar setSearchTerm={setSearchTerm} />
//       </div>
//       <section className="pet-post">
//         {currentPosts.length === 0 ? (
//           <p>No posts found.</p>
//         ) : (
//           currentPosts.map(petPost => (
//             <div key={petPost.id} className="pet-card">
//               <header className="petPost-header">{petPost.name}</header>
//               <div><img src={petPost.photo} alt={petPost.name} className="pet-photo" onClick={() => navigateToPetDetails(petPost.id)} /></div>
//             </div>
//           ))
//         )}
//       </section>
//       {/* Pagination */}
//       <ul className="pagination">
//         {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
//           <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
//             <button onClick={() => handlePageChange(i + 1)} className="page-link">
//               {i + 1}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PetPost;


















import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { getAllPetPosts, deletePetPost } from '../../services/petPostService';
import './PetPosts.css';
import { useNavigate } from 'react-router-dom';
import { FilterBar } from './FilterBar';

export const PetPost = () => {
  const [petPosts, setPetPosts] = useState([]);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // User input
  const [selectedAgeRange, setSelectedAgeRange] = useState("0"); // Default to "All Ages"
  const [selectedSpecies, setSelectedSpecies] = useState("0"); // Default to "All Species"
  const [filteredPosts, setFilteredPosts] = useState([]); // State to hold filtered posts
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [scrollPosition, setScrollPosition] = useState(0); // To store scroll position
  const postsPerPage = 20; // Number of posts per page

  // Fetch all pet posts from the API
  const fetchAllPetPosts = async () => {
    const petPostArray = await getAllPetPosts();
    
    // Sort pet posts by timestamp in descending order
    const sortedPosts = petPostArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    let updatedPosts = sortedPosts;

    // Apply species filter if selected
    if (selectedSpecies !== "0") {
      updatedPosts = updatedPosts.filter(post => {
        if (selectedSpecies === "3") {
          return post.species.toLowerCase() !== "dog" && post.species.toLowerCase() !== "cat";
        } else {
          return post.species.toLowerCase() === mapSpeciesFilter(selectedSpecies).toLowerCase();
        }
      });
    }

    // Apply age filter if selected
    updatedPosts = applyAgeFilter(updatedPosts);

    // Apply search term filter
    updatedPosts = applySearchFilter(updatedPosts);

    setFilteredPosts(updatedPosts);
  };

  useEffect(() => {
    fetchAllPetPosts();

    // Retrieve and set currentPage from local storage
    const storedPage = localStorage.getItem('currentPage');
    const initialPage = storedPage ? parseInt(storedPage) : 1;
    setCurrentPage(initialPage);

    // Retrieve and set scroll position from local storage
    const storedScrollPosition = localStorage.getItem('scrollPosition');
    if (storedScrollPosition) {
      setScrollPosition(parseInt(storedScrollPosition));
    }

    // Clean up local storage after using it
    localStorage.removeItem('currentPage');
    localStorage.removeItem('scrollPosition');

  }, [searchTerm, selectedAgeRange, selectedSpecies]);


  // Function to apply age filtering
  const applyAgeFilter = (posts) => {
    switch (selectedAgeRange) {
      case "1":
        return posts.filter(post => {
          if (post.ageUnit === "years") {
            return parseInt(post.age) <= 1;
          } else {
            return true; // Consider all if ageUnit is not "years" (e.g., weeks, months)
          }
        });
      case "2":
        return posts.filter(post => {
          if (post.ageUnit === "years") {
            return parseInt(post.age) >= 2 && parseInt(post.age) <= 9;
          } else {
            return false; // Exclude posts with ageUnit other than "years"
          }
        });
      case "3":
        return posts.filter(post => {
          if (post.ageUnit === "years") {
            return parseInt(post.age) >= 10;
          } else {
            return false; // Exclude posts with ageUnit other than "years"
          }
        });
      default:
        return posts;
    }
  };

  // Function to map species filter option to corresponding string
  const mapSpeciesFilter = (selectedSpeciesOption) => {
    switch (selectedSpeciesOption) {
      case "1":
        return "dog";
      case "2":
        return "cat";
      case "3":
        return "others";
      default:
        return "";
    }
  };

  // Function to apply search term filter
  const applySearchFilter = (posts) => {
    if (searchTerm.trim() === "") {
      return posts; // If no search term, return all posts
    }
    return posts.filter(post =>
      post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.medicalCondition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.behavioralIssues.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.reasonForRehoming.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Store current page and scroll position in local storage
    localStorage.setItem('currentPage', pageNumber.toString());
    localStorage.setItem('scrollPosition', '0'); // Set scroll position to top
  };

  // Handle click on pet card to navigate to petDetails
  const navigateToPetDetails = (postId) => {
    // Store current page and scroll position in local storage
    localStorage.setItem('currentPage', currentPage.toString());
    localStorage.setItem('scrollPosition', window.pageYOffset.toString());
    navigate(`/availablePets/petDetails/${postId}`);
  };

  // Render the component
  return (
    <div className="petPosts-container">
      <h2>Available Pets</h2>
      <div className="filter">
        <select name="species" id="species" onChange={(event) => setSelectedSpecies(event.target.value)}>
          <option value="0">All Species</option>
          <option value="1">Dogs</option>
          <option value="2">Cats</option>
          <option value="3">Others</option>
        </select>
        <select name="age" id="age" onChange={(event) => setSelectedAgeRange(event.target.value)}>
          <option value="0">All Ages</option>
          <option value="1">0-1 Years</option>
          <option value="2">2-9 Years</option>
          <option value="3">10+ Years</option>
        </select>
        <FilterBar setSearchTerm={setSearchTerm} />
      </div>
      <section className="pet-post">
        {currentPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          currentPosts.map(petPost => (
            <div key={petPost.id} className="pet-card">
              <header className="petPost-header">{petPost.name}</header>
              <div><img src={petPost.photo} alt={petPost.name} className="pet-photo" onClick={() => navigateToPetDetails(petPost.id)} /></div>
            </div>
          ))
        )}
      </section>
      {/* Pagination */}
      <ul className="pagination">
        {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
          <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
            <button onClick={() => handlePageChange(i + 1)} className="page-link">
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetPost;
