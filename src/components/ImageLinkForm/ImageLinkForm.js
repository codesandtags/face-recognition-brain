import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {

    return (
        <div className="w-100 w-100-m w-50-ns center">
            <p className="f4 f4-m f3-ns">This magic app will detect faces in your pictures. Git it a try.</p>
            <div className="form flex pa2">
                <input
                    type="text"
                    className="w-100 w-70-ns f4 pa2"
                    onChange={onInputChange}
                    autoFocus
                />
                <button
                    className="w-50 center-ns w-30-ns grow link dib ph3 pv2 white bg-light-purple f5 f5-m f4-ns"
                    onClick={onButtonSubmit}
                >
                    Detect
                </button>
            </div>
        </div>
    );
}

export default ImageLinkForm;