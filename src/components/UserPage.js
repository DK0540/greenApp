//==================================================>>>
import React, { useState } from "react";
import {
  FaBars,
  FaCamera,
  FaSearch,
  FaEllipsisV,
  FaCheck,
  FaTimes,
  FaHome,
  FaUser,
  FaShoppingBag,
  FaWallet,
  FaSignOutAlt,
} from "react-icons/fa";
import Webcam from "react-webcam";
import { MdFileUpload } from "react-icons/md";

import "./userPage.css";
import { GiCheckMark } from "react-icons/gi";
import { FaVideo } from "react-icons/fa6";
import SideNavbar from "./SideNavbar";

const UserPage = () => {
  const [sideNavbarOpen, setSideNavbarOpen] = useState(false);

  const [showWebcam, setShowWebcam] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [captureNumber, setCaptureNumber] = useState(1);
  const [firstUploadIcon, setFirstUploadIcon] = useState(
    <MdFileUpload style={{ color: "gray" }} />
  );
  const [secondUploadIcon, setSecondUploadIcon] = useState(
    <MdFileUpload style={{ color: "gray" }} />
  );
  const [showOverlay, setShowOverlay] = useState(false);
  const [videoRecording, setVideoRecording] = useState(false);

  const webcamRef = React.useRef(null);

  const activateWebcam = () => {
    setShowWebcam(true);
  };

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
      if (captureNumber === 1) {
        setFirstUploadIcon(<GiCheckMark style={{ color: "#4CAF50" }} />);
      } else {
        setSecondUploadIcon(<GiCheckMark style={{ color: "#4CAF50" }} />);
      }
      setShowOverlay(true);
    }
  };

  const retake = () => {
    setCapturedImage(null);
    setShowWebcam(true);
    setFirstUploadIcon(<MdFileUpload style={{ color: "gray" }} />);
    setSecondUploadIcon(<MdFileUpload style={{ color: "gray" }} />);
    setShowOverlay(false);
  };

  const saveImage = () => {
    setShowWebcam(false);
    setCaptureNumber((prevCaptureNumber) => (prevCaptureNumber === 1 ? 2 : 1));
    setCapturedImage(null);
    setShowOverlay(false);
  };

  const startRecording = () => {
    setShowWebcam(true);
    setVideoRecording(true);
    setTimeout(() => {
      setVideoRecording(false);
      capture();
    }, 3000);
  };

  return (
    <div className="user-container">
      {/* Header */}
      <div className="header">
        <div className="burgerIcon" onClick={() => setSideNavbarOpen(true)}>
          <span>&#9776;</span>
        </div>

        {/* Sidebar */}
        <SideNavbar
          isOpen={sideNavbarOpen}
          onClose={() => setSideNavbarOpen(false)}
        />
        <h1 className="headername">Users</h1>
        <div className="icons">
          <FaSearch style={{ marginRight: "20px", color: "white" }} />
          <FaEllipsisV style={{ color: "white" }} />
        </div>
      </div>

      {/* Overlay */}
      {showOverlay && (
        <div className="overlay">
          <img src={capturedImage} alt="Captured" />
          <div className="review-buttons">
            <button className="retake" onClick={retake}>
              <FaTimes /> Retake
            </button>
            <button className="save" onClick={saveImage}>
              <FaCheck /> Save
            </button>
          </div>
        </div>
      )}

      {/* Capture button or Captured Image component */}
      {capturedImage ? null : showWebcam ? (
        <div className="overlay-container">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="webcam"
            videoConstraints={{ facingMode: "user" }}
          />
          <button className="capture-button" onClick={capture}>
            <FaCamera />
          </button>
        </div>
      ) : null}

      {/* User data */}
      <div className="userdatas">
        {/* Repeat the structure for each user */}
        <div className={`grayuser ${capturedImage && "green"}`}>
          {/* User data here */}
          <div className="dive-element">
            <div className="dive-icons">
              <div className="camera-icon" onClick={activateWebcam}>
                <FaCamera style={{ color: "#59d9cc" }} />
              </div>
              {firstUploadIcon}
              {secondUploadIcon}
            </div>
            {/* Additional user data here */}
            <div className="dive-vid">
              <div className="camera-vidicon" onClick={startRecording}>
                <FaVideo style={{ color: "#59d9cc" }} />
              </div>
              {videoRecording ? (
                <MdFileUpload style={{ color: "gray" }} />
              ) : (
                <MdFileUpload />
              )}
            </div>
          </div>
        </div>
        {/* Repeat the above structure for other users */}
      </div>
    </div>
  );
};

export default UserPage;

