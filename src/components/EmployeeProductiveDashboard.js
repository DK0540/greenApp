//================================================================>>> side bar not exist below code
// // Import necessary libraries
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaCamera, FaCheck, FaTimes } from "react-icons/fa";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./Employee.css";

// const EmployeeProductiveDashboard = () => {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "Vishwanath",
//     image1: "",
//     image2: "",
//   });

//   const webcamRef = React.useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [captureNumber, setCaptureNumber] = useState(1);
//   const [showWebcam, setShowWebcam] = useState(false); // Set initial state to false

//   useEffect(() => {
//     // Check if both images are captured, then turn off the webcam
//     if (user.image1 && user.image2) {
//       setShowWebcam(false);
//     }
//   }, [user.image1, user.image2]);

//   const activateWebcam = () => {
//     setShowWebcam(true);
//   };

//   const capture = async () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       // Update the state with the captured image
//       setCapturedImage(imageSrc);
//     }
//   };

//   const retake = () => {
//     // Reset the captured image
//     setCapturedImage(null);
//     // Show the webcam again
//     setShowWebcam(true);
//   };

//   const saveImage = async () => {
//     // Update the database (db.json) with the captured image
//     try {
//       const updatedUserData = {
//         [`image${captureNumber}`]: capturedImage,
//       };

//       await axios.patch(
//         `http://localhost:3001/users/${user.id}`,
//         updatedUserData
//       );

//       // Update the state with the captured image
//       setUser({
//         ...user,
//         ...updatedUserData,
//       });

//       // Toggle captureNumber between 1 and 2
//       setCaptureNumber((prevCaptureNumber) =>
//         prevCaptureNumber === 1 ? 2 : 1
//       );

//       // Reset the captured image
//       setCapturedImage(null);
//     } catch (error) {
//       console.error("Error updating images in the database:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="user-container">
//         <div className="user-header">
//           <h1>{user.name}</h1>
//           <div className="camera-icon">
//             <FaCamera onClick={activateWebcam} />
//           </div>
//         </div>

//         {/* Images */}
//         <div className="images-container">
//           <div className={`image-box ${user.image1 && "green"}`}>
//             <img src={user.image1} alt="Image 1" />
//           </div>
//           <div className={`image-box ${user.image2 && "green"}`}>
//             <img src={user.image2} alt="Image 2" />
//           </div>
//         </div>
//       </div>

//       {/* Webcam or Captured Image component */}
//       {capturedImage ? (
//         // Review captured image
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

//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

// // Import necessary libraries=================>>>All are fixed
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCamera, FaCheck, FaTimes } from "react-icons/fa";
import Webcam from "react-webcam";
import axios from "axios";
import "./Employee.css";

const EmployeeProductiveDashboard = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "Vishwanath",
    image1: "",
    image2: "",
  });

  const webcamRef = React.useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [captureNumber, setCaptureNumber] = useState(1);
  const [showWebcam, setShowWebcam] = useState(false); // Set initial state to false

  useEffect(() => {
    // Check if both images are captured, then turn off the webcam
    if (user.image1 && user.image2) {
      setShowWebcam(false);
    }
  }, [user.image1, user.image2]);

  const activateWebcam = () => {
    setShowWebcam(true);
  };

  const capture = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      // Update the state with the captured image
      setCapturedImage(imageSrc);
    }
  };

  const retake = () => {
    // Reset the captured image
    setCapturedImage(null);
    // Show the webcam again
    setShowWebcam(true);
  };

  const saveImage = async () => {
    // Update the database (db.json) with the captured image
    try {
      const updatedUserData = {
        [`image${captureNumber}`]: capturedImage,
      };

      await axios.patch(
        `http://localhost:3001/users/${user.id}`,
        updatedUserData
      );

      // Update the state with the captured image
      setUser({
        ...user,
        ...updatedUserData,
      });

      // Toggle captureNumber between 1 and 2
      setCaptureNumber((prevCaptureNumber) =>
        prevCaptureNumber === 1 ? 2 : 1
      );

      // Reset the captured image
      setCapturedImage(null);
    } catch (error) {
      console.error("Error updating images in the database:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="user-header">
        <h1>{user.name}</h1>
        <div className="camera-icon">
          <FaCamera onClick={activateWebcam} />
        </div>
      </div>

      {/* Webcam or Captured Image component */}
      {capturedImage ? (
        // Review captured image
        <div className="review-container">
          <img src={capturedImage} alt="Captured" />
          <div className="review-buttons">
            <button onClick={retake}>
              <FaTimes /> Retake
            </button>
            <button onClick={saveImage}>
              <FaCheck /> Save
            </button>
          </div>
        </div>
      ) : (
        // Capture button
        showWebcam && (
          <div className="webcam-container">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className="webcam"
            />
            <button className="capture-button" onClick={capture}>
              <FaCamera />
            </button>
          </div>
        )
      )}

      {/* Images */}
      <div className="images-container">
        <div className={`image-box ${user.image1 && "green"}`}>
          <img src={user.image1} alt="Image 1" />
        </div>
        <div className={`image-box ${user.image2 && "green"}`}>
          <img src={user.image2} alt="Image 2" />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <Link to="/">
          <FaHome className="icon" />
        </Link>
        <Link to="/user">
          <FaUser className="icon" />
        </Link>
      </footer>
    </div>
  );
};

export default EmployeeProductiveDashboard;

//================================================>>Hide is working
// // Import necessary libraries
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaCamera, FaCheck, FaTimes } from "react-icons/fa";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./Employee.css";

