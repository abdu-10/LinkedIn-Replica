import React from "react";
import { Dialog } from "@mui/material";

const EditEmployerProfileDialog = ({ openEditProfileDialog, closeEditProfileDialog }) => {
    // HARDCODED PROFILE CODE
    // let seeker_code = "jcjq-3abc-w732"
    return (
        <Dialog
            maxWidth="md"
            fullWidth
            open={openEditProfileDialog}
            onClose={closeEditProfileDialog}
        >
            <div className="bg-white shadow-md rounded mt-20 px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 md:flex mb-6">
                    <form className="flex">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                for="company_name"
                                className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                                Company Name
                            </label>
                            <input
                                id="company_name"
                                type="text"
                                name="company_name"
                                value={""}
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            />
                            <label
                                for="email"
                                className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="text"
                                name="email"
                                value={""}
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            />
                            <label
                                for="preferred_job"
                                className="block text-xs font-semibold text-gray-600 uppercase"
                            >
                                Description
                            </label>
                            {/* <input
                                id="preferred_job"
                                type="text"
                                name="preferred_job"
                                value={""}
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            /> */}
                            <textarea id="description"
                             cols="30"
                              rows="10"
                              value={""}
                               placeholder="write here.."
                                class="w-full font-serif  p-4 text-black bg-stone-50 outline-none rounded-md">
                                </textarea>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label
                                for="phone_number"
                                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                            >
                                Phone Number
                            </label>
                            <input
                                id="phone_number"
                                type="text"
                                name="phone_number"
                                value={""}
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            />
                            <label
                                for="location"
                                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                            >
                                Location
                            </label>
                            <input
                                id="location"
                                type="text"
                                name="location"
                                value={""}
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                            />
                           
                            <div className="md:col-span-2">
                                <label for="password">Enter Preferred Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    value={""}
                                    placeholder=""
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label for="password_confirmation">Enter Password Again</label>
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    id="password_confirmation"
                                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                    value={""}
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="md:col-span-5 text-right">
                            <div className="inline-flex items-end">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bottom mt-96">
                                    Update Account Details
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </Dialog>
    )

}

export default EditEmployerProfileDialog;