// ImageUpload.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/styles.css';
import Recproducts from './components/recproducts/Recproducts';
import bannerImage from '../src/components/Assets/banner/png-image.png';
import sampleVideo from './components/Assets/banner/demo.mp4'
import think from './components/Assets/banner/Thinking-avatar.png'

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [uploadComplete, setUploadComplete] = useState(false); // State to track upload completion

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setSelectedImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPredictionResult(response.data);
      setError(null);
      setUploadComplete(true);
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Error predicting image. Please try again.');
      setPredictionResult(null);
      console.log('Error response:', error.response);
    }
  };

  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <div className="bannerText">
          <h1>Welcome to Our CropCare</h1>
          <p>Upload your plant leaf picture and know your plant Health.</p>
        </div>
        <img src={bannerImage} alt="Banner" className="bannerImage" />
      </div>

      <div className="infocontainer">
        <h1>CropCare: Identifying Plant Diseases Through Image Processing</h1>
        <p>CropCare revolutionizes agriculture by leveraging image processing to identify plant diseases. Our platform uses advanced algorithms and ML models to analyze leaf images and diagnose diseases accurately. Early detection empowers farmers to minimize losses and maximize yields. CropCare provides real-time insights and personalized recommendations for sustainable crop management.</p>
      </div>
      {/* Video */}
      <div className="videosection">
        <div className="videoContainer">
          <video controls>
            <source src={sampleVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="instructions">
          <h1> Instructions </h1>
          <p>1.Choose a File</p>
          <p>2.Click Upload</p>
          <p>3.Get the Result</p>
          <img src={think}  alt="Thinking Emoji" className='think'></img>
        </div>
      </div>

      <div className="container">
        <div className="uploadContainer">
          <input type="file" onChange={handleFileChange} style={{ marginBottom: '10px' }} />
          <button onClick={handleUpload} className="uploadButton">
            Upload
          </button>
          <div className="selectedImageContainer">
            {selectedImageUrl && (
              <img src={selectedImageUrl} alt="Selected" className="selectedImage" />
            )}
          </div>
        </div>
        {predictionResult && (
          <div className="resultContainer">
            <h2>Prediction Result:</h2>
            <p><strong>Class:</strong> {predictionResult.class}</p>
            <p><strong>Confidence:</strong> {predictionResult.confidence}</p>
            {predictionResult.disease_info && (
              <div>
                <h3>Disease Information:</h3>
                <p>
                  <strong>Crop Type: </strong>{predictionResult.disease_info.CropType}
                </p>
                <p>
                  <strong>Symptoms:</strong>{predictionResult.disease_info.symptoms}

                </p>
                <p><strong>Treatment:</strong> {predictionResult.disease_info.info}</p>
                <Link to="/disease">
                  <button className='preductionbutton'>Full Info</button>
                </Link>

              </div>
            )}
          </div>
        )}

        {error && <p className="errorText">{error}</p>}
      </div>
      {uploadComplete && <Recproducts />}



    </div>
  );
};

export default ImageUpload;
