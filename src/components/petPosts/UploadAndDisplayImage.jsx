import { useState } from 'react';

const UploadAndDisplayImage = ({ onImageSelect }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <h1>Upload and Display Image</h1>
            <h3>using React Hooks</h3>

            {selectedImage && (
                <div>
                    <img
                        alt="not found"
                        width={"250px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br /> <br />
                    <button onClick={() => {
                        setSelectedImage(null);
                        onImageSelect(null);
                    }}>Remove</button>
                </div>
            )}

            <br />

            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    const file = event.target.files[0];
                    setSelectedImage(file);
                    onImageSelect(file);
                }}
            />
        </div>
    );
};

export default UploadAndDisplayImage;
