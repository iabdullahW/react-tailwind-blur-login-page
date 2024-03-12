import Login from "./Login";
import Register from "./Register";
import { Routes, Route } from "react-router-dom";

const App = () => {
 return (
    <>
      <div
        className="text-white h-screen bg-no-repeat flex justify-center items-center bg-cover"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/mountain-is-star-night-sky_726745-1835.jpg')",
          backgroundSize: 'cover', // Ensure the image covers the entire viewport
          backgroundPosition: 'center', // Center the image
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </>
 );
};

export default App;
