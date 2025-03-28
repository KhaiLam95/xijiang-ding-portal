
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import TestimonialSection from '@/components/TestimonialSection';

const DataService = () => {
  const { language } = useLanguage();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center mb-8 text-accent hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'zh' ? '返回所有服务' : 'Back to All Services'}
          </Link>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-gradient text-base font-semibold">
                {language === 'zh' ? '产品服务' : 'Services'}
              </h2>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {language === 'zh' ? '数据服务' : 'Data Services'}
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                {language === 'zh'
                  ? '我们提供全面的数据管理、分析和挖掘服务，帮助企业充分利用数据资产。'
                  : 'We provide comprehensive data management, analysis, and mining services to help enterprises fully utilize their data assets.'}
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">
                    {language === 'zh' ? '大数据平台搭建与管理' : 'Big Data Platform Construction and Management'}
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {language === 'zh'
                      ? '搭建和管理大数据处理平台，为企业提供可靠、高效的数据处理能力。'
                      : 'Building and managing big data processing platforms to provide enterprises with reliable and efficient data processing capabilities.'}
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">
                    {language === 'zh' ? '数据清洗、整合与治理' : 'Data Cleansing, Integration, and Governance'}
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {language === 'zh'
                      ? '提供专业的数据清洗、整合和治理服务，提高数据质量和可用性。'
                      : 'Providing professional data cleansing, integration, and governance services to improve data quality and usability.'}
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">
                    {language === 'zh' ? '数据可视化与商业智能' : 'Data Visualization and Business Intelligence'}
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {language === 'zh'
                      ? '开发直观、交互式的数据可视化和商业智能解决方案，帮助企业更好地理解和使用数据。'
                      : 'Developing intuitive, interactive data visualization and business intelligence solutions to help enterprises better understand and use data.'}
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">
                    {language === 'zh' ? '预测分析与数据挖掘' : 'Predictive Analytics and Data Mining'}
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {language === 'zh'
                      ? '运用先进的数据挖掘和预测分析技术，发现数据中的模式和趋势，支持业务决策。'
                      : 'Using advanced data mining and predictive analytics technologies to discover patterns and trends in data, supporting business decisions.'}
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="mr-4">
                  {language === 'zh' ? '联系我们' : 'Contact Us'}
                </Button>
                <Button variant="outline">
                  {language === 'zh' ? '查看案例' : 'View Case Studies'}
                </Button>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1740" 
                alt={language === 'zh' ? '数据服务' : 'Data Services'} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default DataService;
