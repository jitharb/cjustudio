/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, PenTool, Terminal, BarChart3, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { TabId } from '../types';

interface ServiceSectionProps {
  onStartProject: () => void;
  onNavigate: (tabId: TabId) => void;
}

export default function ServiceSection({ onStartProject, onNavigate }: ServiceSectionProps) {
  
  // Icon selector maps lucide components Dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid':
        return <PenTool className="text-primary w-8 h-8" />;
      case 'Terminal':
        return <Terminal className="text-primary w-5 h-5" />;
      case 'BarChart':
        return <BarChart3 className="text-primary w-5 h-5" />;
      default:
        return <PenTool className="text-primary w-5 h-5" />;
    }
  };

  return (
    <div id="services-screen-root" className="w-full">
      {/* 1. Hero Blueprinted Section */}
      <section className="relative min-h-[680px] md:min-h-[750px] flex items-center justify-center py-12 overflow-hidden border-b border-border-low bg-white">
        {/* Animated blueprint mesh background */}
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        
        {/* Content wrapper */}
        <div className="w-full max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:col-span-8 flex flex-col gap-6"
          >
            <div>
              <span className="font-sans text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/5 border border-secondary/15 inline-block px-3 py-1.5 rounded-full mb-3">
                전문적인 디지털 장인정신
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary tracking-tight leading-[1.1] md:leading-[1.15]">
                우리는 웹의 미래를<br />설계합니다
              </h1>
            </div>
            
            <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed font-light">
              기술적 정밀함, 창의적인 전문성, 그리고 흔들리지 않는 프로페셔널리즘을 갖춘 하이엔드 웹 디자인 에이전시입니다. 기업의 확장성과 고성장을 위한 프리미엄 디지털 청사진을 만듭니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <button 
                id="hero-cta-start-project"
                onClick={onStartProject}
                className="bg-deep-teal-900 text-white font-sans text-sm font-semibold px-8 py-4 rounded hover:bg-primary-container justify-center flex items-center gap-2 tracking-wide cursor-pointer active:scale-95 transition-all"
              >
                프로젝트 시작하기
              </button>
              <button 
                id="hero-cta-view-portfolio"
                onClick={() => onNavigate('portfolio')}
                className="bg-transparent border border-border-low text-primary font-sans text-sm font-semibold px-8 py-4 rounded hover:bg-surface-subtle justify-center flex items-center gap-2 tracking-wide cursor-pointer active:scale-95 transition-all"
              >
                포트폴리오 보기
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>

          {/* 3D Blueprint visual mockup preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:block md:col-span-4 h-[420px] relative"
          >
            <div className="absolute inset-0 bg-surface-subtle border border-border-low rounded-lg shadow-xl overflow-hidden p-3 bg-gradient-radial">
              <div 
                className="w-full h-full bg-cover bg-center rounded-md filter transition-transform duration-700 hover:scale-[1.02]" 
                style={{ 
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAN6JMnkKucEX7TQ9qF2yynruVdFhhdpd9AP-NU8r6b_YOCMSpVrtI9pdFzJTLsCZRxoSPd2uyuGMq47jHzyQTysmVBXnUQTgmYpRNUaCtTjbyKf0ykAz1aD8Xye7OrDTris7sx8Rkx84XaSmAqw-DxIVXfFNV2FBMkfoqEXCLGLofFwLPD4JX7ZZX9iImH8TDqNxwkqMzfQHkwiB8CBzzP6tdBLwNSeQ8YF1k9E_GI2doMIJV2coHierOHBoDIjhF6T0Px2zFkcg')` 
                }}
                role="img"
                aria-label="3D architectural glass wireframe mapping digital design precision"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Structured Services Bento Grid */}
      <section className="py-20 px-6 md:px-16 max-w-container-max mx-auto w-full">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 mb-12"
        >
          <h2 className="font-display text-3xl font-bold text-primary tracking-tight">체계적인 전문성</h2>
          <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl font-light">
            우리의 핵심 역량은 복잡한 요구사항을 우아하고 고성능의 디지털 경험으로 변환합니다.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
          
          {/* Main Service: UI/UX Design (Span 8) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-surface-subtle border border-border-low p-8 rounded-lg flex flex-col md:flex-row gap-6 group hover:border-secondary/40 transition-colors duration-300"
          >
            <div className="w-16 h-16 bg-white border border-border-low rounded flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:rotate-12 duration-300">
              {getIcon('LayoutGrid')}
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary tracking-tight">
                UI/UX 디자인
              </h3>
              <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed font-light">
                사용자 심리와 구조적 명확성에 바탕을 둔 직관적인 인터페이스를 설계합니다. 모든 상호작용은 인지 부하를 최소화하고 참여를 극대화하도록 매핑됩니다.
              </p>
              
              <ul className="mt-4 flex flex-col sm:flex-row gap-x-8 gap-y-2 text-sm font-sans text-on-surface-variant">
                <li className="flex items-center gap-2 font-medium">
                  <div className="w-5 h-5 bg-secondary/10 text-secondary rounded flex items-center justify-center">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  와이어프레임 & 프로토타이핑
                </li>
                <li className="flex items-center gap-2 font-medium">
                  <div className="w-5 h-5 bg-secondary/10 text-secondary rounded flex items-center justify-center">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  디자인 시스템 아키텍처
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Service 2: Web Dev (Span 4) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-white border border-border-low p-8 rounded-lg flex flex-col gap-4 group hover:border-secondary/40 transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 p-8 opacity-[0.03] text-primary group-hover:scale-110 duration-300 transition-transform">
              <Terminal size={140} />
            </div>
            <div className="w-12 h-12 bg-surface-subtle border border-border-low rounded flex items-center justify-center">
              {getIcon('Terminal')}
            </div>
            <div>
              <h3 className="font-display text-lg md:text-xl font-bold text-primary tracking-tight mb-2">웹 개발</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-light">
                성능과 유지보수성을 위해 구축된 견고하고 확장 가능한 프론트엔드 및 백엔드 아키텍처.
              </p>
            </div>
          </motion.div>

          {/* Service 3: Strategy (Span 4) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-white border border-border-low p-8 rounded-lg flex flex-col gap-4 group hover:border-secondary/40 transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-surface-subtle border border-border-low rounded flex items-center justify-center">
              {getIcon('BarChart')}
            </div>
            <div>
              <h3 className="font-display text-lg md:text-xl font-bold text-primary tracking-tight mb-2">디지털 전략</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-light">
                비즈니스 목표와 기술적 역량을 일치시키는 디지털 성장을 위한 데이터 기반 청사진.
              </p>
            </div>
          </motion.div>

          {/* Primary CTA Promotional Canvas Board (Span 8) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 bg-deep-teal-900 p-8 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 overflow-hidden relative"
          >
            <div className="flex flex-col gap-2 z-10">
              <h4 className="font-display text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                다음 플랫폼을 설계할 준비가 되셨나요?
              </h4>
              <p className="font-sans text-sm text-on-primary-container font-light">기술 전문가 팀과 함께하세요.</p>
            </div>
            
            <button 
              id="cta-reserve-consultation"
              onClick={onStartProject}
              className="bg-white text-primary font-sans text-xs md:text-sm font-bold px-6 py-3.5 rounded hover:bg-surface-subtle transition-all cursor-pointer shadow-md active:scale-95 z-10 shrink-0"
            >
              컨설팅 예약하기
            </button>
            <div className="absolute right-0 bottom-0 opacity-10 blur-xl w-64 h-64 bg-emerald-300 rounded-full pointer-events-none" />
          </motion.div>

        </div>
      </section>
    </div>
  );
}
