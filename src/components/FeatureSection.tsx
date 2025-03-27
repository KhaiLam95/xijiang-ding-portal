
import React from 'react';
import { 
  BrainCircuit,
  Code2,
  LineChart,
  Shield,
  Smartphone,
  Clock,
  Zap,
  Layers
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "glass-card p-6 flex flex-col items-start hover-scale",
      className
    )}>
      <div className="mb-4 rounded-lg bg-primary/10 p-3 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "人工智能技术",
      description: "运用先进的AI技术，为企业提供智能化解决方案，优化业务流程，提升生产效率。"
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "软件开发",
      description: "提供定制化软件开发服务，满足企业特定需求，提升业务运营效率。"
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "数据分析",
      description: "深度挖掘数据价值，通过数据分析帮助企业做出更明智的决策。"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "网络安全",
      description: "提供全方位的网络安全解决方案，保护企业核心数据和信息资产。"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "移动应用开发",
      description: "构建高性能、用户友好的移动应用，连接企业与客户。"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "敏捷开发",
      description: "采用敏捷开发方法，快速响应需求变化，缩短产品上市时间。"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "技术咨询",
      description: "提供专业的技术咨询服务，帮助企业制定科学的技术战略和发展规划。"
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "系统集成",
      description: "整合各类技术资源，实现系统间的无缝连接，提升整体运营效能。"
    },
  ];

  return (
    <div className="bg-gradient-to-b from-background to-secondary/30 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-gradient text-base font-semibold">我们的服务</h2>
          <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            全方位的科技解决方案
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            我们提供从人工智能到软件开发的全面技术服务，助力企业数字化转型，提升市场竞争力。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-on-scroll"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
