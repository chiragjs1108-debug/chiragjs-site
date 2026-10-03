import { site } from "@/content/site";

export type JobItem = {
  icon: string;
  title: string;
  body: string;
};

export type JobFact = {
  label: string;
  value: string;
};

export type EvaluationStep = {
  step: string;
  title: string;
  body: string;
};

const subject = "Application: Data Preparation & Extraction Analyst (cutoffs.info)";

export const dataAnalystJob = {
  meta: {
    title: "Data Preparation & Extraction Analyst — cutoffs.info | Chirag J S",
    description:
      "cutoffs.info is hiring a contract Data Preparation & Extraction Analyst to turn medical and AYUSH counselling PDFs into database-ready CSVs. Remote or Bangalore.",
    path: "/careers/data-preparation-extraction-analyst",
  },

  schema: {
    title: "Data Preparation & Extraction Analyst",
    // Date the page was published.
    datePosted: "2026-10-03",
    employmentType: "CONTRACTOR",
    organization: "cutoffs.info",
    organizationUrl: "https://cutoffs.info",
    locality: "Bangalore",
    region: "Karnataka",
    country: "IN",
  },

  header: {
    eyebrow: "Open role · Contract / Freelance",
    heading: "Data Preparation & Extraction Analyst",
    standfirst:
      "Government counselling authorities publish cutoff data as chaotic PDFs. You turn it into strict, flat, relational CSVs that load into PostgreSQL without a single error.",
    applyLabel: "Apply by email",
    applyNote: "Resume + a short note on how you extract nested PDF tables.",
  },

  facts: [
    { label: "Company", value: "cutoffs.info" },
    { label: "Location", value: "Remote / Bangalore" },
    { label: "Engagement", value: "Contract / Freelance" },
    { label: "Screening", value: "15-minute paid technical test" },
  ] satisfies JobFact[],

  about: {
    eyebrow: "About cutoffs.info",
    heading: "A predictive analytics platform for medical and AYUSH counselling.",
    body: [
      "cutoffs.info is a scalable, high-performance platform for medical and AYUSH counselling across India. Its architecture processes millions of data points to give parents and students verified seat matrices, true cost planners and cutoff simulators.",
      "The stack is modern: Next.js, Supabase and PostgreSQL. It needs absolute data precision.",
    ],
    stack: ["Next.js", "Supabase", "PostgreSQL"],
  },

  role: {
    eyebrow: "The role",
    heading: "Not data entry. You are the gatekeeper for the database.",
    body: [
      "Government medical counselling authorities release cutoff data in non-standardized PDF formats, with merged cells, nested headers and inconsistent naming. You scrape, clean and normalize that raw data into strict, relational CSV files.",
      "Every extracted row must map to the Master Database schemas. No broken integer columns. No duplicated entities. No relational mapping errors in Supabase.",
    ],
  },

  responsibilities: {
    eyebrow: "Responsibilities",
    heading: "What you will do",
    items: [
      {
        icon: "FileSpreadsheet",
        title: "Complex data extraction",
        body: "Use tabular extraction tools (Tabula, Power Query, Adobe Acrobat or Python scripts) to pull thousands of rows from unstructured state and AIQ counselling PDFs.",
      },
      {
        icon: "Layers",
        title: "Data normalization and formatting",
        body: "Flatten merged cells so every row is one unique, discrete cutoff point: Year, Round, Quota, Category, College, Rank.",
      },
      {
        icon: "Link2",
        title: "Entity mapping",
        body: "Map raw, misspelled college names from government PDFs to the internal College Code primary keys, using XLOOKUP and related spreadsheet functions.",
      },
      {
        icon: "Tags",
        title: "Category standardization",
        body: "Follow the internal legend to translate state category abbreviations (for example GM, OPEN, OC) into standardized global categories (for example UR).",
      },
      {
        icon: "ClipboardCheck",
        title: "Database-ready QA",
        body: "Keep numeric columns (All India Ranks, scores) free of text characters. Tell a real value from a zero and from a Null (blank) cell, so PostgreSQL ingestion does not fail.",
      },
    ] satisfies JobItem[],
  },

  requirements: {
    eyebrow: "Requirements",
    heading: "What you need",
    items: [
      {
        icon: "CheckSquare",
        title: "Advanced spreadsheet mastery",
        body: "High proficiency in Excel or Google Sheets: XLOOKUP, INDEX/MATCH, TRIM, PROPER and complex Data Validation rules.",
      },
      {
        icon: "Database",
        title: "Relational logic awareness",
        body: "You understand how flat CSVs translate into relational SQL databases: primary keys, foreign keys and strict data typing.",
      },
      {
        icon: "Gauge",
        title: "Precision under scale",
        body: "The discipline to process and QA sheets of 10,000+ rows without manual typing or guesswork.",
      },
      {
        icon: "GraduationCap",
        title: "Domain familiarity (preferred)",
        body: "A basic grasp of Indian medical admissions: the difference between an All India Rank, a Category Rank and a NEET score.",
      },
    ] satisfies JobItem[],
    bonus: {
      label: "Technical bonus",
      title: "Python gets highest priority",
      body: "Candidates who can clean and format the PDFs programmatically with pandas, pdfplumber and regex will be given highest priority.",
    },
  },

  rowShape: {
    eyebrow: "The target",
    heading: "One row, one cutoff point.",
    intro:
      "This is the shape every output row must take. Illustrative values only, not real cutoff data.",
    columns: ["year", "round", "quota", "category", "college_code", "rank"],
    sample: ["YYYY", "N", "…", "UR", "<College Code>", "<integer or NULL>"],
    rules: [
      "Numeric columns hold digits only. No text, no stray spaces.",
      "A zero is a value. A blank is NULL. They are never interchangeable.",
      "Categories use the internal legend, not the state's abbreviation.",
      "College names resolve to a College Code. No free-text names in the output.",
      "No merged cells. No nested headers. One header row.",
    ],
  },

  evaluation: {
    eyebrow: "Application and evaluation",
    heading: "How hiring works",
    intro:
      "The backend relies on perfect data structures, so shortlisted candidates take a 15-minute paid technical test.",
    steps: [
      {
        step: "01",
        title: "Apply",
        body: "Send your resume with a brief description of the tools you use to extract nested tables from PDFs.",
      },
      {
        step: "02",
        title: "Shortlist",
        body: "Shortlisted candidates receive a complex 3-page historical state allotment PDF and a blank strict-format Excel template.",
      },
      {
        step: "03",
        title: "Paid test, 15 minutes",
        body: "Return a perfectly flat, unmerged CSV. All categories normalized. All ranks isolated as pure numeric values. That is the whole evaluation.",
      },
    ] satisfies EvaluationStep[],
  },

  apply: {
    eyebrow: "Apply",
    heading: "Send your resume and your extraction toolkit.",
    body: "Email your resume with a short description of the tools you use to pull nested tables out of PDFs.",
    cta: "Email your application",
    href: `mailto:${site.email}?subject=${encodeURIComponent(subject)}`,
    note: `Applications go to ${site.email}.`,
  },
};
