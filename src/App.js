import Filter from "./Filter";
import Search from "./Search";
import NewTweet from "./NewTweet";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/Search' element={<Search />} />   
        <Route path='Filter' element={<Filter/>} />
        <Route path='/newTweet' element={<NewTweet />} />
      </Routes>
    </div>
  );
}

export default App;
