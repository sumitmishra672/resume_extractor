function validateFileType() {
    var selectedFile = document.getElementById('fileInput').files[0];
    var allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    if (!allowedTypes.includes(selectedFile.type)) {
       alert('Invalid file type. Please upload a PDF or DOCX file.');
       document.getElementById('fileInput').value = '';
    }
 }