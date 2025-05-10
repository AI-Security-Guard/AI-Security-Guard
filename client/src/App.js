import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage/MainPage.js';
import LoginPage from './page/LoginPage/LoginPage.js';
import DetailPage from './page/DetailPage/DetailPage.js';
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/Detail' element={<DetailPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
