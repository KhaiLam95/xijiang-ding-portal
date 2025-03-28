
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
    
    // CTA section
    'cta.title': '准备好开启数字化转型了吗？',
    'cta.description': '联系我们，了解西江鼎科技如何帮助您的企业实现创新发展，提升竞争力。我们的专业团队随时为您提供咨询和支持。',
    'cta.appointment': '预约咨询',
    'cta.phone': '400-888-8888',
    
    // QR Code
    'qr.scanToConsult': '扫码咨询',
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
    
    // CTA section
    'cta.title': 'Ready to start your digital transformation?',
    'cta.description': 'Contact us to learn how Xijiang Tech can help your business innovate and improve competitiveness. Our professional team is ready to provide consultation and support.',
    'cta.appointment': 'Book a Consultation',
    'cta.phone': '400-888-8888',
    
    // QR Code
    'qr.scanToConsult': 'Scan to Consult',
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
