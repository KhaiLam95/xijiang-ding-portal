
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-gradient text-base font-semibold">产品服务</h2>
            <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              全方位的技术解决方案
            </h3>
            <p className="mt-4 text-lg text-muted-foreground">
              我们提供全面的技术服务，从AI解决方案到软件开发，满足您的各种业务需求
            </p>
          </div>
          
          <div className="mt-16 space-y-24">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">人工智能服务</h3>
                <p className="text-muted-foreground mb-6">
                  我们的AI解决方案为各行业提供智能化转型支持，包括机器学习模型开发、自然语言处理、计算机视觉和智能决策系统。
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>定制AI模型开发与训练</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>智能客服与聊天机器人</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>计算机视觉解决方案</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>智能数据分析与预测</p>
                  </li>
                </ul>
                <Link to="/services/ai">
                  <Button className="group">
                    了解更多
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1677442135736-018b10b5040e?q=80&w=1932" 
                  alt="人工智能服务" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center md:flex-row-reverse">
              <div>
                <h3 className="text-2xl font-bold mb-4">软件开发</h3>
                <p className="text-muted-foreground mb-6">
                  我们提供全栈软件开发服务，包括定制应用程序、网站、移动应用和企业级软件解决方案。
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>Web应用与企业系统开发</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>移动应用开发（iOS/Android）</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>云服务与微服务架构</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>DevOps与系统集成</p>
                  </li>
                </ul>
                <Link to="/services/software">
                  <Button className="group">
                    了解更多
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740" 
                  alt="软件开发" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">技术咨询</h3>
                <p className="text-muted-foreground mb-6">
                  我们的专业顾问团队提供战略性技术规划、数字化转型咨询和IT基础设施优化服务。
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>数字化转型战略规划</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>IT架构评估与优化</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>技术选型与实施路线图</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>技术团队培训与赋能</p>
                  </li>
                </ul>
                <Link to="/services/consulting">
                  <Button className="group">
                    了解更多
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1740" 
                  alt="技术咨询" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center md:flex-row-reverse">
              <div>
                <h3 className="text-2xl font-bold mb-4">数据服务</h3>
                <p className="text-muted-foreground mb-6">
                  我们提供全面的数据管理、分析和挖掘服务，帮助企业充分利用数据资产。
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>大数据平台搭建与管理</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>数据清洗、整合与治理</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>数据可视化与商业智能</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-primary">•</div>
                    <p>预测分析与数据挖掘</p>
                  </li>
                </ul>
                <Link to="/services/data">
                  <Button className="group">
                    了解更多
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1740" 
                  alt="数据服务" 
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
