
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import TestimonialSection from '@/components/TestimonialSection';

const ConsultingService = () => {
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
                {language === 'zh' ? '技术咨询' : 'Technical Consulting'}
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                {language === 'zh'
                  ? '我们的专业顾问团队提供战略性技术规划、数字化转型咨询和IT基础设施优化服务。'
                  : 'Our professional consulting team provides strategic technology planning, digital transformation consulting, and IT infrastructure optimization services.'}
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">
                    {language === 'zh' ? '数字化转型战略规划' : 'Digital Transformation Strategic Planning'}
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {language === 'zh'
                      ? '制定全面的数字化转型战略，帮助企业明确转型目标、路径和实施计划。'
                      : 'Formulating comprehensive digital transformation strategies to help enterprises clarify transformation goals, paths, and implementation plans.'}
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">
                    {language === 'zh' ? 'IT架构评估与优化' : 'IT Architecture Assessment and Optimization'}
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {language === 'zh'
                      ? '评估现有IT架构，提供优化建议，帮助企业构建高效、安全、可扩展的技术基础设施。'
                      : 'Assessing existing IT architecture, providing optimization suggestions, helping enterprises build efficient, secure, and scalable technical infrastructure.'}
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">
                    {language === 'zh' ? '技术选型与实施路线图' : 'Technology Selection and Implementation Roadmap'}
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {language === 'zh'
                      ? '为企业提供技术选型咨询和详细的技术实施路线图，确保技术投资的合理性和有效性。'
                      : 'Providing technology selection consulting and detailed technology implementation roadmaps for enterprises to ensure the rationality and effectiveness of technology investments.'}
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">
                    {language === 'zh' ? '技术团队培训与赋能' : 'Technical Team Training and Empowerment'}
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {language === 'zh'
                      ? '提供专业的技术培训和知识转移服务，提升企业内部技术团队的能力和水平。'
                      : 'Providing professional technical training and knowledge transfer services to enhance the capabilities and level of internal technical teams.'}
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740" 
                alt={language === 'zh' ? '技术咨询' : 'Technical Consulting'} 
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

export default ConsultingService;