//==================================================>>>
// import React, { useState } from "react";
// import {
//   FaBars,
//   FaCamera,
//   FaSearch,
//   FaEllipsisV,
//   FaCheck,
//   FaTimes,
// } from "react-icons/fa";
// import Webcam from "react-webcam";
// import { MdFileUpload } from "react-icons/md";
// import Sidebar from "./Sidebar";
// import "./userPage.css";
// import { GiCheckMark } from "react-icons/gi";
// import { FaVideo } from "react-icons/fa6";

// const UserPage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showWebcam, setShowWebcam] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [captureNumber, setCaptureNumber] = useState(1);
//   const [firstUploadIcon, setFirstUploadIcon] = useState(
//     <MdFileUpload style={{ color: "gray" }} />
//   );
//   const [secondUploadIcon, setSecondUploadIcon] = useState(
//     <MdFileUpload style={{ color: "gray" }} />
//   );
//   const [showOverlay, setShowOverlay] = useState(false);
//   const [videoRecording, setVideoRecording] = useState(false);

//   const webcamRef = React.useRef(null);

//   const toggleSidebar = () => {
//     setSidebarOpen((prev) => !prev);
//   };

//   const activateWebcam = () => {
//     setShowWebcam(true);
//   };

//   const capture = () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setCapturedImage(imageSrc);
//       if (captureNumber === 1) {
//         setFirstUploadIcon(<GiCheckMark style={{ color: "#4CAF50" }} />);
//       } else {
//         setSecondUploadIcon(<GiCheckMark style={{ color: "#4CAF50" }} />);
//       }
//       setShowOverlay(true);
//     }
//   };

//   const retake = () => {
//     setCapturedImage(null);
//     setShowWebcam(true);
//     setFirstUploadIcon(<MdFileUpload style={{ color: "gray" }} />);
//     setSecondUploadIcon(<MdFileUpload style={{ color: "gray" }} />);
//     setShowOverlay(false);
//   };

//   const saveImage = () => {
//     setShowWebcam(false);
//     setCaptureNumber((prevCaptureNumber) => (prevCaptureNumber === 1 ? 2 : 1));
//     setCapturedImage(null);
//     setShowOverlay(false);
//   };

//   const startRecording = () => {
//     setShowWebcam(true);
//     setVideoRecording(true);
//     setTimeout(() => {
//       setVideoRecording(false);
//       capture();
//     }, 3000);
//   };

//   return (
//     <div className="user-container">
//       {/* Header */}
//       <div className="header">
//         <div className="burger-icon" onClick={toggleSidebar}>
//           <FaBars style={{ color: "white" }} />
//         </div>

//         <h1 className="headername">Users</h1>
//         <div className="icons">
//           <FaSearch style={{ marginRight: "20px", color: "white" }} />
//           <FaEllipsisV style={{ color: "white" }} />
//         </div>
//       </div>

//       {/* Overlay */}
//       {showOverlay && (
//         <div className="overlay">
//           <img src={capturedImage} alt="Captured" />
//           <div className="review-buttons">
//             <button className="retake" onClick={retake}>
//               <FaTimes /> Retake
//             </button>
//             <button className="save" onClick={saveImage}>
//               <FaCheck /> Save
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Capture button or Captured Image component */}
//       {capturedImage ? null : showWebcam ? (
//         <div className="overlay-container">
//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             className="webcam"
//             videoConstraints={{ facingMode: "user" }}
//           />
//           <button className="capture-button" onClick={capture}>
//             <FaCamera />
//           </button>
//         </div>
//       ) : null}

//       {/* User data */}
//       <div className="userdatas">
//         {/* Repeat the structure for each user */}
//         <div className={`grayuser ${capturedImage && "green"}`}>
//           {/* User data here */}
//           <div className="dive-element">
//             <div className="dive-icons">
//               <div className="camera-icon" onClick={activateWebcam}>
//                 <FaCamera style={{ color: "#59d9cc" }} />
//               </div>
//               {firstUploadIcon}
//               {secondUploadIcon}
//             </div>
//             {/* Additional user data here */}
//             <div className="dive-vid">
//               <div className="camera-vidicon" onClick={startRecording}>
//                 <FaVideo style={{ color: "#59d9cc" }} />
//               </div>
//               {videoRecording ? (
//                 <MdFileUpload style={{ color: "gray" }} />
//               ) : (
//                 <MdFileUpload />
//               )}
//             </div>
//           </div>
//         </div>
//         {/* Repeat the above structure for other users */}
//       </div>

//       {/* Sidebar */}
//       {sidebarOpen && <Sidebar closeSidebar={() => setSidebarOpen(false)} />}
//     </div>
//   );
// };

// export default UserPage;

