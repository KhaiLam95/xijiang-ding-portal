
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { language, t } = useLanguage();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-gradient text-base font-semibold">
              {language === 'zh' ? '关于我们' : 'About Us'}
            </h2>
            <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {language === 'zh' 
                ? '西江鼎科技 - 创新科技解决方案提供商' 
                : 'Xijiang Tech - Innovative Technology Solution Provider'}
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              {language === 'zh'
                ? '我们致力于提供前沿的技术解决方案，帮助企业实现数字化转型'
                : 'We are committed to providing cutting-edge technological solutions to help businesses achieve digital transformation'}
            </p>
          </div>
          
          <div className="mt-16 space-y-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'zh' ? '公司简介' : 'Company Profile'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'zh'
                    ? '西江鼎科技成立于2018年，是一家专注于人工智能、软件开发和数字化转型的高科技企业。我们的团队由一群充满激情和创造力的技术专家组成，他们在各自领域拥有丰富的经验和深厚的专业知识。'
                    : 'Founded in 2018, Xijiang Tech is a high-tech enterprise focusing on artificial intelligence, software development, and digital transformation. Our team consists of passionate and creative technical experts with rich experience and in-depth professional knowledge in their respective fields.'}
                </p>
                <p className="text-muted-foreground">
                  {language === 'zh'
                    ? '我们的使命是通过创新的技术和解决方案，帮助企业应对数字时代的挑战，提升其竞争力和业务价值。我们相信，技术不仅仅是工具，更是推动业务发展的核心驱动力。'
                    : 'Our mission is to help businesses address the challenges of the digital era, enhance their competitiveness and business value through innovative technologies and solutions. We believe that technology is not just a tool, but the core driving force for business development.'}
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1740" 
                  alt={language === 'zh' ? '公司办公环境' : 'Company Office Environment'} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center md:flex-row-reverse">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'zh' ? '我们的价值观' : 'Our Values'}
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <span className="text-primary font-bold">
                        {language === 'zh' ? '创' : 'I'}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">
                        {language === 'zh' ? '创新驱动' : 'Innovation Driven'}
                      </h4>
                      <p className="text-muted-foreground">
                        {language === 'zh'
                          ? '我们不断探索和应用新技术，为客户创造更多价值。'
                          : 'We continuously explore and apply new technologies to create more value for our clients.'}
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <span className="text-primary font-bold">
                        {language === 'zh' ? '专' : 'E'}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">
                        {language === 'zh' ? '专业卓越' : 'Excellence in Expertise'}
                      </h4>
                      <p className="text-muted-foreground">
                        {language === 'zh'
                          ? '我们追求专业卓越，确保每个项目都达到最高标准。'
                          : 'We pursue professional excellence, ensuring each project meets the highest standards.'}
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <span className="text-primary font-bold">
                        {language === 'zh' ? '合' : 'C'}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">
                        {language === 'zh' ? '合作共赢' : 'Collaboration and Mutual Success'}
                      </h4>
                      <p className="text-muted-foreground">
                        {language === 'zh'
                          ? '我们与客户建立长期合作关系，共同成长。'
                          : 'We establish long-term partnerships with our clients, growing together.'}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740" 
                  alt={language === 'zh' ? '团队协作' : 'Team Collaboration'} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">
                {language === 'zh' ? '我们的团队' : 'Our Team'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687" 
                      alt="CEO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-center">
                    {language === 'zh' ? '张明' : 'Zhang Ming'}
                  </h4>
                  <p className="text-center text-muted-foreground mb-2">
                    {language === 'zh' ? '创始人 & CEO' : 'Founder & CEO'}
                  </p>
                  <p className="text-sm text-muted-foreground text-center">
                    {language === 'zh'
                      ? '前阿里巴巴技术专家，拥有15年互联网和AI领域的经验。'
                      : 'Former Alibaba Technical Expert with 15 years of experience in internet and AI.'}
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687" 
                      alt="CTO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-center">
                    {language === 'zh' ? '李雪' : 'Li Xue'}
                  </h4>
                  <p className="text-center text-muted-foreground mb-2">
                    {language === 'zh' ? 'CTO' : 'CTO'}
                  </p>
                  <p className="text-sm text-muted-foreground text-center">
                    {language === 'zh'
                      ? '前Google高级工程师，人工智能和大数据领域专家。'
                      : 'Former Google Senior Engineer, expert in artificial intelligence and big data.'}
                  </p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687" 
                      alt="COO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-center">
                    {language === 'zh' ? '王浩' : 'Wang Hao'}
                  </h4>
                  <p className="text-center text-muted-foreground mb-2">
                    {language === 'zh' ? 'COO' : 'COO'}
                  </p>
                  <p className="text-sm text-muted-foreground text-center">
                    {language === 'zh'
                      ? '前腾讯产品总监，拥有丰富的产品和运营经验。'
                      : 'Former Tencent Product Director with rich experience in product management and operations.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
