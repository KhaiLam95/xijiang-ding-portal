
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationSolution = () => {
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
                智慧教育
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                打造智能化、个性化的教育平台，通过技术创新提升教学质量，为师生创造更优质的教育体验。
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">智能学习平台</h4>
                  <p className="mt-2 text-muted-foreground">
                    开发基于AI的智能学习系统，提供个性化学习路径和智能题库，提高学习效率。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">个性化教育方案</h4>
                  <p className="mt-2 text-muted-foreground">
                    基于学生数据和学习行为分析，提供个性化的教学内容和评估方式，满足不同学生的需求。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">教育数据分析系统</h4>
                  <p className="mt-2 text-muted-foreground">
                    提供全面的教育数据收集和分析工具，帮助教育机构优化教学管理和资源分配。
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="text-xl font-semibold">在线考试与评估系统</h4>
                  <p className="mt-2 text-muted-foreground">
                    开发安全、高效的在线考试和评估系统，支持多种题型和自动评分，减轻教师工作负担。
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
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop" 
                alt="智慧教育" 
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

export default EducationSolution;
