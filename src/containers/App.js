import React from 'react';
import { BrowserRouter } from "react-router-dom";


import { AuthProvider } from '../contexts/auth';

import Routes from '../routes/index'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
      <BrowserRouter>
			  <AuthProvider>
          <Routes/>
        </AuthProvider>
      </BrowserRouter>
  )
}
