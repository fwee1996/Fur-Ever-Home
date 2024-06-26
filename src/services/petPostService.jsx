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


export const updatePetPost = (petPost) => {
    return fetch(`http://localhost:8088/PetPosts/${petPost.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(petPost),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error updating pet post:', error);
        throw error; // rethrowing the error so caller can handle it
    });
}


//DELETE A PETPOST FN: for owner view so they can delete 
export const deletePetPost=(petPostId)=>{
    return fetch(`http://localhost:8088/PetPosts/${petPostId}`,{ //note ${petPostId} instead of petPost.id
    method: "DELETE",
})
}

// //create petPost fn
export const createPetPost=async (petPost)=>{
    return fetch (`http://localhost:8088/PetPosts`, {
        method: "POST",
        headers: {
            "Content-Type":" application/json",
        },
        body: JSON.stringify(petPost),
        })
}


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




