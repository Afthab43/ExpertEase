import userCollections from '../model/user.model.js'
import bcryptjs from 'bcryptjs';

export const signup=async(req,res)=>{
    try {
        const {firstName,lastName,phone,email,password}=req.body;

        const user=await userCollections.findOne({email,phone})
        if(user )
            {
                return res.status(400).json({message:'user already exist'})
            }

            const hashPassword=await bcryptjs.hash(password,10)


            const createdUser=new userCollections({firstName:firstName,lastName:lastName,phone:phone,email:email,password:hashPassword})
            await createdUser.save()
            return res.status(201).json({message:'user created successfully',createdUser})
    } catch (error)
    {
        console.log(error.message);
        res.status(500).json({message:'internal server error'});

    }
}

export const login=async(req,res)=>{
    try {
        const{ email, password } = req.body;
        const user = await userCollections.findOne({ email });

        const isMatch=await bcryptjs.compare(password,user.password)

        if(!user || !isMatch)
            {
                return res.status(400).json({message:'invalid password'})
            }
            else{
                res.status(200).json({message:'login created successfully',user:{
                    _id:user._id,
                    firstName:user.firstName,
                    lastName:user.lastName,
                    phone:user.phone,
                    email:user.email
                }})
            }


    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:'"No user found"'});
    }
}
