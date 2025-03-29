
import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LogoProps {
  name: string;
  logo?: string;
  className?: string;
}

const Logo = ({ name, logo, className }: LogoProps) => {
  return (
    <div className={`flex h-16 w-full items-center justify-center transition-all duration-300 hover:scale-105 ${className}`}>
      <div className="flex h-16 w-full items-center justify-center rounded-lg bg-white px-4 shadow-sm">
        {logo ? (
          <img src={logo} alt={name} className="h-12 w-auto object-contain" />
        ) : (
          <span className="text-lg font-semibold text-foreground">{name}</span>
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
      logo: 'https://cdn.worldvectorlogo.com/logos/huawei-logo.svg'
    },
    {
      name: language === 'zh' ? '特斯拉' : 'Tesla',
      logo: 'https://cdn.worldvectorlogo.com/logos/tesla-9.svg'
    },
    {
      name: language === 'zh' ? '腾讯' : 'Tencent',
      logo: 'https://cdn.worldvectorlogo.com/logos/tencent-logo.svg'
    },
    {
      name: language === 'zh' ? '中山大学' : 'Sun Yat-sen University',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Sun_Yat-sen_University_Logo.svg/220px-Sun_Yat-sen_University_Logo.svg.png'
    },
    {
      name: language === 'zh' ? '星海音乐学院' : 'Xinghai Conservatory of Music',
      logo: ''
    },
    {
      name: language === 'zh' ? '抚州金叶' : 'Fuzhou Jinye',
      logo: ''
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

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          {clients.map((client, index) => (
            <Logo 
              key={index} 
              name={client.name} 
              logo={client.logo}
              className="animate-on-scroll" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
