import axios from 'axios'; //create a post fn

export const getAllPetPosts=()=>{
    return fetch(`http://localhost:8088/PetPosts?_embed=ownersPets
    `).then((res)=>res.json())//get a response, make it readable //embed part get info on ownerPetPosts
}
// //so can get owner id, but you want owner name it is in user object /table! user id in owner table
// //so look at service petPost , then loom at owner id and compare 
// //EMBED is if the thing you want is FK on something else, expand is if you have foreign key for something to somewhere else
// //owner has userid for fk:expand to get user object

// //claim petPost fn for that you need owner petPost thats what you put in ()
// export const assignPetPost=(ownerPetPost)=>{
//     return fetch (`http://localhost:8088/ownersPets`, {
//         method: "POST",
//         headers: {
//             "Content-Type":" application/json",
//         },
//         body: JSON.stringify(ownerPetPost),
//         })
// }






//using image url:
// export const updatePetPost = (petPost) => {
//     return fetch(`http://localhost:8088/PetPosts/${petPost.id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(petPost),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .catch(error => {
//         console.error('Error updating pet post:', error);
//         throw error; // rethrowing the error so caller can handle it
//     });
// }



//using axios/image upload
// Function to update a pet post
export const updatePetPost = async (updatedPetPost) => {
    const { id } = updatedPetPost; // Assuming updatedPetPost has an 'id' field
  
    try {
      const response = await fetch(`http://localhost:8088/PetPosts/${updatedPetPost.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPetPost),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update pet post');
      }
  
      return await response.json(); // Assuming backend returns updated pet post data
    } catch (error) {
      console.error('Error updating pet post:', error);
      throw error; // Throw error for handling in the component
    }
  };
  






//DELETE A PETPOST FN: for owner view so they can delete 
export const deletePetPost=(petPostId)=>{
    return fetch(`http://localhost:8088/PetPosts/${petPostId}`,{ //note ${petPostId} instead of petPost.id
    method: "DELETE",
})
}

// //create petPost fn
// export const createPetPost=async (petPost)=>{
//     return fetch (`http://localhost:8088/PetPosts`, {
//         method: "POST",
//         headers: {
//             "Content-Type":" application/json",
//         },
//         body: JSON.stringify(petPost),
//         })
// }



// export const createPetPost = async (petPost) => {
//     try {
//         const response = await fetch(`http://localhost:8088/PetPosts`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json", // Remove extra space before "application/json"
//             },
//             body: JSON.stringify(petPost),
//         });

//         if (!response.ok) {
//             throw new Error('Failed to create pet post'); // Throw an error if response is not ok
//         }

//         const data = await response.json();
//         return data; // Return response data if successful
//     } catch (error) {
//         console.error('Error creating pet post:', error);
//         throw new Error('Failed to create pet post. Please try again.'); // Throw an error for failed requests
//     }
// };

// petPostService.js
const API_URL = 'http://localhost:8088'; // JSON Server URL

export const createPetPost = async (post) => {
    try {
        const response = await axios.post(`${API_URL}/petPosts`, post);
        return response.data;
    } catch (error) {
        throw error;
    }
};










export const createPetPhoto = async (image) => {
    try {
        const formData = new FormData()
        formData.append("image", image)
        const response = await axios.post('https://api.cloudinary.com/v1_1/df2gfnu5x/image/upload', {
            headers: {
                'Content-Type': 'multipart/form-data',
                body: image
            },
        })
    } catch (error) {
        console.error('Error creating pet post:', error);
        throw error;
    }
};




export const getPetPostById = (id) => {
    return fetch(`http://localhost:8088/PetPosts/${id}`).then((res) => res.json());
  };