//============================================================>>>>>>>>last one is fixed camera not video
// import React, { useState, useEffect } from "react";
// import {
//   FaBars,
//   FaCamera,
//   FaSearch,
//   FaEllipsisV,
//   FaCheck,
//   FaTimes,
// } from "react-icons/fa";
// import Webcam from "react-webcam";
// import { MdFileUpload } from "react-icons/md";
// import Sidebar from "./Sidebar";
// import "./userPage.css";
// import { GiCheckMark } from "react-icons/gi";
// import { FaVideo } from "react-icons/fa6";

// const UserPage = () => {
//   const [videoRecording, setVideoRecording] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showWebcam, setShowWebcam] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [captureNumber, setCaptureNumber] = useState(1);
//   const [firstUploadIcon, setFirstUploadIcon] = useState(
//     <MdFileUpload style={{ color: "gray" }} />
//   );
//   const [secondUploadIcon, setSecondUploadIcon] = useState(
//     <MdFileUpload style={{ color: "gray" }} />
//   );
//   const [showOverlay, setShowOverlay] = useState(false);

//   const webcamRef = React.useRef(null);

//   const toggleSidebar = () => {
//     setSidebarOpen((prev) => !prev);
//   };

//   const activateWebcam = () => {
//     setShowWebcam(true);
//   };

//   const startRecording = () => {
//     setVideoRecording(true);
//     setTimeout(() => {
//       setVideoRecording(false);
//       capture(); // Simulate capturing the video as an image for illustration
//     }, 3000); // 3 seconds for demonstration, adjust as needed
//   };

//   const capture = () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setCapturedImage(imageSrc);
//       if (captureNumber === 1) {
//         setFirstUploadIcon(<GiCheckMark style={{ color: "#4CAF50" }} />);
//       } else {
//         setSecondUploadIcon(<GiCheckMark style={{ color: "#4CAF50" }} />);
//       }
//       setShowOverlay(true);
//     }
//   };

//   const retake = () => {
//     setCapturedImage(null);
//     setShowWebcam(true);
//     setFirstUploadIcon(<MdFileUpload style={{ color: "gray" }} />);
//     setSecondUploadIcon(<MdFileUpload style={{ color: "gray" }} />);
//     setShowOverlay(false);
//   };

//   const saveImage = () => {
//     setShowWebcam(false);
//     setCaptureNumber((prevCaptureNumber) => (prevCaptureNumber === 1 ? 2 : 1));
//     setCapturedImage(null);
//     setShowOverlay(false);
//   };

//   return (
//     <div className="user-container">
//       {/* Header */}
//       <div className="header">
//         <div className="burger-icon" onClick={toggleSidebar}>
//           <FaBars style={{ color: "white" }} />
//         </div>
//         <h1 className="headername">Users</h1>
//         <div className="icons">
//           <FaSearch style={{ marginRight: "20px", color: "white" }} />
//           <FaEllipsisV style={{ color: "white" }} />
//         </div>
//       </div>

//       {/* Overlay */}
//       {showOverlay && (
//         <div className="overlay">
//           <img src={capturedImage} alt="Captured" />
//           <div className="review-buttons">
//             <button className="retake" onClick={retake}>
//               <FaTimes /> Retake
//             </button>
//             <button className="save" onClick={saveImage}>
//               <FaCheck /> Save
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Capture button or Captured Image component */}
//       {capturedImage
//         ? // Render nothing when the image is captured
//           null
//         : // Capture button
//           showWebcam && (
//             <div className="overlay-container">
//               <Webcam
//                 audio={false}
//                 ref={webcamRef}
//                 screenshotFormat="image/jpeg"
//                 className="webcam"
//               />
//               <button className="capture-button" onClick={capture}>
//                 <FaCamera />
//               </button>
//             </div>
//           )}

//       {/* User data */}
//       <div className="userdatas">
//         {/* Repeat the structure for each user */}
//         <div className={`grayuser ${capturedImage && "green"}`}>
//           {/* User data here */}
//           <div className="dive-element">
//             <div className="dive-icons">
//               <div className="camera-icon" onClick={activateWebcam}>
//                 <FaCamera style={{ color: "#59d9cc" }} />
//               </div>
//               {firstUploadIcon}
//               {secondUploadIcon}
//             </div>
//             {/* Additional user data here */}
//             <div className="dive-vid">
//               <div className="camera-vidicon" onClick={startRecording}>
//                 <FaVideo style={{ color: "#59d9cc" }} />
//               </div>
//               {videoRecording ? (
//                 <MdFileUpload style={{ color: "gray" }} />
//               ) : (
//                 <MdFileUpload />
//               )}
//             </div>
//           </div>
//         </div>
//         {/* Repeat the above structure for other users */}
//       </div>

//       {/* Sidebar */}
//       {sidebarOpen && <Sidebar closeSidebar={() => setSidebarOpen(false)} />}
//     </div>
//   );
// };

// export default UserPage;

