// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { NavigationBar } from "./components/nav/Nav";
// import { Welcome } from "./components/welcome/Welcome";
// import { Login } from "./components/auth/Login";
// import { Register } from "./components/auth/Register";
// import { PetPost } from "./components/petPosts/PetPost";
// import { PetDetails } from "./components/petPosts/PetDetails";
// import { OwnerDetails } from "./components/petPosts/OwnerDetails";
// import { MyProfile } from "./components/profile/MyProfile";
// import { Authorized } from "./components/views/Authorized";
// import { PostAPet } from "./components/petPosts/PostAPet";
// import { MyPosts } from "./components/petPosts/MyPosts";
// import { UpdateProfile } from "./components/profile/UpdateProfile";
// import { UpdateMyPost } from "./components/petPosts/UpdateMyPost";
// import 'bootstrap/dist/css/bootstrap.min.css';


// export const App = ({currentUser}) => {
//   return (
//     <>
//       <NavigationBar />
//       <Routes>
//         <Route path="/" element={<Welcome />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/availablePets" element={<PetPost />} />
//         <Route path="/petPosts/petDetails/:petPostId" element={<PetDetails />} />
//         {/* ONLY LOGGED-IN USERS can access OwnerDetails */}
//         <Route path="/petPosts/petDetails/:petPostId/ownerDetails" element={<Authorized><OwnerDetails /></Authorized>} />
//         <Route path="/myProfile" element={<Authorized><MyProfile currentUser={currentUser}/></Authorized>} />
//         <Route path="/updateProfile/:id" element={<Authorized><UpdateProfile currentUser={currentUser}/></Authorized>} />
//         <Route path="/postAPet" element={<Authorized><PostAPet currentUser={currentUser}/></Authorized>} />
//         <Route path="/myPosts" element={<Authorized><MyPosts currentUser={currentUser}/></Authorized>} />
//         <Route path="/updateMyPost/:petPostId" element={<Authorized><UpdateMyPost currentUser={currentUser}/></Authorized>} />
//       </Routes>
//     </>
//   );
// };



import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/nav/Nav";
import { Welcome } from "./components/welcome/Welcome";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { PetPost } from "./components/petPosts/PetPost";
import { PetDetails } from "./components/petPosts/PetDetails";
import { OwnerDetails } from "./components/petPosts/OwnerDetails";
import { MyProfile } from "./components/profile/MyProfile";
import { Authorized } from "./components/views/Authorized";
import { PostAPet } from "./components/petPosts/PostAPet";
import { MyPosts } from "./components/petPosts/MyPosts";
import { UpdateProfile } from "./components/profile/UpdateProfile";
import { UpdateMyPost } from "./components/petPosts/UpdateMyPost";
import 'bootstrap/dist/css/bootstrap.min.css';


export const App = ({currentUser}) => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/availablePets" element={<PetPost />} />
        <Route path="/availablePets/petDetails/:petPostId" element={<PetDetails currentUser={currentUser}/>} />
        {/* ONLY LOGGED-IN USERS can access OwnerDetails */}
        <Route path="/availablePets/petDetails/:petPostId/ownerDetails" element={<Authorized><OwnerDetails /></Authorized>} />
        <Route path="/myProfile" element={<Authorized><MyProfile currentUser={currentUser}/></Authorized>} />
        <Route path="/updateProfile/:id" element={<Authorized><UpdateProfile currentUser={currentUser}/></Authorized>} />
        <Route path="/postAPet" element={<Authorized><PostAPet currentUser={currentUser}/></Authorized>} />
        <Route path="/myPosts" element={<Authorized><MyPosts currentUser={currentUser}/></Authorized>} />
        <Route path="/updateMyPost/:petPostId" element={<Authorized><UpdateMyPost currentUser={currentUser}/></Authorized>} />
      </Routes>
    </>
  );
};
