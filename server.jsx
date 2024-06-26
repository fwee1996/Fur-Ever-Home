const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();

// Ensure the uploads directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.use(express.json());

app.post('/api/upload', upload.single('photo'), (req, res) => {
    console.log("File received:", req.file);
    console.log("Body:", req.body);

    if (!req.file) {
        return res.status(400).send('No files were uploaded.');
    }

    const filePath = req.file.path;
    console.log("File saved at:", filePath);

    res.send(filePath);
});

const PORT = 5197; // Ensure the port is correctly set
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

