
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import TestimonialSection from '@/components/TestimonialSection';

const HealthcareSolution = () => {
  const { language } = useLanguage();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Link to="/solutions" className="inline-flex items-center mb-8 text-accent hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'zh' ? '返回所有解决方案' : 'Back to All Solutions'}
          </Link>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-gradient text-base font-semibold">
                {language === 'zh' ? '行业解决方案' : 'Industry Solutions'}
              </h2>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {language === 'zh' ? '医疗健康' : 'Healthcare'}
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                {language === 'zh'
                  ? '结合AI与大数据技术，提供智能诊断、远程医疗和健康管理平台，提升医疗服务效率和质量。'
                  : 'Combining AI and big data technology to provide intelligent diagnosis, telemedicine, and health management platforms to improve healthcare service efficiency and quality.'}
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">
                    {language === 'zh' ? '医学影像辅助诊断系统' : 'Medical Imaging Assisted Diagnosis System'}
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {language === 'zh'
                      ? '运用深度学习技术，开发医学影像辅助诊断系统，提高疾病诊断的准确率和效率。'
                      : 'Using deep learning technology to develop a medical imaging assisted diagnosis system, improving the accuracy and efficiency of disease diagnosis.'}
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">
                    {language === 'zh' ? '智能健康管理平台' : 'Intelligent Health Management Platform'}
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {language === 'zh'
                      ? '打造面向个人用户的智能健康管理平台，提供个性化的健康建议和预防性健康管理。'
                      : 'Creating an intelligent health management platform for individual users, providing personalized health advice and preventive health management.'}
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">
                    {language === 'zh' ? '远程医疗解决方案' : 'Telemedicine Solutions'}
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {language === 'zh'
                      ? '开发安全、稳定的远程医疗系统，实现远程诊断、远程会诊和在线处方等功能。'
                      : 'Developing secure and stable telemedicine systems to enable remote diagnosis, remote consultation, online prescriptions, and other functions.'}
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">
                    {language === 'zh' ? '医疗大数据分析平台' : 'Healthcare Big Data Analysis Platform'}
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {language === 'zh'
                      ? '构建医疗大数据分析平台，助力医疗机构进行疾病趋势预测、医疗资源优化和疫情防控。'
                      : 'Building a healthcare big data analysis platform to help medical institutions predict disease trends, optimize medical resources, and control epidemics.'}
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
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop" 
                alt={language === 'zh' ? '医疗健康' : 'Healthcare'} 
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

export default HealthcareSolution;
