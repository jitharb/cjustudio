/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, ArrowRight, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TabId } from '../types';

interface TopNavBarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  onStartProject: () => void;
}

export default function TopNavBar({ activeTab, setActiveTab, onStartProject }: TopNavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabId; label: string }[] = [
    { id: 'services', label: '서비스' },
    { id: 'portfolio', label: '포트폴리오' },
    { id: 'about', label: '회사 소개' },
    { id: 'contact', label: '문의하기' },
  ];

  const handleNavClick = (tabId: TabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header id="app-header" className="fixed top-0 left-0 w-full z-50 bg-background/85 backdrop-blur-md border-b border-border-low transition-all duration-300">
        <div className="flex justify-between items-center h-20 px-6 md:px-16 max-w-container-max mx-auto">
          {/* Brand Logo */}
          <div 
            onClick={() => handleNavClick('services')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:rotate-45 duration-300">
              <Layers size={16} />
            </div>
            <span className="font-display text-lg md:text-xl font-bold text-primary tracking-tight">
              스튜디오 프리시전
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center h-full">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative font-sans text-sm font-medium tracking-wide h-20 px-1 transition-colors duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-secondary font-semibold' 
                      : 'text-on-surface-variant hover:text-secondary'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavBorder"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-secondary rounded-t-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <button 
            id="nav-start-project-btn"
            onClick={onStartProject}
            className="hidden md:flex items-center gap-2 bg-deep-teal-900 text-white font-sans text-sm font-semibold tracking-wide px-5 py-3 rounded hover:bg-primary-container active:scale-[0.98] transition-all cursor-pointer"
          >
            프로젝트 시작하기
            <ArrowRight size={15} />
          </button>

          {/* Mobile Menu Icon */}
          <button 
            id="mobile-nav-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary p-2 hover:bg-surface-subtle rounded transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Right Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />

            {/* Side Drawer Container */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white border-l border-border-low z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-8">
                {/* Close handle and title */}
                <div className="flex justify-between items-center pb-4 border-b border-border-low">
                  <span className="font-display font-bold text-primary text-base">스튜디오 프리시전</span>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 rounded-full hover:bg-surface-container-low text-on-surface-variant cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile list of Nav Links */}
                <nav className="flex flex-col gap-3">
                  {navItems.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        id={`mobile-nav-item-${item.id}`}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left font-sans text-base px-4 py-3 rounded-md transition-all cursor-pointer ${
                          isActive 
                            ? 'bg-secondary/10 text-secondary font-bold' 
                            : 'text-on-surface-variant hover:bg-surface-subtle hover:text-primary'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom Action */}
              <div className="pt-6 border-t border-border-low flex flex-col gap-3">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onStartProject();
                  }}
                  className="w-full justify-center flex items-center gap-2 bg-deep-teal-900 text-white font-sans text-sm font-semibold py-3.5 rounded-lg active:scale-95 transition-all text-center"
                >
                  프로젝트 시작하기
                  <ArrowRight size={14} />
                </button>
                <p className="text-[11px] text-center text-on-surface-variant/60 font-sans mt-2">
                  © 스튜디오 프리시전. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
