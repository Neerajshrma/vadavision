import LandingPage from '@/app/components/landingpage/LandingPage'
import React from 'react'
import Head from 'next/head'

const landingpage = () => {
  return (
    <div>
      <Head>
          <title>Vadavision Ventures into Tomorrow: Unleashing the Power of Mobile Hybrid App Development.</title>
          <meta name="description" content="Discover the future of mobile innovation with Vadavision. As a leading software company, we specialize in crafting dynamic and efficient mobile apps. From AI integration to seamless UI/UX design, our skilled developers bring your ideas to life with speed and precision." />
          <meta name="keywords" content="Vadavision, Software Company, Startup Studio, Staff Augmentation, AI Development, Web Automation, Mobile App Development, UI/UX Design, Skilled Developers, Fast Turnaround, Cost-Efficiency, India-Based Company, Software Solutions, Innovation, Efficiency, Flutter, React Native, Hybrid Mobile Apps, OpenAI API, Chatgpt, Sales agent AI bot" />
          <meta property="og:title" content="Vadavision | Transforming Ideas into Reality | AI, Web Automation, Mobile Apps" />
          <meta property="og:site_name" content="Vadavision" />
          <meta property="og:url" content="http://www.vadavision.com/" />
          <meta property="og:description" content="Vadavision is a leading software company and startup studio based in India, specializing in staff/resource augmentation, AI, web automation applications, mobile apps, and cutting-edge UI/UX design. Our dedicated team of skilled developers ensures swift project delivery and cost-efficiency. Let us turn your ideas into reality." />
          <meta property="og:type" content="business.business" />
          <meta property="og:image" content="http://vadavision.com/images/vadavision-homepage-screenshot.png" />
        </Head>
        <LandingPage />
    </div>
  )
}

export default landingpage