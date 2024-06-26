export const getAllOwners=()=>{
    return fetch(`http://localhost:8088/PetPosts?_embed=ownersPets&_embed=owners
    `).then((res)=>res.json())//get a response, make it readable //embed part get info on ownerOwners
}



// export const getEmployeeTicketsByUserId=(userId)=>{
//     return fetch(`http://localhost:8088/employeeTickets?employeeId=${userId}&_expand=employee`).then ((res)=>res.json())}

//     export const updateEmployee=(employee)=>{
//     return fetch (`http://localhost:8088/employees/${employee.id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type":" application/json",
//         },
//         body: JSON.stringify(employee),
//         })
// }

export const getPetPostsByUserId=(userId)=>{
    return fetch(`http://localhost:8088/petPosts?employeeId=${userId}&_expand=employee`).then ((res)=>res.json())}

    export const updateEmployee=(employee)=>{
    return fetch (`http://localhost:8088/employees/${employee.id}`, {
        method: "PUT",
        headers: {
            "Content-Type":" application/json",
        },
        body: JSON.stringify(employee),
        })
}