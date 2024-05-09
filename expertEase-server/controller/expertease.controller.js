import experteastCollection from '../model/expertease.model.js';


export  const getCourseDetails= async (req,res)=>{
    try {
        const getdata=await experteastCollection.find()
        res.status(200).json(getdata);
    } catch (error) {
        console.log("Error ",error);
        res.status(500).json(error);
    }
}