// const EmployeeProductiveDashboard = () => {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "Vishwanath",
//     image1: "",
//     image2: "",
//   });

//   const webcamRef = React.useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [captureNumber, setCaptureNumber] = useState(1);
//   const [showWebcam, setShowWebcam] = useState(false); // Set initial state to false

//   useEffect(() => {
//     // Check if both images are captured, then turn off the webcam
//     if (user.image1 && user.image2) {
//       setShowWebcam(false);
//     }
//   }, [user.image1, user.image2]);

//   const activateWebcam = () => {
//     setShowWebcam(true);
//   };

//   const capture = async () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       // Update the state with the captured image
//       setCapturedImage(imageSrc);
//     }
//   };

//   const retake = () => {
//     // Reset the captured image
//     setCapturedImage(null);
//     // Show the webcam again
//     setShowWebcam(true);
//   };

//   const saveImage = async () => {
//     // Update the database (db.json) with the captured image
//     try {
//       const updatedUserData = {
//         [`image${captureNumber}`]: capturedImage,
//       };

//       await axios.patch(
//         `http://localhost:3001/users/${user.id}`,
//         updatedUserData
//       );

//       // Update the state with the captured image
//       setUser({
//         ...user,
//         ...updatedUserData,
//       });

//       // Toggle captureNumber between 1 and 2
//       setCaptureNumber((prevCaptureNumber) =>
//         prevCaptureNumber === 1 ? 2 : 1
//       );

//       // Reset the captured image
//       setCapturedImage(null);
//     } catch (error) {
//       console.error("Error updating images in the database:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="user-header">
//         <h1>{user.name}</h1>
//         <div className="camera-icon">
//           <FaCamera onClick={activateWebcam} />
//         </div>
//       </div>

//       {/* Webcam or Captured Image component */}
//       {capturedImage ? (
//         // Review captured image
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
//         <div className="webcam-container">
//           {showWebcam && (
//             <Webcam
//               audio={false}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               className="webcam"
//             />
//           )}
//           <button
//             className="capture-button"
//             onClick={capture}
//             disabled={!showWebcam}
//           >
//             <FaCamera />
//           </button>
//         </div>
//       )}

//       {/* Images */}
//       <div className="images-container">
//         <div className={`image-box ${user.image1 && "green"}`}>
//           <img src={user.image1} alt="Image 1" />
//         </div>
//         <div className={`image-box ${user.image2 && "green"}`}>
//           <img src={user.image2} alt="Image 2" />
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

//==============================>okokok
// // Import necessary libraries
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaCamera, FaCheck, FaTimes } from "react-icons/fa";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./Employee.css";

// const EmployeeProductiveDashboard = () => {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "Vishwanath",
//     image1: "",
//     image2: "",
//   });

//   const webcamRef = React.useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [captureNumber, setCaptureNumber] = useState(1);
//   const [showWebcam, setShowWebcam] = useState(true);

//   useEffect(() => {
//     // Check if both images are captured, then turn off the webcam
//     if (user.image1 && user.image2) {
//       setShowWebcam(false);
//     }
//   }, [user.image1, user.image2]);

