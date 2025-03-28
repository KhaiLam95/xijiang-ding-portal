
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingQRCode from './FloatingQRCode';
import { useLanguage } from '@/contexts/LanguageContext';

const CTA = () => {
  const { t } = useLanguage();
  
  return (
    <div className="py-24 relative">
      <FloatingQRCode />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent p-1">
          <div className="bg-background py-16 px-8 sm:p-16 rounded-[calc(1.5rem-4px)] flex flex-col items-center text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t('cta.title')}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {t('cta.description')}
            </p>
            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link to="/contact">
                <Button size="lg" className="group">
                  {t('cta.appointment')}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="group">
                <Phone className="mr-2 h-4 w-4" />
                {t('cta.phone')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
