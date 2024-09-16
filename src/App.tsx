import React, {Suspense} from 'react';
import './index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import {MainPage} from "./pages/MainPage/MainPage";
import {AboutPage} from "./pages/AboutPage/AboutPage";

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About us</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
