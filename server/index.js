const express = require("express");
const http = require("http");
const connectdb = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();
const userRouter = require("./routes/userRoutes");

const { notFound, errorHandler } = require("./middleware/errorHandling");

const app = express();
const httpServer = http.createServer(app);

app.use(express.json());

// Fixed CORS configuration
app.use(
  cors({
    origin: ["http://localhost:5173","http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization" , "x-new-access-token" , "x-refresh-token"]
  })
);

app.use(cookieParser());

connectdb();

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is working");
});


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

httpServer.listen(PORT, () => {
  console.log(`Your server is running on http://localhost:${PORT}`);
});