/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TabId } from '../types';

interface FooterProps {
  onNavClick: (tabId: TabId) => void;
  onOpenPrivacy: (title: string, content: string) => void;
}

export default function Footer({ onNavClick, onOpenPrivacy }: FooterProps) {
  
  const handlePrivacyClick = (e: React.MouseEvent, title: string, type: 'terms' | 'privacy') => {
    e.preventDefault();
    const content = type === 'terms' 
      ? `스튜디오 프리시전 서비스 이용약관

제1조 (목적)
본 약관은 스튜디오 프리시전이 제공하는 디지털 아키텍처 및 하이엔드 웹 에이전시 컨설팅 서비스의 이용 조건 및 절차를 규정함을 목적으로 합니다.

제2조 (프로젝트 및 설계 지식자산권)
스튜디오 프리시전이 프로토타이핑하여 제공하는 모든 와이어프레임, 설계 데이터 및 코드 샌드박스의 지적재산권은 당사에 귀속되며, 협의된 계약서 범위 하에 최종 이관됩니다.

제3조 (상담 신청 및 예약)
고객은 당사 웹 채널 및 메시지 전송 시스템을 통해 자유롭게 가입 없이 정밀 상담을 의뢰할 수 있으며, 배정된 담당 아키텍트와의 예약을 진행할 수 있습니다.`
      : `스튜디오 프리시전 개인정보 처리방침

스튜디오 프리시전은 이용자의 개인정보 수집 및 보호를 최우선의 가치로 삼고 있습니다.

1. 수집 항목: 성함, 이메일 주소, 요청 항목 제목 및 상세 상담 메시지 내용.
2. 수집 목적: 맞춤형 아키텍처 컨설팅 수립 및 프로젝트 제안 회신 목적.
3. 보유 기간: 수집 및 이용 목적이 달성된 시점 또는 이용자가 명시적으로 요구하는 즉시 완전 폐기 처리합니다.`;
    
    onOpenPrivacy(title, content);
  };

  return (
    <footer id="app-footer" className="w-full py-12 bg-surface-subtle border-t border-border-low transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-16 max-w-container-max mx-auto items-center">
        {/* Left Column: Brand Info */}
        <div className="col-span-1 md:col-span-5 flex flex-col gap-2">
          <div 
            onClick={() => onNavClick('services')}
            className="font-display text-xl font-bold text-primary tracking-tight cursor-pointer hover:opacity-90 w-max"
          >
            스튜디오 프리시전
          </div>
          <p className="font-sans text-xs text-on-surface-variant/80">
            © {new Date().getFullYear()} 스튜디오 프리시전. 건축적 디지털 디자인 아카이브.
          </p>
        </div>

        {/* Right Column: Footer Links */}
        <div className="col-span-1 md:col-span-7 flex flex-wrap gap-x-8 gap-y-3 justify-start md:justify-end text-sm font-sans">
          <a 
            href="#terms" 
            onClick={(e) => handlePrivacyClick(e, '서비스 이용약관', 'terms')}
            className="text-on-surface-variant hover:text-secondary hover:underline underline-offset-4 decoration-secondary/30 transition-all cursor-pointer"
          >
            이용약관
          </a>
          <a 
            href="#privacy" 
            onClick={(e) => handlePrivacyClick(e, '개인정보 처리방침', 'privacy')}
            className="text-on-surface-variant hover:text-secondary hover:underline underline-offset-4 decoration-secondary/30 transition-all cursor-pointer"
          >
            개인정보 처리방침
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-secondary hover:underline underline-offset-4 decoration-secondary/30 transition-all cursor-pointer"
          >
            링크드인
          </a>
          <a 
            href="https://dribbble.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-secondary hover:underline underline-offset-4 decoration-secondary/30 transition-all cursor-pointer"
          >
            드리블
          </a>
        </div>
      </div>
    </footer>
  );
}
