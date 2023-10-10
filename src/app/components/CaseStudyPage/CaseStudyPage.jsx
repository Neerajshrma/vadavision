import React from 'react'
import ProblemStament from './ProblemStatementPage/ProblemStament'
import ObjectiveAndGoals from './ObjectiveAndGoalsPage/ObjectiveAndGoals'
import OurProccessPage from './OurProccessPage/OurProccessPage'
import BusinessChallengepage from './BusinessChallengePage/BusinessChallengepage'
import FeatureFuntionality from './FeaturesFunctionalityPage/FeatureFuntionality'
import UserFlow from './UserFlowPage/UserFlow'
import MajorScreen from './MajorScreenPage/MajorScreen'
import ScreenPage from './ScreensPage/ScreenPage'
import ThankYou from './ThankYouPage/ThankYou'
import ProductUser from './ProductUserPage/ProductUser'

const CaseStudyPage = () => {
  return (
    <>
    <div>
        <ProblemStament/>
    </div>
    <div>
        <ObjectiveAndGoals/>
    </div>
    <div>
        <OurProccessPage/>
    </div>
    <div>
        <BusinessChallengepage/>
    </div>
    <div>
        <ProductUser/>
    </div>
    <div >
        <FeatureFuntionality/>
    </div>
    <div>
        <UserFlow/>
    </div>
    <div>
        <MajorScreen/>
    </div>
    <div className='background'>
        <ScreenPage/>
   
        <ThankYou/>
    </div>
    </>
  )
}

export default CaseStudyPage