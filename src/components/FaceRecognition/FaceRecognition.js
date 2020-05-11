import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boundingBox }) => {
    const hasImage = imageUrl && imageUrl.length > 0;
    const image = !hasImage
        ? <p> There is not image yet!</p>
        : <img
            className="face-recognition__image"
            width="80%"
            src={imageUrl}
            alt="Face Recognition result"/>;
    const getStyleBox = () => {
        return {
            top: boundingBox.topRow,
            right: boundingBox.rightCol,
            bottom: boundingBox.bottomRow,
            left: boundingBox.leftCol,
        }
    };

    return (
        <div className="mt3 mb4 center pa2 br2 shadow-3 face-recognition">
            {image}
            <div className='bounding-box' style={getStyleBox()}></div>
        </div>
    );
}

export default FaceRecognition;