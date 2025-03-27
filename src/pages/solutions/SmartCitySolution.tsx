
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmartCitySolution = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Link to="/solutions" className="inline-flex items-center mb-8 text-accent hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回所有解决方案
          </Link>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-gradient text-base font-semibold">行业解决方案</h2>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                智慧城市
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                为城市管理者提供综合性的智慧城市解决方案，优化城市运营，提升市民生活质量。
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">智慧交通系统</h4>
                  <p className="mt-2 text-muted-foreground">
                    开发智能交通管理平台，实现交通信号优化、拥堵预测和智能停车管理，提高道路使用效率。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">城市安全监控平台</h4>
                  <p className="mt-2 text-muted-foreground">
                    构建基于AI的城市安全监控系统，实现异常行为识别、人群密度监测和紧急事件预警。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">智能能源管理系统</h4>
                  <p className="mt-2 text-muted-foreground">
                    打造城市能源智能化管理平台，优化能源分配和使用，推动绿色低碳发展。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">环境监测与保护系统</h4>
                  <p className="mt-2 text-muted-foreground">
                    开发城市环境监测系统，实时监控空气质量、水质和噪声等环境指标，支持环境保护决策。
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
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop" 
                alt="智慧城市" 
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

export default SmartCitySolution;
