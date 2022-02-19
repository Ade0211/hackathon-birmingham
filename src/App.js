import React from "react";
import './App.css';
// import AppRouter from "./AppRouter";
// import Home from "./Home";
import Carousel from "./Component/Carousel"

function App() {
  // const [infoData, setInfoData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/posts/users/list")
  //     .then((res) => res.json())
  //     .then((data) => {

  //       // let result = data.map(a => a.file_mimetype);
  //       console.log(data)
  //       setInfoData(data)

  //     })
  // }, [])

  return (

    <div className="App">

      <Carousel />
    </div>

  )
}

export default App;
