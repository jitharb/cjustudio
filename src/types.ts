/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features?: string[];
  subTitle?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  tags: string[];
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  iconName: string;
}

export type TabId = 'services' | 'portfolio' | 'about' | 'contact';
