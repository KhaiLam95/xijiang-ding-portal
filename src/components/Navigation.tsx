
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  Globe 
} from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productItems = [
    {
      title: t('services.ai'),
      description: language === 'zh' 
        ? "借助先进AI技术助力企业数字化转型" 
        : "Empower enterprise digital transformation with advanced AI technology",
      href: "/services/ai",
      icon: <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">AI</div>
    },
    {
      title: t('services.software'),
      description: language === 'zh' 
        ? "定制化软件解决方案，满足您的业务需求"
        : "Customized software solutions to meet your business needs",
      href: "/services/software",
      icon: <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        {language === 'zh' ? '软' : 'SW'}
      </div>
    },
    {
      title: t('services.consulting'),
      description: language === 'zh' 
        ? "为您提供专业的技术咨询和战略规划"
        : "Professional technical consulting and strategic planning",
      href: "/services/consulting",
      icon: <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        {language === 'zh' ? '咨' : 'CS'}
      </div>
    },
    {
      title: t('services.data'),
      description: language === 'zh' 
        ? "全面的数据分析和挖掘服务"
        : "Comprehensive data analytics and mining services",
      href: "/services/data",
      icon: <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        {language === 'zh' ? '数' : 'DT'}
      </div>
    },
  ];

  const solutionItems = [
    {
      title: t('solutions.fintech'),
      description: language === 'zh' 
        ? "为金融行业提供创新技术解决方案"
        : "Innovative technology solutions for the financial industry",
      href: "/solutions/fintech",
    },
    {
      title: t('solutions.healthcare'),
      description: language === 'zh' 
        ? "利用AI技术优化医疗服务和健康管理"
        : "Optimize healthcare services and health management with AI technology",
      href: "/solutions/healthcare",
    },
    {
      title: t('solutions.education'),
      description: language === 'zh' 
        ? "打造数字化、智能化的教育体验"
        : "Create a digital, intelligent educational experience",
      href: "/solutions/education",
    },
    {
      title: t('solutions.smartcity'),
      description: language === 'zh' 
        ? "构建连接、高效、可持续的智慧城市生态"
        : "Build connected, efficient, and sustainable smart city ecosystems",
      href: "/solutions/smart-city",
    },
  ];

  const handleLanguageChange = (lang: 'zh' | 'en') => {
    setLanguage(lang);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 dark:bg-background/80 backdrop-blur-xl border-b"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-display font-bold text-primary">
                {language === 'zh' ? '西江鼎科技' : 'Xijiang Tech'}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">{t('nav.services')}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-4 grid grid-cols-2 gap-3">
                      {productItems.map((item) => (
                        <Link key={item.href} to={item.href} className="group">
                          <NavigationMenuLink asChild>
                            <div className="flex items-start p-3 space-x-3 rounded-md hover:bg-muted/50 transition-colors">
                              {item.icon}
                              <div>
                                <div className="font-medium">{item.title}</div>
                                <div className="text-sm text-muted-foreground">{item.description}</div>
                              </div>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">{t('nav.solutions')}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-4 grid grid-cols-2 gap-3">
                      {solutionItems.map((item) => (
                        <Link key={item.href} to={item.href} className="group">
                          <NavigationMenuLink asChild>
                            <div className="flex flex-col p-3 rounded-md hover:bg-muted/50 transition-colors">
                              <div className="font-medium">{item.title}</div>
                              <div className="text-sm text-muted-foreground">{item.description}</div>
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink 
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium transition-colors hover:bg-muted/50 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      {t('nav.about')}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  <Globe className="w-4 h-4 mr-1" />
                  {language === 'zh' ? '中文' : 'English'} <ChevronDown className="w-3 h-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange('zh')}>
                  中文
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/contact">
              <Button>{t('nav.contact')}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden transition-transform duration-300 transform",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full pt-20 pb-6 px-4 overflow-y-auto">
          <div className="space-y-1 mb-6">
            <div className="py-2 font-medium text-sm text-muted-foreground uppercase tracking-wider">
              {t('nav.services')}
            </div>
            {productItems.map((item) => (
              <Link 
                key={item.href} 
                to={item.href}
                className="block py-2 px-3 rounded-md hover:bg-muted/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </Link>
            ))}
          </div>

          <div className="space-y-1 mb-6">
            <div className="py-2 font-medium text-sm text-muted-foreground uppercase tracking-wider">
              {t('nav.solutions')}
            </div>
            {solutionItems.map((item) => (
              <Link 
                key={item.href} 
                to={item.href}
                className="block py-2 px-3 rounded-md hover:bg-muted/80 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </Link>
            ))}
          </div>

          <div className="space-y-2">
            <Link 
              to="/about" 
              className="block py-2 px-3 rounded-md hover:bg-muted/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
          </div>

          <div className="mt-auto space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant={language === 'zh' ? 'default' : 'outline'}
                className="w-full justify-center"
                onClick={() => handleLanguageChange('zh')}
              >
                中文
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                className="w-full justify-center"
                onClick={() => handleLanguageChange('en')}
              >
                English
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full justify-start">
                <Phone className="w-4 h-4 mr-2" />
                {t('common.phoneConsult')}
              </Button>
              <Button className="w-full justify-start">
                <MessageSquare className="w-4 h-4 mr-2" />
                {t('common.onlineConsult')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
