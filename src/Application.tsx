import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import MyHomePage from './pages/Home';
import AboutPage from './pages/About';
import LayOut from './components/Layout';

interface ApplicationProps {}

const Application: FunctionComponent<ApplicationProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MyHomePage />} />
                <Route path="about">
                    <Route index element={<AboutPage />} />
                    <Route path=":wat" element={<AboutPage />}></Route>
                </Route>
                <Route path="layout" element={<LayOut />}>
                    <Route index element={<AboutPage />} />
                    <Route path=":wat" element={<AboutPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
