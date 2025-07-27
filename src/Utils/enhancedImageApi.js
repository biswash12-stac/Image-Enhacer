import axios from "axios";


const ApiUrl ="https://techhk.aoscdn.com/"
const API_key = "wxpb8m5wi0wev38cc"
 const enhancedImageApi = async (file) =>{

    try{
        const task_id = await uploadImage(file);
        console.log("image uploaded", task_id)
        const enhancedImageData = await fetchUploadImage(task_id)
        console.log("enhacned Image", enhancedImageData);
        // console.log(enhancedImageData);


        return enhancedImageData
        
        
    } catch(e){
        console.log("Error Enchancing Image", e.message)
    }

 }



const uploadImage = async(file)=>{
    const formdata = new FormData()
    formdata.append("image_file" , file)
    
   const {data} = await axios.post(`${ApiUrl}/api/tasks/visual/scale/`,formdata, {
        headers:{
            "Content-Type" : "multipart/form-data",
            "X-API-KEY":API_key
        }
    })
    
// if task id or some api is not recived
    if(!data?.data?.task_id){
        throw Error ("failed to upload Image 😘")
    }   
    console.log(data);
    return data.data.task_id;
} 



const fetchUploadImage = async (task_Id) => {



  const maxAttempts = 20;
  let attempt = 0;

  while (attempt < maxAttempts) {
    const { data } = await axios.get(`${ApiUrl}api/tasks/visual/scale/${task_Id}`, {
      headers: {
        "X-API-KEY": API_key,
      },
    });

    const state = data?.data?.state;
    const stateDetail = data?.data?.state_detail;
    console.log(`Attempt ${attempt + 1}: State = ${state}, Detail = ${stateDetail}`);

    if (state == 5 || (state == 1 || stateDetail == "completed")) {
      console.log("✅ Enhancement completed!");
      return data.data;
    } else if (state === -1) {
      throw new Error("❌ Image enhancement failed.");
    }

    await new Promise((res) => setTimeout(res, 2000));
    attempt++;
  }

  throw new Error("Image enhancement timed out.");
};




export default enhancedImageApi;






//     const {data} = await axios.get(
//         `${ApiUrl}/api/tasks/visual/scale/${task_Id}`,
//         {
//             headers:{
//                 "X-API-KEY" : API_key
//             }
//         }
//     )

//     if(!data?.data)
// {
//     throw new Error ("failed to fetch image 😢 image not found")
// } 

// return data.data