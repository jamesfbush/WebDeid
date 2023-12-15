import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import '../App.css'


export default function Success() {

    // Success shown state
    let [isShown, setIsShown] = useState(false);
    let [isYes, setIsYes] = useState(false);

    const handleToggleShown = (event:any) => {
        // don't persist a yes selection
        if (isYes){setIsYes(false)}
        // toggle shown state
        setIsShown(current => !current);
    };

    const handleSelectYes = (event:any) => {
        // toggle shown state
        setIsYes(current => !current);
      };

    return (
        <div>
            {/* Success messgae shown on click */}
            {isShown && (
            <div className="successContainer">
                <div className="successHeader">A friendly Success!</div>
                <div className="successBody">
                    <div>
                        <p> One thing to know about Successs: there is, 
                            essentially, a choice between "Yes" and "No"
                            when it comes to whether you want to see them.
                        </p>
                        <p>
                            Choose wisely.
                        </p>
                        {isYes && (
                            <p><b>Yes:</b> Excellent choice.</p>
                            )
                        }
                    </div>
                    <div className="successButtonContainer">
                        <button className="successButton" onClick={handleSelectYes}>Yes</button>
                        <span> </span>
                        <button className="successButton" onClick={handleToggleShown}>No</button>
                    </div>
                </div>
            </div>
            )}
            {/* Toggle button */}
            <button className="successButton" onClick={handleToggleShown}>Toggle Success</button>
        </div>
    )

        
    }