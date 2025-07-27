import { useState } from "react";
import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";
import enhancedImageApi from "../Utils/enhancedImageApi";

const Home = ()=>{
    const [upload, setUpload] = useState(null);
    const[enhancedImg , setEnhancedImg] = useState(null);
    const [loading , setLoading] = useState(false)


    const uploadImgHandler = async (file)=>{
        setUpload(URL.createObjectURL(file))
        setLoading(true)
             

        // calling api
        try{
                const enhancedData = await enhancedImageApi(file);
                setEnhancedImg(enhancedData?.image);
                setLoading(false)

        } catch(e){
                console.log(e)
        } finally{
            setLoading(false)
        }
    }
    return (
        <>
            <ImageUpload  uploadImgHandler={uploadImgHandler}/>
            <ImagePreview loading ={loading} upload={upload} enhancedImg={enhancedImg}/>
        </>
    )
}


export default Home;