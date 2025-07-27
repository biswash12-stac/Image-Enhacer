
import PropTypes from 'prop-types';

const ImageUpload = (props) => {
  const showImageHandler = (e) =>{
    const file =  e.target.files[0];
    if(file){
      props.uploadImgHandler(file)
    }
      
  }
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-[20rem] 
    max-w-4xl">

    <label htmlFor="fileInput" className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-2 text-center hover:border-red-500 transition-all">
      <input type="file" name="fileInput" id="fileInput" className="hidden" onChange={showImageHandler} />
      <span className="font-sans font-medium">Click Or Drag Image</span>
    </label>

    </div>
  )
}

ImageUpload.propTypes = {
  uploadImgHandler: PropTypes.func
};

export default ImageUpload
 