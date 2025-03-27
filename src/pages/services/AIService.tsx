
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIService = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center mb-8 text-accent hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回所有服务
          </Link>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-gradient text-base font-semibold">产品服务</h2>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                人工智能服务
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                我们的AI解决方案为各行业提供智能化转型支持，包括机器学习模型开发、自然语言处理、计算机视觉和智能决策系统。
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">定制AI模型开发与训练</h4>
                  <p className="mt-2 text-muted-foreground">
                    根据您的业务需求，开发和训练定制化的人工智能模型，解决特定领域的复杂问题。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">智能客服与聊天机器人</h4>
                  <p className="mt-2 text-muted-foreground">
                    开发能够理解自然语言的智能客服系统，提升客户服务体验，降低人力成本。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">计算机视觉解决方案</h4>
                  <p className="mt-2 text-muted-foreground">
                    提供图像识别、目标检测、视频分析等计算机视觉服务，应用于安防监控、质量检测等场景。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">智能数据分析与预测</h4>
                  <p className="mt-2 text-muted-foreground">
                    运用先进的机器学习算法，对数据进行深度分析，提供业务预测和决策支持。
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="mr-4">联系我们</Button>
                <Button variant="outline">查看案例</Button>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1677442135736-018b10b5040e?q=80&w=1932" 
                alt="人工智能服务" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIService;
