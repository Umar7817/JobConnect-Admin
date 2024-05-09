import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './component/Home'
import AdminContext from './AdminContext'
import Login from './component/Login'
import Register from './component/Register'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function App() {
  const nevigate = useNavigate()
  const [user, setUser] = useState("")
  const [jobs, setJobs] = useState([])
  const [deleteJob, setDeleteJob] = useState([])
  const [approveJobs, setApproveJobs] = useState([])
  
  useEffect(() => {
     
     fetch("https://jobconnect-server.onrender.com/job/get-all-jobs")
       .then((res) => res.json())
       .then((data) => {
         setJobs(data);
         
       });
   }, []);

   useEffect(() => {
     
    fetch("https://jobconnect-server.onrender.com/job/get-all-jobs")
      .then((res) => res.json())
      .then((data) => {
       setJobs(data);
        
      });
  }, [deleteJob, approveJobs]);

  const register = (name, email, password) => {
    if(!name || !email || !password) {
      return toast.error("Please Fill Details")
    }
    // Register function
    fetch("https://jobconnect-server.onrender.com/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == false) {
          toast.error(data.message);
        } else {
          toast.success("Successfully created account! please Login");
          nevigate("/");
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const login = (email, password) => {

    if(!email || !password) {
      return toast.error("Please Fill Details")
    }
    // Login function
    fetch("https://jobconnect-server.onrender.com/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == false) {
          toast.error(data.message);
        } else {
          toast.success("Login Successful!");
          setUser(data);
          nevigate("/home")
          
        }
        
      })
      .catch((err) => toast.error(err.message));
  };

  const deletePostedJob = (_id) => {
    fetch(`https://jobconnect-server.onrender.com/job/delete-jobs/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Authorization": user.token
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          toast.error(data.message);
        } else {
          toast.success("Jobs Deleted Successfully");
          setDeleteJob(data);
        }
        
      })
      .catch((err) => toast.error(err.message));
   }

   const approveJob = (_id) => {
    fetch(`https://jobconnect-server.onrender.com/job/approve-job/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "Authorization": user.token
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          toast.error(data.message);
        } else {
          toast.success("Job Approved");
          setApproveJobs(data);
        }
        
      })
      .catch((err) => toast.error(err.message));
   }

  return (
   <>
   <AdminContext.Provider value={{login, register, jobs, deletePostedJob, approveJob}}>
    <ToastContainer/>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/home' element={<Home/>}/>
  </Routes>
  </AdminContext.Provider>
   </>
  )
}

export default App
