import { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyHomePage from './pages/Home';
import LayOut from './components/Layout';
import ErrorPage from './pages/Error';

interface ApplicationProps {}

const Application: FunctionComponent<ApplicationProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayOut />}>
                    <Route index element={<MyHomePage />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
