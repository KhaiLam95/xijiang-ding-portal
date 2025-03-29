
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const DigitalTourismSolution = () => {
  const { language } = useLanguage();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=2000" 
              alt={language === 'zh' ? '数智文旅解决方案' : 'Digital Tourism Solution'} 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
          </div>
          
          <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {language === 'zh' ? '数智文旅解决方案' : 'Digital Tourism Solution'}
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                {language === 'zh'
                  ? '通过数字化技术和AI，打造全新的文旅体验，促进文化传承与产业升级'
                  : 'Creating a new tourism experience through digital technology and AI, promoting cultural heritage and industry upgrade'}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="px-8">
                  {language === 'zh' ? '预约演示' : 'Book a Demo'}
                </Button>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="gap-2">
                    {language === 'zh' ? '联系我们' : 'Contact Us'}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Features */}
        <div className="bg-muted/30 py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {language === 'zh' ? '核心功能' : 'Core Features'}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {language === 'zh'
                  ? '我们的数智文旅解决方案融合了AI、大数据与互动技术，为游客和文旅企业提供全方位服务'
                  : 'Our digital tourism solution integrates AI, big data, and interactive technology to provide comprehensive services for tourists and cultural tourism enterprises'}
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {language === 'zh' ? '智慧导览系统' : 'Smart Guide System'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'zh'
                    ? 'AI驱动的个性化导览，结合AR/VR技术，为游客提供沉浸式体验和精准导航'
                    : 'AI-driven personalized guidance combined with AR/VR technology to provide tourists with immersive experiences and precise navigation'}
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {language === 'zh' ? '文化数字化展示' : 'Digital Cultural Display'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'zh'
                    ? '利用3D建模、全息投影等技术，实现文化遗产的数字化保护和创新性展示'
                    : 'Utilizing 3D modeling, holographic projection, and other technologies to achieve digital protection and innovative display of cultural heritage'}
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {language === 'zh' ? '智能营销平台' : 'Intelligent Marketing Platform'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'zh'
                    ? '基于大数据分析的精准营销，为景区、酒店等提供客流预测和个性化推荐服务'
                    : 'Precision marketing based on big data analysis, providing visitor flow prediction and personalized recommendation services for scenic spots, hotels, etc.'}
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {language === 'zh' ? '旅游大数据分析' : 'Tourism Big Data Analysis'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'zh'
                    ? '通过数据采集和分析，为旅游管理部门提供决策支持，优化资源配置'
                    : 'Through data collection and analysis, providing decision support for tourism management departments to optimize resource allocation'}
                </p>
              </div>
              
              {/* Feature 5 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {language === 'zh' ? '在线预订与管理' : 'Online Booking and Management'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'zh'
                    ? '一站式预订系统，整合票务、住宿、餐饮等服务，并提供智能客流量控制'
                    : 'One-stop booking system that integrates ticketing, accommodation, catering, and other services, and provides intelligent visitor flow control'}
                </p>
              </div>
              
              {/* Feature 6 */}
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {language === 'zh' ? '社交互动功能' : 'Social Interaction Features'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'zh'
                    ? '整合社交媒体功能，鼓励用户分享体验和内容创作，形成良性传播'
                    : 'Integrating social media functions, encouraging users to share experiences and create content, forming positive dissemination'}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {language === 'zh' ? '解决方案优势' : 'Solution Benefits'}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {language === 'zh'
                  ? '选择西江鼎科技的数智文旅解决方案，助力文旅产业数字化转型'
                  : 'Choose Xijiang Tech digital tourism solution to help the cultural tourism industry achieve digital transformation'}
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold mb-6">
                  {language === 'zh' ? '面向游客' : 'For Tourists'}
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-green-500" />
                    <span>
                      {language === 'zh'
                        ? '个性化体验：基于兴趣和行为的智能推荐，打造专属旅行体验'
                        : 'Personalized Experience: Intelligent recommendations based on interests and behaviors, creating exclusive travel experiences'}
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-green-500" />
                    <span>
                      {language === 'zh'
                        ? '便捷服务：一站式规划、预订和导航，简化旅行流程'
                        : 'Convenient Service: One-stop planning, booking, and navigation, simplifying the travel process'}
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-green-500" />
                    <span>
                      {language === 'zh'
                        ? '深度文化体验：通过数字化展示，深入了解文化内涵'
                        : 'Deep Cultural Experience: Understand cultural connotations deeply through digital display'}
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-green-500" />
                    <span>
                      {language === 'zh'
                        ? '互动参与：从被动观赏到主动参与，提升旅游体验'
                        : 'Interactive Participation: From passive viewing to active participation, enhancing the tourism experience'}
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6">
                  {language === 'zh' ? '面向企业与管理机构' : 'For Businesses and Management Agencies'}
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-green-500" />
                    <span>
                      {language === 'zh'
                        ? '数据驱动决策：通过大数据分析优化运营策略和资源配置'
                        : 'Data-Driven Decisions: Optimize operational strategies and resource allocation through big data analysis'}
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-green-500" />
                    <span>
                      {language === 'zh'
                        ? '提升管理效率：智能化管理系统减少人力资源投入，提高服务质量'
                        : 'Improved Management Efficiency: Intelligent management systems reduce human resource investment and improve service quality'}
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-green-500" />
                    <span>
                      {language === 'zh'
                        ? '精准营销：基于用户画像的智能推广，提高营销转化率'
                        : 'Precision Marketing: Intelligent promotion based on user profiles, improving marketing conversion rates'}
                    </span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-green-500" />
                    <span>
                      {language === 'zh'
                        ? '品牌价值提升：创新技术应用彰显企业形象，提升品牌影响力'
                        : 'Brand Value Enhancement: Innovative technology applications enhance corporate image and brand influence'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {language === 'zh' ? '准备好开始数字化文旅之旅了吗？' : 'Ready to Start Your Digital Tourism Journey?'}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {language === 'zh'
                  ? '联系我们，了解西江鼎科技如何帮助您的文旅业务实现数字化转型，提升竞争力。'
                  : 'Contact us to learn how Xijiang Tech can help your cultural tourism business achieve digital transformation and enhance competitiveness.'}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg">
                    {language === 'zh' ? '联系我们' : 'Contact Us'}
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  {language === 'zh' ? '预约演示' : 'Book a Demo'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalTourismSolution;
