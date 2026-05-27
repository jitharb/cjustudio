/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Send, Award, Calendar } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: 'mid',
    serviceType: 'ui-ux',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('성함과 이메일 주소를 모두 정확하게 기재해 주세요.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API network submission latencies
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      budget: 'mid',
      serviceType: 'ui-ux',
      message: '',
    });
    setIsSubmitted(false);
  };

  const handleClose = () => {
    onClose();
    // Reset after animation exits
    setTimeout(resetForm, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="project-modal-wrapper" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Dark fuzzy backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl p-6 md:p-8 border border-border-low z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-on-surface-variant hover:text-primary p-1.5 rounded-full hover:bg-surface-subtle transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <div className="text-secondary font-mono text-xs uppercase tracking-widest font-semibold mb-1">
                    DIGITAL SPECIFICATION FORM
                  </div>
                  <h3 id="modal-title" className="text-2xl font-display font-extrabold text-primary tracking-tight">
                    프로젝트 설계 상담 신청
                  </h3>
                  <p className="text-sm font-sans text-on-surface-variant mt-1">
                    귀사의 고성장 비즈니스를 지원할 맞춤형 기술 청사진을 신속히 제시해 드리겠습니다.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-name" className="text-xs font-sans font-semibold text-primary">
                      성함 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="성함을 기재해 주세요"
                      className="w-full bg-surface border border-border-low rounded px-4 py-2.5 font-sans text-sm focus:outline-none focus:border-secondary transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-email" className="text-xs font-sans font-semibold text-primary">
                      이메일 주소 <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="이메일 주소를 입력해 주세요"
                      className="w-full bg-surface border border-border-low rounded px-4 py-2.5 font-sans text-sm focus:outline-none focus:border-secondary transition-all"
                    />
                  </div>

                  {/* Service selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-sans font-semibold text-primary">관심 설계 분야</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'ui-ux', label: 'UI/UX 디자인' },
                        { id: 'web-dev', label: '웹 아키텍처' },
                        { id: 'strategy', label: '디지털 전략' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceType: item.id })}
                          className={`py-2 text-xs font-sans rounded border text-center transition-all cursor-pointer ${
                            formData.serviceType === item.id
                              ? 'bg-primary text-white border-primary font-bold'
                              : 'bg-white text-on-surface-variant border-border-low hover:border-primary/50'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget scale */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-sans font-semibold text-primary">상담 예상 기간</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'short', label: '즉시 상담' },
                        { id: 'mid', label: '1주일 이내' },
                        { id: 'long', label: '차후 예정' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: item.id })}
                          className={`py-2 text-xs font-sans rounded border text-center transition-all cursor-pointer ${
                            formData.budget === item.id
                              ? 'bg-secondary text-white border-secondary font-bold'
                              : 'bg-white text-on-surface-variant border-border-low hover:border-secondary/50'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message detail */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-message" className="text-xs font-sans font-semibold text-primary">
                      추가 요구사항 (선택사항)
                    </label>
                    <textarea
                      id="modal-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="구상하고 계시는 청사진 또는 기술적 요구조건을 서술해 주세요..."
                      className="w-full bg-surface border border-border-low rounded px-4 py-2 font-sans text-sm resize-none focus:outline-none focus:border-secondary transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 flex items-center justify-center gap-2 bg-primary text-white font-sans text-sm font-semibold py-3 rounded hover:bg-deep-teal-900 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={15} />
                        컨설팅 신청서 전송
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600 border border-green-200 shadow-md">
                  <Check size={32} className="stroke-[3]" />
                </div>
                <div className="mt-2">
                  <h4 className="text-xl font-display font-extrabold text-primary">성공적으로 접수되었습니다</h4>
                  <p className="text-sm font-sans text-on-surface-variant mt-2 max-w-sm mx-auto">
                    감사합니다, <strong className="text-primary font-bold">{formData.name}</strong> 전무님/파트너님. 기재해 주신 이메일(<span className="text-secondary tracking-tight">{formData.email}</span>)로 24시간 이내에 전담 설계 아키텍트가 초안 청사진과 함께 연락드리겠습니다.
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="mt-4 px-6 py-2.5 bg-primary text-white text-sm font-sans font-semibold rounded hover:bg-deep-teal-900 transition-colors cursor-pointer"
                >
                  메뉴로 돌아가기
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
