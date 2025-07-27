// import PropTypes from 'prop-types';
// import Loading from './Loading';

// const ImagePreview = ({ upload,enhancedImg,loading }) => {

// console.log("enhanced image", enhancedImg)
//   return (
//     <div className="flex justify-center p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[40rem] max-w-4xl">
//         {/* Original Image Card */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           <h2 className="text-xl font-semibold text-center bg-orange-500 text-white py-2">
//             Original Image
//           </h2>
//           <div className="p-4">
//             {upload ? (
//               <img 
//                 src={upload} 
//                 className="w-full h-64 object-cover border border-gray-200 rounded" 
//                 alt="Original" 
//               />
//             ) : (
//               <div className="flex items-center justify-center h-64 bg-gray-100 rounded border border-gray-300 text-gray-500">
//                 No image uploaded
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Enhanced Image Card */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           <h2 className="text-xl font-semibold text-center bg-emerald-500 text-white py-2">
//             Enhanced Image
//           </h2>
//           <div className="p-4">
//             <div className="flex items-center justify-center h-64 bg-gray-100 rounded border border-gray-300 text-gray-500">
//               {loading? (
//                 <Loading/>
//               ):
//               <enhancedImg/> ? (
//               <img 
//                 src={enhancedImg} 
//                 className="w-full h-64 object-cover border border-gray-200 rounded" 
//                 alt="Original" 
//               />)
              
//               : "Enhance Img" }
                

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ImagePreview.propTypes = {
//   upload: PropTypes.string,
//   enhancedImg: PropTypes.string,
//   loading: PropTypes.bool
// };

// export default ImagePreview;




import PropTypes from 'prop-types';
import Loading from './Loading';

const ImagePreview = ({ upload, enhancedImg, loading }) => {
  console.log("enhanced image", enhancedImg);
  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[40rem] max-w-4xl">

        {/* Original Image */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold text-center bg-orange-500 text-white py-2">
            Original Image
          </h2>
          <div className="p-4">
            {upload ? (
              <img 
                src={upload} 
                className="w-full h-64 object-cover border border-gray-200 rounded" 
                alt="Original" 
              />
            ) : (
              <div className="flex items-center justify-center h-64 bg-gray-100 rounded border border-gray-300 text-gray-500">
                No image uploaded
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Image */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <h2 className="text-xl font-semibold text-center bg-emerald-500 text-white py-2">
            Enhanced Image
          </h2>
          <div className="p-4">
            <div className="flex items-center justify-center h-64 bg-gray-100 rounded border border-gray-300 text-gray-500">
              {loading ? (
                <Loading />
              ) : enhancedImg ? (
                <img 
                  src={enhancedImg} 
                  className="w-full h-64 object-cover border border-gray-200 rounded" 
                  alt="Enhanced" 
                />
              ) : (
                "Enhanced image will appear here"
              )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

ImagePreview.propTypes = {
  upload: PropTypes.string,
  enhancedImg: PropTypes.string,
  loading: PropTypes.bool,
};

export default ImagePreview;
