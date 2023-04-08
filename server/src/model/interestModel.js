import mongoose from "mongoose";
const  objectId = mongoose.Schema.Types.ObjectId;
const interestSchema = mongoose.Schema({
  userId: { type: objectId ,require:true},
  interest: [{
    type: String,
    enum: ["App-Development","Web-Development","Game-Development","Data-Structure","Programming","Machine-learning","Data-Science","others"]
  }]
});

const postUser = mongoose.model("interest", interestSchema);

export default postUser;
