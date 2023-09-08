import React from "react";
import Accordion from "./Accordion";

const FAQTabs = () => {
  return (
    <div className="mt-[3.75rem]">
      <div className="mb-5 dark:border-gray-700">
        <ul
          className="flex flex-wrap justify-end mr-5 -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="" role="presentation">
            <button
              className="inline-block text-color-tab p-4 text-[#959596]  rounded-t-lg"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              General
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className="inline-block p-4 text-color-tab text-[#959596]  rounded-t-lg hover:text-[#DD4242]"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Payments
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className="inline-block p-4 text-color-tab text-[#959596]  rounded-t-lg hover:text-[#DD4242]"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Services
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block p-4 text-color-tab text-[#959596]  focus:border-b-2 focus:text-[#DD4242] rounded-t-lg hover:text-[#DD4242]"
              id="contacts-tab"
              data-tabs-target="#contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
            >
              Refund
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent">
        <div
          className="hidden px-4 pt-0 pb-4 rounded-lg"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <Accordion />
        </div>
        <div
          className="hidden px-4 pt-0 pb-4 rounded-lg"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <Accordion />
        </div>
        <div
          className="hidden px-4 pt-0 pb-4 rounded-lg"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <Accordion />
        </div>
        <div
          className="hidden px-4 pt-0 pb-4 rounded-lg"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default FAQTabs;
