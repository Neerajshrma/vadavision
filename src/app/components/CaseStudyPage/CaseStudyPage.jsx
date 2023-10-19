import React from "react";
import ProblemStament from "./ProblemStatementPage/ProblemStament";
import ObjectiveAndGoals from "./ObjectiveAndGoalsPage/ObjectiveAndGoals";
import OurProccessPage from "./OurProccessPage/OurProccessPage";
import BusinessChallengepage from "./BusinessChallengePage/BusinessChallengepage";
import FeatureFuntionality from "./FeaturesFunctionalityPage/FeatureFuntionality";
import UserFlow from "./UserFlowPage/UserFlow";
import MajorScreen from "./MajorScreenPage/MajorScreen";
import ScreenPage from "./ScreensPage/ScreenPage";
import ThankYou from "./ThankYouPage/ThankYou";
import ProductUser from "./ProductUserPage/ProductUser";
import UiUxCaseStudy from "./UiUXCaseStudyPage/UiUxCaseStudy";
import UserPersona from "./UserPersonaPage/UserPersona";

const CaseStudyPage = () => {
  return (
    <>
      <div className="content-responsive ">
        <div>
            <UiUxCaseStudy/>
        </div>
        <div>
          <ProblemStament />
        </div>
      </div>

      <div>
        <ObjectiveAndGoals />
      </div>
      <div>
        <OurProccessPage />
      </div>
      <div className="content-responsive">
        <BusinessChallengepage />
      </div>
      <div className="hide-content">
        <ProductUser />
      </div>
      <div>
        <UserPersona/>
      </div>
      <div>
        <FeatureFuntionality />
      </div>
      <div>
        <UserFlow />
      </div>
      <div>
        <MajorScreen />
      </div>
      <div className="background">
        <ScreenPage />

        <ThankYou />
      </div>
    </>
  );
};

export default CaseStudyPage;
