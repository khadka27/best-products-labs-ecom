import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractFaqsFromHtml(html: string): Array<{ question: string; answer: string }> {
  if (!html) return [];
  const regex = /data-faqs="([^"]+)"/g;
  let match;
  const allFaqs: Array<{ question: string; answer: string }> = [];
  while ((match = regex.exec(html)) !== null) {
    try {
      const raw = match[1];
      const decoded = raw.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
      const parsed = JSON.parse(decoded);
      if (Array.isArray(parsed)) {
        parsed.forEach((faq: any) => {
          if (faq.q && faq.a) {
            allFaqs.push({ question: faq.q, answer: faq.a });
          }
        });
      }
    } catch (e) {
      console.error("Failed to parse FAQ from HTML", e);
    }
  }
  return allFaqs;
}
