import React from "react";
import { Link } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import AssignmentIcon from "@mui/icons-material/Assignment";

function JobApplication() {
  return (
    <>
      <div class="container mx-auto bg-white mt-12 p-4 lg:p-12">
        <div class="grid grid-cols-1 gap-1 lg:grid-cols-2">
          <div class="overflow-hidden rounded-2xl p-4 lg:p-12">
            <div class="flex items-center bg-blue-500 text-white">
              <p class="text-md">
                Jobs based on your profile
              </p>
            </div>

            <div class="pt--10 pr-0 pb-10 pl-0">
              <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                  <div class="flex items-center flex-1 min-w-0">
                    <img
                      src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/SlackLogo_CompanyNews_SecondaryAubergine_Hero.jpg?d=500x500&amp;f=fill"
                      class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"
                    />
                    <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                      <p class="text-lg font-bold text-gray-800 truncate">
                        <Link
                          to="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Engineering Manager
                        </Link>
                      </p>
                      <p class="text-gray-600 text-md">Slack</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                  <div class="flex items-center flex-1 min-w-0">
                    <img
                      src="https://www.growthmarketingpro.com/wp-content/uploads/2019/10/basecamp-logo.png"
                      class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"
                    />
                    <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                      <p class="text-lg font-bold text-gray-800 truncate">
                        <Link
                          to="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Senior Software Engineer
                        </Link>
                      </p>
                      <p class="text-gray-600 text-md">Basecamp</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                  <div class="flex items-center flex-1 min-w-0">
                    <img
                      src="https://djmag.com/sites/default/files/article/image/Spotify.png"
                      class="flex-shrink-0
                    object-cover rounded-full btn- w-10 h-10"
                    />
                    <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                      <p class="text-lg font-bold text-gray-800 truncate">
                        <Link
                          to="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Frontend Developer
                        </Link>
                      </p>
                      <p class="text-gray-600 text-md">Spotify</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                  <div class="flex items-center flex-1 min-w-0">
                    <img
                      src="https://miro.medium.com/max/512/1*n81Kr3UGUVsF0LLRgRQrJw.jpeg"
                      class="flex-shrink-0
                    object-cover rounded-full btn- w-10 h-10"
                    />
                    <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                      <p class="text-lg font-bold text-gray-800 truncate">
                        <Link
                          to="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Lead Software Engineer
                        </Link>
                      </p>
                      <p class="text-gray-600 text-md">Figma</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                  <div class="flex items-center flex-1 min-w-0">
                    <img
                      src="https://i.pinimg.com/originals/96/02/08/9602083f42463bb813399310d72233c5.png"
                      class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10"
                    />
                    <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                      <p class="text-lg font-bold text-gray-800 truncate">
                        <Link
                          to="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Software Engineer
                        </Link>
                      </p>
                      <p class="text-gray-600 text-md">Pinterest</p>
                    </div>
                  </div>
              </div>
              </div>
            </div>

            {/* Application */}
            <div class="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125"></div>
          </div>

          <div class="overflow-hidden rounded-2xl p-4 lg:p-12">
            <div class="flex items-center"></div>

            <h2 class="mt-4 text-3xl font-semibold text-slate-800">
              Engineering Manager
            </h2>

            <p class="mt-1 text-sm text-slate-600">
              East-West Seed Nairobi County, Kenya Hybrid 3 weeks ago Over 200
              applicants
            </p>
            <li className="mt-4">
              <WorkIcon />
              <span className="text-sm"> Full-time · Mid-Senior level</span>
            </li>
            <li className="mt-4">
              <CorporateFareIcon />
              <span className="text-sm"> 1,001-5,000 employees · Farming</span>
            </li>
            <li className="mt-4">
              <TipsAndUpdatesIcon />
              <span className="text-sm">
                {" "}
                See how you compare to 1,131 applicants.
              </span>
            </li>
            <li className="mt-4">
              <AssignmentIcon />
              <span className="text-sm">
                {" "}
                Skills: Sales & Marketing, Business Strategy, +5 more
              </span>
            </li>

            <div class=" mt-7 mr-12 flex">
              <button class="bg-blue-600 font-semibold text-white p-2 w-32 rounded-full hover:bg-blue-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2">
                Easy Apply
              </button>

              <button class="bg-white font-semibold text-cyan-900 p-2 w-32 rounded-full hover:bg-blue-100 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2">
                Save
              </button>
            </div>

            <h4 className="mt-4 text-xl font-semibold text-slate-800">
              About the job
            </h4>

            <p>
              This role is responsible for assessing the market landscape and
              identifying available business opportunities for East-West Seed
              (EWS) which can be used as the basis for formulating and driving
              the market entry strategy including how to set up the commercial
              operations network to optimize the potential opportunities to
              generate new sources of business growth for EWS. The incumbent in
              this role is expected to work collaboratively with internal and
              external stakeholders and deliver results with and through others.
            </p>

            <h5 className="mt-2 text-l font-semibold text-slate-800">
              Minimum Requirements (Education, Experience, Skills)
            </h5>

            <p>
              <li>Must be a bachelor’s degree holder</li>
              <li>
                Previous experience (8+ years) in a sales, marketing, or
                commercial role in a similar or related industry is required.
              </li>
              <li>
                Knowledge of the vegetable seed industry is a clear advantage
              </li>
              <li>
                Familiar with distribution management, budget planning, and
                understanding of P&L reports
              </li>
            </p>

            <div class="mt-12 flex transform items-center justify-center transition-transform duration-150 ease-in-out hover:scale-125"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobApplication;
