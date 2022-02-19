// import logo from './logo.svg';
import "./App.css";
import Home from "./Components/Home";
import "./Components/Home.css";
// import Footer from "./Components/Footer";

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
      {/* <h1>ESOL Hakathon</h1> */}
      {/* <header>Take Your ESOL Steps Forward</header> */}
      <Home />
      {/* <Footer /> */}
    </div>

  )
}

export default App;
