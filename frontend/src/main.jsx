import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {router} from "./Router.jsx";
import { Provider } from 'react-redux'
import {store} from "./store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* eslint-disable-next-line no-undef */}
          <Provider store={store}>
                <RouterProvider router={router}/>
        </Provider>
  </StrictMode>
)
