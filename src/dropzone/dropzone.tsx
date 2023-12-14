import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import '../App.css'

import { parseDicom } from 'dicom-parser'

function Dropzone() {
  // TODO clean this up / better declarations 
  let setDataset: any
  let dataSet: any
  let fileName: string
  let setFilename: any
  [dataSet, setDataset] = useState([]);
  [fileName, setFilename] = useState("");

  const onDrop = useCallback((acceptedFiles : any) => {
    acceptedFiles.forEach((file : any) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = (file) => {
      // Parse file contents
        var arrayBuffer = reader.result;
        var byteArray = new Uint8Array(arrayBuffer as any);

        // TODO validate is dicom file right here
        setDataset(parseDicom(byteArray));

      }
      reader.readAsArrayBuffer(file)
      setFilename(file.name)
    })
    
  }, [])
  const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  // using accetpedFiles above and this bit was from: 
  // https://react-dropzone.js.org/#section-basic-example

  // TODO clean up this logic
  let vals: any
  dataSet.elements ? vals = Object.keys(dataSet.elements).map((key : any)=> (
      <tr key={key}>
        <td>{key}</td>
        <td>{dataSet.string(key)}</td>
      </tr> 
    )) : vals = [];
  
  return (
    // TODO split the dropzone and the table into separate components
    // dropzone
    <div className="dropzoneContainer">
    <div className="dropzone" {...getRootProps()}>
      <div>      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag and drop files here, or click to select files</p>
      }
      <input {...getInputProps()} />
      </div>
    </div>
    {/* container */}
    <div className="dicomDataTableContainer">
      <p>{fileName}</p>
      {dataSet.elements &&       
      <table>
        <thead>
           <tr>
             <th>Tag</th>
             <th>Value</th>
           </tr>
          </thead>
          <tbody>
            {vals}
          </tbody>
        </table> }

      </div>   
    </div>   
  )
}

export default Dropzone;