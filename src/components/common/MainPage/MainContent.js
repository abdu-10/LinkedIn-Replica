import React, { useState, useEffect } from "react";
import "./Maincontent.css";
import Options from "./Options";
import CompleteAccountDialog from "./dialogs/CompleteAccountDialog";
import EmployerProfileDialog from "./dialogs/EmployerProfileDialog";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLoggedInUserRef,
  selectCurrentUserRole,
} from "../../../features/users/userSlice";
import { setCurrentEmployerDetail } from "../../../features/employers/employerSlice";
import {
  setCurrentSeekerDetail,
  setSeekerCode,
} from "../../../features/seekers/seekerSlice";

import { useLayoutEffect } from "react";
// import PostCard from "./dialogs/Cards/PostCard";
import CreatePost from "./CreatePost";

import { getSeekerProfile } from "../../../api/seeker/seekerApis";
import { getEmployerProfile } from "../../../api/employer/employerApis";
import { getPosts } from "../../../api/common/commonApis";
import PostCard from "./dialogs/Cards/PostCard";
import { selectCurrentEmployerDetail } from "../../../features/employers/employerSlice";
import { selectCurrentSeekerDetail } from "../../../features/seekers/seekerSlice";
import CustomSnackbar from "../utils/CustomSnackbar";
function MainContent() {
  const [posts, setPosts] = useState([]); //creates a state to hold input values from textbox
  const [text, setText] = useState(""); //creates a state to hold input values from textbox
  const [openCompleteAccountDialog, setOpenCompleteAccountDialog] =
    useState(false);
  const [openEditProfileDialog, setOpenEditProfileDialog] = useState(false);
  const [formx, setForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showUp, setshowUp] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // to set the second div on the right to fixed
  const dispatch = useDispatch();
  const user_ref = useSelector(selectLoggedInUserRef);
  const user_role = useSelector(selectCurrentUserRole);

  // Define a state variable to hold the current profile data
  const [profile, setProfile] = useState({
    avatar_url: "",
    company_name: "",
    full_name: "",
  });

  const profile1 = useSelector(selectCurrentEmployerDetail);
  const profile2 = useSelector(selectCurrentSeekerDetail);

  const [values, setValues] = useState({
    snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
  });
  const { snackbarMessage, openSnackbar, snackbarSeverity } = values;

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setValues({ ...values, openSnackbar: false });
  };

  // Function to display the appropriate profile based on user role
  const displayProfile = () => {
    if (user_role === "SEEKER") {
      setProfile(profile2);
    } else {
      setProfile(profile1);
    }
  };

  useEffect(() => {
    displayProfile();
  }, []);

  const fetchPostsToDisplay = () => {
    getPosts()
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPostsToDisplay();
  }, []);

  // Function to fetch and check user profile
  const checkUserProfile = () => {
    if (user_role === "EMPLOYER") {
      getEmployerProfile(user_ref)
        .then((res) => {
          if (res.data.error === "Employer not found") {
            setValues({
              ...values,
              snackbarMessage:
                "Please complete your profile to proceed utilize app",
              openSnackbar: true,
              snackbarSeverity: "error",
            });
            setOpenEditProfileDialog(true);
          } else {
            setProfile(res.data);
            dispatch(
              setCurrentEmployerDetail({ currentEmployerDetail: res.data })
            );
          }
        })
    } else if (user_role === "SEEKER") {
      getSeekerProfile(user_ref)
        .then((res) => {
          if (res.data.error === "Seeker not found") {
            setValues({
              ...values,
              snackbarMessage:
                "Please complete your profile to proceed utilize app",
              openSnackbar: true,
              snackbarSeverity: "error",
            });
          } else {
            setProfile(res.data);
            dispatch(setCurrentSeekerDetail({ currentSeekerDetail: res.data }));
            dispatch(setSeekerCode({ seekerCode: res.data.seeker_code }));
          }
        })
        .catch((err) => {
          console.log(err);
          setOpenCompleteAccountDialog(true);
        });
    }
  };
  const closeCompleteAccountDialog = () => {
    setOpenCompleteAccountDialog(false);
  };
  const closeEditProfileDialog = () => {
    setOpenEditProfileDialog(false);
  };
  // function to set the div to be fixed when scroll > 300 else leave it alone
  const handleScroll = () => {
    if (window.scrollY >= 300 && !isFixed) {
      setIsFixed(true);
    } else if (window.scrollY < 300 && isFixed) {
      setIsFixed(false);
    }
  };

  // the code below uses the useEffect hook to listen to the window's scroll
  // event using window.addEventListener('scroll', handleScroll). When the
  // component unmounts, it will remove the scroll event listener using
  // window.removeEventListener('scroll', handleScroll) in the cleanup function.

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  //  setting a background color on page load
  useLayoutEffect(() => {
    return () => {
      document.body.style.backgroundColor = "rgb(240,239,235)";
    };
  });

  // display form when textbox is focused on
  const displayForm = (e) => {
    setForm(true);
  };

  // show the messages pane on clicking it or hide it if already showing
  const rollup = () => {
    if (showUp === true) {
      setshowUp(false);
    } else {
      setshowUp(true);
    }
  };

  useEffect(() => {
    checkUserProfile();
  }, []);

  return (
    <>
      <CustomSnackbar
        openSnackbar={openSnackbar}
        handleClose={closeSnackbar}
        snackbarMessage={snackbarMessage}
        snackbarSeverity={snackbarSeverity}
      />
      <CreatePost formx={formx} setForm={setForm} />
      <CompleteAccountDialog
        openCompleteAccountDialog={openCompleteAccountDialog}
        closeCompleteAccountDialog={closeCompleteAccountDialog}
      />
      <EmployerProfileDialog
        openEmployerProfileDialog={openEditProfileDialog}
        closeEmployerProfileDialog={closeEditProfileDialog}
      />
      {/* left side profile */}
      <div className="Main_content bg-[rgb(240,239,235)]">
        <div className="left_content ">
          <div className="left_first">
            <div
              className="backgroundImage"
              style={{
                backgroundImage: `url("https://media.licdn.com/dms/image/C4E16AQHAvKyuZ98BlQ/profile-displaybackgroundimage-shrink_350_1400/0/1662081045859?e=1678924800&v=beta&t=mdJpRY4oKw6sN6h3iPxv49qpMsf-YuKVXQ5obr-MsGU")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img src={profile.avatar_url} alt="profile_image" />
            </div>

            <div className="profile_name">
              <h3>{profile.company_name || profile.full_name}</h3>
              <hr className="mt-3" />
            </div>
          </div>
        </div>

        {/* center  post */}
        <div className="center_content ">
          <div className="head_content">
            <img
              src={profile.avatar_url}
              alt="profile_image"
            />
            <form className="hover:bg-gray-200 cursor-pointer">
              <input
                type="text"
                className="hover:bg-gray-200 cursor-pointer"
                value={text}
                autoComplete="off"
                onFocus={(e) => displayForm(e)}
                onChange={(e) => setText(e.target.value)}
                name="name"
                placeholder="start a post"
              />
              <button type="submit " className="hover:bg-gray-200">
                post
              </button>
            </form>
          </div>
          <Options
            formx={formx}
            setForm={setForm}
            name1="Photo"
            name2="Video"
            name3="Job"
            name4="Write article"
          />

          {posts.length > 0 &&
            posts.map((field, index) => {
              return <PostCard key={index} postData={field} />;
            })}
        </div>

        {/* right side content */}
        <div className="right_content ">
          <div className="right_first fixed top-20">
            <img
              src="https://media.licdn.com/dms/image/C4E0DAQH_Yz2z8_OPhQ/learning-public-crop_288_512/0/1644310895875?e=2147483647&v=beta&t=6vRYoqB70e9vwzfUhPzR5xKgz2mvbAAIGHjAaOK0d3A"
              alt="pro"
            />
          </div>
          <div className="right_second  fixed top-[330px]">
            <div className="footer_details">
              <p className="font-[12px] w-[280px]">
                <img
                  src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
                  alt="logo"
                />
                LinkedIn 🙂 © 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
