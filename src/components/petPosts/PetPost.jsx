import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllPetPosts } from '../../services/petPostService';
import './PetPosts.css';

export const PetPost = () => {
    const [petPosts, setPetPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedAgeRange, setSelectedAgeRange] = useState("0");
    const [selectedSpecies, setSelectedSpecies] = useState("0");
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20); // Number of posts per page
    const [scrollPosition, setScrollPosition] = useState(0); // To store scroll position
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllPetPosts();

        // Retrieve and set currentPage from local storage
        const storedPage = localStorage.getItem('currentPage');
        const initialPage = storedPage ? parseInt(storedPage) : 1;
        setCurrentPage(initialPage);

        // Retrieve and set scroll position from local storage
        const storedScrollPosition = localStorage.getItem('scrollPosition');
        if (storedScrollPosition) {
            setScrollPosition(parseInt(storedScrollPosition));
        }

        // Clean up local storage after using it
        localStorage.removeItem('currentPage');
        localStorage.removeItem('scrollPosition');
    }, [currentPage, selectedAgeRange, selectedSpecies, searchTerm]);

    const fetchAllPetPosts = async () => {
        try {
            const petPostArray = await getAllPetPosts();

            // Sort pet posts by timestamp in descending order
            const sortedPosts = petPostArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

            // Apply filters and search term
            let updatedPosts = sortedPosts;
            updatedPosts = applySpeciesFilter(updatedPosts);
            updatedPosts = applyAgeFilter(updatedPosts);
            updatedPosts = applySearchFilter(updatedPosts);

            setPetPosts(sortedPosts);
            setFilteredPosts(updatedPosts);
        } catch (error) {
            console.error('Error fetching pet posts:', error);
            alert('Failed to fetch pet posts. Please try again.');
        }
    };

    const applySpeciesFilter = (posts) => {
        if (selectedSpecies === "0") return posts; // All species selected
        return posts.filter(post => {
            if (selectedSpecies === "3") {
                return post.species.toLowerCase() !== "dog" && post.species.toLowerCase() !== "cat";
            } else {
                return post.species.toLowerCase() === mapSpeciesFilter(selectedSpecies).toLowerCase();
            }
        });
    };

    // Function to map species filter option to corresponding string
    const mapSpeciesFilter = (selectedSpeciesOption) => {
        switch (selectedSpeciesOption) {
            case "1":
                return "dog";
            case "2":
                return "cat";
            case "3":
                return "others";
            default:
                return "";
        }
    };

    const applyAgeFilter = (posts) => {
        switch (selectedAgeRange) {
            case "1":
                return posts.filter(post => {
                    if (post.ageUnit === "years") {
                        return parseInt(post.age) <= 1;
                    } else {
                        return true;
                    }
                });
            case "2":
                return posts.filter(post => {
                    if (post.ageUnit === "years") {
                        return parseInt(post.age) >= 2 && parseInt(post.age) <= 9;
                    } else {
                        return false;
                    }
                });
            case "3":
                return posts.filter(post => {
                    if (post.ageUnit === "years") {
                        return parseInt(post.age) >= 10;
                    } else {
                        return false;
                    }
                });
            default:
                return posts;
        }
    };

    const applySearchFilter = (posts) => {
        if (searchTerm.trim() === "") return posts; // No search term
        return posts.filter(post =>
            post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.medicalCondition.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.behavioralIssues.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.reasonForRehoming.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);

        // Scroll to the stored position
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });

        // Store current page and scroll position in local storage
        localStorage.setItem('currentPage', pageNumber.toString());
        localStorage.setItem('scrollPosition', scrollPosition.toString());
    };

    // Handle click on pet card to navigate to petDetails
    const navigateToPetDetails = (postId) => {
        // Store current page and scroll position in local storage
        localStorage.setItem('currentPage', currentPage.toString());
        localStorage.setItem('scrollPosition', window.pageYOffset.toString());
        navigate(`/availablePets/petDetails/${postId}`);
    };

    // Calculate current posts for pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="petPosts-container">
            <h2>Available Pets</h2>
            <div className="filter">
                <select name="species" id="species" onChange={(e) => setSelectedSpecies(e.target.value)}>
                    <option value="0">All Species</option>
                    <option value="1">Dogs</option>
                    <option value="2">Cats</option>
                    <option value="3">Others</option>
                </select>
                <select name="age" id="age" onChange={(e) => setSelectedAgeRange(e.target.value)}>
                    <option value="0">All Ages</option>
                    <option value="1">0-1 Years</option>
                    <option value="2">2-9 Years</option>
                    <option value="3">10+ Years</option>
                </select>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <section className="pet-post">
                {currentPosts.length === 0 ? (
                    <p>No posts found :(</p>
                ) : (
                    currentPosts.map(petPost => (
                        <div key={petPost.id} className="pet-card">
                            <header className="petPost-header">{petPost.name}</header>
                            <div>
                                <img
                                    src={petPost.photo}
                                    alt={petPost.name}
                                    className="pet-photo"
                                    onClick={() => navigateToPetDetails(petPost.id)}
                                />
                            </div>
                        </div>
                    ))
                )}
            </section>
            {/* Pagination */}
            <ul className="pagination">
                {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }, (_, i) => (
                    <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                        <button onClick={() => handlePageChange(i + 1)} className="page-link">
                            {i + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PetPost;
