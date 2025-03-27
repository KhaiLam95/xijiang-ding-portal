
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataService = () => {
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
                数据服务
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                我们提供全面的数据管理、分析和挖掘服务，帮助企业充分利用数据资产。
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">大数据平台搭建与管理</h4>
                  <p className="mt-2 text-muted-foreground">
                    搭建和管理大数据处理平台，为企业提供可靠、高效的数据处理能力。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">数据清洗、整合与治理</h4>
                  <p className="mt-2 text-muted-foreground">
                    提供专业的数据清洗、整合和治理服务，提高数据质量和可用性。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">数据可视化与商业智能</h4>
                  <p className="mt-2 text-muted-foreground">
                    开发直观、交互式的数据可视化和商业智能解决方案，帮助企业更好地理解和使用数据。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">预测分析与数据挖掘</h4>
                  <p className="mt-2 text-muted-foreground">
                    运用先进的数据挖掘和预测分析技术，发现数据中的模式和趋势，支持业务决策。
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
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1740" 
                alt="数据服务" 
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

export default DataService;
