import React, { useState, useEffect } from 'react';
import imageService from '../appwrite/img_service'; // Adjust the path as necessary

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadedImageId, setUploadedImageId] = useState('');
    const [uploadedImageUrl, setUploadedImageUrl] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const fileInput = e.target.elements.file;
        const file = fileInput.files[0];

        if (!file) return;

        try {
            const response = await imageService.uploadImage(file);
            if (response) {
                setUploadedImageId(response.$id);
               
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    useEffect(() => {
        const fetchImagePreview = async () => {
            if (uploadedImageId) {
                const previewUrl = imageService.getImagePreview(uploadedImageId);
                setUploadedImageUrl(previewUrl);
            }
        };

        fetchImagePreview();
    }, [uploadedImageId]);

    return (
        <div className="max-w-lg mx-auto p-4">

            <h2 className="text-2xl font-semibold mb-4">Upload and Preview Image</h2>
            <form onSubmit={handleUpload} className="flex flex-col">
                <input
                    type="file"
                    name="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mb-4 border border-gray-300 rounded p-2"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition"
                >
                    Upload
                </button>
            </form>
            {selectedImage && (
                <div className="mt-4">
                    <h3 className="text-lg font-medium">Preview:</h3>
                    <img src={selectedImage} alt="Preview" className="mt-2 w-full h-auto rounded shadow" />
                </div>
            )}
            {uploadedImageUrl && (
                <div className="mt-4">
                    <h3 className="text-lg font-medium">Uploaded Image:</h3>
                    <img
                        src={uploadedImageUrl}
                        alt="Uploaded"
                        className="mt-2 w-full h-auto rounded shadow"
                    />
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
