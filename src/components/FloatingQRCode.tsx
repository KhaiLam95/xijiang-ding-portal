
import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingQRCode = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg p-3 mb-4 relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 h-6 w-6"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="pt-4">
            <img 
              src="/lovable-uploads/57daf7d6-89e7-4a2d-b08c-885e2051dae8.png" 
              alt="Zenon QR Code" 
              className="w-[200px] h-[200px] object-contain"
            />
          </div>
          <p className="text-center mt-2 text-sm font-medium">{t('qr.scanToConsult')}</p>
        </div>
      ) : (
        <Button 
          size="icon" 
          className="h-14 w-14 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default FloatingQRCode;
