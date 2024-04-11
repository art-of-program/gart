// // import "../../Pages/Dashboard/Dashboard.css";

// import { AiFillCamera } from "react-icons/ai";
// import { useFormik } from "formik";
// import { useState } from "react";
// import { MdSlowMotionVideo } from "react-icons/md";
// import { CiImageOn } from "react-icons/ci";
// import "./CarRegistration.css";
// import carShema from "../../Schema/carRegistrationSchema";
// import { useCarRegistrationMutation } from "../../slice/mutation/authApi";
// import axios from "axios";
// import { baseurl } from "../../baseurl";
// import { useSelector } from "react-redux";
// import Dropzone from "react-dropzone";
// import MyDropzone from "../Dashboard/uploadVideo/Upload";

// const CarRegistration = () => {
//   const [images, setImages] = useState([]);
//   const [videos, setVideos] = useState(null);
//   const mydata = useSelector((state) => state.auth);
//   let token = mydata.userData?.data?.token;
//   const [submitCar, { isLoading, errors }] = useCarRegistrationMutation();
//   const video = useSelector((state) => state.video.video);
//   console.log(video);

//   const handleImage = (e) => {
//     const files = e.target.files;
//     setImages(files);
//   };
//   const onSubmit = async (value, actions) => {
//     try {
//       const formData = new FormData();

//       for (const file of images) {
//         formData.append("images", file);
//       }
//       formData.append("engine", value.engine);
//       formData.append("generation", value.generation);
//       formData.append("make", value.make);
//       formData.append("model", value.model);
//       formData.append("video", video);
//       const res = await axios.post(`${baseurl}/register/car`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const { values, handleChange, handleSubmit, handleBlur } = useFormik({
//     initialValues: {
//       make: "",
//       model: "",
//       generation: "",
//       engine: "",
//     },
//     validationSchema: carShema,
//     onSubmit: onSubmit,
//   });

//   return (
//     <div className="flex justify-center items-center h-[100%] flex-col py-10 carCont">
//       <h2 className="text-[24px] font-bold pt-5 text-teal-600">
//         Car Registration
//       </h2>

//       <form>
//         action=""
//         className="flex flex-col items-center gap-6 w-[50%] mt-5"
//         onSubmit={handleSubmit}
//         encType="multipart/form-data"
//       >
//         <div className="left-form  w-[50%] flex flex-col my-5 800px:flex-row 800px:w-[70%] car-registraion 800px:flex-wrap justify-between gap-5">
//           <div className="contain flex flex-col  mt-5 gap-2 w-[45%]">
//             <label htmlFor="">Make</label>
//             <input
//               type="text"
//               className="h-[40px] rounded-md px-2 focus:outline-none"
//               value={values?.make}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               name="make"
//               id="make"
//             />
//           </div>
//           <div className="contain flex flex-col  mt-5 gap-2 w-[45%]">
//             <label htmlFor="">Model</label>
//             <input
//               type="text"
//               className="h-[40px] rounded-md px-2 focus:outline-none"
//               value={values?.model}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               name="model"
//               id="model"
//             />
//           </div>
//           <div className="contain flex flex-col  mt-5 gap-2 w-[45%]">
//             <label htmlFor="">Engine</label>
//             <input
//               type="text"
//               className="h-[40px] rounded-md px-2 focus:outline-none w-full"
//               value={values?.engine}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               name="engine"
//               id="engine"
//             />
//           </div>
//           <div className="contain flex flex-col  mt-5 gap-2 w-[45%]">
//             <label htmlFor="">Generation</label>
//             <input
//               type="text"
//               className="h-[40px] rounded-md px-2 focus:outline-none"
//               value={values?.generation}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               name="generation"
//               id="generation"
//             />
//           </div>


         
//   );
// };

// export default CarRegistration;
