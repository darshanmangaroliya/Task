import express from "express";
import  Mongoose  from "mongoose";
import userRoutes from "./Routes/userRoutes.js";
import passwordResetRoutes from "./Routes/PasswordReset.js"

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
Mongoose.connect("mongodb+srv://darshan:darshan@cluster0.vu2ec.mongodb.net/user?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/users', userRoutes);
app.use("/api/password-reset", passwordResetRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
  
app.listen(5000, () => {
  console.log(`Serve at http://localhost:5000`);
});

