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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPetPost, createPetPhoto } from '../../services/petPostService';
import "./PostAPet.css"

export const PostAPet = ({ currentUser }) => {
    const [newPost, setNewPost] = useState({
        name: '',
        age: '',
        ageUnit: 'weeks', // Added ageUnit
        species: '',
        breed: '',
        medicalCondition: '',
        behavioralIssues: '',
        reasonForRehoming: '',
        photo: ''
    });

    const navigate = useNavigate();

    // const handleFileChange = async (event) => {

    //     const file = event.target.files[0];

    //     const res=await createPetPhoto(file)
        
    //     const data = res.json()

    //     if(data.photo) {
    //         const copy = {...newPost}
    //         copy.photo = data.photo
    //     }
    // }

  

    const handleAddPost = async (event) => {
        event.preventDefault();
        const { name, age, species, breed, medicalCondition, behavioralIssues, reasonForRehoming, photo } = newPost;
        if (!name || !age || !species || !breed || !medicalCondition || !behavioralIssues || !reasonForRehoming || !photo) {
            alert('Please fill out all fields!');
            return;
        }
        const post = {
            ...newPost,
            ownerId: currentUser.id,
            timestamp: new Date().toISOString(),
        };
        await createPetPost(post);
        setNewPost({
            name: '',
            age: '',
            ageUnit: 'weeks', // Reset ageUnit
            species: '',
            breed: '',
            medicalCondition: '',
            behavioralIssues: '',
            reasonForRehoming: '',
            photo: ''
        });

        navigate('/myPosts');
    };

    
        // axios.post("https://")


        // if (file) {
        //     const reader = new FileReader()
        //     reader.onloadend = () => {
        //         setPreview(reader.result)

        //     }
        // }
    

    // const handleFileChange = async (event) => {
    //    const file=event.target.files[0]
    //    try {
    //     const res=await uploadImage(file)
    //     const data=await res.json()
    //     if (data.photo){
    //         const copy={ ...newPost}
    //         copy.photo=data.photo
    //         setNewPost(copy)
    //     }
    //     else {
    //         alert("image upload failed")
    //     }
    //    } catch(error) {
    //     console.error("Error uploading image: ", error);
    //     alert("An error occurred during the image upload")
    //    }
    // }

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
                />
            </div>

            <div className="form-group">
                <label>Age</label>
                <div className="age-ageUnit">
                {/* <div className="d-flex"> */}
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter age"
                        value={newPost.age}
                        onChange={(event) => setNewPost({ ...newPost, age: event.target.value })}
                    />
                    <select
                        className="form-control ml-2"
                        value={newPost.ageUnit}
                        onChange={(event) => setNewPost({ ...newPost, ageUnit: event.target.value })}
                    >
                        {/* Corrected plural/singular form handling */}
                        <option value="weeks">{newPost.age === 1 ? 'Week' : 'Weeks'}</option>
                        <option value="months">{newPost.age === 1 ? 'Month' : 'Months'}</option>
                        <option value="years">{newPost.age === 1 ? 'Year' : 'Years'}</option>
                    </select>
                    {/* </div> */}
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
                />
            </div>

            {/* <div className="form-group">
                <label>Photo</label>
                <input
                    type="file"
                    className="form-control"
                    placeholder="Enter photo URL"
                    onChange={(e) => {handleFileChange(e)}}
                />
                {selectedImage && <p>Selected Image:{selectedImage} </p>}
            </div> */}

            <div className="form-group">
                <label>Photo</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter photo URL"
                    onChange={(event) => setNewPost({ ...newPost, photo: event.target.value })}
                />
            </div>

            <div className="button-group">
                <button type="submit" className="btn btn-warning">Save Pet Post</button>
            </div>
        </form>
    );
};





//upload pic:
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createPetPost } from '../../services/petPostService';
// import axios from 'axios';

// export const PostAPet = ({ currentUser }) => {
//     const [newPost, setNewPost] = useState({
//         name: '',
//         age: '',
//         ageUnit: 'weeks',
//         species: '',
//         breed: '',
//         medicalCondition: '',
//         behavioralIssues: '',
//         reasonForRehoming: '',
//         photo: null // Changed to null for storing the selected image file
//     });

//     const [selectedFile, setSelectedFile] = useState(null);
//     const [file, setFile] = useState(null);
//     // const [progress, setProgress] = useState({ started: false, pc: 0 });
//     // const [msg, setMsg] = useState(null);

//     const navigate = useNavigate();

