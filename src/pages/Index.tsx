
import React, { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import SolutionSection from '@/components/SolutionSection';
import ClientSection from '@/components/ClientSection';
import TestimonialSection from '@/components/TestimonialSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize intersection observer for animation on scroll
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

    // Observe all elements with the animate-on-scroll class
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    // Clean up observer on component unmount
    return () => {
      if (observerRef.current) {
        elements.forEach((el) => observerRef.current?.unobserve(el));
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <SolutionSection />
        <ClientSection />
        <TestimonialSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
