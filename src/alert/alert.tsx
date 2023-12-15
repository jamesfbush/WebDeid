import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import '../App.css'


export default function Alert() {

    // alert shown state
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
            {/* Alert messgae shown on click */}
            {isShown && (
            <div className="alertContainer">
                <div className="alertHeader">A friendly alert!</div>
                <div className="alertBody">
                    <div>
                        <p> One thing to know about alerts: there is, 
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
                    <div className="alertButtonContainer">
                        <button className="alertButton" onClick={handleSelectYes}>Yes</button>
                        <span> </span>
                        <button className="alertButton" onClick={handleToggleShown}>No</button>
                    </div>
                </div>
            </div>
            )}
            {/* Toggle button */}
            <button className="alertButton" onClick={handleToggleShown}>Toggle Alert</button>
        </div>
    )

        
    }