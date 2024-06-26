import"../nav/NavBar.css"
import "./Welcome.css"

export const Welcome = () =>{
 return (
 
 <div className="welcome-page">
    <div className="welcome-container">
<h1>Welcome to</h1>
<img src="./images/Logo1.png" alt="Fur-Ever-Home" />
<h3>giving pets a second chance to find their <br/> fur-ever-home</h3>
{/* <img src="./images/welcome1.png" alt="welcome" /> */}
 </div>

 <div className="we-get-it-container">
<h3>We get it—sometimes, life happens, and you need to find a new home for your pets...</h3>
<img src="./images/welcome1.png" alt="welcome" />
</div>
<div className="about-container">
<h2>About Us</h2>
<h4>Welcome to our platform, a compassionate community dedicated to helping pet owners and their beloved animals. We understand that life can present unexpected challenges, making it difficult to care for your pets. Whether it’s behavioral issues, health problems, or major life changes like moving or financial difficulties, our goal is to provide a supportive alternative. By connecting you with experienced adopters, we strive to ensure that every pet finds a loving and understanding home.</h4>

<h2>Our Mission</h2>
<h4>
At our core, we aim to offer a compassionate alternative for pet owners facing challenges with their animals. We know the struggles of dealing with a dog that isn’t house-trained or a cat with unpredictable behavior. Instead of resorting to shelters, our mission is to connect you with experienced adopters who are ready to help. We’re here to support you through any life changes, ensuring that every pet finds a loving home, no matter the circumstances.
</h4>
 </div>
 </div>


 )
}