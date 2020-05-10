import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig';

import './App.css';
import Navigation from '../../components/Navigation';
import Logo from '../../components/Logo';
import ImageLinkForm from '../../components/ImageLinkForm';
import FaceRecognition from '../../components/FaceRecognition';
import GithubCorner from '../../components/GithubCorner';

function App() {

    return (
        <div className="App flex flex-column w-90 center">
            <Particles
                style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
                params={particlesConfig}/>
            <GithubCorner/>
            <Navigation/>
            <Logo/>
            <ImageLinkForm/>
            <FaceRecognition/>
        </div>
    );
}

export default App;
