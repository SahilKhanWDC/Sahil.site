import React from "react";

const Achieve = () => {
  return (
    <div>
      <div className="heading flex justify-start items-center gap-3 py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          baseProfile="tiny"
          id="Layer_1"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          className="w-10 h-10 text-blue-400 group-hover:scale-110 transition-transform duration-500"
          overflow="visible"
          xml:space="preserve"
        >
          <g>
            <g transform="translate(3.000000, 0.000000)">
              <path
                id="Shield"
                fill="#4285F4"
                d="M9,0l-9.7,4.4v6.5C-0.8,17,3.4,22.6,9,24c5.6-1.4,9.7-7,9.7-13.1V4.4L9,0L9,0z"
              />
              <path
                id="Path-3"
                fill="#2879EA"
                d="M18.7,12c-0.1,0.8-0.2,1.6-0.4,2.2c-0.2,0.9-0.5,1.6-0.7,2.1c-0.1,0.3-0.2,0.5-0.3,0.7    c-0.2,0.3-0.3,0.6-0.5,0.9c-0.4,0.7-0.8,1.2-1.2,1.7c-0.4,0.5-0.9,1-1.5,1.6c-0.6,0.5-0.7,0.7-1.4,1.1s-1.1,0.7-2.4,1.2    C10,23.7,9.6,23.8,9,24l-3.2-4.4V6H9h4.7L18.7,12z"
              />
              <path
                id="certificate-manager"
                fill="#FFFFFF"
                d="M9,3.3c3,0,5.4,2.4,5.4,5.5c0,1.8-0.8,3.4-2.2,4.4l0,6.5L9,16.6l-3.2,3.1l0-6.5    c-1.3-1-2.2-2.6-2.2-4.4C3.6,5.7,6,3.3,9,3.3z M9,11.5c1.5,0,2.7-1.2,2.7-2.7S10.5,6,9,6S6.3,7.2,6.3,8.7S7.5,11.5,9,11.5z"
              />
            </g>
          </g>
        </svg>
        <h1 className="text-xl">Achievements & Certifications</h1>
      </div>
      <hr className="h-[2px] w-full bg-gradient-to-r from-black via-violet-700 to-black border-0 rounded-full" />
      <div className="certies py-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8 w-fit m-auto">
        <div className="card w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] pb-1 mx-auto h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] border border-violet-600 rounded-lg">
          <div className="pic w-full rounded-t-lg h-[70%] md:h-[75%] lg:h-[80%]  overflow-hidden">
            <img
              src="/Screenshot 2025-12-01 231525.png"
              alt=""
              className="w-full h-full object-contain pb-2 "
            />
          </div>
          <div className="content w-[300px] lg:w-[350px] xl:w-[400px] mx-auto h-34">
            <div className="naming text-center ">
              <h2 className="text-xl font-semibold">Introduction to Gen AI</h2>
              <p className="text-gray-500">Google Cloud Skill Boost</p>
            </div>
            <div className="px-4">
              <div className="flex gap-3 font-semibold text-violet-600 ">
                <a
                  className="flex justify-center items-center gap-2"
                  href="https://www.skills.google/public_profiles/dba88c2a-5b0b-4c93-adf6-36d8329b5f86/badges/9549581"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    className="w-4 h-6 text-gray-500 group-hover:scale-110 transition-transform duration-500"
                    id="meteor-icon-kit__regular-globe"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12ZM11 21.7628V16H7.44581C7.7595 17.344 8.22181 18.5244 8.77781 19.4775C9.5046 20.7235 10.2854 21.4307 11 21.7628ZM13 16V21.7628C13.7146 21.4307 14.4954 20.7235 15.2222 19.4775C15.7782 18.5244 16.2405 17.344 16.5542 16H13ZM13 14L13 10H16.8927C16.9627 10.6433 17 11.3117 17 12C17 12.6883 16.9627 13.3567 16.8927 14H13ZM11 8V2.23718C10.2854 2.56926 9.5046 3.27654 8.77781 4.52246C8.22181 5.4756 7.7595 6.65603 7.44581 8H11ZM13 2.23718V8H16.5542C16.2405 6.65603 15.7782 5.4756 15.2222 4.52246C14.4954 3.27654 13.7146 2.56926 13 2.23718ZM11 14L11 10H7.10733C7.03727 10.6433 7 11.3117 7 12C7 12.6883 7.03727 13.3567 7.10733 14H11ZM16.7619 20.7956C17.5829 19.4888 18.2206 17.8483 18.6017 16H21.1679C20.2736 18.047 18.7137 19.7367 16.7619 20.7956ZM18.9032 14H21.8C21.9311 13.3538 22 12.6849 22 12C22 11.3151 21.9311 10.6462 21.8 10H18.9032C18.9669 10.6504 19 11.3186 19 12C19 12.6814 18.9669 13.3496 18.9032 14ZM2.20004 14H5.09679C5.03313 13.3496 5 12.6814 5 12C5 11.3186 5.03313 10.6504 5.09679 10H2.20004C2.06886 10.6462 2 11.3151 2 12C2 12.6849 2.06886 13.3538 2.20004 14ZM5.39831 16H2.83209C3.72645 18.047 5.28628 19.7367 7.23811 20.7956C6.41713 19.4888 5.7794 17.8483 5.39831 16ZM21.1679 8H18.6017C18.2206 6.15168 17.5829 4.5112 16.7619 3.20439C18.7137 4.26334 20.2736 5.95303 21.1679 8ZM5.39831 8C5.7794 6.15168 6.41713 4.5112 7.23811 3.20439C5.28627 4.26334 3.72645 5.95303 2.83209 8H5.39831Z"
                      fill="#758CA3"
                    />
                  </svg>{" "}
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] pb-1 mx-auto h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] border border-violet-600 rounded-lg">
          <div className="pic w-full rounded-t-lg h-[70%] md:h-[75%] lg:h-[80%] overflow-hidden">
            <img
              src="/Screenshot 2025-12-01 231557.png"
              alt=""
              className="w-full h-full object-contain pb-2"
            />
          </div>
          <div className="content w-[300px] lg:w-[350px] xl:w-[400px] mx-auto h-34">
            <div className="naming text-center ">
              <h2 className="text-xl font-semibold">Introduction to LLMs</h2>
              <p className="text-gray-500">Google Cloud Skill Boost</p>
            </div>
            <div className="px-4">
              
              <div className="flex gap-3 font-semibold text-violet-600 ">
                <a
                  className="flex justify-center items-center gap-2"
                  href="https://www.skills.google/public_profiles/dba88c2a-5b0b-4c93-adf6-36d8329b5f86/badges/9564101"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="800px"
                    height="800px"
                    viewBox="0 0 24 24"
                    className="w-4 h-6 text-gray-500 group-hover:scale-110 transition-transform duration-500"
                    id="meteor-icon-kit__regular-globe"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12ZM11 21.7628V16H7.44581C7.7595 17.344 8.22181 18.5244 8.77781 19.4775C9.5046 20.7235 10.2854 21.4307 11 21.7628ZM13 16V21.7628C13.7146 21.4307 14.4954 20.7235 15.2222 19.4775C15.7782 18.5244 16.2405 17.344 16.5542 16H13ZM13 14L13 10H16.8927C16.9627 10.6433 17 11.3117 17 12C17 12.6883 16.9627 13.3567 16.8927 14H13ZM11 8V2.23718C10.2854 2.56926 9.5046 3.27654 8.77781 4.52246C8.22181 5.4756 7.7595 6.65603 7.44581 8H11ZM13 2.23718V8H16.5542C16.2405 6.65603 15.7782 5.4756 15.2222 4.52246C14.4954 3.27654 13.7146 2.56926 13 2.23718ZM11 14L11 10H7.10733C7.03727 10.6433 7 11.3117 7 12C7 12.6883 7.03727 13.3567 7.10733 14H11ZM16.7619 20.7956C17.5829 19.4888 18.2206 17.8483 18.6017 16H21.1679C20.2736 18.047 18.7137 19.7367 16.7619 20.7956ZM18.9032 14H21.8C21.9311 13.3538 22 12.6849 22 12C22 11.3151 21.9311 10.6462 21.8 10H18.9032C18.9669 10.6504 19 11.3186 19 12C19 12.6814 18.9669 13.3496 18.9032 14ZM2.20004 14H5.09679C5.03313 13.3496 5 12.6814 5 12C5 11.3186 5.03313 10.6504 5.09679 10H2.20004C2.06886 10.6462 2 11.3151 2 12C2 12.6849 2.06886 13.3538 2.20004 14ZM5.39831 16H2.83209C3.72645 18.047 5.28628 19.7367 7.23811 20.7956C6.41713 19.4888 5.7794 17.8483 5.39831 16ZM21.1679 8H18.6017C18.2206 6.15168 17.5829 4.5112 16.7619 3.20439C18.7137 4.26334 20.2736 5.95303 21.1679 8ZM5.39831 8C5.7794 6.15168 6.41713 4.5112 7.23811 3.20439C5.28627 4.26334 3.72645 5.95303 2.83209 8H5.39831Z"
                      fill="#758CA3"
                    />
                  </svg>{" "}
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] pb-3 mx-auto h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] border border-violet-600 rounded-lg">
          <div className="pic w-full h-[70%] md:h-[75%] lg:h-[80%] rounded-t-lg overflow-hidden">
            <img
              src="/Screenshot 2025-12-01 231656.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
          <div className="content w-[300px] lg:w-[350px] xl:w-[400px] mx-auto h-34">
            <div className="naming text-center ">
              <h2 className="text-lg font-semibold">2 times Google Arcade Fecilitator Cohort Participent</h2>
              <p className="text-gray-500">Google Cloud Skill Boost</p>
            </div>
            {/* <div className="px-4">
              
              <div className="flex gap-3 font-semibold text-violet-600 ">
              </div>
            </div> */}
          </div>
        </div>
      </div>
    
    
    
    </div>
  );
};

export default Achieve;