//============================================================>>Fine
// import React, { useState, useEffect } from "react";
// import {
//   FaBars,
//   FaCamera,
//   FaSearch,
//   FaEllipsisV,
//   FaCheck,
//   FaTimes,
// } from "react-icons/fa";
// import Webcam from "react-webcam";
// import { MdFileUpload } from "react-icons/md";
// import Sidebar from "./Sidebar";
// import "./userPage.css";
// import { GiCheckMark } from "react-icons/gi";

// const UserPage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showWebcam, setShowWebcam] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [captureNumber, setCaptureNumber] = useState(1);
//   const [firstUploadIcon, setFirstUploadIcon] = useState(
//     <MdFileUpload style={{ color: "gray" }} />
//   );
//   const [secondUploadIcon, setSecondUploadIcon] = useState(
//     <MdFileUpload style={{ color: "gray" }} />
//   );

//   const webcamRef = React.useRef(null);

//   const toggleSidebar = () => {
//     setSidebarOpen((prev) => !prev);
//   };

//   const activateWebcam = () => {
//     setShowWebcam(true);
//   };

//   const capture = () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setCapturedImage(imageSrc);
//       if (captureNumber === 1) {
//         setFirstUploadIcon(<GiCheckMark style={{ color: "#4CAF50" }} />);
//       } else {
//         setSecondUploadIcon(<GiCheckMark style={{ color: "#4CAF50" }} />);
//       }
//     }
//   };

//   const retake = () => {
//     setCapturedImage(null);
//     setShowWebcam(true);
//     setFirstUploadIcon(<MdFileUpload style={{ color: "gray" }} />);
//     setSecondUploadIcon(<MdFileUpload style={{ color: "gray" }} />);
//   };

//   const saveImage = () => {
//     // Perform save logic, update database, etc.
//     // For now, let's just close the webcam and update the UI
//     setShowWebcam(false);
//     setCaptureNumber((prevCaptureNumber) => (prevCaptureNumber === 1 ? 2 : 1));
//     setCapturedImage(null);
//     // You may want to perform actual save logic here
//   };

//   return (
//     <div className="user-container">
//       {/* Header */}
//       <div className="header">
//         <div className="burger-icon" onClick={toggleSidebar}>
//           <FaBars style={{ color: "white" }} />
//         </div>
//         <h1 className="headername">Users</h1>
//         <div className="icons">
//           <FaSearch style={{ marginRight: "20px", color: "white" }} />
//           <FaEllipsisV style={{ color: "white" }} />
//         </div>
//       </div>

//       {/* Capture button or Captured Image component */}
//       {capturedImage ? (
//         <div className="review-container">
//           <img src={capturedImage} alt="Captured" />
//           <div className="review-buttons">
//             <button onClick={retake}>
//               <FaTimes /> Retake
//             </button>
//             <button onClick={saveImage}>
//               <FaCheck /> Save
//             </button>
//           </div>
//         </div>
//       ) : (
//         // Capture button
//         showWebcam && (
//           <div className="webcam-container">
//             <Webcam
//               audio={false}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               className="webcam"
//             />
//             <button className="capture-button" onClick={capture}>
//               <FaCamera />
//             </button>
//           </div>
//         )
//       )}

//       {/* User data */}
//       <div className="userdatas">
//         {/* Repeat the structure for each user */}
//         <div className={`grayuser ${capturedImage && "green"}`}>
//           {/* User data here */}
//           <div className="dive-element">
//             <div className="dive-icons">
//               <div className="camera-icon" onClick={activateWebcam}>
//                 <FaCamera style={{ color: "#59d9cc" }} />
//               </div>
//               {firstUploadIcon}
//               {secondUploadIcon}
//             </div>
//             {/* Additional user data here */}
//           </div>
//         </div>
//         {/* Repeat the above structure for other users */}
//       </div>

//       {/* Sidebar */}
//       {sidebarOpen && <Sidebar closeSidebar={() => setSidebarOpen(false)} />}
//     </div>
//   );
// };

// export default UserPage;

//==============================================>>>>fixed it working arrow function
// import React, { useState, useEffect } from "react";
// import {
//   FaBars,
//   FaCamera,
//   FaSearch,
//   FaEllipsisV,
//   FaCheck,
//   FaTimes,
// } from "react-icons/fa";
// import Webcam from "react-webcam";
// import { MdFileUpload } from "react-icons/md";
// import Sidebar from "./Sidebar";
// import "./userPage.css";
// import { GiCheckMark } from "react-icons/gi";

// const UserPage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showWebcam, setShowWebcam] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [captureNumber, setCaptureNumber] = useState(1);
//   const [firstUploadIcon, setFirstUploadIcon] = useState(
//     <MdFileUpload style={{ color: "gray" }} />
//   );
//   const [secondUploadIcon, setSecondUploadIcon] = useState(
//     <MdFileUpload style={{ color: "gray" }} />
//   );

