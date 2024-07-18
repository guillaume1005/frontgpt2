import React, { useState } from 'react';

const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [fileContent, setFileContent] = useState('');

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);

        const reader = new FileReader();
        reader.onload = (e) => {
            setFileContent(e.target.result);
        };
        reader.readAsText(uploadedFile);
    };

    return (
        <div>
            <input 
                type="file" 
                onChange={handleFileChange} 
            />
            {file && (
                <div>
                    <h3>File Name: {file.name}</h3>
                    <h4>File Content:</h4>
                    <pre>{fileContent}</pre>
                </div>
            )}
        </div>
    );
};

export default FileUploader;
