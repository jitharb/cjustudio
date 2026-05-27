/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, X, ChevronRight } from 'lucide-react';
import { TabId } from './types';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import ServiceSection from './components/ServiceSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('services');
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [privacyModal, setPrivacyModal] = useState<{ isOpen: boolean; title: string; content: string }>({
    isOpen: false,
    title: '',
    content: '',
  });

  // Automatically scroll to the top of the header on active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  // Page switcher
  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'services':
        return (
          <ServiceSection 
            onStartProject={() => setIsProjectModalOpen(true)}
            onNavigate={(tabId: TabId) => setActiveTab(tabId)}
          />
        );
      case 'portfolio':
        return <PortfolioSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <ServiceSection 
            onStartProject={() => setIsProjectModalOpen(true)}
            onNavigate={(tabId: TabId) => setActiveTab(tabId)}
          />
        );
    }
  };

  const handleOpenPrivacy = (title: string, content: string) => {
    setPrivacyModal({
      isOpen: true,
      title,
      content,
    });
  };

  return (
    <div className="bg-background text-on-surface font-sans min-h-screen flex flex-col selection:bg-secondary/15 selection:text-secondary">
      
      {/* Dynamic Header Component */}
      <TopNavBar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onStartProject={() => setIsProjectModalOpen(true)}
      />

      {/* Main Sandbox Workspace Canvas */}
      <main className="flex-grow pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full flex flex-col"
          >
            {renderActiveScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Metadata Footer */}
      <Footer 
        onNavClick={(tabId: TabId) => setActiveTab(tabId)} 
        onOpenPrivacy={handleOpenPrivacy}
      />

      {/* dedicated custom Consultations Proposal Trigger Modal */}
      <ProjectModal 
        isOpen={isProjectModalOpen} 
        onClose={() => setIsProjectModalOpen(false)}
      />

      {/* Terms of Service & Privacy Statement Inline Overlay */}
      <AnimatePresence>
        {privacyModal.isOpen && (
          <div id="legal-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setPrivacyModal({ ...privacyModal, isOpen: false })}
              className="absolute inset-0 bg-black/30 backdrop-blur-xs"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              className="relative w-full max-w-lg bg-white p-6 rounded border border-border-low z-10 shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-border-low/60 pb-3 mb-4">
                <ShieldAlert size={18} className="text-secondary" />
                <h3 className="font-display font-extrabold text-primary text-base">
                  {privacyModal.title}
                </h3>
              </div>
              
              <p className="font-sans text-xs text-on-surface-variant whitespace-pre-line leading-relaxed h-72 overflow-y-auto bg-surface-subtle border border-border-low/60 p-4 rounded font-light">
                {privacyModal.content}
              </p>
              
              <div className="flex justify-end pt-4 border-t border-border-low/60 mt-4">
                <button
                  onClick={() => setPrivacyModal({ ...privacyModal, isOpen: false })}
                  className="px-5 py-2 bg-primary text-white text-xs font-sans font-bold hover:bg-deep-teal-900 transition-colors rounded cursor-pointer"
                >
                  확인 및 닫기
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
