
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

interface LogoProps {
  name: string;
  logo: string;
  className?: string;
}

const Logo = ({ name, logo, className }: LogoProps) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className={`flex h-16 w-full items-center justify-center transition-all duration-300 hover:scale-105 ${className}`}>
      <div className="flex h-16 w-full items-center justify-center rounded-lg bg-white px-4 shadow-sm">
        {isLoading && !hasError && (
          <Skeleton className="h-10 w-3/4" />
        )}
        {hasError ? (
          <div className="text-sm text-muted-foreground">{name}</div>
        ) : (
          <img 
            src={logo} 
            alt={name} 
            className={`h-12 w-auto object-contain ${isLoading ? 'hidden' : 'block'}`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
              console.error(`Failed to load image: ${logo}`);
            }}
          />
        )}
      </div>
    </div>
  );
};

const ClientSection = () => {
  const { language } = useLanguage();
  
  const clients = [
    {
      name: language === 'zh' ? '华为' : 'Huawei',
      logo: '/lovable-uploads/e59f38e3-1713-4dee-ad13-2ad5d1b58250.png'
    },
    {
      name: language === 'zh' ? '特斯拉' : 'Tesla',
      logo: '/lovable-uploads/b5c1f49d-b442-4995-9963-4d3311da8c65.png'
    },
    {
      name: language === 'zh' ? '腾讯' : 'Tencent',
      logo: '/lovable-uploads/60cd8e2a-7f50-49a2-b083-94737881a194.png'
    },
    {
      name: language === 'zh' ? '中山大学' : 'Sun Yat-sen University',
      logo: '/lovable-uploads/a4bc49da-c4e8-4a4f-b931-f681e3d3ab6f.png'
    },
    {
      name: language === 'zh' ? '星海音乐学院' : 'Xinghai Conservatory of Music',
      logo: '/lovable-uploads/73aef3c5-1484-4478-8393-0df5744ed5de.png'
    },
    {
      name: language === 'zh' ? '抚州金叶' : 'Fuzhou Jinye',
      logo: '/lovable-uploads/a8b3d303-9e5d-4c1e-8531-b3c47fd8e6f5.png'
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

  // For debugging
  console.log("Client logos:", clients.map(client => client.logo));

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
