import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainContent from "./components/common/MainPage/MainContent";
import SignIn from "./components/common/forms/SignIn";
import Register from "./components/common/forms/Register";
import Profile from "./components/seeker/Profile";
import Landing from "../src/components/common/MainPage/Landing";
import JobsPage from "./components/seeker/JobsPage";
import AdminDashboard from "./components/admin/AdminDashboard";
import AllEmployers from "./components/admin/views/AllEmployers";
import AllSeekers from "./components/admin/views/AllSeekers";
import JobApplication from "./components/seeker/JobApplication";
import AdminNav from "./components/admin/Navs/AdminNav";
import EmployerNav from "./components/employer/EmployerNav";
import UsersTable from "./components/admin/tables/UsersTable";
import EmployerSpecific from "./components/employer/EmployerSpecific";
import Navbar from "./components/seeker/Navbar";
import MySeekers from "./components/employer/MySeekers";
import EmployerProfile from "./components/employer/EmployerProfile";
import SeekerDetails from "./components/seeker/SeekerDetails";
import EmployerDetails from "./components/employer/EmployerDetails";
import CreateAdmin from "./components/admin/CreateAdmin";
import UnAuthorized from "./components/common/views/UnAuthorized";
import EditSeekerDetails from "./components/seeker/EditSeekerDetails";
import JobPost from "./components/employer/jobs/JobPost";
// import EditorComponent from "./components/employer/jobs/FiltersNotifier";
import SkillDescription from "./components/employer/jobs/SkillDescription";
// import FiltersNotifier from "./components/employer/jobs/FiltersNotifier";
import ConfigJobs from "./components/admin/ConfigJobTags";
import CreateJobs from "./components/admin/CreateJobTag";
import EditAdminProfile from "./components/admin/EditAdminProfile"
import AllPosts from "./components/admin/AllPosts";
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
          </Route>
          <Route path="profile" element={<EditAdminProfile />} />
        </Route>

        {/* EMPLOYER ROUTES */}

        {/* <Route element={<RequireAuth requiredRouteRole={"EMPLOYER"} />}> */}
          <Route path="/employer" element={<EmployerNav />}>
            <Route index element={<MainContent />} />
            <Route path="dashboard" element={<MainContent />} />
            <Route path="job-post" element={<JobPost />} />
            <Route path="skill" element={<SkillDescription />} />
            {/* <Route path="job-post" element={<FiltersNotifier />} /> */}
            {/* PENDING: FIND LOGIC TO FIND SEEKERS WHILE DISPLAYING AN INITIAL CURATED LIST */}
            <Route path="seekers" element={<EmployerSpecific />} />
            <Route path="myseekers" element={<MySeekers />} />
            <Route path="profile" element={<EmployerProfile />} />
            <Route path="details" element={<EmployerDetails />} />
          </Route>
        {/* </Route> */}
        {/* SEEKER ROUTES */}
        {/* <Route element={<RequireAuth requiredRouteRole={"SEEKER"} />}> */}
          <Route path="/seeker" element={<Navbar />}>
            <Route index={true} element={<MainContent />} />
            <Route path="jobs" element={<JobsPage />}>
              <Route path="apply" exact element={<JobApplication />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="details" element={<SeekerDetails />} />
          </Route>
        {/* </Route> */}
        <Route path="/edit" element={<EditSeekerDetails />} />
      </Routes>
    </div>
  );
}
export default App;