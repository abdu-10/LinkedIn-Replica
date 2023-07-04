import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainContent from "./components/common/MainPage/MainContent";
import Login from "../src/components/common/forms/Login";
import SignIn from "./components/common/forms/SignIn";
import Register from "./components/common/forms/Register";
import Profile from "./components/seeker/Profile";
import Landing from "./components/common/MainPage/Landing";
import JobsPage from "./components/seeker/JobsPage";
import AdminDashboard from "./components/admin/AdminDashboard";
import AllEmployers from "./components/admin/views/AllEmployers";
import AllSeekers from "./components/admin/views/AllSeekers";
import JobPosting from "./components/employer/JobPosting";
import JobApplication from "./components/seeker/JobApplication";
import MyNetwork from "./components/seeker/MyNetwork";
import Messages from "./components/common/MainPage/Messages";
import Notification from "./components/common/MainPage/Notification";
import AdminNav from "./components/admin/Navs/AdminNav";
import EmployerNav from "./components/employer/EmployerNav";
import UsersNav from "./components/admin/Navs/UsersNav";
import UsersTable from "./components/admin/tables/UsersTable";
import EmployerSpecific from "./components/employer/EmployerSpecific";
import Navbar from "./components/seeker/Navbar";
import MySeekers from "./components/employer/MySeekers";
import SignUp from "./components/common/forms/SignUp";
import EmployerProfile from "./components/employer/EmployerProfile";
import SeekerDetails from "./components/seeker/SeekerDetails";
import EmployerDetails from "./components/employer/EmployerDetails";
import CreateAdmin from "./components/admin/CreateAdmin";
import UnAuthorized from "./components/common/views/UnAuthorized";
import RequireAuth from "./components/common/forms/RequireAuth";
import EditSeekerDetails from "./components/seeker/EditSeekerDetails";
import ConfigJobs from "./components/admin/ConfigJobs";
import CreateJobs from "./components/admin/CreateJobs";
import AdminProfile from "./components/admin/AdminProfile";
import AllPosts from "./components/admin/AllPosts";
import RolePost from "./components/employer/RolePost";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Home Paths */}
        <Route path="/" element={<Landing />}></Route>
        {/* SIGNUP?? BELOW */}
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/unauth" element={<UnAuthorized />}></Route>

        {/* <Route path='messages'element={<Messages />}/> */}
        {/* <Route path='notification'element={<Notification />}/> */}
        {/* ADMIN SPECIFIC ROUTES */}
        {/* <Route element={<RequireAuth requiredRouteRole={"ADMIN"} />}> */}
        <Route path="/admin" element={<AdminNav />}>
          <Route index element={<AdminDashboard />} />
          <Route path="employers">
            <Route index element={<AllEmployers/>} />
            <Route path="details" element={<EmployerDetails />} />
          </Route>
          <Route path="seekers">
          <Route index element={<AllSeekers />} />
          <Route path="details" element={<SeekerDetails />} />
          </Route>
          <Route path="create-admin" element={<CreateAdmin />} />
          <Route path="job-tags" element={<ConfigJobs />} />
          <Route path="create-tags" element={<CreateJobs />} />
          <Route path="all-posts" element={<AllPosts />} />
          {/* TO VERIFY USER: Open pop up */}
          {/* <Route path="verify" element={<Verify />} /> */}
          {/* element={<UsersNav />} */}
          <Route path="users" element={<UsersTable />}>
            {/* <Route index={<UserPage />} /> */}
            {/* <Route index element={<UsersTable />} /> */}
            {/* <Route path="add-user" element={<AddAdminForm />} /> */}
          </Route>
          <Route path="profile" element={<AdminProfile />} />
        </Route>

        {/* </Route> */}

        {/* EMPLOYER ROUTES */}
        {/* <Route element={<RequireAuth requiredRouteRole={"EMPLOYER"} />}> */}
        <Route path="/employer" element={<EmployerNav />}>
          <Route index element={<MainContent />} />
          <Route path="dashboard" element={<MainContent />} />
          <Route path="job-post" element={<JobPosting />} />
          <Route path="desc" element={<RolePostPost />} />
          {/* PENDING: FIND LOGIC TO FIND SEEKERS WHILE DISPLAYING AN INITIAL CURATED LIST */}
          <Route path="seekers" element={<EmployerSpecific />} />
          <Route path="myseekers" element={<MySeekers />} />
          <Route path="profile" element={<EmployerProfile />} />
          
        </Route>
        {/* </Route> */}
        {/* SEEKER ROUTES */}
        {/* <Route element={<RequireAuth requiredRouteRole={"SEEKER"} />}> */}
        <Route path="/seeker" element={<Navbar />}>
          <Route index={true} element={<MainContent />} />
          <Route path="jobs" element={<JobsPage />}>
            <Route path="apply" exact element={<JobApplication />} />
          </Route>
          <Route path="network" element={<MyNetwork />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