//   const capture = async () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       // Update the state with the captured image
//       setCapturedImage(imageSrc);
//     }
//   };

//   const retake = () => {
//     // Reset the captured image
//     setCapturedImage(null);
//     // Show the webcam again
//     setShowWebcam(true);
//   };

//   const saveImage = async () => {
//     // Update the database (db.json) with the captured image
//     try {
//       const updatedUserData = {
//         [`image${captureNumber}`]: capturedImage,
//       };

//       await axios.patch(
//         `http://localhost:3001/users/${user.id}`,
//         updatedUserData
//       );

//       // Update the state with the captured image
//       setUser({
//         ...user,
//         ...updatedUserData,
//       });

//       // Toggle captureNumber between 1 and 2
//       setCaptureNumber((prevCaptureNumber) =>
//         prevCaptureNumber === 1 ? 2 : 1
//       );

//       // Reset the captured image
//       setCapturedImage(null);
//     } catch (error) {
//       console.error("Error updating images in the database:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="user-header">
//         <h1>{user.name}</h1>
//       </div>

//       {/* Webcam or Captured Image component */}
//       {capturedImage ? (
//         // Review captured image
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
//         <div className="webcam-container">
//           {showWebcam && (
//             <Webcam
//               audio={false}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               className="webcam"
//             />
//           )}
//           <button
//             className="capture-button"
//             onClick={capture}
//             disabled={!showWebcam}
//           >
//             <FaCamera />
//           </button>
//         </div>
//       )}

//       {/* Images */}
//       <div className="images-container">
//         <div className={`image-box ${user.image1 && "green"}`}>
//           <img src={user.image1} alt="Image 1" />
//         </div>
//         <div className={`image-box ${user.image2 && "green"}`}>
//           <img src={user.image2} alt="Image 2" />
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

// // Import necessary libraries=====================>>>Hiding webcame is working
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaCamera, FaCheck, FaTimes } from "react-icons/fa";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./Employee.css";

// const EmployeeProductiveDashboard = () => {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "Vishwanath",
//     image1: "",
//     image2: "",
//   });

//   const webcamRef = React.useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [captureNumber, setCaptureNumber] = useState(1);

//   useEffect(() => {
//     // Check if the webcam is ready
//     if (webcamRef.current) {
//       console.log("Webcam is ready!");
//     }
//   }, [webcamRef]);

//   const capture = async () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       // Update the state with the captured image
//       setCapturedImage(imageSrc);
//     }
//   };

//   const retake = () => {
//     // Reset the captured image
//     setCapturedImage(null);
//   };

//   const saveImage = async () => {
//     // Update the database (db.json) with the captured image
//     try {
//       const updatedUserData = {
//         [`image${captureNumber}`]: capturedImage,
//       };

//       await axios.patch(
//         `http://localhost:3001/users/${user.id}`,
//         updatedUserData
//       );

//       // Update the state with the captured image
//       setUser({
//         ...user,
//         ...updatedUserData,
//       });

//       // Toggle captureNumber between 1 and 2
//       setCaptureNumber((prevCaptureNumber) =>
//         prevCaptureNumber === 1 ? 2 : 1
//       );

//       // Reset the captured image
//       setCapturedImage(null);
//     } catch (error) {
//       console.error("Error updating images in the database:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="user-header">
//         <h1>{user.name}</h1>
//       </div>

//       {/* Webcam or Captured Image component */}
//       {capturedImage ? (
//         // Review captured image
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
//         <div className="webcam-container">
//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             className="webcam"
//           />
//           <button className="capture-button" onClick={capture}>
//             <FaCamera />
//           </button>
//         </div>
//       )}

//       {/* Images */}
//       <div className="images-container">
//         <div className={`image-box ${user.image1 && "green"}`}>
//           <img src={user.image1} alt="Image 1" />
//         </div>
//         <div className={`image-box ${user.image2 && "green"}`}>
//           <img src={user.image2} alt="Image 2" />
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

// // Import necessary libraries  ===========================>>Retake and save option working
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaCamera, FaCheck, FaTimes } from "react-icons/fa";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./Employee.css";

// const EmployeeProductiveDashboard = () => {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "Vishwanath",
//     image1: "",
//     image2: "",
//   });

