import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Site from './site/site.jsx'
import Login from './app/login.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Site />} />
                <Route exact path='/app' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;