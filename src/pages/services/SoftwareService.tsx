
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareService = () => {
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
                软件开发
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                我们提供全栈软件开发服务，包括定制应用程序、网站、移动应用和企业级软件解决方案。
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">Web应用与企业系统开发</h4>
                  <p className="mt-2 text-muted-foreground">
                    开发功能强大、界面友好的Web应用和企业系统，帮助企业实现数字化办公和业务流程优化。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">移动应用开发（iOS/Android）</h4>
                  <p className="mt-2 text-muted-foreground">
                    打造原生或跨平台的移动应用，确保在各种设备上提供一致的高质量用户体验。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">云服务与微服务架构</h4>
                  <p className="mt-2 text-muted-foreground">
                    设计和实施基于云的架构和微服务系统，提高系统的可扩展性、安全性和可靠性。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">DevOps与系统集成</h4>
                  <p className="mt-2 text-muted-foreground">
                    提供DevOps服务和系统集成解决方案，实现自动化部署和系统间的无缝衔接。
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740" 
                alt="软件开发" 
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

export default SoftwareService;
