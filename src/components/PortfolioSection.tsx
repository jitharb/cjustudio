/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Columns, Filter, CheckCircle, Share2, Info, X } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { ProjectItem } from '../types';

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const categories = ['all', '핀테크 플랫폼', '데이터 시각화', '엔터프라이즈 SaaS', '기업용 웹 앱'];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <div id="portfolio-screen-root" className="w-full py-16">
      {/* Page Header */}
      <section className="px-6 md:px-16 max-w-container-max mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="text-secondary font-mono text-xs uppercase tracking-widest font-semibold mb-2">
            ARCHITECTURAL DESIGN PORTFOLIO
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight mb-4">
            정밀하게 설계된 디지털 공간
          </h1>
          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl font-light leading-relaxed">
            가장 영향력 있는 디지털 전환 사례들을 엄선했습니다. 타협하지 않는 디자인 실행력이 담긴 견고하고 확장 가능한 아키텍처를 구축합니다.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 mt-10 pb-4 border-b border-border-low">
          <div className="flex items-center gap-2 text-xs font-mono text-on-surface-variant/70 mr-3">
            <Filter size={13} />
            FILTER:
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-sans rounded-full border transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-primary text-white border-primary font-bold shadow-sm'
                  : 'bg-white text-on-surface-variant border-border-low hover:border-primary/40'
              }`}
            >
              {cat === 'all' ? '전체 보기' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Bento Portfolio Grid */}
      <section className="px-6 md:px-16 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px] md:auto-rows-[380px]">
          {filteredProjects.map((project, index) => {
            // Assign grid spans based on original wireframe asymmetry (items 1 & 4 are span-8, 2 & 3 are span-4)
            const isLarge = index === 0 || index === 3;
            const isLoaded = loadedImages[project.id];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className={`group relative overflow-hidden bg-surface-subtle border border-border-low rounded cursor-pointer transition-all ${
                  isLarge ? 'md:col-span-8' : 'md:col-span-4'
                }`}
              >
                {/* Loader Pulse Skeleton */}
                {!isLoaded && (
                  <div className="absolute inset-0 bg-surface-bright animate-pulse flex items-center justify-center">
                    <span className="font-mono text-[10px] text-on-surface-variant/50">LOADING ASSETS...</span>
                  </div>
                )}

                {/* Hotlinked Real Images */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  onLoad={() => handleImageLoad(project.id)}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Constant Floating Indicator (Subtle bottom bar) */}
                <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur border border-border-low/60 py-1.5 px-3 rounded flex items-center gap-1.5 transition-opacity group-hover:opacity-0 pointer-events-none">
                  <span className="font-display font-bold text-primary text-xs tracking-tight">{project.title}</span>
                  <span className="w-1 h-1 bg-secondary rounded-full" />
                  <span className="font-sans text-[10px] text-on-surface-variant font-medium uppercase tracking-wide">{project.category}</span>
                </div>

                {/* Full Hover overlay slide container */}
                <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 z-15">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-2.5 py-1 mb-2 bg-secondary/20 text-white font-mono text-[10px] uppercase tracking-wider rounded border border-secondary/20">
                      {project.category}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                      {project.title}
                    </h2>
                    <p className="font-sans text-xs text-on-primary-container/80 mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="font-sans text-xs text-[#a2e8f5] flex items-center gap-2 font-semibold">
                      상세 정보 및 설계 분석 보기
                      <ArrowRight size={14} />
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div id="case-study-drawer-overlay" className="fixed inset-0 z-50 flex items-center justify-end p-0">
            {/* Dark background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />

            {/* Slider Sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-xl h-full bg-white border-l border-border-low shadow-2xl z-10 flex flex-col justify-between overflow-y-auto"
            >
              {/* Drawer Top Header info */}
              <div>
                <div className="relative h-64 md:h-80 w-full overflow-hidden border-b border-border-low bg-surface-subtle">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/50 hover:bg-black/85 text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="font-mono text-[10px] text-on-primary-container uppercase bg-secondary/80 text-white px-2.5 py-1 rounded-sm tracking-widest border border-secondary/20">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight mt-2.5">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Content body detail */}
                <div className="p-6 md:p-8 flex flex-col gap-6">
                  <div>
                    <h4 className="text-xs font-mono text-outline uppercase tracking-wider mb-2">PROJECT OVERVIEW</h4>
                    <p className="text-sm font-sans text-on-surface-variant leading-relaxed font-light">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="border-t border-border-low/60 pt-6">
                    <h4 className="text-xs font-mono text-outline uppercase tracking-wider mb-3">CORE SPECIFICATION STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-surface-subtle border border-border-low text-primary text-xs font-sans px-3 py-1.5 rounded-sm font-medium"
                        >
                          # {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border-low/60 pt-6">
                    <h4 className="text-xs font-mono text-outline uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Info size={13} className="text-secondary" />
                      디자인 아키텍처 특장점
                    </h4>
                    <p className="text-sm font-sans text-on-surface-variant leading-relaxed font-light">
                      본 프로젝트는 스튜디오 프리시전의 핵심 철학인 ‘안정적이고 투명한 정보 계층화’를 기반으로 제작되었습니다.
                      격자 가이드라인을 극도로 엄격히 반영하여, 수많은 인터랙티브 제어 엘리먼트들이 고부하 운전 시에도 인지 마찰 없이 자연스럽게 오갈 수 있도록 미학과 기술의 통합을 이뤄냈습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Drawer Bottom controls */}
              <div className="p-6 bg-surface-subtle border-t border-border-low flex items-center justify-between gap-4 mt-auto">
                <div className="text-xs font-sans text-on-surface-variant/80 flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-green-500 stroke-[3.5]" />
                  설계 규격 검증 완료
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => alert(`스튜디오 프리시전의 [${selectedProject.title}] 리포터가 임포트되었습니다.`)}
                    className="p-2.5 bg-white border border-border-low rounded hover:bg-surface-container-low text-primary flex items-center justify-center cursor-pointer transition-all"
                    title="Share project specs"
                  >
                    <Share2 size={15} />
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 bg-primary text-white text-xs font-sans font-bold rounded hover:bg-deep-teal-900 transition-all cursor-pointer"
                  >
                    목록으로 가기
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
