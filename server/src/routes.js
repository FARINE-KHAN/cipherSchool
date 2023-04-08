import express  from "express";
import {registerUser,login,passwordUpdate,updateProfile} from "./controller/userController.js";
import {createInterest, fetchInterest, updateInterest} from "./controller/interesetController.js"
const router = express.Router()
import multer from"multer";

// img storage path
const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`${Date.now()}-${file.originalname}`)
    }
})


// img filter
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("only images is allowd"))
    }
}

const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
});

router.post("/register",registerUser)
router.post("/login",login)
router.put("/updatePassword/:user",passwordUpdate)
router.put("/profileUpdate/:user",upload.single("image"),updateProfile)
router.post("/interest",createInterest)
router.get("/getInterest/:id",fetchInterest)
router.put("/updateInterest/:id",updateInterest)



export default router;