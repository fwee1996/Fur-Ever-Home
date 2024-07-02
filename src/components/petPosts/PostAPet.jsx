// //This works!!!!
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createPetPost, createPetPhoto } from '../../services/petPostService';

// export const PostAPet = ({ currentUser }) => {
//     const[preview, setPreview]=useState(null)
//     const [newPost, setNewPost] = useState({
//         name: '',
//         age: '',
//         ageUnit: 'weeks', // Added ageUnit
//         species: '',
//         breed: '',
//         medicalCondition: '',
//         behavioralIssues: '',
//         reasonForRehoming: '',
//         photo: ''
//     });
//     const [selectedImage, setSelectedImage ] = useState(null)

//     const navigate = useNavigate();

//     const handleFileChange = async (event) => {

//         const file = event.target.files[0];

//         const res=await createPetPhoto(file)
        
//         const data = res.json()

//         if(data.photo) {
//             const copy = {...newPost}
//             copy.photo = data.photo
//         }
//     }

  

//     const handleAddPost = async (event) => {
//         event.preventDefault();
//         const { name, age, species, breed, medicalCondition, behavioralIssues, reasonForRehoming, photo } = newPost;
//         if (!name || !age || !species || !breed || !medicalCondition || !behavioralIssues || !reasonForRehoming || !photo) {
//             alert('Please fill out all fields!');
//             return;
//         }
//         const post = {
//             ...newPost,
//             ownerId: currentUser.id,
//             timestamp: new Date().toISOString(),
//         };
//         await createPetPost(post);
//         setNewPost({
//             name: '',
//             age: '',
//             ageUnit: 'weeks', // Reset ageUnit
//             species: '',
//             breed: '',
//             medicalCondition: '',
//             behavioralIssues: '',
//             reasonForRehoming: '',
//             photo: ''
//         });

//         navigate('/myPosts');
//     };

    
//         // axios.post("https://")


//         // if (file) {
//         //     const reader = new FileReader()
//         //     reader.onloadend = () => {
//         //         setPreview(reader.result)

//         //     }
//         // }
    

//     // const handleFileChange = async (event) => {
//     //    const file=event.target.files[0]
//     //    try {
//     //     const res=await uploadImage(file)
//     //     const data=await res.json()
//     //     if (data.photo){
//     //         const copy={ ...newPost}
//     //         copy.photo=data.photo
//     //         setNewPost(copy)
//     //     }
//     //     else {
//     //         alert("image upload failed")
//     //     }
//     //    } catch(error) {
//     //     console.error("Error uploading image: ", error);
//     //     alert("An error occurred during the image upload")
//     //    }
//     // }

//     return (
//         <form onSubmit={handleAddPost}>
//             <div className="form-group">
//                 <label>Name</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter name"
//                     value={newPost.name}
//                     onChange={(event) => setNewPost({ ...newPost, name: event.target.value })}
//                 />
//             </div>

//             <div className="form-group">
//                 <label>Age</label>
//                 <div className="d-flex">
//                     <input
//                         type="number"
//                         className="form-control"
//                         placeholder="Enter age"
//                         value={newPost.age}
//                         onChange={(event) => setNewPost({ ...newPost, age: event.target.value })}
//                     />
//                     <select
//                         className="form-control ml-2"
//                         value={newPost.ageUnit}
//                         onChange={(event) => setNewPost({ ...newPost, ageUnit: event.target.value })}
//                     >
//                         {/* Corrected plural/singular form handling */}
//                         <option value="weeks">{newPost.age === 1 ? 'Week' : 'Weeks'}</option>
//                         <option value="months">{newPost.age === 1 ? 'Month' : 'Months'}</option>
//                         <option value="years">{newPost.age === 1 ? 'Year' : 'Years'}</option>
//                     </select>
//                 </div>
//             </div>

//             <div className="form-group">
//                 <label>Species</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter species"
//                     value={newPost.species}
//                     onChange={(event) => setNewPost({ ...newPost, species: event.target.value })}
//                 />
//             </div>

//             <div className="form-group">
//                 <label>Breed</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter breed"
//                     value={newPost.breed}
//                     onChange={(event) => setNewPost({ ...newPost, breed: event.target.value })}
//                 />
//             </div>

//             <div className="form-group">
//                 <label>Medical Condition</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter medical condition"
//                     value={newPost.medicalCondition}
//                     onChange={(event) => setNewPost({ ...newPost, medicalCondition: event.target.value })}
//                 />
//             </div>

//             <div className="form-group">
//                 <label>Behavioral Issues</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter behavioral issues"
//                     value={newPost.behavioralIssues}
//                     onChange={(event) => setNewPost({ ...newPost, behavioralIssues: event.target.value })}
//                 />
//             </div>

//             <div className="form-group">
//                 <label>Reason For Rehoming</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter reason for rehoming"
//                     value={newPost.reasonForRehoming}
//                     onChange={(event) => setNewPost({ ...newPost, reasonForRehoming: event.target.value })}
//                 />
//             </div>

