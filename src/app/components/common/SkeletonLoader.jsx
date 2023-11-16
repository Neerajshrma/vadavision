import React from "react";

const SkeletonLoader = () => {
  return (
    <>
      <div
        role="status"
        className="flex flex-col items-center w-[5/12] mx-auto animate-pulse pt-8"
      >
        <div>
          <div className="mb-5">
            <div className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 w-[60%] mx-auto mb-2.5" />
            <div className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 w-[50%] mx-auto mb-2.5" />
          </div>
          <div className="">
            <div className="flex flex-row space-x-4">
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
            </div>
            <div className="flex flex-row space-x-4">
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
            </div>
            <div className="flex flex-row space-x-4">
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
            </div>
            <div className="flex flex-row space-x-4">
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
            </div>
            <div className="flex flex-row space-x-4">
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
              <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700 flex items-center justify-center mb-2.5" />
            </div>
          </div>
          <div className="mt-5">
            <div className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 w-[50%] mx-auto mb-2.5" />
            <div className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 w-[70%] mx-auto mb-2.5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonLoader;
