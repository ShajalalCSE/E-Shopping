import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import {fileURLToPath} from 'url';

//configure env
dotenv.config();
// dotenv.config({path:'/pathname'}) // jodi env file ta onno folder a hoy tkhn evabe korte hbe

//databse config

connectDB();

//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./frontend/build")));

//Routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
// app.get("/", (req, res) => {
//   res.send("<h1>'welcome'</h1>");
// });
app.use('*',function(req,res){
  res.sendFile(path.join(__dirname, './frontend/build/index.html'))
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.bgCyan.white);
});
