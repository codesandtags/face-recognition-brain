import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig';

import './App.css';
import Navigation from '../../components/Navigation';
import GithubCorner from '../../components/GithubCorner';
import SignIn from '../../components/SignIn';
import ImageLinkForm from '../../components/ImageLinkForm';
import FaceRecognition from '../../components/FaceRecognition';
import Logo from '../../components/Logo';
// Clarifai
import Clarifai, { FACE_DETECT_MODEL } from 'clarifai';

const app = new Clarifai.App({
    apiKey: 'bcd464420d0943eeafb026655ee507c3'
});

function App() {
    // States
    const [inputValue, setInputValue] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [boundingBox, setBoundingBox] = useState({});
    const [route, setRoute] = useState('sign-in');

    // Handle Events
    const onInputChange = (event) => {
        console.log('Input', event.target.value);
        setInputValue(event.target.value);
    };
    const performFaceRecognition = () => {
        if (imageUrl) {
            app.models.predict(FACE_DETECT_MODEL, imageUrl)
                .then((response) => {
                    // do something with response
                    // calculateFaceLocation(response);
                    displayFaceBox(calculateFaceLocation(response));
                })
                .catch((error) => {
                    debugger;
                    // there was an error
                });
        }
    };

    useEffect(() => {
        performFaceRecognition();
    }, [imageUrl]);


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
    }

    const onRoutChange = (route) => {
        setRoute(route);
    };

    const signInPage = <SignIn onRoutChange={onRoutChange}/>;
    const homePage = (<main>
            <Navigation onRoutChange={onRoutChange}/>
            <Logo/>
            <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
            <FaceRecognition boundingBox={boundingBox} imageUrl={imageUrl}/>
        </main>
    );

    return (
        <div className="App flex flex-column w-90 center">
            <Particles
                style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
                params={particlesConfig}/>
            <GithubCorner url="https://github.com/codesandtags/face-recognition-brain"/>

            {route === 'sign-in' ? signInPage : homePage}
        </div>
    );
}

export default App;
