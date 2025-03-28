
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  zh: {
    // Navigation
    'nav.services': '产品服务',
    'nav.solutions': '解决方案',
    'nav.about': '关于我们',
    'nav.contact': '联系我们',
    
    // Services
    'services.ai': '人工智能服务',
    'services.software': '软件开发',
    'services.consulting': '技术咨询',
    'services.data': '数据服务',
    
    // Solutions
    'solutions.fintech': '金融科技',
    'solutions.healthcare': '医疗健康',
    'solutions.education': '智慧教育',
    'solutions.smartcity': '智慧城市',
    
    // Footer
    'footer.quickLinks': '快速链接',
    'footer.about': '关于我们',
    'footer.services': '产品服务',
    'footer.solutions': '解决方案',
    'footer.careers': '加入我们',
    'footer.contact': '联系我们',
    'footer.contactUs': '联系我们',
    'footer.subscribe': '订阅我们',
    'footer.subscribeDesc': '订阅我们的新闻通讯，获取最新的科技动态和公司新闻。',
    'footer.yourEmail': '您的邮箱',
    'footer.rights': '保留所有权利',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'footer.cookies': 'Cookie 政策',
    
    // Common
    'common.learnMore': '了解更多',
    'common.contactUs': '联系我们',
    'common.phoneConsult': '电话咨询',
    'common.onlineConsult': '在线咨询',
    'common.bookDemo': '预约演示',
    
    // CTA section
    'cta.title': '准备好开启数字化转型了吗？',
    'cta.description': '联系我们，了解西江鼎科技如何帮助您的企业实现创新发展，提升竞争力。我们的专业团队随时为您提供咨询和支持。',
    'cta.appointment': '预约咨询',
    'cta.phone': '400-888-8888',
    
    // QR Code
    'qr.scanToConsult': '扫码咨询',
    
    // Hero Section
    'hero.newTag': '新上线',
    'hero.newDesc': '探索我们全新的人工智能解决方案',
    'hero.title1': '科技创新',
    'hero.title2': '驱动数字化转型',
    'hero.description': '西江鼎科技致力于提供创新的人工智能、软件开发与技术服务，帮助企业实现数字化转型，打造智能化未来。',
    'hero.bookDemo': '预约演示',
    'hero.stats.years': '年行业经验',
    'hero.stats.clients': '企业客户',
    'hero.stats.patents': '技术专利',
    'hero.stats.satisfaction': '客户满意度',
    
    // Feature Section
    'features.title': '我们的服务',
    'features.subtitle': '全方位的科技解决方案',
    'features.description': '我们提供从人工智能到软件开发的全面技术服务，助力企业数字化转型，提升市场竞争力。',
    
    // Solution Section
    'solutions.title': '行业解决方案',
    'solutions.subtitle': '为各行业量身定制的技术方案',
    'solutions.description': '我们深入理解各行业痛点，提供专业化、个性化的解决方案，满足不同行业的特定需求。',
    'solutions.learnMore': '了解更多',
    
    // Client Section
    'clients.title': '我们的客户',
    'clients.subtitle': '值得信赖的合作伙伴',
    'clients.description': '我们的解决方案已成功助力众多行业领先企业实现数字化转型和业务增长。',
    
    // Testimonial Section
    'testimonials.title': '客户评价',
    'testimonials.subtitle': '听听客户怎么说',
    'testimonials.description': '我们的客户对西江鼎科技的服务和解决方案给予了高度评价，这些真实的反馈是我们不断前进的动力。',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    
    // Services
    'services.ai': 'AI Services',
    'services.software': 'Software Development',
    'services.consulting': 'Technical Consulting',
    'services.data': 'Data Services',
    
    // Solutions
    'solutions.fintech': 'Fintech',
    'solutions.healthcare': 'Healthcare',
    'solutions.education': 'Education',
    'solutions.smartcity': 'Smart City',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.about': 'About Us',
    'footer.services': 'Services',
    'footer.solutions': 'Solutions',
    'footer.careers': 'Careers',
    'footer.contact': 'Contact Us',
    'footer.contactUs': 'Contact Us',
    'footer.subscribe': 'Subscribe',
    'footer.subscribeDesc': 'Subscribe to our newsletter for the latest tech updates and company news.',
    'footer.yourEmail': 'Your Email',
    'footer.rights': 'All Rights Reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.contactUs': 'Contact Us',
    'common.phoneConsult': 'Phone Consultation',
    'common.onlineConsult': 'Online Consultation',
    'common.bookDemo': 'Book a Demo',
    
    // CTA section
    'cta.title': 'Ready to start your digital transformation?',
    'cta.description': 'Contact us to learn how Xijiang Tech can help your business innovate and improve competitiveness. Our professional team is ready to provide consultation and support.',
    'cta.appointment': 'Book a Consultation',
    'cta.phone': '400-888-8888',
    
    // QR Code
    'qr.scanToConsult': 'Scan to Consult',
    
    // Hero Section
    'hero.newTag': 'New',
    'hero.newDesc': 'Explore our new AI solutions',
    'hero.title1': 'Tech Innovation',
    'hero.title2': 'Driving Digital Transformation',
    'hero.description': 'Xijiang Tech is committed to providing innovative AI, software development, and technical services to help enterprises achieve digital transformation and create an intelligent future.',
    'hero.bookDemo': 'Book a Demo',
    'hero.stats.years': 'Years Experience',
    'hero.stats.clients': 'Enterprise Clients',
    'hero.stats.patents': 'Tech Patents',
    'hero.stats.satisfaction': 'Client Satisfaction',
    
    // Feature Section
    'features.title': 'Our Services',
    'features.subtitle': 'Comprehensive Technology Solutions',
    'features.description': 'We provide comprehensive technical services from artificial intelligence to software development, helping enterprises in digital transformation and enhancing market competitiveness.',
    
    // Solution Section
    'solutions.title': 'Industry Solutions',
    'solutions.subtitle': 'Customized Technical Solutions for Various Industries',
    'solutions.description': 'We deeply understand the pain points of various industries and provide professional, personalized solutions to meet the specific needs of different sectors.',
    'solutions.learnMore': 'Learn More',
    
    // Client Section
    'clients.title': 'Our Clients',
    'clients.subtitle': 'Trusted Partners',
    'clients.description': 'Our solutions have successfully helped many industry-leading companies achieve digital transformation and business growth.',
    
    // Testimonial Section
    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'What Our Clients Say',
    'testimonials.description': 'Our clients have highly praised Xijiang Tech's services and solutions. These authentic feedbacks drive us to continuously improve.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