//   const webcamRef = React.useRef(null);
//   const [webcamActive, setWebcamActive] = useState(false);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [captureNumber, setCaptureNumber] = useState(1);

//   useEffect(() => {
//     // Check if the webcam is ready
//     if (webcamRef.current) {
//       console.log("Webcam is ready!");
//     }
//   }, [webcamRef]);

//   const activateWebcam = () => {
//     setWebcamActive(true);
//   };

//   const capture = async () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();

//       // Update the state with the captured image
//       setCapturedImage(imageSrc);
//     }
//   };

//   const retake = () => {
//     // Reset the captured image
//     setCapturedImage(null);
//   };

//   const saveImage = async () => {
//     // Update the database (db.json) with the captured image
//     try {
//       const updatedUserData = {
//         [`image${captureNumber}`]: capturedImage,
//       };

//       await axios.patch(
//         `http://localhost:3001/users/${user.id}`,
//         updatedUserData
//       );

//       // Update the state with the captured image
//       setUser({
//         ...user,
//         ...updatedUserData,
//       });

//       // Toggle captureNumber between 1 and 2
//       setCaptureNumber((prevCaptureNumber) =>
//         prevCaptureNumber === 1 ? 2 : 1
//       );

//       // Close the webcam
//       setWebcamActive(false);

//       // Reset the captured image
//       setCapturedImage(null);
//     } catch (error) {
//       console.error("Error updating images in the database:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="user-header">
//         <h1>{user.name}</h1>
//         <div className="camera-icon">
//           <FaCamera onClick={activateWebcam} />
//         </div>
//       </div>

//       {/* Webcam component */}
//       {webcamActive && (
//         <div className="webcam-container">
//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             className="webcam"
//           />
//           {capturedImage ? (
//             // Review captured image
//             <div className="review-container">
//               <img src={capturedImage} alt="Captured" />
//               <div className="review-buttons">
//                 <button onClick={retake}>
//                   <FaTimes /> Retake
//                 </button>
//                 <button onClick={saveImage}>
//                   <FaCheck /> Save
//                 </button>
//               </div>
//             </div>
//           ) : (
//             // Capture button
//             <button
//               className="capture-button"
//               onClick={capture}
//               disabled={!webcamActive}
//             >
//               <FaCamera />
//             </button>
//           )}
//         </div>
//       )}

//       {/* Images */}
//       <div className="images-container">
//         <div className={`image-box ${user.image1 && "green"}`}>
//           <img src={user.image1} alt="Image 1" />
//         </div>
//         <div className={`image-box ${user.image2 && "green"}`}>
//           <img src={user.image2} alt="Image 2" />
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

// // Import necessary libraries===============>>arroe allignment done
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaCamera } from "react-icons/fa";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./Employee.css";

// const EmployeeProductiveDashboard = () => {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "Vishwanath",
//     image1: "",
//     image2: "",
//   });

//   const webcamRef = React.useRef(null);
//   const [webcamActive, setWebcamActive] = useState(false);
//   const [captureNumber, setCaptureNumber] = useState(1);

//   useEffect(() => {
//     // Check if the webcam is ready
//     if (webcamRef.current) {
//       console.log("Webcam is ready!");
//     }
//   }, [webcamRef]);

//   const activateWebcam = () => {
//     setWebcamActive(true);
//   };

//   const capture = async () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();

//       // Update the database (db.json) with the new image
//       try {
//         const updatedUserData = {
//           ...(captureNumber === 1
//             ? { image1: imageSrc }
//             : { image2: imageSrc }),
//         };

//         await axios.patch(
//           `http://localhost:3001/users/${user.id}`,
//           updatedUserData
//         );

//         // Update the state with the captured image
//         setUser({
//           ...user,
//           ...updatedUserData,
//         });

//         // Toggle captureNumber between 1 and 2
//         setCaptureNumber((prevCaptureNumber) =>
//           prevCaptureNumber === 1 ? 2 : 1
//         );

//         // If image2 is captured, close the webcam
//         if (captureNumber === 2) {
//           setWebcamActive(false);
//         }
//       } catch (error) {
//         console.error("Error updating images in the database:", error);
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="user-header">
//         <h1>{user.name}</h1>
//         <div className="camera-icon">
//           <FaCamera onClick={activateWebcam} />
//         </div>
//       </div>