//             <div className="form-group">
//                 <label>Photo</label>
//                 <input
//                     type="file"
//                     className="form-control"
//                     placeholder="Enter photo URL"
//                     onChange={(e) => {handleFileChange(e)}}
//                 />
//                 {selectedImage && <p>Selected Image:{selectedImage} </p>}
//             </div>

//             <div className="button-group">
//                 <button type="submit" className="btn btn-warning">Save Pet Post</button>
//             </div>
//         </form>
//     );
// };





// //This works!!!!
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createPetPost, createPetPhoto } from '../../services/petPostService';
// import "./PostAPet.css"

// export const PostAPet = ({ currentUser }) => {
//     const [newPost, setNewPost] = useState({
//         name: '',
//         age: '',
//         ageUnit: 'weeks', // Added ageUnit
//         species: '',
//         breed: '',
//         medicalCondition: '',
//         behavioralIssues: '',
//         reasonForRehoming: '',
//         photo: ''
//     });

//     const navigate = useNavigate();

//     // const handleFileChange = async (event) => {

//     //     const file = event.target.files[0];

//     //     const res=await createPetPhoto(file)
        
//     //     const data = res.json()

//     //     if(data.photo) {
//     //         const copy = {...newPost}
//     //         copy.photo = data.photo
//     //     }
//     // }

  

//     const handleAddPost = async (event) => {
//         event.preventDefault();
//         const { name, age, species, breed, medicalCondition, behavioralIssues, reasonForRehoming, photo } = newPost;
//         if (!name || !age || !species || !breed || !medicalCondition || !behavioralIssues || !reasonForRehoming || !photo) {
//             alert('Please fill out all fields!');
//             return;
//         }
//         const post = {
//             ...newPost,
//             ownerId: currentUser.id,
//             timestamp: new Date().toISOString(),
//         };
//         await createPetPost(post);
//         setNewPost({
//             name: '',
//             age: '',
//             ageUnit: 'weeks', // Reset ageUnit
//             species: '',
//             breed: '',
//             medicalCondition: '',
//             behavioralIssues: '',
//             reasonForRehoming: '',
//             photo: ''
//         });

//         navigate('/myPosts');
//     };

    
//         // axios.post("https://")


//         // if (file) {
//         //     const reader = new FileReader()
//         //     reader.onloadend = () => {
//         //         setPreview(reader.result)

//         //     }
//         // }
    

//     // const handleFileChange = async (event) => {
//     //    const file=event.target.files[0]
//     //    try {
//     //     const res=await uploadImage(file)
//     //     const data=await res.json()
//     //     if (data.photo){
//     //         const copy={ ...newPost}
//     //         copy.photo=data.photo
//     //         setNewPost(copy)
//     //     }
//     //     else {
//     //         alert("image upload failed")
//     //     }
//     //    } catch(error) {
//     //     console.error("Error uploading image: ", error);
//     //     alert("An error occurred during the image upload")
//     //    }
//     // }

//     return (
//         <form className="post-form" onSubmit={handleAddPost}>
//             <h2>New Pet Post</h2>
//             <div className="form-group">
//                 <label>Name</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter name"
//                     value={newPost.name}
//                     onChange={(event) => setNewPost({ ...newPost, name: event.target.value })}
//                 />
//             </div>

//             <div className="form-group">
//                 <label>Age</label>
//                 <div className="age-ageUnit">
//                 {/* <div className="d-flex"> */}
//                     <input
//                         type="number"
//                         className="form-control"
//                         placeholder="Enter age"
//                         value={newPost.age}
//                         onChange={(event) => setNewPost({ ...newPost, age: event.target.value })}
//                     />
//                     <select
//                         className="form-control ml-2"
//                         value={newPost.ageUnit}
//                         onChange={(event) => setNewPost({ ...newPost, ageUnit: event.target.value })}
//                     >
//                         {/* Corrected plural/singular form handling */}
//                         <option value="weeks">{newPost.age === 1 ? 'Week' : 'Weeks'}</option>
//                         <option value="months">{newPost.age === 1 ? 'Month' : 'Months'}</option>
//                         <option value="years">{newPost.age === 1 ? 'Year' : 'Years'}</option>
//                     </select>
//                     {/* </div> */}
//                 </div>
//             </div>

//             <div className="form-group">
//                 <label>Species</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter species"
//                     value={newPost.species}
//                     onChange={(event) => setNewPost({ ...newPost, species: event.target.value })}
//                 />
//             </div>

//             <div className="form-group">
//                 <label>Breed</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter breed"
//                     value={newPost.breed}
//                     onChange={(event) => setNewPost({ ...newPost, breed: event.target.value })}
//                 />
//             </div>

//             <div className="form-group">
//                 <label>Medical Condition</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter medical condition"
//                     value={newPost.medicalCondition}
//                     onChange={(event) => setNewPost({ ...newPost, medicalCondition: event.target.value })}
//                 />
//             </div>

//             <div className="form-group">
//                 <label>Behavioral Issues</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter behavioral issues"
//                     value={newPost.behavioralIssues}
//                     onChange={(event) => setNewPost({ ...newPost, behavioralIssues: event.target.value })}
//                 />
//             </div>