//   const webcamRef = React.useRef(null);

//   const toggleSidebar = () => {
//     setSidebarOpen((prev) => !prev);
//   };

//   const activateWebcam = () => {
//     setShowWebcam(true);
//   };

//   const capture = () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setCapturedImage(imageSrc);
//       if (captureNumber === 1) {
//         setFirstUploadIcon(<GiCheckMark style={{ color: "#4CAF50" }} />);
//       } else {
//         setSecondUploadIcon(<GiCheckMark style={{ color: "#4CAF50" }} />);
//       }
//     }
//   };

//   const retake = () => {
//     setCapturedImage(null);
//     setShowWebcam(true);
//     setFirstUploadIcon(<MdFileUpload style={{ color: "gray" }} />);
//     setSecondUploadIcon(<MdFileUpload style={{ color: "gray" }} />);
//   };

//   const saveImage = () => {
//     // Perform save logic, update database, etc.
//     // For now, let's just close the webcam and update the UI
//     setShowWebcam(false);
//     setCaptureNumber((prevCaptureNumber) => (prevCaptureNumber === 1 ? 2 : 1));
//     setCapturedImage(null);
//     // You may want to perform actual save logic here
//   };

//   return (
//     <div className="user-container">
//       {/* Header */}
//       <div className="header">
//         <div className="burger-icon" onClick={toggleSidebar}>
//           <FaBars style={{ color: "white" }} />
//         </div>
//         <h1 className="headername">Users</h1>
//         <div className="icons">
//           <FaSearch style={{ marginRight: "20px", color: "white" }} />
//           <FaEllipsisV style={{ color: "white" }} />
//         </div>
//       </div>

//       {/* Capture button or Captured Image component */}
//       {capturedImage ? (
//         <div className="review-container">
//           <img src={capturedImage} alt="Captured" />
//           <div className="review-buttons">
//             <button onClick={retake}>
//               <FaTimes /> Retake
//             </button>
//             <button onClick={saveImage}>
//               <FaCheck /> Save
//             </button>
//           </div>
//         </div>
//       ) : (
//         // Capture button
//         showWebcam && (
//           <div className="webcam-container">
//             <Webcam
//               audio={false}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               className="webcam"
//             />
//             <button className="capture-button" onClick={capture}>
//               <FaCamera />
//             </button>
//           </div>
//         )
//       )}

//       {/* User data */}
//       <div className="userdatas">
//         {/* Repeat the structure for each user */}
//         <div className={`grayuser ${capturedImage && "green"}`}>
//           {/* User data here */}
//           <div className="dive-element">
//             <div className="dive-icons">
//               <div className="camera-icon" onClick={activateWebcam}>
//                 <FaCamera style={{ color: "#59d9cc" }} />
//               </div>
//               {firstUploadIcon}
//               {secondUploadIcon}
//             </div>
//             {/* Additional user data here */}
//           </div>
//         </div>
//         {/* Repeat the above structure for other users */}
//       </div>

//       {/* Sidebar */}
//       {sidebarOpen && <Sidebar closeSidebar={() => setSidebarOpen(false)} />}
//     </div>
//   );
// };

// export default UserPage;

//====================================================>>>>
// import React, { useState, useEffect } from "react";
// import {
//   FaBars,
//   FaCamera,
//   FaSearch,
//   FaEllipsisV,
//   FaCheck,
//   FaTimes,
// } from "react-icons/fa";
// import Webcam from "react-webcam";
// import { MdFileUpload } from "react-icons/md";
// import Sidebar from "./Sidebar";
// import "./userPage.css";
// import { GiCheckMark } from "react-icons/gi";

// const UserPage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showWebcam, setShowWebcam] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [captureNumber, setCaptureNumber] = useState(1);

//   const webcamRef = React.useRef(null);

//   const toggleSidebar = () => {
//     setSidebarOpen((prev) => !prev);
//   };

//   const activateWebcam = () => {
//     setShowWebcam(true);
//   };

//   const capture = () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setCapturedImage(imageSrc);
//       setIconComponent(
//         <GiCheckMark style={{ color: "#4CAF50" }} onClick={capture} />
//       );
//     }
//   };

//   const retake = () => {
//     setCapturedImage(null);
//     setShowWebcam(true);
//     setIconComponent(
//       <MdFileUpload style={{ color: "gray" }} onClick={capture} />
//     );
//   };

//   const saveImage = () => {
//     // Perform save logic, update database, etc.
//     // For now, let's just close the webcam and update the UI
//     setShowWebcam(false);
//     setCaptureNumber((prevCaptureNumber) => (prevCaptureNumber === 1 ? 2 : 1));
//     setCapturedImage(null);
//     // You may want to perform actual save logic here
//   };

