import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { getAllPetPosts } from '../../services/petPostService';
import './PetDetails.css';

export const PetDetails = ({ currentUser }) => {
  const { petPostId } = useParams();
  const navigate = useNavigate();
  const [petDetails, setPetDetails] = useState(null);

  useEffect(() => {
    fetchPetPostDetails();
  }, [petPostId]);

  // get and set:
  const fetchPetPostDetails = async () => {
    const petPostArray = await getAllPetPosts();
    const petPostObject = petPostArray.find(petPost => petPost.id.toString() === petPostId);
    // make sure photo path is absolute
    if (petPostObject) {
      petPostObject.photo = petPostObject.photo.replace('./', '/');
    }
    setPetDetails(petPostObject);
    //console.log(petPostObject); // just checking
  };

  // const handleContactOwner = () => {
  //   if (currentUser) {
  //     navigate(`/availablePets/petDetails/${petPostId}/ownerDetails`);
  //   } else {
  //     navigate('/login');
  //   }
  // };---------done this through App <Authorized></Authorized>

  if (!petDetails) return <div>Loading...</div>;

  return (
    <div className='main-container'>
      <div className="petDetails-container">
        <section className="pet-Details-Post">
          {/* <h2>{petDetails.name}'s Details</h2> */}
          <div key={petDetails.id} className="pet-details-card">
          <h2>{petDetails.name}'s Details</h2>
            <div className="photo-and-info">
              <div>
                <img src={petDetails.photo} alt={petDetails.name} className="pet-details-photo" />
              </div>
              <div className='info'>
                <div className="petDetails-info"><strong>Age:</strong> {petDetails.age} {petDetails.ageUnit}</div>
                <div className="petDetails-info"><strong>Species:</strong> {petDetails.species}</div>
                <div className="petDetails-info"><strong>Breed:</strong> {petDetails.breed}</div>
                <div className="petDetails-info"><strong>Medical Condition:</strong> {petDetails.medicalCondition}</div>
                <div className="petDetails-info"><strong>Behavioral Issues:</strong> {petDetails.behavioralIssues}</div>
                <div className="petDetails-info"><strong>Reason For Rehoming:</strong> {petDetails.reasonForRehoming}</div>
              </div>
            </div>
            <div className='button-group'>
              <Button variant="warning" onClick={() => navigate(`/availablePets/petDetails/${petPostId}/ownerDetails`)} style={{ backgroundColor: '#8ABF8A', borderColor: '#A6415D' }}>Contact Owner</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PetDetails;