//       {/* Webcam component */}
//       {webcamActive && (
//         <div className="webcam-container">
//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             className="webcam"
//           />
//           {/* Capture button */}
//           <button
//             className="capture-button"
//             onClick={capture}
//             disabled={!webcamActive}
//           >
//             <FaCamera />
//           </button>
//         </div>
//       )}

//       {/* Images */}
//       <div className="images-container">
//         <div className={`image-box ${user.image1 && "green"}`}>
//           <img src={user.image1} alt="Image 1" />
//         </div>
//         <div className={`image-box ${user.image2 && "green"}`}>
//           <img src={user.image2} alt="Image 2" />
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

// // Import necessary libraries=====================================>>Perfect working with image
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaCamera } from "react-icons/fa";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./Employee.css";

// const EmployeeProductiveDashboard = () => {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "Vishwanath",
//     image1: "",
//     image2: "",
//   });

//   const webcamRef = React.useRef(null);
//   const [webcamActive, setWebcamActive] = useState(false);
//   const [captureNumber, setCaptureNumber] = useState(1);

//   useEffect(() => {
//     // Check if the webcam is ready
//     if (webcamRef.current) {
//       console.log("Webcam is ready!");
//     }
//   }, [webcamRef]);

//   const activateWebcam = () => {
//     setWebcamActive(true);
//   };

//   const capture = async () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();

//       // Update the database (db.json) with the new image
//       try {
//         const updatedUserData = {
//           ...(captureNumber === 1
//             ? { image1: imageSrc }
//             : { image2: imageSrc }),
//         };

//         await axios.patch(
//           `http://localhost:3001/users/${user.id}`,
//           updatedUserData
//         );

//         // Update the state with the captured image
//         setUser({
//           ...user,
//           ...updatedUserData,
//         });

//         // Toggle captureNumber between 1 and 2
//         setCaptureNumber((prevCaptureNumber) =>
//           prevCaptureNumber === 1 ? 2 : 1
//         );

//         // If image2 is captured, close the webcam
//         if (captureNumber === 2) {
//           setWebcamActive(false);
//         }
//       } catch (error) {
//         console.error("Error updating images in the database:", error);
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Welcome, {user.name}!</h1>

//       {/* Activate Webcam button */}
//       {!webcamActive && (
//         <button className="activate-webcam-button" onClick={activateWebcam}>
//           <FaCamera />
//         </button>
//       )}

//       {/* Webcam component */}
//       {webcamActive && (
//         <div className="webcam-container">
//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             className="webcam"
//           />
//           {/* Capture button */}
//           <button
//             className="capture-button"
//             onClick={capture}
//             disabled={!webcamActive}
//           >
//             <FaCamera />
//           </button>
//         </div>
//       )}

//       {/* Images */}
//       <div className="images-container">
//         <div className={`image-box ${user.image1 && "green"}`}>
//           <img src={user.image1} alt="Image 1" />
//         </div>
//         <div className={`image-box ${user.image2 && "green"}`}>
//           <img src={user.image2} alt="Image 2" />
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

//===============================================================>>>Below code cam is not closing
// // Import necessary libraries
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaCamera } from "react-icons/fa";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./Employee.css";

// const EmployeeProductiveDashboard = () => {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "Vishwanath",
//     image1: "",
//     image2: "",
//   });

//   const webcamRef = React.useRef(null);
//   const [webcamActive, setWebcamActive] = useState(false);
//   const [captureNumber, setCaptureNumber] = useState(1);

//   useEffect(() => {
//     // Check if the webcam is ready
//     if (webcamRef.current) {
//       console.log("Webcam is ready!");
//     }
//   }, [webcamRef]);

//   const activateWebcam = () => {
//     setWebcamActive(true);
//   };

//   const capture = async () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();

//       // Update the database (db.json) with the new image
//       try {
//         const updatedUserData = {
//           ...(captureNumber === 1
//             ? { image1: imageSrc }
//             : { image2: imageSrc }),
//         };

//         await axios.patch(
//           `http://localhost:3001/users/${user.id}`,
//           updatedUserData
//         );

//         // Update the state with the captured image
//         setUser({
//           ...user,
//           ...updatedUserData,
//         });

