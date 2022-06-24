import './App.css';
import Header from "./components/Header/Header";
import {Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Popular from "./Pages/Popular/Popular";
import TopRated from "./Pages/TopRated/TopRated";
import Upcoming from "./Pages/Upcoming/Upcoming";
import NowPlaying from "./Pages/NowPlaying/NowPlaying";
import Latest from "./Pages/Latest/Latest";


function App() {
    return (
        <div className="container">
            <Header/>
            <Home/>
            <Popular/>
            <TopRated/>
            <Upcoming/>
            <NowPlaying/>
            <Latest/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/popular" element={<Popular/>}/>
                <Route path="/top-rated" element={<TopRated/>}/>
                <Route path="/upcoming" element={<Upcoming/>}/>
                <Route path="/now-playing" element={<NowPlaying/>}/>
                <Route path="/latest" element={<Latest/>}/>
            </Routes>
        </div>
    );
}

export default App;