//   // Initialize iconComponent with MdFileUpload
//   const [iconComponent, setIconComponent] = useState(
//     <MdFileUpload style={{ color: "gray" }} onClick={capture} />
//   );

//   return (
//     <div className="user-container">
//       {/* Header */}
//       <div className="header">
//         <div className="burger-icon" onClick={toggleSidebar}>
//           <FaBars style={{ color: "white" }} />
//         </div>
//         <h1 className="headername">Users</h1>
//         <div className="icons">
//           <FaSearch style={{ marginRight: "20px", color: "white" }} />
//           <FaEllipsisV style={{ color: "white" }} />
//         </div>
//       </div>

//       {/* Capture button or Captured Image component */}
//       {capturedImage ? (
//         <div className="review-container">
//           <img src={capturedImage} alt="Captured" />
//           <div className="review-buttons">
//             <button onClick={retake}>
//               <FaTimes /> Retake
//             </button>
//             <button onClick={saveImage}>
//               <FaCheck /> Save
//             </button>
//           </div>
//         </div>
//       ) : (
//         // Capture button
//         showWebcam && (
//           <div className="webcam-container">
//             <Webcam
//               audio={false}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               className="webcam"
//             />
//             <button className="capture-button" onClick={capture}>
//               <FaCamera />
//             </button>
//           </div>
//         )
//       )}

//       {/* User data */}
//       <div className="userdatas">
//         {/* Repeat the structure for each user */}
//         <div className={`grayuser ${capturedImage && "green"}`}>
//           {/* User data here */}
//           <div className="dive-element">
//             <div className="dive-icons">
//               <div className="camera-icon" onClick={activateWebcam}>
//                 <FaCamera style={{ color: "#59d9cc" }} />
//               </div>
//               {iconComponent}
//               {iconComponent}
//               {iconComponent}
//               {iconComponent}
//             </div>
//             {/* Additional user data here */}
//           </div>
//         </div>
//         {/* Repeat the above structure for other users */}
//       </div>

//       {/* Sidebar */}
//       {sidebarOpen && <Sidebar closeSidebar={() => setSidebarOpen(false)} />}
//     </div>
//   );
// };

// export default UserPage;

//==================================================================>>>
// import React, { useState, useEffect } from "react";
// import {
//   FaBars,
//   FaCamera,
//   FaSearch,
//   FaEllipsisV,
//   FaCheck,
//   FaTimes,
// } from "react-icons/fa";
// import Webcam from "react-webcam";
// import { MdFileUpload } from "react-icons/md";
// import Sidebar from "./Sidebar";
// import "./userPage.css";
// import { GiCheckMark } from "react-icons/gi";

// const UserPage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showWebcam, setShowWebcam] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [captureNumber, setCaptureNumber] = useState(1);

//   const webcamRef = React.useRef(null);

//   const toggleSidebar = () => {
//     setSidebarOpen((prev) => !prev);
//   };

//   const activateWebcam = () => {
//     setShowWebcam(true);
//   };

//   const capture = () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setCapturedImage(imageSrc);
//       setIconComponent(
//         <GiCheckMark style={{ color: "#4CAF50" }} onClick={capture} />
//       );
//     }
//   };

//   const retake = () => {
//     setCapturedImage(null);
//     setShowWebcam(true);
//     setIconComponent(
//       <MdFileUpload style={{ color: "gray" }} onClick={capture} />
//     );
//   };

//   const saveImage = () => {
//     // Perform save logic, update database, etc.
//     // For now, let's just close the webcam and update the UI
//     setShowWebcam(false);
//     setCaptureNumber((prevCaptureNumber) => (prevCaptureNumber === 1 ? 2 : 1));
//     setCapturedImage(null);
//     // You may want to perform actual save logic here
//   };

//   // Initialize iconComponent with MdFileUpload
//   const [iconComponent, setIconComponent] = useState(
//     <MdFileUpload style={{ color: "gray" }} onClick={capture} />
//   );

//   return (
//     <div className="user-container">
//       {/* Header */}
//       <div className="header">
//         <div className="burger-icon" onClick={toggleSidebar}>
//           <FaBars style={{ color: "white" }} />
//         </div>
//         <h1 className="headername">Users</h1>
//         <div className="icons">
//           <FaSearch style={{ marginRight: "20px", color: "white" }} />
//           <FaEllipsisV style={{ color: "white" }} />
//         </div>
//       </div>

