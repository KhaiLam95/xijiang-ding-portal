
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent p-1">
          <div className="bg-background py-16 px-8 sm:p-16 rounded-[calc(1.5rem-4px)] flex flex-col items-center text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              准备好开启数字化转型了吗？
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              联系我们，了解西江鼎科技如何帮助您的企业实现创新发展，提升竞争力。我们的专业团队随时为您提供咨询和支持。
            </p>
            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="group">
                预约咨询
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Phone className="mr-2 h-4 w-4" />
                400-888-8888
              </Button>
              <Button variant="outline" size="lg" className="group">
                <MessageSquare className="mr-2 h-4 w-4" />
                在线客服
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
