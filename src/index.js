import React, {Suspense} from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import routes from "./routes";
import {store} from "./redux/store";
import LanguageProvider from "./contexts/LanguageProvider";

import './index.css';

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Suspense fallback={<div>...Loading</div>}>
        <LanguageProvider>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </LanguageProvider>
    </Suspense>
);
