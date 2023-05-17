import React from "react";
import "./Maincontent.css";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import GroupsIcon from "@mui/icons-material/Groups";
import Options from "./Options";

import { useState, useEffect, useLayoutEffect } from "react";

import Addpost from "./Addpost";
import CreatePost from "./CreatePost";


function Maincontent() {
  const [posts, setPosts] = useState([]); //creates a state to hold input values from textbox
  const [text, setText] = useState(""); //creates a state to hold input values from textbox

  const [formx, setForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showUp, setshowUp] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // to set the second div on the right to fixed

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

  return (
    <>
      <CreatePost formx={formx} setForm={setForm} />
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
              <img
                src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                alt="profile_image"
              />
            </div>

            <div className="profile_name">
              <h3>Abdu</h3>
              <p className="-mt-[9px] text-[12px] text-gray-500 p-2">
                C# || Laravel || React.JS || React Native || Redux || Next.js
              </p>
              <hr className="mt-3" />
            </div>

            <div className="reactions_ text-[rgb(101,101,101)] text-[13px] mt-2">
              <h5 className="hover:bg-gray-200 cursor-pointer p-1 pl-3 ">
                Who's Viewed your profile{" "}
                <span className="count text-[rgb(18,80,181)] ml-3">500</span>
              </h5>
              <h5 className="hover:bg-gray-200 cursor-pointer p-1 -mt-[9px] pl-3">
                Impressions on post{" "}
                <span className="count_ text-[rgb(18,80,181)] ml-[45px]">
                  1,200
                </span>
              </h5>
            </div>
            <hr className="mt-2" />
            <div className="premium">
              <p className="premium_note">
                Access exclusive tools and insights
              </p>
              <p className="premium_link -mt-[10px]">
                <a href="/#">Try premium for free</a>
              </p>
            </div>
            <hr />
            <div className="wishlist p-1">
              <p className="text-[13px] ml-1">
                <ReceiptLongIcon />
                My items
              </p>
            </div>
          </div>

          {/* if position is fixed , set the top to be 70px else leave it as it is */}
          <div
            className={`left_second w-[240px]  ${
              isFixed ? `fixed top-[70px] ` : ""
            }`}
          >
            {/* recents */}
            <h5>Recents</h5>
            <p>
              <DesktopMacIcon />
              <a href="/#">Make an App worth $1,000...</a>
            </p>
            <p>
              <GroupsIcon />
              <a href="/#">Leadership Think Tank</a>
            </p>
            <p>
              <GroupsIcon />
              <a href="/#">African intelligence , Deep...</a>
            </p>
            <p>
              <GroupsIcon />
              <a href="/#">African Banking, Network-Fi...</a>
            </p>
            <p>
              <GroupsIcon />
              <a href="/#">Ghana Professional Netwo...</a>
            </p>
              {/* groups */}
            <h5>
              <span className="groups">Groups</span>
            </h5>
            <p>
              <GroupsIcon />
              <a href="/#">Leadership Think Tank</a>
            </p>
            <p>
              <GroupsIcon />
              <a href="/#">African intelligence , Deep...</a>
            </p>
            <p>
              <GroupsIcon />
              <a href="/#">Ghana Professional Netwo...</a>
            </p>
            <p>
              <GroupsIcon />
              <a href="/#">Python Developers Commu...</a>
            </p>
            <p>
              <GroupsIcon />
              <a href="/#">UX Design</a>
            </p>
            <p>
              <a href="/#">view all</a>
            </p>
          </div>
        </div>

        {/* center  post */}
        <div className="center_content ">
          <div className="head_content">
            <img
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
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
          <Addpost loading={loading} setLoading={setLoading} posts={posts} />
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
              <ul className="p-2 borde w-[300px]">
                <li>
                  <a href="/#">About</a>
                </li>
                <li>
                  <a href="/#">Accessibility</a>
                </li>
                <li>
                  <a href="/#">Help Center</a>
                </li>
                <li>
                  <a href="/#">Privacy and Terms</a>
                </li>
                <li>
                  <a href="/#">Add Choices</a>
                </li>
                <li>
                  <a href="/#">Advertising</a>
                </li>
                <li>
                  <a href="/#">Business Services</a>
                </li>
                <li>
                  <a href="/#">Get the LinkedIn app</a>
                </li>
                <li>
                  <a href="/#">More</a>
                </li>
              </ul>
              <p className="font-[12px] w-[280px]">
                <img
                  src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
                  alt="logo"
                />
                Abdu 🙂 © 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maincontent;
