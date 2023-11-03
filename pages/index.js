import Homepage from '@/app/components/Homepage/Homepage'
import StructuredData from '@/app/components/StructuredData'
import Head from 'next/head'
import React from 'react'

const index = () => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vadavision",
    "alternateName": "Vada Vision!",
    "url": "https://www.vadavision.com",
    "logo": "https://www.vadavision.com/images/logo-icon.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Chandigarh",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+916280007001",
      "contactType": "technical support",
      "areaServed": ["IN","AE","GB","US","AU","DE","CA","SE","JP","KR"],
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.linkedin.com/company/vadavision/",
      "https://www.instagram.com/vadavision/",
      "https://github.com/Vadavision/"
    ]
  };
  
  return (
    <div>
        <Head>
        <title>Vadavision | Transforming Ideas into Reality | AI, Web Automation, Mobile Apps</title>
        <meta name="description" content="Vadavision is a leading software company and startup studio based in India, specializing in staff/resource augmentation, AI, web automation applications, mobile apps, and cutting-edge UI/UX design. Our dedicated team of skilled developers ensures swift project delivery and cost-efficiency. Let us turn your ideas into reality." />
        <meta name="keywords" content="Vadavision, Software Company, Startup Studio, Staff Augmentation, AI Development, Web Automation, Mobile App Development, UI/UX Design, Skilled Developers, Fast Turnaround, Cost-Efficiency, India-Based Company, Software Solutions, Innovation, Efficiency, Flutter, React Native, Hybrid Mobile Apps, OpenAI API, Chatgpt, Sales agent AI bot" />
        </Head>
        <StructuredData data={structuredData} />
        <Homepage/>
    </div>
  )
}

export default index