//       {/* Capture button or Captured Image component */}
//       {capturedImage ? (
//         <div className="review-container">
//           <img src={capturedImage} alt="Captured" />
//           <div className="review-buttons">
//             <button onClick={retake}>
//               <FaTimes /> Retake
//             </button>
//             <button onClick={saveImage}>
//               <FaCheck /> Save
//             </button>
//           </div>
//         </div>
//       ) : (
//         // Capture button
//         showWebcam && (
//           <div className="webcam-container">
//             <Webcam
//               audio={false}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               className="webcam"
//             />
//             <button className="capture-button" onClick={capture}>
//               <FaCamera />
//             </button>
//           </div>
//         )
//       )}

//       {/* User data */}
//       <div className="userdatas">
//         {/* Repeat the structure for each user */}
//         <div className={`grayuser ${capturedImage && "green"}`}>
//           {/* User data here */}
//           <div className="dive-element">
//             <div className="dive-icons">
//               <div className="camera-icon" onClick={activateWebcam}>
//                 <FaCamera style={{ color: "#59d9cc" }} />
//               </div>
//               {iconComponent}
//               <MdFileUpload
//                 style={{ color: capturedImage ? "green" : "gray" }}
//                 onClick={capture}
//               />
//               <GiCheckMark
//                 style={{ color: capturedImage ? "#4CAF50" : "gray" }}
//                 onClick={capture}
//               />
//               <MdFileUpload
//                 style={{ color: capturedImage ? "#4CAF50" : "gray" }}
//                 onClick={capture}
//               />
//               <GiCheckMark
//                 style={{ color: capturedImage ? "#4CAF50" : "gray" }}
//                 onClick={capture}
//               />
//             </div>
//             {/* Additional user data here */}
//           </div>
//         </div>
//         {/* Repeat the above structure for other users */}
//       </div>

//       {/* Sidebar */}
//       {sidebarOpen && <Sidebar closeSidebar={() => setSidebarOpen(false)} />}
//     </div>
//   );
// };

// export default UserPage;

//==========================================================>>>>>>>>okay
// import React, { useState, useEffect } from "react";
// import {
//   FaBars,
//   FaCamera,
//   FaSearch,
//   FaEllipsisV,
//   FaCheck,
//   FaTimes,
// } from "react-icons/fa";
// import Webcam from "react-webcam";
// import { MdFileUpload } from "react-icons/md";
// import Sidebar from "./Sidebar";
// import "./userPage.css";

// const UserPage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [showWebcam, setShowWebcam] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [captureNumber, setCaptureNumber] = useState(1);

//   const webcamRef = React.useRef(null);

//   const toggleSidebar = () => {
//     setSidebarOpen((prev) => !prev);
//   };

//   const activateWebcam = () => {
//     setShowWebcam(true);
//   };

//   const capture = () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setCapturedImage(imageSrc);
//     }
//   };

//   const retake = () => {
//     setCapturedImage(null);
//     setShowWebcam(true);
//   };

//   const saveImage = () => {
//     // Perform save logic, update database, etc.
//     // For now, let's just close the webcam and update the UI
//     setShowWebcam(false);
//     setCaptureNumber((prevCaptureNumber) => (prevCaptureNumber === 1 ? 2 : 1));
//     setCapturedImage(null);
//     // You may want to perform actual save logic here
//   };

//   return (
//     <div className="user-container">
//       {/* Header */}
//       <div className="header">
//         <div className="burger-icon" onClick={toggleSidebar}>
//           <FaBars style={{ color: "white" }} />
//         </div>
//         <h1 className="headername">Users</h1>
//         <div className="icons">
//           <FaSearch style={{ marginRight: "20px", color: "white" }} />
//           <FaEllipsisV style={{ color: "white" }} />
//         </div>
//       </div>

//       {/* Capture button or Captured Image component */}
//       {capturedImage ? (
//         <div className="review-container">
//           <img src={capturedImage} alt="Captured" />
//           <div className="review-buttons">
//             <button onClick={retake}>
//               <FaTimes /> Retake
//             </button>
//             <button onClick={saveImage}>
//               <FaCheck /> Save
//             </button>
//           </div>
//         </div>
//       ) : (
//         // Capture button
//         showWebcam && (
//           <div className="webcam-container">
//             <Webcam
//               audio={false}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               className="webcam"
//             />
//             <button className="capture-button" onClick={capture}>
//               <FaCamera />
//             </button>
//           </div>
//         )
//       )}

//       {/* User data */}
//       <div className="userdatas">
//         {/* Repeat the structure for each user */}
//         <div className={`grayuser ${capturedImage && "green"}`}>
//           {/* User data here */}
//           <div className="dive-element">
//             <div className="dive-icons">
//               <div className="camera-icon" onClick={activateWebcam}>
//                 <FaCamera style={{ color: "#59d9cc" }} />
//               </div>
//               <MdFileUpload
//                 style={{ color: capturedImage ? "#4CAF50" : "gray" }}
//                 onClick={capture}
//               />
//               <MdFileUpload
//                 style={{ color: capturedImage ? "#4CAF50" : "gray" }}
//                 onClick={capture}
//               />
//             </div>
//             {/* Additional user data here */}
//           </div>
//         </div>
//         {/* Repeat the above structure for other users */}
//       </div>

