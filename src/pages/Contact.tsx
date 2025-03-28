
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log({ name, email, message });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-center font-display text-3xl font-bold sm:text-4xl md:text-5xl mb-16">
            {language === 'zh' ? '联系我们' : 'Contact Us'}
          </h1>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {language === 'zh' ? '联系方式' : 'Contact Information'}
                </h2>
                <p className="text-muted-foreground mb-8">
                  {language === 'zh' 
                    ? '我们期待听到您的声音。请通过以下方式与我们联系，或填写表单发送消息。' 
                    : 'We look forward to hearing from you. Get in touch with us through the following channels or fill out the form to send a message.'}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mt-1 mr-4 text-primary" />
                    <div>
                      <h3 className="font-medium">
                        {language === 'zh' ? '电话' : 'Phone'}
                      </h3>
                      <p className="text-muted-foreground">+86 400 888 8888</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mt-1 mr-4 text-primary" />
                    <div>
                      <h3 className="font-medium">
                        {language === 'zh' ? '邮箱' : 'Email'}
                      </h3>
                      <p className="text-muted-foreground">contact@xijiangding.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mt-1 mr-4 text-primary" />
                    <div>
                      <h3 className="font-medium">
                        {language === 'zh' ? '地址' : 'Address'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'zh' 
                          ? '中国北京市海淀区科技园区 100085' 
                          : 'Technology Park, Haidian District, Beijing, China 100085'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* WeChat QR Code */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  {language === 'zh' ? '微信咨询' : 'WeChat Consultation'}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {language === 'zh' 
                    ? '扫描下方二维码，添加我们的官方微信账号进行咨询。' 
                    : 'Scan the QR code below to add our official WeChat account for consultation.'}
                </p>
                <div className="flex justify-center bg-white p-4 rounded-lg shadow-sm border w-fit">
                  <img 
                    src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=600"
                    alt="WeChat QR Code" 
                    className="w-48 h-48 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">
                {language === 'zh' ? '发送消息' : 'Send a Message'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {language === 'zh' ? '您的姓名' : 'Your Name'}
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === 'zh' ? '请输入您的姓名' : 'Enter your name'}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {language === 'zh' ? '电子邮箱' : 'Email Address'}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'zh' ? '请输入您的邮箱' : 'Enter your email'}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {language === 'zh' ? '您的消息' : 'Your Message'}
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={language === 'zh' ? '请输入您的消息内容' : 'Enter your message'}
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  {language === 'zh' ? '发送消息' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
