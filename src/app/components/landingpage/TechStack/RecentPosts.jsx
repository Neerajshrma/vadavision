import React from "react";

const RecentPosts = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
      <div className="bg-[#1E2024] py-5 px-6 md:w-[33%] tech-stack">
        <div>
          <div className="text-[#DD4242] text-2xl Montserrat font-semibold leading-[110%]">
            React Native
          </div>
          <div className="mt-2">
            <p className="text-lg font-normal Montserrat leading-[150%] text-white">
              Explore the magic of React Native with Vadavision, where we create mobile apps that work smoothly and bring in fresh ideas. Using React Native, we make apps that are easy to use and give our users a great time. Come and join us in the world of making apps that work well on different devices, and make your mobile app stand out.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1E2024] py-5 px-6 md:w-[33%] tech-stack">
        <div>
          <div className="text-[#DD4242] text-2xl Montserrat font-semibold leading-[110%]">
            Flutter
          </div>
          <div className="mt-2">
            <p className="text-lg font-normal Montserrat leading-[150%] text-white">
              Delve into the advanced realm of Flutter with Vadavision, where our expertise combines creativity and functionality seamlessly. With Flutter, we craft visually stunning and high-performance mobile applications, showcasing our commitment to excellence. Immerse yourself in the vibrant world of Flutter development with us, where innovative ideas come to life, setting new standards in mobile experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1E2024] py-5 px-6 md:w-[33%] tech-stack">
        <div>
          <div className="text-[#DD4242] text-2xl Montserrat font-semibold leading-[110%]">
            Hybrid Apps
          </div>
          <div className="mt-2">
            <p className="text-lg font-normal Montserrat leading-[150%] text-white">
              Discover the ideal blend of technology through Hybrid Development with Vadavision. Our hybrid solutions seamlessly integrate native and web technologies, providing flexible and affordable applications. Embrace the versatility of hybrid development to engage with a wide range of users across various platforms, ensuring a consistent user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
