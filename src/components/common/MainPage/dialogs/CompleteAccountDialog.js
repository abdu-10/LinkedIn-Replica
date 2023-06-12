import React, { useState } from "react";
import { Dialog } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectLoggedInUserRef } from "../../../../features/users/userSlice";
import { completeSeekerAccount } from "../../../../api/seeker/seekerApis";
import { setCurrentSeekerDetail } from "../../../../features/seekers/seekerSlice";
import CustomSnackbar from "../../utils/CustomSnackbar";
const CompleteAccountDialog = ({
  openCompleteAccountDialog,
  closeCompleteAccountDialog,
}) => {
  const user_code = useSelector(selectLoggedInUserRef);
  console.log(user_code);

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    gender: "",

    snackbarMessage: "",
    openSnackbar: false,
    snackbarSeverity: "success",
  });

  const {
    full_name,
    email,
    phone_number,
    gender,
    snackbarMessage,
    openSnackbar,
    snackbarSeverity,
  } = values;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setValues({ ...values, openSnackbar: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return completeSeekerAccount(
      full_name,
      phone_number,
      email,
      gender,
      user_code
    )
      .then((res) => {
        if (res.status === 201) {
          // success snackbar and close the daialog
          setValues({
            ...values,
            snackbarMessage: "Account Updated Succesfully",
            openSnackbar: true,
            snackbarSeverity: "success",
          });
          setTimeout(() => {
            closeCompleteAccountDialog();
          }, 3000);
          dispatch(
            setCurrentSeekerDetail({ currentSeekerDetail: res.data })
          );
        }
      })
      .catch((err) => {
        // log error and display error snackbar
        console.log(err);
        setValues({
          ...values,
          snackbarMessage: err.message,
          openSnackbar: true,
          snackbarSeverity: "error",
        });
      });
  };

  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={openCompleteAccountDialog}
      onClose={closeCompleteAccountDialog}
    >
      <CustomSnackbar
        openSnackbar={openSnackbar}
        handleClose={closeSnackbar}
        snackbarMessage={snackbarMessage}
        snackbarSeverity={snackbarSeverity}
      />
      <div class="w-full bg-grey-500">
        <div class="container mx-auto py-8">
          <div class="w-96 mx-auto bg-white rounded shadow">
            <div class="mx-1 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">
              Tell us a bit more about yourself
            </div>

            <form
              onSubmit={(e) => handleSubmit(e)}
              name="student_application"
              id="student_application"
              action=""
            >
              <div class="py-4 px-8">
                <div class="mb-4">
                  <label class="block text-grey-darker text-sm font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    class=" border rounded w-full py-2 px-3 text-grey-darker"
                    type="text"
                    id="full_name"
                    name="full_name"
                    value={full_name}
                    onChange={handleChange("full_name")}
                    placeholder="Enter Your Full Name"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-grey-darker text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    class=" border rounded w-full py-2 px-3 text-grey-darker"
                    id="email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange("email")}
                    placeholder="Enter Your Email"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-grey-darker text-sm font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    class=" border rounded w-full py-2 px-3 text-grey-darker"
                    id="full_name"
                    type="number"
                    name="full_name"
                    value={phone_number}
                    onChange={handleChange("phone_number")}
                    placeholder="Enter Your Phone Number"
                  />
                </div>

                <div class="mb-4">
                  <label class="block text-grey-darker text-sm font-bold mb-2">
                    Gender
                  </label>
                  <input
                    class=" border rounded w-full py-2 px-3 text-grey-darker"
                    id="gender"
                    type="text"
                    name="gender"
                    value={gender}
                    onChange={handleChange("gender")}
                  />
                </div>
                <div class="mb-4">
                  <button class="mb-2 mx-16 rounded-full py-1 px-24 bg-gradient-to-r from-blue-600 to-blue-700 ">
                    Add Details
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CompleteAccountDialog;
