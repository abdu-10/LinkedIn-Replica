import React, { useState } from "react";
import { Dialog } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLoggedInUserRef } from "../../../../features/users/userSlice";
import { completeSeekerAccount } from "../../../../api/seeker/seekerApis";


const CompleteAccountDialog = ({ openCompleteAccountDialog, closeCompleteAccountDialog }) => {
    const user_code = useSelector(selectLoggedInUserRef)
    console.log(user_code)

    const [values, setValues] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        gender: "",
    })

    const {
        full_name,
        email,
        phone_number,
        gender,
    } = values

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        return completeSeekerAccount(full_name, phone_number, email, gender, user_code)
        .then((res) => {
            if (res.status === 201){
                closeCompleteAccountDialog();
                // success snackbar and close the daialog
            }
        })
        .catch((err) => {
            // log error and display error snackbar
            console.log(err);
            // setValues({
            //   ...values,
            //   snackbarMessage: err.message,
            //   openSnackbar: true,
            //   snackbarSeverity: "error",
            // });
          });
    }

    return (
        <Dialog
            maxWidth="md"
            fullWidth
            open={openCompleteAccountDialog}
            onClose={closeCompleteAccountDialog}
        >
            <div className="bg-white shadow-md rounded mt-20 px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 md:flex mb-6">
                    <h2> Tell us a bit more about yourself</h2>
                    <form className="flex" onSubmit={(e) => handleSubmit(e)}>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                for="first_name"
                                className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                                Full Name
                            </label>
                            <input
                                id="full_name"
                                type="text"
                                name="full_name"
                                value={full_name}
                                onChange={handleChange("full_name")}
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            />
                            <label
                                for="first_name"
                                className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="text"
                                name="email"
                                value={email}
                                onChange={handleChange("email")}
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            />
                            <label
                                for="first_name"
                                className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                                Phone Number
                            </label>
                            <input
                                id="full_name"
                                type="number"
                                name="full_name"
                                value={phone_number}
                                onChange={handleChange("phone_number")}
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            />
                            <label
                                for="email"
                                className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                                Gender
                            </label>
                            <input
                                id="email"
                                type="text"
                                name="gender"
                                value={gender}
                                onChange={handleChange("gender")}
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            />
                        </div>
                        <div className="md:col-span-5 text-right">
                            <div className="inline-flex items-end">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bottom mt-96" >
                                    Add Details
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </Dialog>
    )

}

export default CompleteAccountDialog;