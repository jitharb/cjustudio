/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { CONTACT_DATA } from '../data';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('성함, 이메일 주소, 메시지를 모두 성실하게 입력해 주셔야 설계 검토가 시작됩니다.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API Network transmission delays
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const getContactIcon = (name: string) => {
    switch (name) {
      case 'Mail':
        return <Mail size={18} className="text-primary group-hover:text-secondary transition-colors" />;
      case 'Phone':
        return <Phone size={18} className="text-primary group-hover:text-secondary transition-colors" />;
      case 'MapPin':
        return <MapPin size={18} className="text-primary group-hover:text-secondary transition-colors" />;
      default:
        return <Mail size={18} />;
    }
  };

  return (
    <div id="contact-screen-root" className="w-full py-16">
      {/* 1. Header Information */}
      <header className="px-6 md:px-16 max-w-container-max mx-auto mb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <div className="text-secondary font-mono text-xs uppercase tracking-widest font-semibold mb-2">
            CONNECT WITH OUT TEAM
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary tracking-tight mb-4">
            대화의 시작
          </h1>
          <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed max-w-2xl font-light">
            여러분의 다음 디지털 청사진을 구상하기 위해 전문가들과 상담하세요. 우리는 구조적 무결성과 심미적 정밀함을 우선시합니다.
          </p>
        </motion.div>
      </header>

      {/* 2. Structured Two-Column Bento Layout Grid */}
      <section className="px-6 md:px-16 max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (Span 5): Channels & Map */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-8 h-full">
          {/* Contact Information Card */}
          <div className="bg-surface-subtle p-8 rounded-lg border border-border-low flex flex-col gap-8 flex-grow">
            <div>
              <h2 className="font-sans text-xs font-bold text-secondary uppercase tracking-widest mb-6 border-b border-border-low/60 pb-2">
                직접 채널
              </h2>
              
              <div className="flex flex-col gap-6">
                {CONTACT_DATA.map((channel) => (
                  <div 
                    key={channel.id}
                    onClick={() => alert(`[${channel.label}] ${channel.value} 주소가 전송대기 클립보드에 인식되었습니다.`)}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="p-3 bg-white rounded border border-border-low text-primary group-hover:border-secondary transition-colors duration-300 shadow-xs">
                      {getContactIcon(channel.iconName)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-xs text-on-surface-variant font-medium uppercase tracking-wide">
                        {channel.label}
                      </span>
                      <span className="font-sans text-sm text-primary font-semibold mt-0.5 whitespace-pre-line leading-relaxed group-hover:text-secondary duration-200 transition-colors">
                        {channel.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* New York Blueprint Satellite Map */}
          <div className="h-64 bg-surface-subtle rounded-lg border border-border-low overflow-hidden relative group">
            <img 
              alt="Monolithic Satellite NYC Blue map blueprint" 
              className="w-full h-full object-cover filter grayscale opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 pointer-events-none" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABZaJlfEkFceyCLNA9kzW_MUyh-bAMrqK5kZf-pJsO6-6iMYEF4HysuDalyFld5aXCuBJ0KxMfvddOgujazO50HXeXIrS305wmI_HJegmtQDgE3Rg3ihf6X1JfzKT4EDzQZxJadyW3-HODNlD1Pk4tZtVnubF_d2_DeA1X8Oo_UMVuQoaCf48pR3zGHyLZfezonJN6ThkQJpGcXnt4AMv5MRYGE9HBf0Kq-V0NN0q_894e5DzdMM1D1Z6kLphznl7OZDHMYYrFLQ"
            />
            {/* Simple pointer badge pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white py-1.5 px-3 rounded shadow-lg font-mono text-[10px] uppercase font-bold tracking-widest flex items-center gap-1.5 pointer-events-none border border-primary-container z-10 transition-transform group-hover:scale-105 duration-300">
              <span className="w-2 h-2 rounded-full bg-secondary animate-ping" />
              NEW YORK OFFICE
            </div>
            <div className="absolute inset-0 border border-border-low rounded-lg pointer-events-none z-20" />
          </div>
        </div>

        {/* Right Column (Span 7): Secure Contact form */}
        <div className="col-span-1 md:col-span-7 h-full">
          <div className="bg-white p-6 md:p-10 rounded-lg border border-border-low h-full min-h-[500px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name field */}
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-xs font-semibold text-primary" htmlFor="contact-name">성함</label>
                      <input 
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="성함을 입력하세요"
                        className="w-full bg-surface border border-border-low rounded px-4 py-3 font-sans text-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all placeholder-on-surface-variant/40"
                      />
                    </div>
                    {/* Email field */}
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-xs font-semibold text-primary" htmlFor="contact-email">이메일 주소</label>
                      <input 
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="이메일을 입력하세요"
                        className="w-full bg-surface border border-border-low rounded px-4 py-3 font-sans text-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all placeholder-on-surface-variant/40"
                      />
                    </div>
                  </div>

                  {/* Subject field */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs font-semibold text-primary" htmlFor="contact-subject">제목</label>
                    <input 
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="프로젝트 문의"
                      className="w-full bg-surface border border-border-low rounded px-4 py-3 font-sans text-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all placeholder-on-surface-variant/40"
                    />
                  </div>

                  {/* Message textarea field */}
                  <div className="flex flex-col gap-2 flex-grow">
                    <label className="font-sans text-xs font-semibold text-primary" htmlFor="contact-message">메시지</label>
                    <textarea 
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="구조적 요구사항을 기술해 주세요..."
                      className="w-full bg-surface border border-border-low rounded px-4 py-3 font-sans text-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all placeholder-on-surface-variant/40 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4 flex justify-end">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white font-sans text-sm font-semibold px-8 py-3.5 rounded hover:bg-deep-teal-900 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          설계 전송 중...
                        </>
                      ) : (
                        <>
                          요청 전송
                          <ArrowRight size={15} />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-4 gap-4 h-full"
                >
                  <div className="w-14 h-14 bg-green-50 border border-green-200 text-green-600 rounded-full flex items-center justify-center shadow-md">
                    <CheckCircle size={28} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-primary tracking-tight">수신 완료</h3>
                    <p className="font-sans text-sm text-on-surface-variant/90 max-w-sm mt-2 font-light">
                      전송해 주신 <strong className="text-primary font-bold">{formData.name}</strong> 님의 설계 문의 리포트가 스튜디오 프리시전 파트너 채널에 긴급 리포팅되었습니다.
                    </p>
                  </div>

                  <div className="w-full max-w-xs bg-surface-subtle border border-border-low p-4 rounded text-left mt-4 text-xs font-sans flex flex-col gap-2">
                    <div className="flex justify-between text-outline">
                      <span>담당 인프라</span>
                      <span className="text-primary font-semibold">New York HQ East</span>
                    </div>
                    <div className="flex justify-between text-outline">
                      <span>예상 회신일</span>
                      <span className="text-secondary font-semibold flex items-center gap-1">
                        <Clock size={11} />
                        24시간 이내
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setFormData({ name: '', email: '', subject: '', message: '' });
                      setIsSubmitted(false);
                    }}
                    className="mt-6 px-6 py-2.5 bg-surface border border-border-low text-primary hover:bg-surface-subtle text-xs font-sans font-bold rounded transition-colors"
                  >
                    새 메시지 작성하기
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </section>
    </div>
  );
}
