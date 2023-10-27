import React from "react";

const SkeletonLoader = () => {
  return (
    <>
      <div role="status" className="w-full animate-pulse">
         
        <div className="flex items-center flex-col ml-20 justify-center pb-4">
          <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-[50%] mb-2.5" />
          <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-[70%] mb-2.5" />

        </div>


        <div className="flex flex-row ml-20 space-x-6">
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
        </div>

        <div className="flex flex-row ml-20 space-x-4">
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
        </div>
        <div className="flex flex-row ml-20 space-x-4">
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
        </div>
        <div className="flex flex-row ml-20 space-x-4">
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
        </div>
        <div className="flex flex-row ml-20 space-x-4">
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
          <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
        </div>
        <div className="flex flex-col ml-20 pt-6">

          <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-[50%] mb-2.5" />
          <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-[80%] mb-2.5" />

        </div>
        
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default SkeletonLoader;
