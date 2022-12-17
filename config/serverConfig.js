require("dotenv").config();

const serverPORT = process.env.PORT;
const S3_BUCKET = process.env.S3_BUCKET;
const JWT_SECRET_KEY = process.env.SECRET_KEY;

module.exports = { PORT: serverPORT, JWT_SECRET_KEY, S3_BUCKET };
