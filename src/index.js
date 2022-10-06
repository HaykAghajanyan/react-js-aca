import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import App from './App';
import LanguageProvider from "./contexts/LanguageProvider";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Suspense fallback={<div>...Loading</div>}>
        <BrowserRouter>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </BrowserRouter>
    </Suspense>
);
