require("dotenv").config();

const serverPORT = process.env.PORT;
const S3_BUCKET = process.env.S3_BUCKET;
const SECRET_KEY = process.env.SECRET_KEY;

module.exports = { PORT: serverPORT, SECRET_KEY, S3_BUCKET };
