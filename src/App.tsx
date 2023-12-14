import React from 'react';
import './App.css';
import Dropzone from './dropzone/dropzone';

function App() {
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
      </div>

    </div>
  );
}

export default App;
