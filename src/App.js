import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Maincontent from "./components/common/Main Page/Maincontent";
import Login from "../src/components/common/forms/Login";
import Profile from "../src/components/common/Main Page/Profile";
import Landing from "../src/components/common/Main Page/Landing";
import JobsPage from "./components/seeker/JobsPage";
import AdminDashboard from "./components/admin/AdminDashboard";
import AllEmployers from "./components/admin/views/AllEmployers";
import AllSeekers from "./components/admin/views/AllSeekers";
import JobPosting from "./components/employer/JobPosting";
import JobApplication from "./components/seeker/JobApplication";
import MyNetwork from "./components/seeker/MyNetwork";
import Messages from "./components/common/Main Page/Messages";
import Notification from "./components/common/Main Page/Notification";
import AdminNav from "./components/admin/Navs/AdminNav";
import EmployerNav from "./components/employer/EmployerNav";
import UsersNav from "./components/admin/Navs/UsersNav";
import UsersTable from "./components/admin/tables/UsersTable";
import EmployerSpecific from "./components/employer/EmployerSpecific";
import Navbar from "./components/seeker/Navbar";
import MySeekers from "./components/employer/MySeekers";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home Paths */}
        <Route path="/" element={<Landing />}></Route>
        {/* SIGNUP?? BELOW */}
        <Route path="/login" element={<Login />}></Route>
        {/* REMOVE?? BELOW */}
        <Route path="/home" element={<Maincontent />}></Route>
        {/* HAVE THIS VIEW PAGE BELO */}
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path='messages'element={<Messages />}/> */}
        {/* <Route path='notification'element={<Notification />}/> */}
        {/* ADMIN SPECIFIC ROUTES */}
        <Route path="/admin" element={<AdminNav />}>
        <Route index element={<AdminDashboard />} />
          <Route path="employers" element={<AllEmployers />} />
          <Route path="seekers" element={<AllSeekers />} />
          {/* TO VERIFY USER: Open pop up */}
          {/* <Route path="verify" element={<Verify />} /> */}
          {/* element={<UsersNav />} */}
          <Route path="users" element={<AdminNav />} >
            {/* <Route index={<UserPage />} /> */}
            <Route index={<UsersTable />} />
            {/* <Route path="add-user" element={<AddAdminForm />} /> */}
          </Route>
        </Route>
        {/* EMPLOYER ROUTES */}
        <Route path="/employer" element={<EmployerNav />}  >
        <Route index element={<Maincontent />} />
        <Route path='dashboard' element={<Maincontent />} />
        <Route path="job-post" element={<JobPosting />} />
        {/* PENDING: FIND LOGIC TO FIND SEEKERS WHILE DISPLAYING AN INITIAL CURATED LIST */}
        <Route path="seekers" element={<EmployerSpecific />} />
        <Route path="myseekers" element={<MySeekers />} />
        </Route>
        {/* SEEKER ROUTES */}
        <Route path="/seeker" element={<Navbar />}>
          <Route index={true} element={<Maincontent />} />
          <Route path="jobs" element={<JobsPage />}>
            <Route path="apply" exact element={<JobApplication />} />
          </Route>
          <Route path="network" element={<MyNetwork />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
// npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material
