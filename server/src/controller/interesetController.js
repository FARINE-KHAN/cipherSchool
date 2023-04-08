import model from "../model/interestModel.js";
export const createInterest = async (req, res) => {
  try {
    console.log(req.body)
    let size1 = [
      "App-Development",
      "Web-Development",
      "Game-Development",
      "Data-Structure",
      "Programming",
      "Machine-learning",
      "Data-Science",
      "others"
    ];
    let size2 = req.body.interest.split(",").map((x) => x.trim());
    console.log(size2)
    req.body.interest = size2

  let saveData = await model.create(req.body)
  return res.status(201).json(saveData)

  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const fetchInterest = async (req,res)=>{
  try {
    let interests= await model.findById(req.params.id)
    return res.status(200).json(interests)
  } catch (error) {
    res.status(500).json(error.message);
  }
}
 export const updateInterest = async(req,res)=>{
try {
  let updateInt = await model.findByIdAndUpdate(req.params.id,req.body)
  return res.status(200).json(updateInt)
  
} catch (error) {
  res.status(500).json(error.message);

}
 }