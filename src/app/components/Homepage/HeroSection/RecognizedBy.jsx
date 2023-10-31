 
 import React, { useEffect } from "react";
 import number from '@/app/components/common/Constants'
 import AOS from 'aos';
import 'aos/dist/aos.css'; 
const RecognizedBy = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      AOS.init({
        offset: 300,
        duration: 1000,
        once: true,
        easing: 'ease',
      });
    }
  }, []);
  return (
    <div className="py-7">
      <div>
        <h1 
        data-aos='fade-up'
          style={{ fontFamily: "Poppins" }}
          className="tracking-[0.08em] text-sm text-black font-bold leading-[150%]"
        >
          Recognized by
        </h1>
      </div>
      <div className="flex flex-wrap gap-7 itesm-center mt-7">
        <div>
          <div className="max-w-[95px]"
          data-aos='fade-up'>
            <img src="images/google.png" alt="" />
          </div>
          <div data-aos='fade-up' className="flex items-center gap-1 mt-3">
            <div >
              <svg
                width="22"
                height="20"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                  fill="#FFC01F"
                />
              </svg>
            </div>
            <div>
              <svg
                width="22"
                height="20"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                  fill="#FFC01F"
                />
              </svg>
            </div>
            <div>
              <svg
                width="22"
                height="20"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                  fill="#FFC01F"
                />
              </svg>
            </div>
            <div>
              <svg
                width="22"
                height="20"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                  fill="#FFC01F"
                />
              </svg>
            </div>
            <div className="mr-1">
              <svg
                width="22"
                height="20"
                viewBox="0 0 388 388"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1989_1039)">
                  <path
                    d="M194 258.149L262.66 296.577L247.318 219.414L305.081 165.983L226.948 156.72L194 85.2791V258.149ZM194 295.203L79.9764 359.029L105.439 230.86L9.48975 142.137L139.26 126.747L194 8.08325L248.74 126.747L378.51 142.137L282.561 230.86L308.023 359.029L194 295.203Z"
                    fill="#FFC01F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1989_1039">
                    <rect width="388" height="388" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-[#141619] font-semibold text-sm leading-[120%] reviwes">
              ({number.GoogleReview} REVIEWS)
            </div>
          </div>
        </div>
        <div>
          <div data-aos='fade-up' className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width={95}
              height={42}
              fill="none"
            >
              <path fill="url(#a)" d="M0 0h123v42H0z" />
              <defs>
                <pattern
                  id="a"
                  width={1}
                  height={1}
                  patternContentUnits="objectBoundingBox"
                >
                  <use
                    xlinkHref="#b"
                    transform="matrix(.002 0 0 .00588 0 -.286)"
                  />
                </pattern>
                <image
                
                  xlinkHref="data:image/png;base64,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"
                  id="b"
                  width={380}
                  height={231}
                />
              </defs>
            </svg>
            <svg
              width="22"
              height="22"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_615_6577)">
                <path
                  d="M17.45 0H0V23.025L17.45 35L34.875 23.025V0H17.45Z"
                  fill="#5AA2C6"
                />
                <path
                  d="M0.125 23.025L17.55 35L35 23.025V0L0.125 23.025Z"
                  fill="#0B83B2"
                />
              </g>
              <defs>
                <clipPath id="clip0_615_6577">
                  <rect width="35" height="35" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div data-aos='fade-up' className="flex items-center gap-1 mt-1">
            <div >
              <svg
                width="22"
                height="20"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                  fill="#FFC01F"
                />
              </svg>
            </div>
            <div>
              <svg
                width="22"
                height="20"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                  fill="#FFC01F"
                />
              </svg>
            </div>
            <div>
              <svg
                width="22"
                height="20"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                  fill="#FFC01F"
                />
              </svg>
            </div>
            <div>
              <svg
                width="22"
                height="20"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                  fill="#FFC01F"
                />
              </svg>
            </div>
            <div>
              <svg
                width="22"
                height="20"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0L18.3677 10.3647H29.2658L20.4491 16.7705L23.8168 27.1353L15 20.7295L6.18322 27.1353L9.55093 16.7705L0.734152 10.3647H11.6323L15 0Z"
                  fill="#FFC01F"
                />
              </svg>
            </div>
            <div data-aos='fade-up' className="text-[#141619] font-semibold text-sm leading-[120%] reviwes">
              ({number.UpworkReview} REVIEWS)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecognizedBy;
