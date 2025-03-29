
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface LogoProps {
  name: string;
  logo: string;
  className?: string;
}

const Logo = ({ name, logo, className }: LogoProps) => {
  return (
    <div className={`flex h-16 w-full items-center justify-center transition-all duration-300 hover:scale-105 ${className}`}>
      <div className="flex h-16 w-full items-center justify-center rounded-lg bg-white px-4 shadow-sm">
        <img 
          src={logo} 
          alt={name} 
          className="h-12 w-auto object-contain"
          onError={(e) => {
            console.error(`Failed to load image: ${logo}`);
          }}
        />
      </div>
    </div>
  );
};

const ClientSection = () => {
  const { language } = useLanguage();
  
  const clients = [
    {
      name: language === 'zh' ? '华为' : 'Huawei',
      logo: '/lovable-uploads/9dbe51e9-adef-498b-9073-94b6e043eff7.png'
    },
    {
      name: language === 'zh' ? '特斯拉' : 'Tesla',
      logo: '/lovable-uploads/da38d1f7-3484-4267-83a8-0ad5d3403423.png'
    },
    {
      name: language === 'zh' ? '腾讯' : 'Tencent',
      logo: '/lovable-uploads/e5612a45-5b34-4e84-b6b3-b08af060c911.png'
    },
    {
      name: language === 'zh' ? '中山大学' : 'Sun Yat-sen University',
      logo: '/lovable-uploads/952a0b11-d74f-442b-b87a-ec1796016d28.png'
    },
    {
      name: language === 'zh' ? '星海音乐学院' : 'Xinghai Conservatory of Music',
      logo: '/lovable-uploads/777b232f-c0dc-41a7-a75f-bb63695d3f91.png'
    },
    {
      name: language === 'zh' ? '抚州金叶' : 'Fuzhou Jinye',
      logo: '/lovable-uploads/091a5ae3-e727-4e69-93ec-24dbc8130663.png'
    }
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        elements.forEach((el) => observerRef.current?.unobserve(el));
      }
    };
  }, []);

  return (
    <div className="border-y bg-muted/30 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-gradient text-base font-semibold">
            {language === 'zh' ? '我们的客户' : 'Our Clients'}
          </h2>
          <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {language === 'zh' ? '值得信赖的合作伙伴' : 'Trusted Partners'}
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            {language === 'zh' 
              ? '我们的解决方案已成功助力众多行业领先企业实现数字化转型和业务增长。'
              : 'Our solutions have successfully helped many industry-leading companies achieve digital transformation and business growth.'}
          </p>
        </div>

        {/* Desktop view */}
        <div className="mt-16 hidden grid-cols-3 gap-x-8 gap-y-10 md:grid">
          {clients.map((client, index) => (
            <Logo 
              key={index} 
              name={client.name} 
              logo={client.logo}
              className="animate-on-scroll" 
            />
          ))}
        </div>

        {/* Mobile view with carousel */}
        <div className="mt-12 md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Logo 
                    name={client.name} 
                    logo={client.logo}
                    className="animate-on-scroll px-4" 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0 transform-none" />
              <CarouselNext className="static translate-y-0 transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