//         // Toggle captureNumber between 1 and 2
//         setCaptureNumber((prevCaptureNumber) =>
//           prevCaptureNumber === 1 ? 2 : 1
//         );
//       } catch (error) {
//         console.error("Error updating images in the database:", error);
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Welcome, {user.name}!</h1>

//       {/* Activate Webcam button */}
//       {!webcamActive && (
//         <button className="activate-webcam-button" onClick={activateWebcam}>
//           <FaCamera />
//         </button>
//       )}

//       {/* Webcam component */}
//       {webcamActive && (
//         <div className="webcam-container">
//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             className="webcam"
//           />
//           {/* Capture button */}
//           <button
//             className="capture-button"
//             onClick={capture}
//             disabled={!webcamActive}
//           >
//             <FaCamera />
//           </button>
//         </div>
//       )}

//       {/* Images */}
//       <div className="images-container">
//         <div className={`image-box ${user.image1 && "green"}`}>
//           <img src={user.image1} alt="Image 1" />
//         </div>
//         <div className={`image-box ${user.image2 && "green"}`}>
//           <img src={user.image2} alt="Image 2" />
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

//=========================================================>>>
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaCamera } from "react-icons/fa";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./Employee.css";

// const EmployeeProductiveDashboard = () => {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "Vishwanath",
//     image1: "",
//     image2: "",
//   });

//   const webcamRef = React.useRef(null);
//   const [webcamActive, setWebcamActive] = useState(false);
//   const [captureNumber, setCaptureNumber] = useState(1);

//   useEffect(() => {
//     // Check if the webcam is ready
//     if (webcamRef.current) {
//       console.log("Webcam is ready!");
//     }
//   }, [webcamRef]);

//   const capture = async () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();

//       // Update the database (db.json) with the new image
//       try {
//         const updatedUserData = {
//           ...(captureNumber === 1
//             ? { image1: imageSrc }
//             : { image2: imageSrc }),
//         };

//         await axios.patch(
//           `http://localhost:3001/users/${user.id}`,
//           updatedUserData
//         );

//         // Update the state with the captured image
//         setUser({
//           ...user,
//           ...updatedUserData,
//         });

//         // Toggle captureNumber between 1 and 2
//         setCaptureNumber((prevCaptureNumber) =>
//           prevCaptureNumber === 1 ? 2 : 1
//         );
//       } catch (error) {
//         console.error("Error updating images in the database:", error);
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Welcome, {user.name}!</h1>

//       {/* Webcam component */}
//       {webcamActive && (
//         <div className="webcam-container">
//           <Webcam
//             audio={false}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             className="webcam"
//           />
//           {/* Capture button */}
//           <button
//             className="capture-button"
//             onClick={capture}
//             disabled={!webcamActive}
//           >
//             <FaCamera />
//           </button>
//         </div>
//       )}

//       {/* Images */}
//       <div className="images-container">
//         <div className={`image-box ${user.image1 && "green"}`}>
//           <img src={user.image1} alt="Image 1" />
//         </div>
//         <div className={`image-box ${user.image2 && "green"}`}>
//           <img src={user.image2} alt="Image 2" />
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

//==========================================================>>>everything is working
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaCamera } from "react-icons/fa";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./Employee.css";

// const EmployeeProductiveDashboard = () => {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "Vishwanath",
//     image1: "",
//     image2: "",
//   });

//   const webcamRef = React.useRef(null);
//   const [webcamActive, setWebcamActive] = useState(false);
//   const [captureNumber, setCaptureNumber] = useState(1);

//   useEffect(() => {
//     // Check if the webcam is ready
//     if (webcamRef.current) {
//       console.log("Webcam is ready!");
//     }
//   }, [webcamRef]);

//   const capture = async () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();

//       // Update the database (db.json) with the new image
//       try {
//         const updatedUserData = {
//           ...(captureNumber === 1
//             ? { image1: imageSrc }
//             : { image2: imageSrc }),
//         };

//         await axios.patch(
//           `http://localhost:3001/users/${user.id}`,
//           updatedUserData
//         );

//         // Update the state with the captured image
//         setUser({
//           ...user,
//           ...updatedUserData,
//         });

