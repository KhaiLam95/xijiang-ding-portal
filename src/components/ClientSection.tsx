
import React, { useRef, useEffect } from 'react';

interface LogoProps {
  name: string;
  className?: string;
}

const Logo = ({ name, className }: LogoProps) => {
  return (
    <div className={`flex h-12 w-full items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 ${className}`}>
      <div className="flex h-10 w-40 items-center justify-center rounded-lg bg-muted/30 px-4">
        <span className="text-lg font-semibold text-muted-foreground">{name}</span>
      </div>
    </div>
  );
};

const ClientSection = () => {
  const logos = [
    "华为", "阿里巴巴", "腾讯", "百度", "京东", 
    "字节跳动", "小米", "网易", "美团", "滴滴"
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
          <h2 className="text-gradient text-base font-semibold">我们的客户</h2>
          <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            值得信赖的合作伙伴
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            我们的解决方案已成功助力众多行业领先企业实现数字化转型和业务增长。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((logo, index) => (
            <Logo key={index} name={logo} className="animate-on-scroll" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
