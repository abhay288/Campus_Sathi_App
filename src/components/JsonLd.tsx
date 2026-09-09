import React, { useEffect } from 'react';

interface JsonLdProps {
  pageType?: 'website' | 'software' | 'faq';
  faqItems?: Array<{ question: string; answer: string }>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ pageType = 'website', faqItems }) => {
  useEffect(() => {
    const existing = document.getElementById('campus-saathi-jsonld');
    if (existing) existing.remove();

    const graph: any[] = [
      {
        '@type': 'WebSite',
        '@id': 'https://campussaathi.app/#website',
        url: 'https://campussaathi.app/',
        name: 'Campus Saathi',
        description: 'Your Campus. Your Companion. Academic productivity and campus management for college students.',
        publisher: {
          '@id': 'https://campussaathi.app/#organization'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://campussaathi.app/#organization',
        name: 'Campus Saathi',
        url: 'https://campussaathi.app/',
        logo: 'https://campussaathi.app/logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'mauryaabhay938@gmail.com',
          contactType: 'Developer Support'
        }
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://campussaathi.app/#software',
        name: 'Campus Saathi',
        operatingSystem: 'Android',
        applicationCategory: 'EducationalApplication',
        applicationSubCategory: 'Student Productivity',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR'
        },
        description: 'Comprehensive academic companion app featuring Smart Timetable, Attendance Tracker, Campus Repository, Smart Scanner, and Student Productivity Tools.',
        featureList: [
          'Smart Timetable',
          'Attendance Tracker with 75% rule forecast',
          'Assignments & Task Manager',
          'Campus Academic Repository (PYQs, Notes, Lab Manuals)',
          'Campus Events Portal',
          'On-device Smart Document Scanner',
          'CGPA and SGPA Calculators',
          'ATS Resume Builder & Informational Checker'
        ]
      }
    ];

    if (pageType === 'faq' && faqItems && faqItems.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        '@id': 'https://campussaathi.app/support#faq',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      });
    }

    const script = document.createElement('script');
    script.id = 'campus-saathi-jsonld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph
    });

    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('campus-saathi-jsonld');
      if (el) el.remove();
    };
  }, [pageType, faqItems]);

  return null;
};
