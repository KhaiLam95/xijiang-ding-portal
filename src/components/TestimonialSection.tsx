
import React from 'react';
import { 
  Carousel,
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarSrc?: string;
}

const TestimonialSection = () => {
  const { language } = useLanguage();
  
  const zhTestimonials: TestimonialProps[] = [
    {
      quote: "西江鼎科技的AI解决方案帮助我们大幅提升了业务效率，他们的专业团队提供了全程的技术支持和指导，新技术确实帮助我们节省了大量时间和成本。",
      author: "王柯",
      role: "运营总监",
      company: "电商行业",
      avatarSrc: ""
    },
    {
      quote: "西江鼎的数据分析服务令人印象深刻，他们具有出色的业务梳理洞察力，帮助我们这个传统公司进行数字化升级，用数据评估内外效率和决策，有效促进了业务增长。",
      author: "石大牛",
      role: "项目经理",
      company: "建筑工程行业",
      avatarSrc: ""
    },
    {
      quote: "西江鼎的软件定制服务非常专业，沟通服务非常顺畅，团队合作很周到，始终能理解我们的需求并提供合适的解决方案。",
      author: "周子杰",
      role: "创始人",
      company: "互联网行业",
      avatarSrc: ""
    },
    {
      quote: "作为长期合作伙伴，西江鼎科技一直为我们提供最前沿的技术支持，他们不断结合新技术带来创新和支持，专业素养令人印象深刻。",
      author: "赵广",
      role: "技术总监",
      company: "智慧农业",
      avatarSrc: ""
    }
  ];
  
  const enTestimonials: TestimonialProps[] = [
    {
      quote: "Xijiang Tech's AI solutions have significantly improved our business efficiency. Their professional team provided comprehensive technical support and guidance. The new technology has indeed helped us save a lot of time and costs.",
      author: "Wang Ke",
      role: "Operations Director",
      company: "E-commerce Industry",
      avatarSrc: ""
    },
    {
      quote: "Xijiang's data analysis service is impressive. They have excellent business insight, helping our traditional company upgrade digitally, using data to evaluate internal and external efficiency and decisions, effectively promoting business growth.",
      author: "Shi Daniu",
      role: "Project Manager",
      company: "Construction Industry",
      avatarSrc: ""
    },
    {
      quote: "Xijiang's custom software service is very professional. The communication service is very smooth, and the team cooperation is very thoughtful. They always understand our needs and provide appropriate solutions.",
      author: "Zhou Zijie",
      role: "Founder",
      company: "Internet Industry",
      avatarSrc: ""
    },
    {
      quote: "As a long-term partner, Xijiang Tech has always provided us with cutting-edge technical support. They constantly combine new technologies to bring innovation and support, and their professionalism is impressive.",
      author: "Zhao Guang",
      role: "Technical Director",
      company: "Smart Agriculture",
      avatarSrc: ""
    }
  ];
  
  const testimonials = language === 'zh' ? zhTestimonials : enTestimonials;

  const TestimonialCard = ({ quote, author, role, company, avatarSrc }: TestimonialProps) => {
    return (
      <div className="glass-card h-full p-6 md:p-8">
        <div className="flex items-center text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <p className="mt-4 text-lg text-foreground">"{quote}"</p>
        <div className="mt-6 flex items-center">
          <Avatar className="h-10 w-10">
            {avatarSrc ? (
              <AvatarImage src={avatarSrc} alt={author} />
            ) : null}
            <AvatarFallback className="bg-primary/10 text-primary">
              {author.slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="text-sm font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}, {company}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-gradient text-base font-semibold">
            {language === 'zh' ? '客户评价' : 'Client Testimonials'}
          </h2>
          <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {language === 'zh' ? '听听客户怎么说' : 'What Our Clients Say'}
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            {language === 'zh' 
              ? '我们的客户对西江鼎科技的服务和解决方案给予了高度评价，这些真实的反馈是我们不断前进的动力。'
              : "Our clients have highly praised Xijiang Tech's services and solutions. These authentic feedbacks drive us to continuously improve."}
          </p>
        </div>

        <div className="mt-16">
          <Carousel className="mx-auto max-w-5xl">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center space-x-2">
              <CarouselPrevious className="relative static translate-y-0" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
