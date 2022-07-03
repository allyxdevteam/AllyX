const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');


CLOUD_NAME = process.env.CLOUD_NAME;
API_KEY = process.env.API_KEY;
API_SECRET = process.env.API_SECRET;


cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "DEV",
    },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
    return res.json({ message: "Hello World 🇵🇹 🙌" });
});



router.post("/", upload.single("file"), async (req, res) => {
    return res.json({ picture: req.file.path });
});





module.exports = router;