//       {/* Sidebar */}
//       {sidebarOpen && <Sidebar closeSidebar={() => setSidebarOpen(false)} />}
//     </div>
//   );
// };

// export default UserPage;

// // UserPage.js======================================>>> two static design
// import React, { useState } from "react";
// import { FaBars, FaCamera, FaSearch, FaEllipsisV } from "react-icons/fa";
// import "./userPage.css";
// import Sidebar from "./Sidebar";
// import { MdFileUpload } from "react-icons/md";
// import { FaVideo } from "react-icons/fa6";

// const UserPage = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

// const toggleSidebar = () => {
//   setSidebarOpen((prev) => !prev);
// };

// const closeSidebar = () => {
//   setSidebarOpen(false);
// };

//   return (
//     <div className="user-container">
//       {/* Header */}
//       <div className="header">
//         <div className="burger-icon" onClick={toggleSidebar}>
//           <FaBars style={{ color: "white" }} />
//         </div>
//         <h1 className="headername">Users</h1>
//         <div className="icons">
//           <FaSearch style={{ marginRight: "20px", color: "white" }} />
//           <FaEllipsisV style={{ color: "white" }} />
//         </div>
//       </div>
//       <div className="headbtn">
//         <div>
//           <p className="headall">All</p>
//         </div>
//         <div>
//           <p className="headpen">Pending</p>
//         </div>
//       </div>

//       <div className="userdatas">
//         <div className="grayuser">
//           <p className="graymen">Kanthraj</p>
//           <div className="dive-element">
//             <div className="dive-icons">
//               <div className="camera-icon">
//                 <FaCamera style={{ color: "#59d9cc" }} />
//               </div>
//               <MdFileUpload />
//               <MdFileUpload />
//             </div>
//             <div className="dive-vid">
//               <div className="camera-vidicon">
//                 <FaVideo style={{ color: "#59d9cc" }} />
//               </div>
//               <MdFileUpload />
//             </div>
//           </div>
//         </div>
//         <div className="lightuser">
//           <p className="graymen">Vishwa</p>
//           <div className="dive-element">
//             <div className="dive-icons">
//               <div className="camera-icon">
//                 <FaCamera style={{ color: "#59d9cc" }} />
//               </div>
//               <MdFileUpload />
//               <MdFileUpload />
//             </div>
//             <div className="dive-vid">
//               <div className="camera-vidicon">
//                 <FaVideo style={{ color: "#59d9cc" }} />
//               </div>
//               <MdFileUpload />
//             </div>
//           </div>
//         </div>
//         <div className="grayuser">
//           <p className="graymen">Harry</p>
//           <div className="dive-element">
//             <div className="dive-icons">
//               <div className="camera-icon">
//                 <FaCamera style={{ color: "#59d9cc" }} />
//               </div>
//               <MdFileUpload />
//               <MdFileUpload />
//             </div>
//             <div className="dive-vid">
//               <div className="camera-vidicon">
//                 <FaVideo style={{ color: "#59d9cc" }} />
//               </div>
//               <MdFileUpload />
//             </div>
//           </div>
//         </div>
//         <div className="lightuser">
//           <p className="graymen">Jack</p>
//           <div className="dive-element">
//             <div className="dive-icons">
//               <div className="camera-icon">
//                 <FaCamera style={{ color: "#59d9cc" }} />
//               </div>
//               <MdFileUpload />
//               <MdFileUpload />
//             </div>
// <div className="dive-vid">
//   <div className="camera-vidicon">
//     <FaVideo style={{ color: "#59d9cc" }} />
//   </div>
//   <MdFileUpload />
// </div>
//           </div>
//         </div>
//         <div className="lightuser"></div>
//       </div>
//       {/* Sidebar */}
//       {sidebarOpen && <Sidebar closeSidebar={closeSidebar} />}
//     </div>
//   );
// };

// export default UserPage;

//==============================>>one
// // UserPage.js
// import React from "react";
// import { FaBars, FaCamera } from "react-icons/fa";
// import "./userPage.css"; // Assuming your existing Employee.css file

// const UserPage = ({ toggleSidebar }) => {
//   return (
//     <div className="user-container">
//       {/* Header */}
//       <div className="header">
//         <div className="burger-icon" onClick={toggleSidebar}>
//           <FaBars />
//         </div>
//         <h1>Users</h1>
//         <div className="camera-icon">
//           <FaCamera />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserPage;
