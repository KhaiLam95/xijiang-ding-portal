
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { language, t } = useLanguage();
  
  return (
    <div className="relative overflow-hidden pb-16 pt-32 md:pt-40 lg:pt-48">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 -z-10 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-gradient-to-tr from-accent/10 to-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex animate-fade-in-down items-center rounded-full border bg-background/50 px-3 py-1 text-sm backdrop-blur-sm">
            <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold text-white">
              {language === 'zh' ? '新上线' : 'New'}
            </span>
            <span className="ml-2 text-muted-foreground">
              {language === 'zh' 
                ? '探索我们全新的人工智能解决方案' 
                : 'Explore our new AI solutions'}
            </span>
            <ChevronRight className="ml-1 h-4 w-4 text-muted-foreground" />
          </div>

          <h1 className="mt-6 animate-fade-in-down text-center font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-gradient">
              {language === 'zh' ? '科技创新' : 'Tech Innovation'}
            </span>
            <span className="block">
              {language === 'zh' ? '驱动数字化转型' : 'Driving Digital Transformation'}
            </span>
          </h1>

          <p className="mt-6 animate-fade-in max-w-3xl text-lg text-muted-foreground sm:text-xl">
            {language === 'zh' 
              ? '西江鼎科技致力于提供创新的人工智能、软件开发与技术服务，帮助企业实现数字化转型，打造智能化未来。'
              : 'Xijiang Tech is committed to providing innovative AI, software development, and technical services to help enterprises achieve digital transformation and create an intelligent future.'}
          </p>

          <div className="mt-8 animate-fade-in-up">
            <Link to="/contact">
              <Button size="lg" className="group">
                {language === 'zh' ? '预约演示' : 'Book a Demo'}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 animate-fade-in grid grid-cols-2 gap-4 sm:grid-cols-4 md:mt-16">
            <div className="flex flex-col items-center">
              <p className="font-display text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">
                {language === 'zh' ? '年行业经验' : 'Years Experience'}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-display text-3xl font-bold text-primary">200+</p>
              <p className="text-sm text-muted-foreground">
                {language === 'zh' ? '企业客户' : 'Enterprise Clients'}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-display text-3xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">
                {language === 'zh' ? '技术专利' : 'Tech Patents'}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-display text-3xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">
                {language === 'zh' ? '客户满意度' : 'Client Satisfaction'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
