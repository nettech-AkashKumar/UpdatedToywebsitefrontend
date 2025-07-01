import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PageRouter from './Router/PageRouter';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";




function App() {


  return (
    <>
      <PageRouter />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
