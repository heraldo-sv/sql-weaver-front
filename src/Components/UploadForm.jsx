import React, { useState } from 'react';
 
function UploadForm() {
    const [files, setFiles] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [sprintHU, setSprintHU] = useState('');
 
    const handleFileChange = (event) => {
        setFiles(event.target.files);
    };
 
    const handleProjectNameChange = (event) => {
        setProjectName(event.target.value);
    };
 
    const handleSprintHUChange = (event) => {
        setSprintHU(event.target.value);
    };
 
    const handleSubmit = (event) => {
        event.preventDefault();
 
        const formData = new FormData();
        for (const file of files) {
            formData.append('files', file);
        }
        formData.append('projectName', projectName);
        formData.append('sprintHU', sprintHU);
 
        // Aquí deberías enviar los datos a tu backend o Azure Function
        console.log('Enviando form:', formData);
 
        // Reset form
        setFiles([]);
        setProjectName('');
        setSprintHU('');
    };
 
    return (
        <div className="mt-5">
            <h1 className="text-center mb-4">Preparar Migrations</h1>
            <form onSubmit={handleSubmit} className="card card-body">
                <div className="mb-3">                                      
                    <input
                    placeholder="Nombre del proyecto"
                        type="text"
                        id="projectName"
                        className="form-control"
                        value={projectName}
                        onChange={handleProjectNameChange}
                        required
                    />
                </div>
                <div className="mb-3">                    
                    <input
                        placeholder="Sprint y HU"
                        type="text"
                        id="sprintHU"
                        className="form-control"
                        value={sprintHU}
                        onChange={handleSprintHUChange}
                        required
                    />
                </div>
                <div className="mb-3">                    
                    <input
                        type="file"
                        id="sqlFiles"
                        className="form-control"
                        multiple
                        onChange={handleFileChange}
                        accept=".sql"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Subir y Procesar</button>
            </form>
        </div>
    );
}
 
export default UploadForm;