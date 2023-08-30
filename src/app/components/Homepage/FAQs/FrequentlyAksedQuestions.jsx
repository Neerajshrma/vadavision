import React from 'react'
import Accordion from './Accordion'
import FAQTabs from './FAQTabs'

const FrequentlyAksedQuestions = () => {
  return (
    <div className='bg-[#111319] w-full py-10 pl-40 responsive-width pr-24'>
        <div className='flex w-full gap-32'>
            <div className='w-6/12 faqs'>
                <div className='mt-4'>
                    <h1 className='Montserrat capitalize text-white text-5xl font-bold leading-[110%] heading'>Frequently Asked Questions</h1>
                </div>
                <div className='accordian'>
                    <Accordion />
                </div>
                <div className='tabs'>
                    <FAQTabs />
                </div>
            </div>
            <div className='w-6/12 faq-tabs'>
                <FAQTabs />
            </div>
        </div>        
    </div>
  )
}

export default FrequentlyAksedQuestions