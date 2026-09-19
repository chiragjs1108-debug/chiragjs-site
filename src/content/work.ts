export type CaseStudyMetric = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  property: string;
  summary: string;
  metrics: CaseStudyMetric[];
  situation: string;
  whatWasBuilt: string;
  whatHappened: string;
  whatWouldChange: string;
};

// No verified metrics yet — do not add case studies until real numbers exist.
export const caseStudies: CaseStudy[] = [];
