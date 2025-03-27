
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FintechSolution = () => {
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
                金融科技
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                通过AI技术和数据分析，为金融机构提供智能风控、个性化服务和数字化转型解决方案。
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">智能风控与反欺诈系统</h4>
                  <p className="mt-2 text-muted-foreground">
                    基于机器学习和大数据分析的风险控制和反欺诈系统，实时监测异常交易，有效降低金融风险。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">智能客户服务平台</h4>
                  <p className="mt-2 text-muted-foreground">
                    运用自然语言处理技术，提供智能客服和个性化金融顾问服务，提升客户体验。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">量化交易与投资分析</h4>
                  <p className="mt-2 text-muted-foreground">
                    开发高效的量化交易系统和投资分析工具，辅助金融机构和投资者做出更明智的决策。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">金融数据可视化与分析</h4>
                  <p className="mt-2 text-muted-foreground">
                    提供直观的金融数据可视化和深度分析工具，帮助机构洞察市场趋势和客户行为。
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
                src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2000&auto=format&fit=crop" 
                alt="金融科技" 
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

export default FintechSolution;
