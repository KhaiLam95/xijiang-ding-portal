
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const emailAddress = 'service@xjding.com';

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-display font-bold text-primary">
                {language === 'zh' ? '西江鼎科技' : 'Xijiang Tech'}
              </span>
            </Link>
            <p className="text-muted-foreground">
              {language === 'zh' 
                ? '西江鼎科技致力于提供创新的科技解决方案，助力各行业进行数字化转型，打造更智能、更高效的未来。'
                : 'Xijiang Tech is committed to providing innovative technology solutions to help industries achieve digital transformation and build a smarter, more efficient future.'}
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" fill="currentColor">
                  <path d="M24 0C10.767 0 0 10.767 0 24c0 13.233 10.767 24 24 24s24-10.767 24-24C48 10.767 37.233 0 24 0zm-3.927 34.062c.654-.256.91-1.027.654-1.695L19.19 27.74c-.256-.64-.91-.911-1.549-.654-1.04.41-1.68.256-2.33-.513-.755-.897-.895-2.022-.498-3.3 1.312-4.042 5.145-7.888 9.415-9.442 2.446-.897 4.761-.64 6.58.782 1.665 1.309 2.446 3.3 2.204 5.58-.242 2.265-1.68 4.658-3.885 6.456-2.05 1.668-4.227 2.436-6.08 2.094-1.837-.342-3.076-1.823-3.332-3.976-.114-.726-.783-1.252-1.523-1.111-.726.114-1.252.783-1.111 1.522.441 3.387 2.588 5.879 5.576 6.46.457.072.922.114 1.379.114 2.604 0 5.535-1.095 8.138-3.216 2.817-2.265 4.747-5.41 5.09-8.423.356-3.144-.796-6.002-3.16-7.812-2.533-1.937-5.832-2.308-9.18-1.052-5.32 1.937-10.048 6.74-11.574 11.788-.64 2.164-.441 4.286.554 5.963 1.025 1.724 2.732 2.75 4.777 2.892l.086-.014z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M256.455 8C392.07 8 504 119.93 504 256c0 136.07-111.93 248-247.545 248C119.93 504 8 392.07 8 256 8 119.93 119.93 8 256.455 8zm-5.693 48.889c-100.11 0-181.38 81.26-181.38 181.38 0 33.12 8.98 64.11 24.59 90.78-1.54 3.72-3.14 7.82-4.5 11.68-2.92 8.31-10.27 26.58-17.92 43.04-3.5 7.52 5.02 15.46 12.22 11.34 14.97-8.55 54.42-31.41 57.7-33.27 3.96-2.19 5.89-2.91 10.01-1.67 19 5.74 39.27 8.86 60.28 8.86 100.09 0 181.38-81.25 181.38-181.38 0-100.09-81.31-181.36-181.38-181.36zm51.89 131.55c4.93 0 8.9 3.96 8.9 8.9 0 4.91-3.97 8.9-8.9 8.9-4.91 0-8.9-3.99-8.9-8.9 0-4.94 3.99-8.9 8.9-8.9zm-96.65 0c4.93 0 8.9 3.96 8.9 8.9 0 4.91-3.97 8.9-8.9 8.9-4.91 0-8.9-3.99-8.9-8.9 0-4.94 3.99-8.9 8.9-8.9zm96.24 46.81a120.24 120.24 0 0 1-95.93.04c-3.03-1.21-4.96 2.26-2.27 4.13 27.22 18.86 70.76 19.22 100.4.04 2.93-1.9.86-5.43-2.2-4.21z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.services')}
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.solutions')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">{t('footer.contactUs')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-muted-foreground" />
                <span className="text-muted-foreground">+8618673556610</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-muted-foreground" />
                <a 
                  href={`mailto:${emailAddress}`} 
                  onClick={handleEmailClick}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {emailAddress}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {language === 'zh' 
                    ? '广东省广州市天河区棠东东南路10号中盛棠东汇南苑D202' 
                    : 'Zhongsheng Tangdong Exchange South Garden D202, No. 10 Tangdong Southeast Road, Tianhe District, Guangzhou, Guangdong Province'}
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} {language === 'zh' ? '西江鼎科技有限公司' : 'Xijiang Technology Co., Ltd.'}. {t('footer.rights')}.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.terms')}
            </Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t('footer.cookies')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
