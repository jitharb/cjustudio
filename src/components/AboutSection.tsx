/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Lightbulb, Compass, ShieldCheck } from 'lucide-react';
import { LEADERSHIP_DATA } from '../data';

export default function AboutSection() {
  return (
    <div id="about-screen-root" className="w-full py-16">
      {/* 1. Hero Summary Description */}
      <section className="px-6 md:px-16 max-w-container-max mx-auto mb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6 md:w-5/6"
        >
          <div className="text-secondary font-mono text-xs uppercase tracking-widest font-semibold mb-1">
            ABOUT STUDIO PRECISION
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            구조적 무결성을 갖춘<br />디지털 생태계의 구축.
          </h1>
          <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed max-w-3xl font-light">
            우리는 단순히 웹사이트를 만드는 것이 아니라, 고성장 기업을 위한 견고하고 확장 가능한 디지털 인프라를 설계합니다. 우리의 접근 방식은 정밀한 논리와 미니멀한 미학을 결합하여 완벽하게 작동하고 시선을 사로잡는 솔루션을 제공합니다.
          </p>
        </motion.div>
      </section>

      {/* 2. Values Bento Grid */}
      <section className="mt-16 px-6 md:px-16 max-w-container-max mx-auto w-full">
        <div className="flex items-baseline justify-between mb-8 border-b border-border-low pb-3">
          <h2 className="font-display text-2xl font-bold text-primary tracking-tight">핵심 원칙</h2>
          <span className="text-xs font-mono text-outline uppercase tracking-wider hidden sm:inline">GUIDING DESIGN LAWS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Value 1: Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-subtle p-8 border border-border-low flex flex-col gap-4 group hover:border-secondary transition-all duration-300 rounded"
          >
            <div className="w-12 h-12 rounded bg-white border border-border-low flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
              <Lightbulb size={20} className="stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">혁신</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-light">
                유용성의 틀 안에서 경계를 넓힙니다. 복잡한 문제를 해결하기 위해 최첨단 기술을 활용하며, 모든 혁신적인 기능이 측정 가능한 비즈니스 목표를 달성할 수 있도록 보장합니다.
              </p>
            </div>
          </motion.div>

          {/* Value 2: Precision (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 border border-border-low flex flex-col gap-4 md:col-span-2 group hover:border-secondary transition-all duration-300 rounded"
          >
            <div className="w-12 h-12 rounded bg-surface-subtle border border-border-low flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
              <Compass size={20} className="stroke-[2.2]" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-primary mb-2">정밀함</h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed font-light">
                모든 픽셀과 코드 줄에 정확성을 기합니다. 우리의 방법론은 체계적 설계에 뿌리를 두고 있으며, 모든 접점에서 절대적인 일관성과 완벽한 실행을 보장합니다. 우리는 디자인을 정확한 과학으로 취급합니다.
              </p>
            </div>
          </motion.div>

          {/* Value 3: Trust & Responsibility (Span 3 - split layout inside) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 border border-border-low flex flex-col gap-6 md:col-span-3 group hover:border-secondary transition-all duration-300 rounded"
          >
            <div className="flex items-center gap-4 border-b border-border-low/40 pb-4">
              <div className="w-12 h-12 rounded bg-surface-subtle border border-border-low flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <ShieldCheck size={20} className="stroke-[2.2]" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary tracking-tight">신뢰와 책임</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed font-light">
                투명성과 가시적인 결과를 바탕으로 구축되었습니다. 우리는 단순한 벤더가 아니라 전략적 파트너로서 행동합니다. 우리의 프로세스는 눈에 보이고, 타임라인은 엄격하며, 프로젝트의 성공에 대한 우리의 약속은 절대적입니다.
              </p>
              
              <div className="w-full h-48 bg-surface border border-border-low rounded overflow-hidden relative">
                <img 
                  alt="Team collaboration blueprint workshop" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.03]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYN2I94RI51f32Y8kNYxOAy6Z-4WHOiqZEfxx2B2PQVXpDUdvaOurkMRTGS1RhU8Jt8PDn0rsE6uzWnRQQ2jMUSEQY8DL11zcdySZXqgg0ZRdTzmdZ82SFAb-uFQFWkjfe1_5jmmxL-IZHVJhPikNlufQfZisZQ3C8fZ_EBTv07O3uu18l1cXlFyb1_GEa3G1TJEePjnprZ6ozU2ZS9lZi8i4rRE0jdulgNRa7fC-ZgRP_9UEg7PUigf2mroLUQPi2s5b0Z39Lrw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Leadership Team Grid */}
      <section className="mt-20 px-6 md:px-16 max-w-container-max mx-auto w-full">
        <div className="flex justify-between items-baseline mb-8 border-b border-border-low pb-3">
          <h2 className="font-display text-2xl font-bold text-primary tracking-tight">리더십</h2>
          <p className="font-sans text-xs text-on-surface-variant italic hidden md:block">디지털 인프라를 설계하는 건축가들.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {LEADERSHIP_DATA.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-3 group cursor-pointer"
            >
              <div className="w-full aspect-square bg-surface-subtle border border-border-low overflow-hidden relative rounded-sm">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                {/* Simple overlay shadow */}
                <div className="absolute inset-0 border border-border-low pointer-events-none rounded-sm" />
              </div>
              
              <div>
                <h4 className="font-display text-base md:text-lg font-bold text-primary tracking-tight group-hover:text-secondary transition-colors">
                  {member.name}
                </h4>
                <p className="font-sans text-xs text-secondary font-semibold uppercase tracking-widest mt-1">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
