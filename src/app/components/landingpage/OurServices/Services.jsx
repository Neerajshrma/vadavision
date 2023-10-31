import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Services = () => {
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
    <div className="flex justify-between flex-wrap">
      <div className="flex gap-4 mt-10 max-w-[430px]">
        <div data-aos='fade-up'>
          <svg
            width="60"
            height="60"
            viewBox="0 0 116 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="ios-opened-svgrepo-com 2">
              <path
                id="Vector"
                d="M99.6877 19.9375H66.3377L58.7252 35.1625H15.9502V96.0625H107.3V19.9375H99.6877ZM99.6877 87.725H24.2877V42.775H99.6877V87.725ZM99.6877 35.1625H69.9627L73.5877 27.55H99.3252V35.1625H99.6877Z"
                fill="#FFACAC"
              />
              <path
                id="Vector_2"
                d="M93.6049 49.6625H2.25488L16.0299 96.0625H107.38L93.6049 49.6625Z"
                fill="#FFACAC"
              />
              <path
                id="Vector_3"
                d="M103.008 74.4394C103.04 71.5797 103.796 68.7747 105.207 66.2869C106.617 63.7992 108.636 61.71 111.074 60.2149C109.524 58.0086 107.483 56.1917 105.113 54.9068C102.742 53.6218 100.106 52.9038 97.4114 52.809C91.5933 52.2182 86.0579 56.2347 83.1036 56.2347C80.1492 56.2347 75.5998 52.896 70.7786 52.9722C67.6102 53.0612 64.5195 53.9724 61.8096 55.6165C59.0998 57.2606 56.8639 59.581 55.3216 62.35C48.7313 73.7833 53.6323 90.7229 60.0558 99.9956C63.1951 104.534 66.9433 109.635 71.8479 109.45C76.5786 109.261 78.3729 106.387 84.0896 106.387C89.8062 106.387 91.4193 109.45 96.4146 109.355C101.49 109.261 104.73 104.73 107.848 100.177C110.08 96.8986 111.827 93.3152 113.035 89.5375C110.073 88.2736 107.546 86.1707 105.764 83.4879C103.982 80.8052 103.024 77.6598 103.008 74.4394ZM93.5834 46.6719C96.4031 43.3629 97.8 39.0732 97.4694 34.7384C93.2131 35.1507 89.2757 37.1752 86.4639 40.397C85.0613 41.9595 83.987 43.788 83.3052 45.7739C82.6233 47.7598 82.3476 49.8626 82.4946 51.9572C84.6278 51.9906 86.74 51.5311 88.6666 50.6143C90.5931 49.6976 92.282 48.3484 93.6016 46.6719H93.5834Z"
                fill="#DD4242"
              />
            </g>
          </svg>
        </div>
        <div >
          <div >
            <h2 data-aos='fade-up' className="text-[#DD4242] Montserrat text-xl font-bold" >
              Ios Development
            </h2>
          </div>
          <div>
            <p data-aos='fade-up' className="Montserrat text-white text-base font-medium">
              We deliver highly engaging mobile app solutions. Our iOS experts
              make sure your business shines online. We provide easy and
              creative solutions that your audience will love.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-10 max-w-[430px]" >
        <div data-aos='fade-up'>
          <svg
            width="60"
            height="60"
            viewBox="0 0 116 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="play-store-svgrepo-com 2">
              <path
                id="Vector"
                d="M29.3579 98.7064C31.1885 97.6716 31.8251 95.3639 30.7799 93.5518C29.7346 91.7397 27.4033 91.1095 25.5728 92.1443L29.3579 98.7064ZM22.3763 98.3019H18.5596C18.5596 99.6484 19.2836 100.893 20.4601 101.569C21.6366 102.245 23.0876 102.25 24.2689 101.583L22.3763 98.3019ZM22.3763 17.6983L24.2689 14.4172C23.0876 13.7495 21.6366 13.7546 20.4601 14.4307C19.2836 15.1068 18.5596 16.3516 18.5596 17.6983H22.3763ZM25.5728 23.8559C27.4033 24.8906 29.7346 24.2604 30.7799 22.4483C31.8251 20.6362 31.1885 18.3284 29.3579 17.2937L25.5728 23.8559ZM24.4526 93.1059C23.1584 94.7528 23.4582 97.1266 25.1221 98.4077C26.7861 99.6887 29.184 99.392 30.4782 97.7447L24.4526 93.1059ZM71.1903 45.9269C72.4845 44.2797 72.1847 41.9059 70.5206 40.6249C68.857 39.3438 66.4591 39.6405 65.1649 41.2877L71.1903 45.9269ZM25.5728 92.1443C23.7426 93.1795 23.1057 95.4878 24.1514 97.2999C25.1972 99.1114 27.5277 99.7416 29.3579 98.7064L25.5728 92.1443ZM70.0713 75.6784C71.9013 74.6432 72.5374 72.3354 71.4916 70.5233C70.4458 68.7118 68.1145 68.0821 66.284 69.1173L70.0713 75.6784ZM70.0713 40.3268C68.2407 39.2915 65.9095 39.921 64.8637 41.7328C63.8179 43.5446 64.454 45.8526 66.284 46.8878L70.0713 40.3268ZM93.6228 58.0001L95.5164 61.2806C96.7057 60.6081 97.4396 59.3557 97.4396 58.0001C97.4396 56.6444 96.7057 55.392 95.5164 54.7195L93.6228 58.0001ZM66.284 69.1123C64.454 70.1475 63.8179 72.4553 64.8637 74.2674C65.9095 76.0789 68.2407 76.7087 70.0713 75.6734L66.284 69.1123ZM66.284 46.8878C68.114 47.9232 70.4453 47.2937 71.4916 45.482C72.5374 43.6703 71.9018 41.3621 70.0713 40.3268L66.284 46.8878ZM29.3579 17.2937C27.5278 16.2583 25.1975 16.8884 24.1516 18.7001C23.1057 20.5118 23.7426 22.8205 25.5728 23.8559L29.3579 17.2937ZM30.4782 18.2552C29.184 16.6081 26.7861 16.3113 25.1221 17.5924C23.4582 18.8735 23.1584 21.2472 24.4526 22.8944L30.4782 18.2552ZM65.1649 74.7122C66.4591 76.3595 68.857 76.6563 70.5206 75.3752C72.1847 74.0941 72.4845 71.7203 71.1903 70.0735L65.1649 74.7122ZM25.5728 92.1443L20.4838 95.0208L24.2689 101.583L29.3579 98.7064L25.5728 92.1443ZM26.1931 98.3019V17.6983H18.5596V98.3019H26.1931ZM20.4838 20.9793L25.5728 23.8559L29.3579 17.2937L24.2689 14.4172L20.4838 20.9793ZM30.4782 97.7447L71.1903 45.9269L65.1649 41.2877L24.4526 93.1059L30.4782 97.7447ZM29.3579 98.7064L70.0713 75.6784L66.284 69.1173L25.5728 92.1443L29.3579 98.7064ZM66.284 46.8878L91.7292 61.2806L95.5164 54.7195L70.0713 40.3268L66.284 46.8878ZM91.7292 54.7195L66.284 69.1123L70.0713 75.6734L95.5164 61.2806L91.7292 54.7195ZM70.0713 40.3268L29.3579 17.2937L25.5728 23.8559L66.284 46.8878L70.0713 40.3268ZM24.4526 22.8944L65.1649 74.7122L71.1903 70.0735L30.4782 18.2552L24.4526 22.8944Z"
                fill="#DD4242"
              />
            </g>
          </svg>
        </div>
        <div>
          <div>
            <h2 data-aos='fade-up' className="text-[#DD4242] Montserrat text-xl font-bold">
              Andriod Development
            </h2>
          </div>
          <div>
            <p data-aos='fade-up' className="Montserrat text-white text-base font-medium">
              We deliver engaging mobile apps and customized software,
              simplifying your business tasks. Our Android team ensures your
              online presence stands out
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-10 max-w-[430px]" >
        <div data-aos='fade-up'>
          <svg
            width="60"
            height="60"
            viewBox="0 0 116 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="design-svgrepo-com 2">
              <path
                id="Vector"
                d="M61.625 36.25H54.375V43.5H61.625V36.25ZM92.4375 36.25C93.438 36.25 94.25 37.062 94.25 38.0625C94.25 39.063 93.438 39.875 92.4375 39.875C91.437 39.875 90.625 39.063 90.625 38.0625C90.625 37.062 91.437 36.25 92.4375 36.25ZM38.0625 105.125H43.5V97.875H72.5V105.125H77.9375C78.938 105.125 79.75 105.937 79.75 106.938C79.75 107.938 78.938 108.75 77.9375 108.75H38.0625C37.062 108.75 36.25 107.938 36.25 106.938C36.25 105.937 37.062 105.125 38.0625 105.125ZM0 25.375V83.375C0 89.3816 4.86838 94.25 10.875 94.25H105.125C111.132 94.25 116 89.3816 116 83.375V25.375C116 19.3684 111.132 14.5 105.125 14.5H10.875C4.86838 14.5 0 19.3684 0 25.375ZM18.2483 36.8807C18.6833 34.8072 20.3761 33.147 22.4533 32.7337C25.288 32.1755 27.8001 33.8212 28.6629 36.25H50.75V32.625H65.25V36.25H87.3335C88.1963 33.8212 90.712 32.1755 93.5431 32.7337C95.6202 33.1434 97.3131 34.8072 97.7481 36.8807C98.4913 40.4006 95.8269 43.5 92.4375 43.5C90.074 43.5 88.0803 41.9811 87.3335 39.875H65.25V40.687C81.1565 43.9386 93.3256 57.5722 94.1993 74.2037C94.2536 75.2441 93.4271 76.125 92.3831 76.125C91.4298 76.125 90.6286 75.3855 90.5815 74.4321C89.8239 59.6965 79.2208 47.5709 65.25 44.3845V47.125H50.75V44.3809C36.7792 47.5709 26.1761 59.6965 25.4185 74.4285C25.3677 75.3855 24.5702 76.125 23.6169 76.125C22.5729 76.125 21.7464 75.2441 21.8007 74.2037C22.6744 57.5722 34.8435 43.9386 50.75 40.687V39.875H28.6665C27.9161 41.9811 25.926 43.5 23.5625 43.5C20.1731 43.5 17.5088 40.4006 18.2483 36.8807ZM23.5625 36.25C24.563 36.25 25.375 37.062 25.375 38.0625C25.375 39.063 24.563 39.875 23.5625 39.875C22.562 39.875 21.75 39.063 21.75 38.0625C21.75 37.062 22.562 36.25 23.5625 36.25Z"
                fill="#DD4242"
              />
            </g>
          </svg>
        </div>
        <div>
          <div>
            <h2 data-aos='fade-up' className="text-[#DD4242] Montserrat text-xl font-bold">
              Designing & Upgrading Service
            </h2>
          </div>
          <div>
            <p data-aos='fade-up' className="Montserrat text-white text-base font-medium">
              Delivering clever design solutions and hassle-free upgrades. Your
              satisfaction is our commitment.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-10 max-w-[430px]">
        <div data-aos='fade-up'>
          <svg
            width="60"
            height="60"
            viewBox="0 0 116 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="connection-gateway-svgrepo-com 2"
              clipPath="url(#clip0_958_5007)"
            >
              <path
                id="Vector"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M99.6875 3.625C96.7062 3.62403 93.7817 4.44007 91.2317 5.98447C88.6816 7.52887 86.6036 9.74257 85.2233 12.385C83.843 15.0275 83.2133 17.9977 83.4025 20.973C83.5918 23.9482 84.5928 26.8147 86.2967 29.261L79.5325 36.0325C79.2274 36.3381 78.9597 36.6788 78.735 37.0475C77.3575 36.5328 75.864 36.25 74.3125 36.25H56.1875C54.5213 36.25 52.8715 36.5782 51.3322 37.2158C49.7928 37.8534 48.3942 38.7879 47.216 39.9661C46.0379 41.1442 45.1033 42.5429 44.4657 44.0822C43.8281 45.6215 43.5 47.2714 43.5 48.9375V52.5625H31.697C30.4143 48.9345 27.8903 45.8768 24.5712 43.9298C21.2521 41.9827 17.3515 41.2717 13.5589 41.9224C9.76628 42.5731 6.32578 44.5437 3.84551 47.4857C1.36524 50.4278 0.00488281 54.152 0.00488281 58C0.00488281 61.8481 1.36524 65.5722 3.84551 68.5143C6.32578 71.4563 9.76628 73.4269 13.5589 74.0776C17.3515 74.7283 21.2521 74.0173 24.5712 72.0702C27.8903 70.1232 30.4143 67.0655 31.697 63.4375H43.5V67.0625C43.5 74.066 49.184 79.75 56.1875 79.75H74.3125C75.864 79.75 77.3575 79.4673 78.735 78.9525C78.9525 79.315 79.2207 79.6558 79.5325 79.9675L86.2967 86.739C84.1018 89.8912 83.0896 93.7168 83.4384 97.542C83.7873 101.367 85.4747 104.947 88.2036 107.65C90.9325 110.353 94.5277 112.006 98.3561 112.319C102.184 112.632 106 111.583 109.131 109.358C112.263 107.134 114.508 103.875 115.473 100.158C116.438 96.4396 116.06 92.5004 114.405 89.034C112.751 85.5675 109.926 82.7961 106.429 81.2079C102.931 79.6196 98.9856 79.3164 95.2867 80.3518L87.2175 72.2825C86.912 71.9773 86.5713 71.7096 86.2025 71.485C86.7172 70.1075 87 68.614 87 67.0625V48.9375C87 47.386 86.7172 45.8925 86.2025 44.515C86.5713 44.2904 86.912 44.0227 87.2175 43.7175L95.2867 35.6483C97.7112 36.3245 100.259 36.4309 102.732 35.9594C105.204 35.4878 107.534 34.451 109.54 32.9299C111.545 31.4088 113.172 29.4446 114.292 27.1908C115.413 24.937 115.997 22.4546 116 19.9375C116 15.6112 114.281 11.462 111.222 8.40282C108.163 5.34363 104.014 3.625 99.6875 3.625ZM94.25 19.9375C94.25 18.4954 94.8228 17.1123 95.8426 16.0926C96.8623 15.0729 98.2453 14.5 99.6875 14.5C101.13 14.5 102.513 15.0729 103.532 16.0926C104.552 17.1123 105.125 18.4954 105.125 19.9375C105.125 21.3796 104.552 22.7627 103.532 23.7824C102.513 24.8021 101.13 25.375 99.6875 25.375C98.2453 25.375 96.8623 24.8021 95.8426 23.7824C94.8228 22.7627 94.25 21.3796 94.25 19.9375ZM56.1875 47.125C55.7068 47.125 55.2457 47.316 54.9058 47.6559C54.5659 47.9958 54.375 48.4568 54.375 48.9375V67.0625C54.375 68.063 55.187 68.875 56.1875 68.875H74.3125C74.7932 68.875 75.2542 68.684 75.5941 68.3441C75.934 68.0042 76.125 67.5432 76.125 67.0625V48.9375C76.125 48.4568 75.934 47.9958 75.5941 47.6559C75.2542 47.316 74.7932 47.125 74.3125 47.125H56.1875ZM99.6875 90.625C98.2453 90.625 96.8623 91.1979 95.8426 92.2176C94.8228 93.2373 94.25 94.6204 94.25 96.0625C94.25 97.5046 94.8228 98.8877 95.8426 99.9074C96.8623 100.927 98.2453 101.5 99.6875 101.5C101.13 101.5 102.513 100.927 103.532 99.9074C104.552 98.8877 105.125 97.5046 105.125 96.0625C105.125 94.6204 104.552 93.2373 103.532 92.2176C102.513 91.1979 101.13 90.625 99.6875 90.625ZM10.875 58C10.875 56.5579 11.4478 55.1748 12.4676 54.1551C13.4873 53.1354 14.8703 52.5625 16.3125 52.5625C17.7546 52.5625 19.1376 53.1354 20.1573 54.1551C21.1771 55.1748 21.75 56.5579 21.75 58C21.75 59.4421 21.1771 60.8252 20.1573 61.8449C19.1376 62.8646 17.7546 63.4375 16.3125 63.4375C14.8703 63.4375 13.4873 62.8646 12.4676 61.8449C11.4478 60.8252 10.875 59.4421 10.875 58Z"
                fill="#DD4242"
              />
            </g>
            <defs>
              <clipPath id="clip0_958_5007">
                <rect width="116" height="116" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div>
          <div>
            <h2 data-aos='fade-up' className="text-[#DD4242] Montserrat text-xl font-bold">
              Cross Platform App Development
            </h2>
          </div>
          <div>
            <p data-aos='fade-up' className="Montserrat text-white text-base font-medium">
              We design apps for all platforms, ensuring simplicity in
              cross-platform development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
