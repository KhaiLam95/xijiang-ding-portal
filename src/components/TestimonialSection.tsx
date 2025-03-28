
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
      quote: "西江鼎科技的AI解决方案帮助我们大幅提升了业务效率，他们的专业团队提供了全程的技术支持和指导。",
      author: "张明",
      role: "CTO",
      company: "未来科技有限公司",
      avatarSrc: ""
    },
    {
      quote: "我们与西江鼎的合作非常愉快，他们的定制软件解决方案完美满足了我们的业务需求，值得信赖的技术伙伴。",
      author: "李华",
      role: "CEO",
      company: "智联科技集团",
      avatarSrc: ""
    },
    {
      quote: "西江鼎科技的技术团队专业且高效，他们的数据分析平台帮助我们发现了业务中的宝贵洞察，推动了业务的快速增长。",
      author: "王芳",
      role: "数据分析总监",
      company: "鑫源金融",
      avatarSrc: ""
    },
    {
      quote: "作为长期合作伙伴，西江鼎科技一直为我们提供最前沿的技术支持，他们的创新能力和专业素养令人印象深刻。",
      author: "赵强",
      role: "技术总监",
      company: "星辰医疗",
      avatarSrc: ""
    },
    {
      quote: "西江鼎开发的教育平台大大提升了我们的教学效率和学生体验，他们对教育行业的深入理解使这次合作非常成功。",
      author: "陈学",
      role: "校长",
      company: "明德教育集团",
      avatarSrc: ""
    }
  ];
  
  const enTestimonials: TestimonialProps[] = [
    {
      quote: "Xijiang Tech's AI solutions have significantly improved our business efficiency, and their professional team provided comprehensive technical support and guidance.",
      author: "Zhang Ming",
      role: "CTO",
      company: "Future Tech Co., Ltd.",
      avatarSrc: ""
    },
    {
      quote: "Our collaboration with Xijiang has been very pleasant. Their custom software solutions perfectly met our business needs. They are a trustworthy technology partner.",
      author: "Li Hua",
      role: "CEO",
      company: "Smart Tech Group",
      avatarSrc: ""
    },
    {
      quote: "Xijiang Tech's technical team is professional and efficient. Their data analysis platform helped us discover valuable insights in our business, driving rapid growth.",
      author: "Wang Fang",
      role: "Data Analytics Director",
      company: "Xingyuan Finance",
      avatarSrc: ""
    },
    {
      quote: "As a long-term partner, Xijiang Tech has always provided us with cutting-edge technical support. Their innovation capability and professionalism are impressive.",
      author: "Zhao Qiang",
      role: "Technical Director",
      company: "Xingchen Medical",
      avatarSrc: ""
    },
    {
      quote: "The education platform developed by Xijiang has greatly improved our teaching efficiency and student experience. Their deep understanding of the education industry made this collaboration very successful.",
      author: "Chen Xue",
      role: "Principal",
      company: "Mingde Education Group",
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
