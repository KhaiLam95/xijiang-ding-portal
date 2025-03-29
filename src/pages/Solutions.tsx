
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Solutions = () => {
  const { language } = useLanguage();
  
  const solutions = language === 'zh' ? [
    {
      id: "digital-tourism",
      title: "数智文旅",
      description: "通过数字化技术和AI，为文化旅游行业提供智能运营、个性化服务和全面升级的解决方案。",
      image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=2000&auto=format&fit=crop",
      path: "/solutions/digital-tourism",
      features: [
        "文旅数字内容创作与展示",
        "智慧旅游服务平台",
        "文化遗产数字化保护",
        "旅游大数据分析"
      ]
    },
    {
      id: "healthcare",
      title: "医疗健康",
      description: "结合AI与大数据技术，提供智能诊断、远程医疗和健康管理平台，提升医疗服务效率和质量。",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2000&auto=format&fit=crop",
      path: "/solutions/healthcare",
      features: [
        "医学影像辅助诊断系统",
        "智能健康管理平台",
        "远程医疗解决方案",
        "医疗大数据分析平台"
      ]
    },
    {
      id: "education",
      title: "智慧教育",
      description: "打造智能化、个性化的教育平台，通过技术创新提升教学质量，为师生创造更优质的教育体验。",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop",
      path: "/solutions/education",
      features: [
        "智能学习平台",
        "个性化教育方案",
        "教育数据分析系统",
        "在线考试与评估系统"
      ]
    },
    {
      id: "smartcity",
      title: "智慧城市",
      description: "为城市管理者提供综合性的智慧城市解决方案，优化城市运营，提升市民生活质量。",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2000&auto=format&fit=crop",
      path: "/solutions/smartcity",
      features: [
        "智慧交通系统",
        "城市安全监控平台",
        "智能能源管理系统",
        "环境监测与保护系统"
      ]
    }
  ] : [
    {
      id: "digital-tourism",
      title: "Digital Tourism",
      description: "Through digital technology and AI, we provide intelligent operations, personalized services, and comprehensive upgrade solutions for the cultural tourism industry.",
      image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=2000&auto=format&fit=crop",
      path: "/solutions/digital-tourism",
      features: [
        "Tourism Digital Content Creation and Display",
        "Smart Tourism Service Platform",
        "Digital Protection of Cultural Heritage",
        "Tourism Big Data Analysis"
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Combining AI and big data technology to provide intelligent diagnosis, telemedicine, and health management platforms to improve healthcare service efficiency and quality.",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2000&auto=format&fit=crop",
      path: "/solutions/healthcare",
      features: [
        "Medical Imaging Assisted Diagnosis System",
        "Intelligent Health Management Platform",
        "Telemedicine Solutions",
        "Healthcare Big Data Analysis Platform"
      ]
    },
    {
      id: "education",
      title: "Smart Education",
      description: "Creating intelligent, personalized education platforms, improving teaching quality through technological innovation, creating a better educational experience.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop",
      path: "/solutions/education",
      features: [
        "Intelligent Learning Platform",
        "Personalized Education Solutions",
        "Educational Data Analysis System",
        "Online Examination and Assessment System"
      ]
    },
    {
      id: "smartcity",
      title: "Smart City",
      description: "Providing comprehensive smart city solutions for city managers to optimize urban operations and improve citizens' quality of life.",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2000&auto=format&fit=crop",
      path: "/solutions/smartcity",
      features: [
        "Smart Transportation System",
        "Urban Security Monitoring Platform",
        "Intelligent Energy Management System",
        "Environmental Monitoring and Protection System"
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-gradient text-base font-semibold">
              {language === 'zh' ? '解决方案' : 'Solutions'}
            </h2>
            <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {language === 'zh' ? '为各行业量身定制的技术方案' : 'Customized Technical Solutions for Various Industries'}
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              {language === 'zh' 
                ? '我们深入理解各行业痛点，提供专业化、个性化的解决方案，满足不同行业的特定需求'
                : 'We deeply understand the pain points of various industries and provide professional, personalized solutions to meet the specific needs of different industries'}
            </p>
          </div>
          
          <div className="mt-16 space-y-24">
            {solutions.map((solution, index) => (
              <div 
                key={solution.id} 
                className={`grid grid-cols-1 gap-12 md:grid-cols-2 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="mr-2 mt-1 text-accent">•</div>
                        <p>{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <Link to={solution.path}>
                    <Button className="group">
                      {language === 'zh' ? '了解更多' : 'Learn More'}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
