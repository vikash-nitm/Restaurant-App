// import "./App.css";
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import NotFound from "./pages/NotFound";
// import Success from "./pages/Success";
// import Home from "./pages/Home";

// const App=()=>{
//   return<Router>
//    <Routes>
// <Route path="/" element={<Home/>}/>
// {/* KOI BHI PATH ho jo yha define nhi kiya ho to NotFound ka page render hoga */}
// <Route path="*" element={<NotFound/>}/>

// <Route path="/success" element={<Success/>}/>
// </Routes>
// <Toaster/>
//     </Router>;
  
// };
// export default App


// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import NotFound from "./pages/NotFound";
// import Success from "./pages/Success";
// import Home from "./pages/Home";

// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* KOI BHI PATH ho jo yha define nhi kiya ho to NotFound ka page render hoga */}
//         <Route path="*" element={<NotFound />} />
//         <Route path="/success" element={<Success />} />
//       </Routes>
//       <Toaster />
//     </>
//   );
// };

//export default App;


import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        {/* KOI BHI PATH ho jo yha define nhi kiya ho to NotFound ka page render hoga */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