//         // Toggle captureNumber between 1 and 2
//         setCaptureNumber((prevCaptureNumber) =>
//           prevCaptureNumber === 1 ? 2 : 1
//         );
//       } catch (error) {
//         console.error("Error updating images in the database:", error);
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Welcome, {user.name}!</h1>
//       <div className="images-container">
//         <div className={`image-box ${user.image1 && "green"}`}>
//           <img src={user.image1} alt="Image 1" />
//         </div>
//         <div className={`image-box ${user.image2 && "green"}`}>
//           <img src={user.image2} alt="Image 2" />
//         </div>
//       </div>

//       <div className="actions">
//         <button
//           onClick={() => setWebcamActive(true)}
//           disabled={user.image1 && user.image2}
//         >
//           <FaCamera />
//         </button>
//         <button onClick={capture} disabled={!webcamActive}>
//           Capture and {captureNumber === 1 ? "Fill Image 1" : "Fill Image 2"}
//         </button>
//       </div>

//       {/* Webcam component */}
//       {webcamActive && (
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           className="webcam"
//         />
//       )}

//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

//==========================================================>>Camera is working
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaCamera } from "react-icons/fa";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./Employee.css";

// const EmployeeProductiveDashboard = () => {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "Vishwanath",
//     image1: "",
//     image2: "",
//   });

//   const webcamRef = React.useRef(null);
//   const [captureNumber, setCaptureNumber] = useState(1);
//   const [webcamActive, setWebcamActive] = useState(false);

//   const capture = async () => {
//     if (webcamRef.current) {
//       const imageSrc = webcamRef.current.getScreenshot();
//       setUser({
//         ...user,
//         [`image${captureNumber}`]: imageSrc,
//       });

//       // Update the database (db.json) with the new image
//       try {
//         await axios.patch(`http://localhost:3001/users/${user.id}`, {
//           [`image${captureNumber}`]: imageSrc,
//         });
//       } catch (error) {
//         console.error("Error updating image in the database:", error);
//       }

//       // Toggle captureNumber between 1 and 2
//       setCaptureNumber((prevCaptureNumber) =>
//         prevCaptureNumber === 1 ? 2 : 1
//       );
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Welcome, {user.name}!</h1>
//       <div className="images-container">
//         <div className={`image-box ${user.image1 && "green"}`}>
//           <img src={user.image1} alt="Image 1" />
//         </div>
//         <div className={`image-box ${user.image2 && "green"}`}>
//           <img src={user.image2} alt="Image 2" />
//         </div>
//       </div>

//       <div className="actions">
//         <button
//           onClick={() => setWebcamActive(true)}
//           disabled={user.image1 && user.image2}
//         >
//           <FaCamera />
//         </button>
//       </div>

//       {/* Webcam component */}
//       {webcamActive && (
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           className="webcam"
//         />
//       )}

//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

// ========================================================>>Webcam is working
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaCamera } from "react-icons/fa";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./Employee.css";

// const EmployeeProductiveDashboard = () => {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "Vishwanath",
//     image1: "",
//     image2: "",
//   });

//   const webcamRef = React.useRef(null);
//   const [captureNumber, setCaptureNumber] = useState(1);

//   const capture = async () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setUser({
//       ...user,
//       [`image${captureNumber}`]: imageSrc,
//     });

//     // Update the database (db.json) with the new image
//     try {
//       await axios.patch(`http://localhost:3001/users/${user.id}`, {
//         [`image${captureNumber}`]: imageSrc,
//       });
//     } catch (error) {
//       console.error("Error updating image in the database:", error);
//     }

//     // Toggle captureNumber between 1 and 2
//     setCaptureNumber((prevCaptureNumber) => (prevCaptureNumber === 1 ? 2 : 1));
//   };

//   return (
//     <div className="login-container">
//       <h1>Welcome, {user.name}!</h1>
//       <div className="images-container">
//         <div className={`image-box ${user.image1 && "green"}`}>
//           <img src={user.image1} alt="Image 1" />
//         </div>
//         <div className={`image-box ${user.image2 && "green"}`}>
//           <img src={user.image2} alt="Image 2" />
//         </div>
//       </div>

//       <div className="actions">
//         <button onClick={capture} disabled={user.image1 && user.image2}>
//           <FaCamera />
//         </button>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//       {/* Webcam component */}
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         className="webcam"
//       />
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

//==========================================================>>>Below is working
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaCamera } from "react-icons/fa";
// import Webcam from "react-webcam";
// import axios from "axios";
// import "./Employee.css";

