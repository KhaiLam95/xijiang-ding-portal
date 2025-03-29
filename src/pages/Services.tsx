
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { language } = useLanguage();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-gradient text-base font-semibold">
              {language === 'zh' ? '产品服务' : 'Services'}
            </h2>
            <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {language === 'zh' ? '全方位的技术解决方案' : 'Comprehensive Technical Solutions'}
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              {language === 'zh' 
                ? '我们提供全面的技术服务，从AI解决方案到软件开发，满足您的各种业务需求'
                : 'We provide comprehensive technical services, from AI solutions to software development, to meet your various business needs'}
            </p>
          </div>
          
          <div className="mt-16 space-y-24">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'zh' ? '人工智能服务' : 'AI Services'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {language === 'zh'
                    ? '我们的AI解决方案为各行业提供智能化转型支持，包括机器学习模型开发、自然语言处理、计算机视觉和智能决策系统。'
                    : 'Our AI solutions provide intelligent transformation support for various industries, including machine learning model development, natural language processing, computer vision, and intelligent decision-making systems.'}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? '定制AI模型开发与训练' : 'Custom AI Model Development and Training'}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? '智能客服与聊天机器人' : 'Intelligent Customer Service and Chatbots'}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? '计算机视觉解决方案' : 'Computer Vision Solutions'}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? '智能数据分析与预测' : 'Intelligent Data Analysis and Prediction'}</p>
                  </li>
                </ul>
                <Link to="/services/ai">
                  <Button className="group">
                    {language === 'zh' ? '了解更多' : 'Learn More'}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1932" 
                  alt={language === 'zh' ? '人工智能服务' : 'AI Services'} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center md:flex-row-reverse">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'zh' ? '软件开发' : 'Software Development'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {language === 'zh'
                    ? '我们提供全栈软件开发服务，包括定制应用程序、网站、移动应用和企业级软件解决方案。'
                    : 'We provide full-stack software development services, including custom applications, websites, mobile apps, and enterprise-level software solutions.'}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? 'Web应用与企业系统开发' : 'Web Applications and Enterprise System Development'}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? '移动应用开发（iOS/Android）' : 'Mobile App Development (iOS/Android)'}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? '云服务与微服务架构' : 'Cloud Services and Microservice Architecture'}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? 'DevOps与系统集成' : 'DevOps and System Integration'}</p>
                  </li>
                </ul>
                <Link to="/services/software">
                  <Button className="group">
                    {language === 'zh' ? '了解更多' : 'Learn More'}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=1740" 
                  alt={language === 'zh' ? '软件开发' : 'Software Development'} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'zh' ? '技术咨询' : 'Technical Consulting'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {language === 'zh'
                    ? '我们的专业顾问团队提供战略性技术规划、数字化转型咨询和IT基础设施优化服务。'
                    : 'Our professional consulting team provides strategic technology planning, digital transformation consulting, and IT infrastructure optimization services.'}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? '数字化转型战略规划' : 'Digital Transformation Strategic Planning'}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? 'IT架构评估与优化' : 'IT Architecture Assessment and Optimization'}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? '技术选型与实施路线图' : 'Technology Selection and Implementation Roadmap'}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? '技术团队培训与赋能' : 'Technical Team Training and Empowerment'}</p>
                  </li>
                </ul>
                <Link to="/services/consulting">
                  <Button className="group">
                    {language === 'zh' ? '了解更多' : 'Learn More'}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1740" 
                  alt={language === 'zh' ? '技术咨询' : 'Technical Consulting'} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center md:flex-row-reverse">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'zh' ? '数据服务' : 'Data Services'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {language === 'zh'
                    ? '我们提供全面的数据管理、分析和挖掘服务，帮助企业充分利用数据资产。'
                    : 'We provide comprehensive data management, analysis, and mining services to help enterprises fully utilize their data assets.'}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? '大数据平台搭建与管理' : 'Big Data Platform Construction and Management'}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? '数据清洗、整合与治理' : 'Data Cleaning, Integration, and Governance'}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? '数据可视化与商业智能' : 'Data Visualization and Business Intelligence'}</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>{language === 'zh' ? '预测分析与数据挖掘' : 'Predictive Analytics and Data Mining'}</p>
                  </li>
                </ul>
                <Link to="/services/data">
                  <Button className="group">
                    {language === 'zh' ? '了解更多' : 'Learn More'}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740" 
                  alt={language === 'zh' ? '数据服务' : 'Data Services'} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
