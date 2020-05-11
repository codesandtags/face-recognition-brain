import React, { useState } from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig';

import './App.css';
import Navigation from '../../components/Navigation';
import Logo from '../../components/Logo';
import ImageLinkForm from '../../components/ImageLinkForm';
import FaceRecognition from '../../components/FaceRecognition';
import GithubCorner from '../../components/GithubCorner';
// Clarifai
import Clarifai, { FACE_DETECT_MODEL } from 'clarifai';
import { responseSuccess } from './clarifaiMock';

const app = new Clarifai.App({
    apiKey: 'bcd464420d0943eeafb026655ee507c3'
});

function App() {
    const [inputValue, setInputValue] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [boundingBox, setBoundingBox] = useState({});
    const onInputChange = (event) => {
        console.log('Input', event.target.value);
        setInputValue(event.target.value);
    };
    const performFaceRecognition = () => {
        app.models.predict(FACE_DETECT_MODEL, inputValue)
            .then((response) => {
                // do something with response
                // calculateFaceLocation(response);
                displayFaceBox(calculateFaceLocation(response));
            })
            .catch((error) => {
                debugger;
                // there was an error
            });
    };
    const calculateFaceLocation = (data) => {
        if (!data.outputs || data.outputs.length === 0) return {};

        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.querySelector('.face-recognition__image');
        const widthImage = Number(image.width);
        const heightImage = Number(image.height);

        return {
            leftCol: clarifaiFace.left_col * widthImage,
            topRow: clarifaiFace.top_row * heightImage,
            rightCol: widthImage - (clarifaiFace.right_col * widthImage),
            bottomRow: heightImage - (clarifaiFace.bottom_row * heightImage)
        }
    }
    const displayFaceBox = (box) => {
        setBoundingBox(box);
    }

    const onButtonSubmit = () => {
        setImageUrl(inputValue);
        console.log('Click button to send the image : ', inputValue);
        setTimeout(performFaceRecognition, 100);
    }

    return (
        <div className="App flex flex-column w-90 center">
            <Particles
                style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
                params={particlesConfig}/>
            <GithubCorner/>
            <Navigation/>
            <Logo/>
            <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
            <FaceRecognition boundingBox={boundingBox} imageUrl={imageUrl}/>
        </div>
    );
}

export default App;
