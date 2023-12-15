import React, {useState} from 'react';
import './App.css';
import Dropzone from './dropzone/dropzone';
import Alert from './alert/alert';

function App() {


  // let [isShown, setIsShown] = useState(false);
  // const handleClick = (event:any) => {
  //   // 👇️ toggle shown state
  //   setIsShown(current => !current);

  //   // 👇️ or simply set it to true
  //   // setIsShown(true);
  // };

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <h1>Web Deid</h1>
        </header>
      </div>
      <div className="App-main-content">
        <div><p>A great place to put DICOM files.</p></div>
        <div><Dropzone/></div>
        <div><Alert/></div>



      </div>

    </div>
  );
}

export default App;
