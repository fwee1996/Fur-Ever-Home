import React, { useEffect, useState } from 'react';
import { getAllPetPosts, deletePetPost } from '../../services/petPostService';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./MyPosts.css"

export const MyPosts = ({ currentUser }) => {
    const navigate = useNavigate(); 
    const [myPosts, setMyPosts] = useState([]); // state for user's posts

    useEffect(() => {
        const fetchAndSortPosts = async () => {
                const petPostsArray = await getAllPetPosts();

                // filter posts by current user's ID
                const userPosts = petPostsArray.filter(post => post.ownerId === currentUser.id);

                // sort userPosts by timestamp in descending order
                const sortedUserPosts= userPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                console.log(sortedUserPosts)
                setMyPosts(sortedUserPosts)
        };

        fetchAndSortPosts();
    }, [currentUser.id]); // fetch posts whenever currentUser.id changes

    // Handle post deletion
    const handleDelete = async (postToDelete) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete the pet post for ${postToDelete.name}?`);
        if (confirmDelete) {
            try {
                await deletePetPost(postToDelete.id); // Delete the post

                // Update state after deletion
                setMyPosts(prevPosts =>
                    prevPosts.filter(petPost => petPost.id !== postToDelete.id)
                );
                alert('Pet post deleted successfully.');
            } catch (error) {
                console.error('Failed to delete pet post:', error);
                alert('Failed to delete pet post.');
            }
        }
    };

    return (
        <>
            <h2 className='header'>My Posts</h2>
            <div className="article-lists-container">
                <div className="article-list-container">
                    <article className="article">
                        {myPosts.length > 0 ? myPosts.map((post) => (
                            <div className="article-list-item" key={post.id}>
                                <h2 className='pet-name'>{post.name}</h2>
                                <div className='photo-and-info'>
                                <img className="photo" src={post.photo} alt={post.name} />
                                <div className='info'>
                                <p>Age: {post.age} {post.ageUnit}</p>
                                <p>Species: {post.species}</p>
                                <p>Breed: {post.breed}</p>
                                <p>Medical Condition: {post.medicalCondition}</p>
                                <p>Behavioral Issues: {post.behavioralIssues}</p>
                                <p>Reason for Rehoming: {post.reasonForRehoming}</p>
                                <p><small>Posted on: {new Date(post.timestamp).toLocaleDateString()}</small></p> {/* Fixed typo in timestamp */}
                                <div className='button-group'>
                                <Button variant="warning" onClick={() => navigate(`/updateMyPost/${post.id}`)}>Modify</Button>
                                <Button variant="success" onClick={() => handleDelete(post)}>Delete</Button>
                                </div>
                                </div>
                                </div>
                            </div>
                            
                        )) : <p>No posts found</p>}
                    </article>
                </div>
            </div>
        </>
    );
};

export default MyPosts;