//             <div className="form-group">
//                 <label>Reason For Rehoming</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter reason for rehoming"
//                     value={newPost.reasonForRehoming}
//                     onChange={(event) => setNewPost({ ...newPost, reasonForRehoming: event.target.value })}
//                 />
//             </div>

//             {/* <div className="form-group">
//                 <label>Photo</label>
//                 <input
//                     type="file"
//                     className="form-control"
//                     placeholder="Enter photo URL"
//                     onChange={(e) => {handleFileChange(e)}}
//                 />
//                 {selectedImage && <p>Selected Image:{selectedImage} </p>}
//             </div> */}

//             <div className="form-group">
//                 <label>Photo</label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Enter photo URL"
//                     onChange={(event) => setNewPost({ ...newPost, photo: event.target.value })}
//                 />
//             </div>

//             <div className="button-group">
//                 <button type="submit" className="btn btn-warning">Save Pet Post</button>
//             </div>
//         </form>
//     );
// };





//upload pic:
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPetPost } from '../../services/petPostService';
import "./PostAPet.css";

export const PostAPet = ({ currentUser }) => {
    const [newPost, setNewPost] = useState({
        name: '',
        age: '',
        ageUnit: 'weeks',
        species: '',
        breed: '',
        medicalCondition: '',
        behavioralIssues: '',
        reasonForRehoming: '',
        photo: ''
    });

    const navigate = useNavigate();

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        
        try {
            const imageUrl = await uploadImage(file);
            setNewPost({ ...newPost, photo: imageUrl });
        } catch (error) {
            console.error("Error uploading image: ", error);
            alert("An error occurred during the image upload");
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

    const handleAddPost = async (event) => {
        event.preventDefault();
        const { name, age, species, breed, medicalCondition, behavioralIssues, reasonForRehoming, photo } = newPost;
        
        if (!name || !age || !species || !breed || !medicalCondition || !behavioralIssues || !reasonForRehoming || !photo) {
            alert('Please fill out all fields including the photo!');
            return;
        }

        const post = {
            ...newPost,
            ownerId: currentUser.id,
            timestamp: new Date().toISOString(),
        };

        try {
            await createPetPost(post); // Send post data to backend
            setNewPost({
                name: '',
                age: '',
                ageUnit: 'weeks',
                species: '',
                breed: '',
                medicalCondition: '',
                behavioralIssues: '',
                reasonForRehoming: '',
                photo: ''
            });
            navigate('/myPosts');
        } catch (error) {
            console.error('Error creating pet post:', error);
            alert('Failed to create pet post. Please try again.');
        }
    };

    return (
        <form className="post-form" onSubmit={handleAddPost}>
            <h2>New Pet Post</h2>
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                    value={newPost.name}
                    onChange={(event) => setNewPost({ ...newPost, name: event.target.value })}
                    required
                />
            </div>

            <div className="form-group">
                <label>Age</label>
                <div className="age-ageUnit">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter age"
                        value={newPost.age}
                        onChange={(event) => setNewPost({ ...newPost, age: event.target.value })}
                        required
                    />
                    <select
                        className="form-control ml-2"
                        value={newPost.ageUnit}
                        onChange={(event) => setNewPost({ ...newPost, ageUnit: event.target.value })}
                    >
                        <option value="weeks">{newPost.age === '1' ? 'Week' : 'Weeks'}</option>
                        <option value="months">{newPost.age === '1' ? 'Month' : 'Months'}</option>
                        <option value="years">{newPost.age === '1' ? 'Year' : 'Years'}</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label>Species</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter species"
                    value={newPost.species}
                    onChange={(event) => setNewPost({ ...newPost, species: event.target.value })}
                    required
                />
            </div>

            <div className="form-group">
                <label>Breed</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter breed"
                    value={newPost.breed}
                    onChange={(event) => setNewPost({ ...newPost, breed: event.target.value })}
                    required
                />
            </div>

            <div className="form-group">
                <label>Medical Condition</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter medical condition"
                    value={newPost.medicalCondition}
                    onChange={(event) => setNewPost({ ...newPost, medicalCondition: event.target.value })}
                    required
                />
            </div>

            <div className="form-group">
                <label>Behavioral Issues</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter behavioral issues"
                    value={newPost.behavioralIssues}
                    onChange={(event) => setNewPost({ ...newPost, behavioralIssues: event.target.value })}
                    required
                />
            </div>

            <div className="form-group">
                <label>Reason For Rehoming</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter reason for rehoming"
                    value={newPost.reasonForRehoming}
                    onChange={(event) => setNewPost({ ...newPost, reasonForRehoming: event.target.value })}
                    required
                />
            </div>

            <div className="form-group">
                <label>Photo</label>
                <input
                    type="file"
                    className="form-control"
                    onChange={handleFileChange}
                    accept="image/*"
                    required
                />
            </div>

            <div className="button-group">
                <button type="submit" className="btn btn-warning">Save Pet Post</button>
            </div>
        </form>
    );
};

export default PostAPet;