// const EmployeeProductiveDashboard = () => {
//   const [user, setUser] = useState({
//     id: 1,
//     name: "Vishwanath",
//     image1: "",
//     image2: "",
//   });

//   const webcamRef = React.useRef(null);

//   const capture = async (imageNumber) => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setUser({
//       ...user,
//       [`image${imageNumber}`]: imageSrc,
//     });

//     // Update the database (db.json) with the new image
//     try {
//       await axios.patch(`http://localhost:3001/users/${user.id}`, {
//         [`image${imageNumber}`]: imageSrc,
//       });
//     } catch (error) {
//       console.error("Error updating image in the database:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Welcome, {user.name}!</h1>
//       <div className="images-container">
//         <div className={`image-box ${user.image1 && "green"}`}>
//           <img src={user.image1} alt="Image 1" />
//         </div>
//         <div className={`image-box ${user.image2 && "green"}`}>
//           <img src={user.image2} alt="Image 2" />
//         </div>
//       </div>

//       <div className="actions">
//         <button onClick={() => capture(1)} disabled={user.image1 !== ""}>
//           <FaCamera />
//         </button>
//         <button onClick={() => capture(2)} disabled={user.image2 !== ""}>
//           <FaCamera />
//         </button>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//       {/* Webcam component */}
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         screenshotFormat="image/jpeg"
//         className="webcam"
//       />
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

//===================================================>>>Empty code
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser } from "react-icons/fa";
// import "./Employee.css";
// import img1 from "./assets/vbnlogo2.jpg";

// const EmployeeProductiveDashboard = () => {
//   const productivityData = [
//     { day: "Monday", percentage: 40 },
//     { day: "Tuesday", percentage: 25 },
//     { day: "Wednesday", percentage: 40 },
//     { day: "Thursday", percentage: 80 },
//   ];

//   return (
//     <div className="login-container">
//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

//===================================================================?last one full code
// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser } from "react-icons/fa";
// import "./Employee.css";
// import img1 from "./assets/vbnlogo2.jpg";

// const EmployeeProductiveDashboard = () => {
//   const productivityData = [
//     { day: "Monday", percentage: 40 },
//     { day: "Tuesday", percentage: 25 },
//     { day: "Wednesday", percentage: 40 },
//     { day: "Thursday", percentage: 80 },
//   ];

//   return (
//     <div className="login-container">
//       <div className="logodiv">
//         <img src={img1} alt="Logo" className="logo1" />
//       </div>

//       <div className="heading1">
//         <h1>Employee productive Dashboard</h1>
//       </div>
//       <div className="heading">
//         <div className="innerbox">
//           {productivityData.map((data, index) => (
//             <React.Fragment key={index}>
//               <p className={`proclass`}>
//                 Productivity on {data.day}
//                 <span className={`percentage-green`}>{data.percentage}%</span>
//               </p>
//               <div
//                 className={`progress-bar green progress-bar-${data.percentage}`}
//               >
//                 <div style={{ width: `${data.percentage}%` }}></div>
//               </div>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <Link to="/">
//           <FaHome className="icon" />
//         </Link>
//         <Link to="/user">
//           <FaUser className="icon" />
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;

//=========================================================>>>
// import React from "react";
// import { Link } from "react-router-dom";
// import "./Employee.css";
// import img1 from "./assets/vbnlogo2.jpg";

// const EmployeeProductiveDashboard = () => {
//   const productivityData = [
//     { day: "Monday", percentage: 40 },
//     { day: "Tuesday", percentage: 25 },
//     { day: "Wednesday", percentage: 40 },
//     { day: "Thursday", percentage: 80 },
//   ];

//   return (
//     <div className="login-container">
//       <div className="logodiv">
//         <img src={img1} alt="Logo" className="logo1" />
//       </div>

//       <div className="heading1">
//         <h1>Employee productive Dashboard</h1>
//       </div>
//       <div className="heading">
//         <div className="innerbox">
//           {productivityData.map((data, index) => (
//             <React.Fragment key={index}>
//               <p className={`proclass`}>
//                 Productivity on {data.day}
//                 <span className={`percentage-green`}>{data.percentage}%</span>
//               </p>
//               <div
//                 className={`progress-bar green progress-bar-${data.percentage}`}
//               >
//                 <div style={{ width: `${data.percentage}%` }}></div>
//               </div>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeProductiveDashboard;
