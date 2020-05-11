import React from 'react';
import Tilt from 'react-tilt'
import LogoImage from '../../assets/images/logo.png';

const Logo = () => {

    return (
        <Tilt className="Tilt shadow-3 br2 pa2 bg-white"
              options={{ max: 25 }} style={{ height: 80, width: 80 }}>
            <div className="Tilt-inner">
                <img src={LogoImage} width="100%" alt="Codes and Tags Logo"/>
            </div>
        </Tilt>
    );
}

export default Logo;