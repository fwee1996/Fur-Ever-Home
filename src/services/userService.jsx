export const getNonOwnerUsers =()=>{
    return fetch(`http://localhost:8088/users?isOwner=false`).then ((res)=>res.json())
}

export const getOwnerUsers =()=>{
    return fetch(`http://localhost:8088/users?isOwner=true`).then ((res)=>res.json())
}


export const getUserByEmail =(email)=>{
    return fetch(`http://localhost:8088/users?email=${email}`).then ((res)=>res.json())
}


export const createUser =(adopter)=>{
    return fetch("http://localhost:8088/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(adopter),
    }).then ((res)=>res.json())
}


//my profile services: getUserById, updateUserProfile, deleteUserProfile
export const getUserById = (userId) => {
    return fetch(`http://localhost:8088/users`) ///${userId}
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching user by id:', error);
        throw error;
      });
  };
  
  
  export const updateUserProfile = (userProfile) => {
    return fetch(`http://localhost:8088/users/${userProfile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userProfile),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  };
  
  export const deleteUserProfile = (userId) => {
    return fetch(`http://localhost:8088/users/${userId}`, {
      method: "DELETE",
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    });
  };
  

  export const getAllUsers =()=>{
    return fetch(`http://localhost:8088/users`).then ((res)=>res.json())
}