//     const handleAddPost = async (event) => {
//         event.preventDefault();
//         const { name, age, species, breed, medicalCondition, behavioralIssues, reasonForRehoming } = newPost;
//         if (!name || !age || !species || !breed || !medicalCondition || !behavioralIssues || !reasonForRehoming || !selectedFile) {
//             alert('Please fill out all fields!');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('age', age);
//         formData.append('ageUnit', newPost.ageUnit);
//         formData.append('species', species);
//         formData.append('breed', breed);
//         formData.append('medicalCondition', medicalCondition);
//         formData.append('behavioralIssues', behavioralIssues);
//         formData.append('reasonForRehoming', reasonForRehoming);
//         formData.append('photo', selectedFile);
//         formData.append('ownerId', currentUser.id);
//         formData.append('timestamp', new Date().toISOString());

//         try {
//             await createPetPost(formData); // Assuming createPetPost can handle FormData
//             setNewPost({
//                 name: '',
//                 age: '',
//                 ageUnit: 'weeks',
//                 species: '',
//                 breed: '',
//                 medicalCondition: '',
//                 behavioralIssues: '',
//                 reasonForRehoming: '',
//                 photo: null
//             });
//             setSelectedFile(null);
//             navigate('/myPosts');
//         } catch (error) {
//             console.error('Error creating pet post:', error);
//         }
//     };

//     const fileSelectedHandler = (event) => {
//         setSelectedFile(event.target.files[0]);
//     };

//     function handleUpload() {
//         if (!file) {
//             console.log("NO file selected!")
//             return;
//         }

//         const fd = new FormData();
//         fd.append("file", file);

//         setMsg("Uploading....");
//         setProgress(prevState => {
//             return { ...prevState, started: true };
//         });

//         axios.post("http://httpbin.org/post", fd, {
//             onUploadProgress: (progressEvent) => {
//                 setProgress(prevState => {
//                     return { ...prevState, pc: progressEvent.loaded / progressEvent.total * 100 };
//                 });
//             },
//             headers: {
//                 "Custom-Header": "value"
//             }
//         })
//             .then(res => {
//                 setMsg("Upload successful");
//                 console.log(res.data);
//             })
//             .catch(err => {
//                 setMsg("Upload failed");
//                 console.log(err);
//             });
//     }

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

//             {/* <div className="form-group">
//                 <label>Photo</label>
//                 <input type="file" onChange={fileSelectedHandler} />
//             </div> */}

//             <div className="form-group">
//                 <label>Photo</label>
//                 <input type="file" onChange={(e) => { setFile(e.target.files[0]) }} />
//                 <button type="button" onClick={handleUpload}>Upload</button>
//                 {/* {progress.started && <progress max="100" value={progress.pc}></progress>}
//                 {msg && <span>{msg}</span>} */}
//             </div>

//             <div className="button-group">
//                 <button type="submit" className="btn btn-warning">Save Pet Post</button>
//             </div>
//         </form>
//     );
// };







// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createPetPost } from '../../services/petPostService';
// import axios from 'axios';

// export const PostAPet = ({ currentUser }) => {
//     const [newPost, setNewPost] = useState({
//         name: '',
//         age: '',
//         ageUnit: 'weeks',
//         species: '',
//         breed: '',
//         medicalCondition: '',
//         behavioralIssues: '',
//         reasonForRehoming: '',
//         photo: null,
//     });

//     const navigate = useNavigate();

//     const handleFileChange = (event) => {
//         setNewPost({ ...newPost, photo: event.target.files[0] });
//     };

//     const handleAddPost = async (event) => {
//         event.preventDefault();

//         const formData = new FormData();
//         formData.append('name', newPost.name);
//         formData.append('age', newPost.age);
//         formData.append('ageUnit', newPost.ageUnit);
//         formData.append('species', newPost.species);
//         formData.append('breed', newPost.breed);
//         formData.append('medicalCondition', newPost.medicalCondition);
//         formData.append('behavioralIssues', newPost.behavioralIssues);
//         formData.append('reasonForRehoming', newPost.reasonForRehoming);
//         formData.append('photo', newPost.photo);

//         try {
//             const response = await axios.post('/api/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             const post = {
//                 ...newPost,
//                 ownerId: currentUser.id,
//                 timestamp: new Date().toISOString(),
//                 photo: response.data,
//             };

//             await createPetPost(post);

//             setNewPost({
//                 name: '',
//                 age: '',
//                 ageUnit: 'weeks',
//                 species: '',
//                 breed: '',
//                 medicalCondition: '',
//                 behavioralIssues: '',
//                 reasonForRehoming: '',
//                 photo: null,
//             });

//             navigate('/myPosts');
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             alert('Error uploading file. Please try again.');
//         }
//     };

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
//                     className="form-control-file"
//                     onChange={handleFileChange}
//                 />
//             </div>
//             <div className="button-group">
//                 <button type="submit" className="btn btn-warning">Save Pet Post</button>
//             </div>
//         </form>
//     );
// };
