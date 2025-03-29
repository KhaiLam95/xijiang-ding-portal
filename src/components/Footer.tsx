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
              <a 
                href="https://www.xiaohongshu.com/user/profile/6640931b0000000007007e1b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <img 
                  src="/lovable-uploads/ceeb4c05-5bb9-46c2-9e9d-1242ebbcfe1b.png" 
                  alt="Xiaohongshu" 
                  className="w-5 h-5" 
                />
              </a>
              <a 
                href="https://www.douyin.com/user/MS4wLjABAAAAgjmPdtfl8aY3ug4AmVV37U_F3TvWrPp9yymRXSJrHHzcGKyJRf7QJMvh4ziVY_UZ?from_tab_name=main" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <img 
                  src="/lovable-uploads/318e32bf-b51e-4aba-a6bf-9d7fc01309c1.png" 
                  alt="TikTok" 
                  className="w-5 h-5" 
                />
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
                <span className="text-muted-foreground">+86 18673556610</span>
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
