
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    id: "fintech",
    title: "金融科技",
    description: "通过AI技术和数据分析，为金融机构提供智能风控、个性化服务和数字化转型解决方案。",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2000&auto=format&fit=crop",
    path: "/solutions/fintech"
  },
  {
    id: "healthcare",
    title: "医疗健康",
    description: "结合AI与大数据技术，提供智能诊断、远程医疗和健康管理平台，提升医疗服务效率和质量。",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop",
    path: "/solutions/healthcare"
  },
  {
    id: "education",
    title: "智慧教育",
    description: "打造智能化、个性化的教育平台，通过技术创新提升教学质量，为师生创造更优质的教育体验。",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
    path: "/solutions/education"
  },
  {
    id: "smartcity",
    title: "智慧城市",
    description: "为城市管理者提供综合性的智慧城市解决方案，优化城市运营，提升市民生活质量。",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop",
    path: "/solutions/smartcity"
  }
];

const SolutionCard = ({ solution, index }: { solution: typeof solutions[0], index: number }) => {
  return (
    <div className="animate-on-scroll overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="aspect-w-16 aspect-h-9 relative h-48 overflow-hidden">
        <img 
          src={solution.image} 
          alt={solution.title} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-medium">{solution.title}</h3>
        <p className="mb-4 text-muted-foreground">{solution.description}</p>
        <Link to={solution.path}>
          <Button variant="outline" className="group w-full">
            了解更多
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

const SolutionSection = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-gradient text-base font-semibold">行业解决方案</h2>
          <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            为各行业量身定制的技术方案
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            我们深入理解各行业痛点，提供专业化、个性化的解决方案，满足不同行业的特定需求。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
