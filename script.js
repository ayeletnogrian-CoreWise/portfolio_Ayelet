/* =========================================================
   Ayelet Nogrian · Bilingual Portfolio
   Vanilla JS — language toggle, project rendering, filters, modal
   Final closing version — for recruiter delivery
   ========================================================= */

/* -------- Categories (used in filters + tags) -------- */
const CATEGORIES = {
  pm:        { en: "Project Management",            he: "ניהול פרויקטים" },
  ld:        { en: "Learning & Development",        he: "פיתוח למידה והדרכה" },
  od:        { en: "Organizational Development",    he: "פיתוח ארגוני" },
  km:        { en: "Knowledge Management",          he: "ניהול ידע" },
  ai:        { en: "AI & Innovation Adoption",      he: "הטמעת AI וחדשנות" },
  ex:        { en: "Employee Experience",           he: "חוויית עובד" },
  dl:        { en: "Digital Learning",              he: "למידה דיגיטלית" },
  data:      { en: "Data & Dashboards",             he: "נתונים ודשבורדים" }
};

/* -------- Project catalog --------
   Each project shape:
     name · area · short · need · solution · tools · knowledge · value · skills
     files: [{label:{en,he}, href, external?, embed?}]   embed=true tries iframe in modal
     fallback: 'mailto' for projects available on request
*/
const PROJECTS = [
  /* ---------- 1. Interactive Figma Knowledge Portal ---------- */
  {
    id: "interactive-figma-portal",
    cover: "FP",
    coverClass: "alt-5",
    categories: ["km", "dl", "ex", "od"],
    en: {
      name: "Interactive Figma Knowledge Portal",
      area: "Knowledge Management · Digital Learning · UX",
      short: "An interactive knowledge portal built in Figma — designed to show how complex, scattered professional knowledge can be turned into a clear, navigable system that supports independent use.",
      need: "Professional knowledge in many domains is complex, scattered across people, files and tools, and difficult to onboard into. There was a need to translate that knowledge into a structured, navigable system.",
      solution: "A Figma-based interactive portal with a clear knowledge structure, role-based navigation, professional content areas and a simple user experience — built to demonstrate how complex information becomes an organized, usable resource.",
      tools: "Figma · UX thinking · Information architecture · Knowledge structuring · AI-assisted content design",
      knowledge: "Knowledge management, employee experience, organizational learning, needs analysis, information organization, systems thinking, UX principles.",
      value: "Demonstrates how complex domain knowledge can be turned into a clear, interactive system — reducing search time, supporting onboarding, lowering dependency on individuals and improving the everyday employee experience.",
      skills: "Needs analysis · Knowledge management · Systems thinking · UX · Learning design · Content organization · Project management · Information accessibility"
    },
    he: {
      name: "פורטל ידע אינטראקטיבי בפיגמה",
      area: "ניהול ידע · למידה דיגיטלית · UX",
      short: "פורטל ידע אינטראקטיבי שנבנה בפיגמה — מציג כיצד אפשר להפוך ידע מקצועי מורכב ומפוזר למערכת ברורה ונוחה לניווט שתומכת בשימוש עצמאי.",
      need: "ידע מקצועי בתחומים רבים הוא מורכב, מפוזר באנשים, קבצים וכלים, וקשה להתמצא בו. היה צורך להפוך את הידע למערכת ברורה ושימושית שמאפשרת התמצאות, למידה ושימוש עצמאי.",
      solution: "פורטל אינטראקטיבי בפיגמה עם מבנה ידע מסודר, ניווט לפי תפקידים, אזורי תוכן מקצועיים וחוויית משתמש פשוטה — בנוי להראות כיצד מידע מורכב הופך לכלי עבודה ארגוני ברור.",
      tools: "Figma · חשיבת UX · ארכיטקטורת מידע · מיבנוי ידע · עיצוב תוכן בעזרת AI",
      knowledge: "ניהול ידע, חוויית עובד, למידה ארגונית, אפיון צרכים, ארגון מידע, חשיבה מערכתית, עקרונות UX.",
      value: "מדגים כיצד ידע מקצועי מפוזר ומורכב יכול להפוך למערכת אינטראקטיבית ברורה — קיצור זמני חיפוש, תמיכה בקליטת עובדים, הפחתת תלות באנשים ספציפיים ושיפור חוויית העובד.",
      skills: "אפיון · ניהול ידע · חשיבה מערכתית · UX · פיתוח למידה · ארגון תוכן · ניהול פרויקט · הנגשת מידע"
    },
    files: [
      {
        label: { en: "View Interactive Figma Portal", he: "צפייה בפורטל האינטראקטיבי" },
        href: "https://steam-method-30719162.figma.site/portal",
        external: true,
        embed: true
      }
    ]
  },

  /* ---------- 2. OSINT Knowledge Portal (Canva PDF) ---------- */
  {
    id: "osint-canva-portal",
    cover: "OS",
    coverClass: "alt-1",
    categories: ["km", "dl", "ex"],
    en: {
      name: "OSINT Knowledge Portal (Canva)",
      area: "Knowledge Management · Visual Learning Design",
      short: "An OSINT knowledge portal created in Canva as a visual PDF-based knowledge product — organizing and presenting professional knowledge in a structured, clear and accessible way.",
      need: "Complex professional content in fields like OSINT is often scattered, technical and hard to navigate. There was a need to turn it into a clear, visually organized resource that supports independent use and learning.",
      solution: "A Canva-built knowledge portal exported as an interactive/visual PDF: a clear knowledge framework, content broken down by topics, a user-friendly layout, and a learning experience that turns complex professional content into a usable deliverable.",
      tools: "Canva · Content structuring · Knowledge management · UX thinking · Visual learning design",
      knowledge: "Knowledge management, instructional design, visual learning, information organization, employee experience.",
      value: "Demonstrates the ability to build a knowledge framework, organize content by topics, create a friendly learning experience and turn complex professional content into a clear, usable deliverable.",
      skills: "Knowledge framework design · Content organization · Visual learning design · Professional writing · UX thinking · Translating expert knowledge into accessible content"
    },
    he: {
      name: "פורטל ידע OSINT (קנבה)",
      area: "ניהול ידע · עיצוב למידה ויזואלי",
      short: "פורטל ידע OSINT שנוצר בקנבה כקובץ PDF אינטראקטיבי/ויזואלי — מארגן ומנגיש ידע מקצועי בצורה מסודרת, ויזואלית וברורה.",
      need: "תוכן מקצועי מורכב בתחומים כמו OSINT הוא לרוב מפוזר, טכני וקשה לניווט. היה צורך להפוך אותו למשאב ברור, ויזואלית מסודר ושימושי לשימוש עצמאי וללמידה.",
      solution: "פורטל ידע שנבנה בקנבה ומופק כ-PDF ויזואלי: מסגרת ידע ברורה, חלוקה לפי נושאים, מבנה ידידותי וחוויית למידה שהופכת תוכן מקצועי מורכב לתוצר נגיש ושימושי.",
      tools: "Canva · מיבנוי תוכן · ניהול ידע · חשיבת UX · עיצוב למידה ויזואלי",
      knowledge: "ניהול ידע, עיצוב הדרכה, למידה ויזואלית, ארגון מידע, חוויית עובד.",
      value: "מדגים יכולת לבנות תשתית ידע, לחלק מידע לפי נושאים, ליצור חוויית למידה נוחה ולהפוך תוכן מקצועי מורכב לתוצר נגיש ושימושי.",
      skills: "תכנון תשתית ידע · ארגון תוכן · עיצוב למידה ויזואלי · כתיבה מקצועית · חשיבת UX · תרגום ידע מקצועי לתוכן נגיש"
    },
    files: [
      {
        label: { en: "View OSINT Portal (PDF)", he: "צפייה בפורטל OSINT (PDF)" },
        href: "assets/projects/OSINT_Knowledge_Portal.pdf"
      }
    ]
  },

  /* ---------- 2. Group Diagnosis Module ---------- */
  {
    id: "group-diagnosis",
    cover: "GD",
    coverClass: "alt-2",
    categories: ["ld", "od", "dl", "ex"],
    en: {
      name: "Interactive Learning Module: Group Diagnosis & Psychological Safety",
      area: "Learning & Development · Organizational Development",
      short: "An interactive digital learning module that translates academic knowledge in organizational psychology, group dynamics and psychological safety into practical diagnostic tools.",
      need: "Managers and HR practitioners are expected to understand group processes, but academic knowledge usually stays theoretical and is hard to apply day-to-day.",
      solution: "An interactive learning module that makes research-based concepts visual, simple and applicable — with examples, reflection questions and a clear learning flow that supports independent study.",
      tools: "Figma · Canva · AI-assisted content structuring · Academic research · UX writing",
      knowledge: "Social and organizational psychology, group dynamics, psychological safety, group diagnosis, training development.",
      value: "Strengthens managers' diagnostic ability, improves team conversations, raises awareness of group dynamics, and supports building a safer working environment.",
      skills: "Learning design · Translating academic knowledge into practical tools · Instructional writing · UX · Learning experience design · Organizational thinking"
    },
    he: {
      name: "לומדה אינטראקטיבית: אבחון קבוצות ובטיחות פסיכולוגית",
      area: "פיתוח למידה והדרכה · פיתוח ארגוני",
      short: "לומדה דיגיטלית אינטראקטיבית שמתרגמת ידע אקדמי בפסיכולוגיה ארגונית, דינמיקה קבוצתית ובטיחות פסיכולוגית לכלי אבחון פרקטיים.",
      need: "מנהלים ואנשי HR נדרשים להבין תהליכים קבוצתיים, אך לרוב הידע האקדמי נשאר תיאורטי ולא נגיש לשימוש יומיומי.",
      solution: "לומדה אינטראקטיבית שמנגישה מושגים מחקריים בצורה ויזואלית, פשוטה ויישומית — כולל דוגמאות, שאלות רפלקציה וזרימת למידה ברורה שתומכת בלימוד עצמאי.",
      tools: "Figma · Canva · מיבנוי תוכן בעזרת AI · מחקר אקדמי · כתיבת UX",
      knowledge: "פסיכולוגיה חברתית וארגונית, דינמיקה קבוצתית, בטיחות פסיכולוגית, אבחון קבוצות, פיתוח הדרכה.",
      value: "חיזוק יכולת אבחון של מנהלים, שיפור שיח צוותי, העלאת מודעות לדינמיקות קבוצתיות, ותמיכה ביצירת סביבת עבודה בטוחה יותר.",
      skills: "פיתוח למידה · תרגום ידע אקדמי לכלים פרקטיים · כתיבה הדרכתית · UX · עיצוב חוויית למידה · חשיבה ארגונית"
    },
    files: [
      { label: { en: "View Module (HE)", he: "צפייה בלומדה (עברית)" }, href: "assets/projects/Group_Diagnosis_Learning_Module_HE.html" },
      { label: { en: "View Module (EN)", he: "צפייה בלומדה (English)" }, href: "assets/projects/Group_Diagnosis_Learning_Module_EN.html" }
    ]
  },

  /* ---------- 3. Manager Training Program ---------- */
  {
    id: "manager-training",
    cover: "MT",
    coverClass: "alt-2",
    categories: ["ld", "od", "pm", "ex"],
    en: {
      name: "Manager Training: Leadership, Decision-Making & Practical Tools",
      area: "Learning & Development · Project Management",
      short: "A manager training program designed to strengthen leadership, decision-making, communication and the ability to handle complex managerial situations.",
      need: "Managers are expected to make decisions, lead people, handle conflict and create stability — but they don't always receive clear, practical tools to do so.",
      solution: "A complete training program with learning objectives, session structure, exercises, discussions, real-world examples and applicable management tools.",
      tools: "PowerPoint · Canva · AI-assisted content planning · Academic models · Facilitation design",
      knowledge: "Leadership, organizational psychology, decision-making, self-efficacy, interpersonal communication, adult learning.",
      value: "Improves managerial skills, builds a shared management language, strengthens self-efficacy, improves team communication and supports change processes.",
      skills: "Training development · Group facilitation · Workshop design · Organizational thinking · Professional writing · Content management"
    },
    he: {
      name: "הדרכת מנהלים: מנהיגות, קבלת החלטות וכלים לניהול אפקטיבי",
      area: "פיתוח למידה והדרכה · ניהול פרויקטים",
      short: "מערך הדרכה למנהלים שנועד לחזק יכולות ניהול, קבלת החלטות, תקשורת והתמודדות עם מצבים ניהוליים מורכבים.",
      need: "מנהלים נדרשים לקבל החלטות, להוביל אנשים, להתמודד עם קונפליקטים ולייצר יציבות, אך לא תמיד מקבלים כלים פרקטיים וברורים לכך.",
      solution: "מערך הדרכה מלא הכולל מטרות למידה, מבנה מפגש, תרגילים, דיונים, דוגמאות מהשטח וכלים יישומיים לניהול.",
      tools: "PowerPoint · Canva · תכנון תוכן בעזרת AI · מודלים אקדמיים · עיצוב הנחיה",
      knowledge: "מנהיגות, פסיכולוגיה ארגונית, קבלת החלטות, מסוגלות עצמית, תקשורת בין-אישית, למידת מבוגרים.",
      value: "שיפור יכולות ניהול, יצירת שפה ניהולית משותפת, חיזוק תחושת מסוגלות, שיפור תקשורת בצוותים ותמיכה בתהליכי שינוי.",
      skills: "פיתוח הדרכה · הנחיית קבוצות · בניית סדנאות · חשיבה ארגונית · כתיבה מקצועית · ניהול תוכן"
    },
    files: [
      { label: { en: "View Manager Platform (.pptx)", he: "צפייה בפלטפורמת מנהלים (.pptx)" }, href: "assets/projects/Manager_Leadership_Training_Platform.pptx" },
      { label: { en: "View DNA of Success Workshop (.pptx)", he: "צפייה בסדנת DNA של הצלחה (.pptx)" }, href: "assets/projects/DNA_of_Success_Workshop.pptx" }
    ]
  },

  /* ---------- 4. CoreWise — Concept Platform ---------- */
  {
    id: "corewise",
    cover: "CW",
    coverClass: "alt-4",
    categories: ["od", "pm", "ai", "ex", "data"],
    en: {
      name: "CoreWise — Organizational Skills & Decision-Support Concept",
      area: "Organizational Development · Innovation Adoption",
      short: "A conceptual organizational platform designed to help global organizations develop human skills, identify needs, deliver learning and support managerial decision-making. Presented here as a portfolio concept, not a live product.",
      need: "Global organizations face communication gaps, managerial overload, inconsistent skills development and difficulty translating organizational data into managerial action.",
      solution: "A platform concept covering learning components, reports, action recommendations, a workshop library and dedicated employee / manager / HR interfaces — designed to support end-to-end organizational processes.",
      tools: "Figma · Canva · PowerPoint · Notion · AI-assisted product structuring · UX thinking",
      knowledge: "Organizational development, organizational learning, employee experience, change management, decision-making, product thinking.",
      value: "Provides infrastructure for skills development, supports managers, improves learning processes, strengthens employee experience, and enables data-informed decisions.",
      skills: "Product specification · Project management · Organizational development · UX · Business thinking · Pitch deck design · Translating an idea into a deliverable"
    },
    he: {
      name: "CoreWise — קונספט למערכת ארגונית לפיתוח מיומנויות וקבלת החלטות",
      area: "פיתוח ארגוני · הטמעת חדשנות",
      short: "קונספט למערכת ארגונית שמטרתה לסייע לארגונים גלובליים לפתח מיומנויות אנושיות, לזהות צרכים, להנגיש למידה ולתמוך בקבלת החלטות ניהולית. מוצג כאן כפרויקט קונספטואלי לתיק העבודות, לא כמוצר פעיל.",
      need: "ארגונים גלובליים מתמודדים עם פערי תקשורת, עומס ניהולי, פיתוח מיומנויות לא עקבי וקושי לתרגם מידע ארגוני לפעולות ניהוליות.",
      solution: "קונספט מערכת הכוללת רכיבי למידה, דוחות, המלצות פעולה, ספריית סדנאות וממשקי עובד / מנהל / HR ייעודיים — לתמיכה בתהליכים ארגוניים מקצה לקצה.",
      tools: "Figma · Canva · PowerPoint · Notion · מיבנוי מוצר בעזרת AI · חשיבת UX",
      knowledge: "פיתוח ארגוני, למידה ארגונית, חוויית עובד, ניהול שינוי, קבלת החלטות, חשיבה מוצרית.",
      value: "יצירת תשתית לפיתוח מיומנויות, תמיכה במנהלים, שיפור תהליכי למידה, חיזוק חוויית עובד ויכולת לקבל החלטות מבוססות מידע.",
      skills: "אפיון מוצר · ניהול פרויקט · פיתוח ארגוני · UX · חשיבה עסקית · בניית מצגת פיץ׳ · תרגום רעיון לתוצר"
    },
    files: [
      {
        label: { en: "View CoreWise Concept", he: "צפייה בקונספט CoreWise" },
        href: "https://www.figma.com/make/uH1moXi2BR0jZHse092o05/Untitled?t=rFoCzdiFsZlamwEe-1",
        external: true,
        embed: true
      }
    ]
  },

  /* ---------- 5. Excel-Based Department Shift Scheduling System ---------- */
  {
    id: "excel-shifts",
    cover: "XL",
    coverClass: "alt-3",
    categories: ["pm", "data", "km"],
    en: {
      name: "Excel-Based Department Shift Scheduling System",
      area: "Project Management · Operations · Data",
      short: "An Excel-based departmental shift scheduling system. The file was built to organize employees, roles, availability, shifts and managerial summaries in one place — supporting structured planning and a clear operational overview.",
      need: "Manual shift scheduling can create disorder, duplications, errors, managerial overload, and difficulty seeing who is assigned, where the gaps are, and what the coverage looks like across days and shifts.",
      solution: "A structured Excel workbook that centralizes scheduling data, uses tables and formulas, and presents a clear operational view for shift management, availability tracking and workforce planning. A static HTML preview is available so recruiters can view the workbook in-browser without downloading.",
      tools: "Excel · Formulas · Tables · Conditional formatting · Data validation · Workforce planning · Operational thinking",
      knowledge: "Process management, operational planning, information organization, control and oversight, resource management, systems thinking.",
      value: "Helps manage scheduling more efficiently and clearly, reduces errors, surfaces staffing gaps, improves managerial visibility and provides a clear operational overview for managers or teams.",
      skills: "Needs analysis · Tool design · Advanced Excel · Data management · Operational planning · Systems thinking · Order and structure · Building a deliverable that serves a team"
    },
    he: {
      name: "מערכת אקסל לניהול שיבוץ משמרות מחלקתי",
      area: "ניהול פרויקטים · תפעול · נתונים",
      short: "מערכת Excel לניהול שיבוץ משמרות מחלקתי. הקובץ נבנה כדי לרכז נתוני עובדים, תפקידים, זמינות, משמרות וסיכומים ניהוליים במקום אחד, לתת תמונת מצב ברורה למנהל או לצוות תפעולי.",
      need: "שיבוץ משמרות ידני עלול ליצור חוסר סדר, כפילויות, טעויות, עומס ניהולי וקושי להבין מי משובץ, איפה קיימים פערים ומה מצב הכיסוי בכל יום או משמרת.",
      solution: "קובץ Excel מסודר שמרכז את נתוני השיבוץ, עובד עם טבלאות ונוסחאות, ומציג תמונת מצב ברורה לניהול משמרות, זמינות ותכנון כוח אדם. קיימת תצוגה מקדימה ב-HTML שמאפשרת למגייס לראות את הקובץ בדפדפן בלי להוריד אותו.",
      tools: "Excel · נוסחאות · טבלאות · עיצוב מותנה · Data Validation · תכנון כוח אדם · חשיבה תפעולית",
      knowledge: "ניהול תהליכים, תכנון תפעולי, ארגון מידע, בקרה, ניהול משאבים, חשיבה מערכתית.",
      value: "מסייע לנהל שיבוצים בצורה יעילה וברורה יותר, לצמצם טעויות, לזהות פערים בכוח אדם, לשפר שקיפות ניהולית ולתת תמונת מצב ברורה למנהל או לצוות תפעולי.",
      skills: "ניתוח צרכים · בניית כלי עבודה · Excel מתקדם · ניהול נתונים · תכנון תפעולי · חשיבה מערכתית · סדר וארגון · בניית תוצר שמשרת צוות"
    },
    files: [
      {
        label: { en: "View Excel Preview", he: "צפייה מקדימה בקובץ Excel" },
        href: "assets/projects/Department_Shift_Scheduling_System_Preview.html"
      },
      {
        label: { en: "Download original .xlsx", he: "הורדת קובץ ה-.xlsx המקורי" },
        href: "assets/projects/Department_Shift_Scheduling_System.xlsx"
      }
    ]
  },

  /* ---------- 6. Decision-Making Training Presentation (Canva) ---------- */
  {
    id: "decision-making-presentation",
    cover: "DM",
    coverClass: "alt-2",
    categories: ["ld", "od", "ex"],
    en: {
      name: "Training Presentation: Decision-Making in Organizations",
      area: "Learning & Development · Organizational Development",
      short: "A training presentation created in Canva on decision-making in organizations — translating theoretical and practical knowledge into a clear visual learning experience for a professional audience.",
      need: "Concepts from psychology, management and organizational behavior are often abstract and academic. Managers and professionals need them translated into clear, applicable language they can use in daily decision-making.",
      solution: "A visually designed training presentation built in Canva that turns research-based knowledge into a structured, accessible learning experience — combining theory, practical implications and a flow that supports facilitation.",
      tools: "Canva · Learning design · Visual storytelling · Academic knowledge · Facilitation planning",
      knowledge: "Organizational psychology, decision-making, management theory, organizational behavior, adult learning, instructional design.",
      value: "Makes managerial and organizational decision-making concepts accessible to a professional audience, supports manager development, and provides a usable training asset that can be facilitated as a session or workshop.",
      skills: "Training development · Professional writing · Translating academic knowledge into applied content · Learning design · Organizational thinking · Building a professional presentation"
    },
    he: {
      name: "מצגת הדרכה: קבלת החלטות בארגונים",
      area: "פיתוח למידה והדרכה · פיתוח ארגוני",
      short: "מצגת הדרכה שנבנתה בקנבה בנושא קבלת החלטות בארגונים — מתרגמת ידע תיאורטי ויישומי לחוויית למידה ויזואלית וברורה לקהל מקצועי.",
      need: "מושגים מעולמות הפסיכולוגיה, הניהול וההתנהגות הארגונית הם לרוב מופשטים ואקדמיים. מנהלים ואנשי מקצוע צריכים אותם בשפה ברורה ויישומית שאפשר להשתמש בה בקבלת החלטות ביומיום.",
      solution: "מצגת הדרכה ויזואלית שנבנתה בקנבה ומציגה ידע מבוסס-מחקר בצורה מסודרת, נגישה ומחוברת למציאות — תיאוריה, השלכות יישומיות וזרימת למידה התומכת בהנחיה.",
      tools: "Canva · עיצוב למידה · סיפור ויזואלי · ידע אקדמי · תכנון הנחיה",
      knowledge: "פסיכולוגיה ארגונית, קבלת החלטות, תיאוריה ניהולית, התנהגות ארגונית, למידת מבוגרים, עיצוב הדרכה.",
      value: "מנגיש מושגים של קבלת החלטות ניהולית וארגונית לקהל מקצועי, תומך בפיתוח מנהלים, ומספק נכס הדרכתי שאפשר להעביר כמפגש או סדנה.",
      skills: "פיתוח הדרכה · כתיבה מקצועית · תרגום ידע אקדמי לתוכן יישומי · עיצוב למידה · חשיבה ארגונית · בניית מצגת מקצועית"
    },
    files: [
      {
        label: { en: "View Presentation", he: "צפייה במצגת" },
        href: "assets/projects/Decision_Making_Presentation.pdf"
      }
    ]
  },

  /* ---------- 6. AI & Digital Tools Adoption Plan ---------- */
  {
    id: "ai-adoption",
    cover: "AI",
    coverClass: "alt-3",
    categories: ["ai", "pm", "ld", "od"],
    en: {
      name: "AI & Digital Tools Adoption Plan",
      area: "AI Implementation · Change Management",
      short: "A practical adoption plan for implementing AI and digital tools in an organization — needs analysis, use cases, training, adoption processes, and accessible tools for employees and managers.",
      need: "Many organizations want to adopt AI, but employees often don't know how to use the tools in a way that's practical, safe and relevant to their actual role.",
      solution: "An adoption plan covering needs mapping, use cases, training materials, usage examples, change champions and adoption metrics — built so the rollout connects to existing day-to-day work.",
      tools: "Microsoft Copilot · ChatGPT · Notion AI · Canva AI · PowerPoint · Workflow mapping",
      knowledge: "Change management, adult learning, technology adoption, training development, user adoption.",
      value: "Improves use of digital tools, reduces resistance, builds a shared organizational language around AI, and strengthens employees' ability to use technology in everyday work.",
      skills: "Innovation adoption · Training development · Change management · Needs analysis · Use case writing · Internal communications"
    },
    he: {
      name: "תכנית להטמעת AI וכלים דיגיטליים בארגון",
      area: "הטמעת AI · ניהול שינוי",
      short: "תכנית יישומית להטמעת כלי AI וכלים דיגיטליים בארגון — אפיון צרכים, Use Cases, הדרכות, תהליכי אימוץ והנגשת כלים לעובדים ולמנהלים.",
      need: "ארגונים רבים רוצים להטמיע AI, אך העובדים לא תמיד יודעים איך להשתמש בכלים בצורה פרקטית, בטוחה ורלוונטית לתפקיד שלהם.",
      solution: "תכנית הטמעה הכוללת מיפוי צרכים, Use Cases, חומרי הדרכה, דוגמאות שימוש, שגרירי שינוי ומדדי אימוץ — בנויה כך שההטמעה תתחבר ליומיום של העובדים.",
      tools: "Microsoft Copilot · ChatGPT · Notion AI · Canva AI · PowerPoint · מיפוי תהליכי עבודה",
      knowledge: "ניהול שינוי, למידת מבוגרים, הטמעת טכנולוגיה, פיתוח הדרכה, אימוץ משתמשים.",
      value: "שיפור שימוש בכלים דיגיטליים, הפחתת התנגדות, יצירת שפה משותפת סביב AI, וחיזוק יכולת העובדים להשתמש בטכנולוגיה בעבודה היומיומית.",
      skills: "הטמעת חדשנות · פיתוח הדרכה · ניהול שינוי · אפיון צרכים · כתיבת Use Cases · תקשורת פנים-ארגונית"
    },
    files: [
      { label: { en: "View AI Workshop (.pptx)", he: "צפייה בסדנת AI (.pptx)" }, href: "assets/projects/Manager_Efficiency_AI_Workshop.pptx" },
      { label: { en: "View Digital Course (HE)", he: "צפייה בקורס הדיגיטלי (עברית)" }, href: "assets/projects/Digital_Learning_System_Managers_HE.html" }
    ]
  },

  /* ---------- 7. Knowledge Management Framework ---------- */
  {
    id: "km-framework",
    cover: "KM",
    coverClass: "alt-1",
    categories: ["km", "ld", "pm", "ex"],
    en: {
      name: "Knowledge Management Framework & User Guides",
      area: "Knowledge Management · Documentation",
      short: "A knowledge-management framework with guides, templates and documentation formats for work processes, roles and professional knowledge — turning unstructured knowledge into clear, reusable content.",
      need: "Organizational knowledge often lives with individuals, in scattered files or in undocumented processes — creating dependency, confusion and inconsistency.",
      solution: "Standardized formats for guides, documentation templates, a knowledge structure organized by role and process, and clear language that supports reuse.",
      tools: "Word · Notion · Google Docs · AI-assisted writing · Process mapping",
      knowledge: "Knowledge management, process documentation, organizational learning, onboarding, employee experience.",
      value: "Preserves knowledge, reduces dependency on specific people, improves onboarding, standardizes processes and reduces errors.",
      skills: "Professional writing · Knowledge management · Process specification · Information organization · Template development · Systems thinking"
    },
    he: {
      name: "תשתית לניהול ידע ומדריכים ארגוניים",
      area: "ניהול ידע · תיעוד",
      short: "תשתית לניהול ידע עם מדריכים, פורמטים ותבניות לתיעוד תהליכי עבודה, תפקידים וידע מקצועי — להפיכת ידע לא מסודר לתוכן ברור וניתן לשימוש חוזר.",
      need: "ידע ארגוני נשמר לעיתים אצל אנשים, בקבצים מפוזרים או בתהליכים לא מתועדים — מה שיוצר תלות, בלבול וחוסר אחידות.",
      solution: "פורמטים אחידים למדריכים, תבניות לתיעוד, מבנה ידע לפי תפקידים ותהליכים, ושפה ברורה שמאפשרת שימוש חוזר.",
      tools: "Word · Notion · Google Docs · כתיבה בעזרת AI · מיפוי תהליכים",
      knowledge: "ניהול ידע, תיעוד תהליכים, למידה ארגונית, קליטת עובדים, חוויית עובד.",
      value: "שימור ידע, צמצום תלות באנשים ספציפיים, שיפור קליטת עובדים, סטנדרטיזציה של תהליכים והפחתת טעויות.",
      skills: "כתיבה מקצועית · ניהול ידע · אפיון תהליכים · ארגון מידע · פיתוח תבניות · חשיבה מערכתית"
    },
    files: [
      { label: { en: "View Real-Time Support Deck (PDF)", he: "צפייה במצגת Real-Time Support (PDF)" }, href: "assets/projects/Real_Time_Support_Portal.pdf" },
      { label: { en: "View Assessment Bank (.docx)", he: "צפייה בבנק ההערכות (.docx)" }, href: "assets/projects/DNA_of_Success_Assessment_Bank.docx" }
    ]
  }
];

/* -------- I18N strings -------- */
const I18N = {
  en: {
    "brand.name": "Ayelet Nogrian",
    "brand.role": "PM · L&D · OD · KM · AI",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.cv": "CV",
    "nav.contact": "Contact",

    "hero.eyebrow": "Professional Portfolio · 2026",
    "hero.title.line1": "Ayelet Nogrian",
    "hero.title.line2": "Project Management · Learning & Development · Organizational Development · Knowledge Management · AI & Innovation Adoption",
    "hero.lead": "I connect people, processes and technology to build practical learning, knowledge and organizational solutions for the new world of work.",
    "hero.cta.primary": "View projects",
    "hero.cta.secondary": "Download CV (PDF)",

    "hero.stats.s1.k": "Learning &",
    "hero.stats.s1.v": "Organizational Projects",
    "hero.stats.s2.k": "Bilingual",
    "hero.stats.s2.v": "Portfolio",
    "hero.stats.s3.k": "End-to-End",
    "hero.stats.s3.v": "Project Thinking",

    "about.kicker": "About",
    "about.title": "About me",
    "about.summary.title": "Profile",
    "about.summary.body": "My background combines psychology, education, labor studies, training, tech recruitment and process management. My strength is taking an organizational need, breaking it into a clear process, and turning it into a practical deliverable — a learning module, a knowledge portal, a training document, a workflow, a dashboard or a decision-support tool. I bring human and organizational thinking together with digital tools, UX, AI and the ability to make knowledge accessible.",
    "about.focus.title": "Areas of focus",
    "about.tools.title": "Tools & platforms",
    "about.tools.body": "Figma · Canva · PowerPoint · Excel · Notion · Google Workspace · HTML · CSS · JavaScript · GitHub Pages · AI tools for writing, knowledge structuring, planning and content accessibility.",

    "focus.pm": "Project Management",
    "focus.ld": "Learning & Development",
    "focus.od": "Organizational Development",
    "focus.km": "Knowledge Management",
    "focus.ai": "AI & Innovation Adoption",
    "focus.ex": "Employee Experience",
    "focus.dl": "Digital Learning",
    "focus.data": "Data & Dashboards",

    "projects.kicker": "Selected work",
    "projects.title": "Selected Projects",
    "projects.intro": "Each project presents an organizational need, the solution I built, the tools I used, the professional knowledge behind it, and the value it can create for an organization. Click any project to view the full case study.",
    "filter.all": "All",

    "card.area": "Area",
    "card.tools": "Tools",
    "card.value": "Value",
    "card.view": "View Case Study",
    "card.details": "Details",
    "card.open": "Open",

    "modal.area": "Professional area",
    "modal.need": "The need / challenge",
    "modal.solution": "The solution",
    "modal.tools": "Tools",
    "modal.knowledge": "Professional knowledge",
    "modal.value": "Value to the organization",
    "modal.skills": "Skills demonstrated",
    "modal.embed.note": "Interactive prototype loads below — if it doesn't appear, use the button to open it in a new tab.",
    "modal.onrequest.title": "On request",

    "cv.kicker": "CV",
    "cv.title": "Curriculum Vitae",
    "cv.exp.title": "Experience",
    "cv.exp.idf.role": "Reserve Operations Commander · Training",
    "cv.exp.idf.org": "IDF · 2025",
    "cv.exp.idf.body": "Led leadership training and train-the-trainer sessions for officers and commanders. Delivered structured learning under high-pressure conditions with clear internal communications.",
    "cv.exp.ashtrom.role": "Training Manager",
    "cv.exp.ashtrom.org": "Ashtrom Group (HQ) · 2022–2024",
    "cv.exp.ashtrom.body": "Owned learning operations across multiple units — onboarding, leadership programs and role-based learning journeys. Day-to-day LMS administration, AI enablement and KPI-based reporting on participation, completion and satisfaction.",
    "cv.exp.infinity.role": "Tech Recruitment Team Lead",
    "cv.exp.infinity.org": "Infinity Tech Recruitment · 2020–2022",
    "cv.exp.infinity.body": "Led a team of tech recruiters across R&D, Data, BI, QA, DevOps, Infrastructure and Product. Trained the team, monitored performance and coordinated with hiring managers and strategic clients.",

    "cv.edu.title": "Education",
    "cv.edu.tau.deg": "M.A. in Labor Studies · Certification in Organizational Consulting",
    "cv.edu.tau.org": "Tel Aviv University · 2023–2025",
    "cv.edu.tau.body": "Master's degree in Labor Studies alongside a professional certification in Organizational Consulting. Coursework included group facilitation and labor law.",
    "cv.edu.ariel.deg": "B.A. Psychology · Valedictorian",
    "cv.edu.ariel.org": "Ariel University · 2020–2023",

    "cv.honors.title": "Honors",
    "cv.honors.officer.role": "Military Operations Officer Training (2024)",
    "cv.honors.officer.body": "Recognized for operational leadership and decision-making under pressure.",
    "cv.honors.education.role": "Operations & Education Officer (2017)",
    "cv.honors.education.body": "Recognized for consistent leadership; led training initiatives for the Southern Region alongside operational service.",

    "cv.skills.title": "Skills",
    "cv.skills.ai": "<strong>AI Enablement:</strong> Microsoft Copilot, Notion AI, Canva AI — workflows, prompts, templates and best practices.",
    "cv.skills.lms": "<strong>LMS Administration:</strong> content upload, learner support, user management, permissions, reporting and adoption tracking.",
    "cv.skills.erp": "<strong>ERP & HR Systems:</strong> SAP HR analytics; Priority (ERP) — vendors, invoices and payment follow-up.",
    "cv.skills.tc":  "<strong>Training & Change:</strong> needs analysis, program design, facilitation (group and 1:1), adoption planning and KPI measurement.",
    "cv.cta": "Download full CV (PDF)",

    "contact.kicker": "Contact",
    "contact.title": "Ayelet Nogrian",
    "contact.location.label": "Location",
    "contact.location.value": "Tel Aviv, Israel",
    "contact.phone.label": "Phone",
    "contact.email.label": "Email",
    "contact.linkedin.label": "LinkedIn",
    "contact.linkedin.value": "linkedin.com/in/ayelet-nogrian",

    "closing.body": "This portfolio was created to show how I think, plan and build solutions — from identifying the need to delivering a usable outcome.",

    "footer.copy": "© 2026 Ayelet Nogrian · All rights reserved. Portfolio for evaluation purposes only — no copying, distribution or commercial use without written permission."
  },
  he: {
    "brand.name": "איילת נוגריאן",
    "brand.role": "ניהול פרויקטים · למידה · פיתוח ארגוני · ניהול ידע · AI",
    "nav.about": "עליי",
    "nav.projects": "פרויקטים",
    "nav.cv": "קורות חיים",
    "nav.contact": "יצירת קשר",

    "hero.eyebrow": "תיק עבודות מקצועי · 2026",
    "hero.title.line1": "איילת נוגריאן",
    "hero.title.line2": "ניהול פרויקטים · פיתוח למידה והדרכה · פיתוח ארגוני · ניהול ידע · הטמעת חדשנות ו-AI",
    "hero.lead": "אני מחברת בין אנשים, תהליכים וטכנולוגיה כדי לבנות פתרונות למידה, ידע ושינוי שמתאימים לעולם העבודה החדש.",
    "hero.cta.primary": "לפרויקטים",
    "hero.cta.secondary": "הורדת קורות חיים (PDF)",

    "hero.stats.s1.k": "פרויקטים בלמידה",
    "hero.stats.s1.v": "ופיתוח ארגוני",
    "hero.stats.s2.k": "תיק עבודות",
    "hero.stats.s2.v": "דו-לשוני",
    "hero.stats.s3.k": "חשיבה פרויקטלית",
    "hero.stats.s3.v": "מקצה לקצה",

    "about.kicker": "עליי",
    "about.title": "עליי",
    "about.summary.title": "פרופיל",
    "about.summary.body": "אני מגיעה מעולמות של פסיכולוגיה, חינוך, לימודי עבודה, הדרכה, גיוס טכנולוגי וניהול תהליכים. החוזקה שלי היא לקחת צורך ארגוני, לפרק אותו לתהליך ברור, ולבנות ממנו תוצר פרקטי — לומדה, פורטל ידע, מסמך הדרכה, תהליך עבודה, דשבורד או כלי תומך החלטה. אני משלבת חשיבה אנושית וארגונית עם כלים דיגיטליים, UX, AI ויכולת להנגיש ידע בצורה ברורה.",
    "about.focus.title": "תחומי התמחות",
    "about.tools.title": "כלים ופלטפורמות",
    "about.tools.body": "Figma · Canva · PowerPoint · Excel · Notion · Google Workspace · HTML · CSS · JavaScript · GitHub Pages · כלי AI לכתיבה, מיבנוי ידע, תכנון והנגשת תוכן.",

    "focus.pm": "ניהול פרויקטים",
    "focus.ld": "פיתוח למידה והדרכה",
    "focus.od": "פיתוח ארגוני",
    "focus.km": "ניהול ידע",
    "focus.ai": "הטמעת AI וחדשנות",
    "focus.ex": "חוויית עובד",
    "focus.dl": "למידה דיגיטלית",
    "focus.data": "נתונים ודשבורדים",

    "projects.kicker": "עבודות נבחרות",
    "projects.title": "פרויקטים נבחרים",
    "projects.intro": "כל פרויקט בתיק מציג צורך ארגוני, פתרון שבניתי, כלים שבהם השתמשתי, ידע מקצועי שהופעל, והערך שהתוצר יכול לתת לארגון. לחיצה על כל פרויקט פותחת את ה-Case Study המלא.",
    "filter.all": "הכול",

    "card.area": "תחום",
    "card.tools": "כלים",
    "card.value": "ערך",
    "card.view": "צפייה ב-Case Study",
    "card.details": "פרטים",
    "card.open": "פתיחה",

    "modal.area": "תחום מקצועי",
    "modal.need": "הצורך / האתגר",
    "modal.solution": "הפתרון",
    "modal.tools": "כלים",
    "modal.knowledge": "ידע מקצועי",
    "modal.value": "ערך לארגון",
    "modal.skills": "מיומנויות שהפרויקט מדגים",
    "modal.embed.note": "אב-טיפוס אינטראקטיבי נטען למטה — אם הוא לא מופיע, אפשר לפתוח בכרטיסייה חדשה דרך הכפתור.",
    "modal.onrequest.title": "זמין לבקשה",

    "cv.kicker": "קורות חיים",
    "cv.title": "קורות חיים",
    "cv.exp.title": "ניסיון תעסוקתי",
    "cv.exp.idf.role": "מפקדת מבצעים במילואים · הדרכה",
    "cv.exp.idf.org": "צה״ל · 2025",
    "cv.exp.idf.body": "הובלת הכשרת מנהיגות והדרכת מדריכים לקצינים ולמפקדים. מתן תכניות לימוד מובנות בתנאי לחץ גבוה תוך תקשורת פנים-ארגונית ברורה.",
    "cv.exp.ashtrom.role": "מנהלת הדרכה",
    "cv.exp.ashtrom.org": "קבוצת אשטרום (מטה) · 2022–2024",
    "cv.exp.ashtrom.body": "אחריות מלאה על תפעול הלמידה במספר יחידות — קליטה, תכניות מנהיגות ומסעות לימוד מבוססי-תפקיד. ניהול LMS שוטף, הטמעת AI ודיווחי KPI על השתתפות, השלמה ושביעות רצון.",
    "cv.exp.infinity.role": "ראש צוות גיוס הייטק",
    "cv.exp.infinity.org": "Infinity Tech Recruitment · 2020–2022",
    "cv.exp.infinity.body": "הובלת צוות מגייסים לתפקידי R&D, Data, BI, QA, DevOps, תשתיות ומוצר. הדרכת הצוות, מעקב ביצועים ותיאום מול מנהלי גיוס ולקוחות אסטרטגיים.",

    "cv.edu.title": "השכלה",
    "cv.edu.tau.deg": "תואר שני (M.A.) בלימודי עבודה · הסמכה בייעוץ ארגוני",
    "cv.edu.tau.org": "אוניברסיטת תל אביב · 2023–2025",
    "cv.edu.tau.body": "תואר שני בלימודי עבודה לצד הסמכה מקצועית בייעוץ ארגוני. כולל קורסים בהנחיית קבוצות ובדיני עבודה כחלק מהמסלול.",
    "cv.edu.ariel.deg": "תואר ראשון בפסיכולוגיה · בוגרת מצטיינת",
    "cv.edu.ariel.org": "אוניברסיטת אריאל · 2020–2023",

    "cv.honors.title": "הצטיינויות",
    "cv.honors.officer.role": "קורס קציני מבצעים (2024)",
    "cv.honors.officer.body": "צוינתי על מנהיגות מבצעית וקבלת החלטות תחת לחץ.",
    "cv.honors.education.role": "קצינת מבצעים וקצינת חינוך (2017)",
    "cv.honors.education.body": "צוינתי על מנהיגות עקבית; הובלת יוזמות הדרכה במחוז דרום לצד תפקיד מבצעי.",

    "cv.skills.title": "כישורים",
    "cv.skills.ai": "<strong>הטמעת AI:</strong> Microsoft Copilot, Notion AI, Canva AI — workflows, prompts, תבניות ו-best practices.",
    "cv.skills.lms": "<strong>ניהול LMS:</strong> העלאת תוכן, ליווי לומדים, ניהול משתמשים והרשאות, דיווח ומעקב אדופציה.",
    "cv.skills.erp": "<strong>מערכות ERP/HR:</strong> SAP HR analytics; Priority (ERP) — ספקים, חשבוניות ומעקב תשלומים.",
    "cv.skills.tc":  "<strong>הדרכה ושינוי:</strong> ניתוח צרכים, עיצוב תכניות, הנחיה (קבוצתית ו-1:1), תכנון אדופציה ומדידת KPI.",
    "cv.cta": "הורדת קורות חיים מלאים (PDF)",

    "contact.kicker": "יצירת קשר",
    "contact.title": "איילת נוגריאן",
    "contact.location.label": "מיקום",
    "contact.location.value": "תל אביב",
    "contact.phone.label": "טלפון",
    "contact.email.label": "דוא״ל",
    "contact.linkedin.label": "לינקדאין",
    "contact.linkedin.value": "linkedin.com/in/ayelet-nogrian",

    "closing.body": "התיק נבנה כדי להציג את הדרך שבה אני חושבת, מתכננת ובונה פתרונות — משלב הצורך ועד תוצר שאפשר להשתמש בו.",

    "footer.copy": "© 2026 איילת נוגריאן · כל הזכויות שמורות. תיק העבודות מיועד להערכה בלבד — אין להעתיק, להפיץ או לעשות שימוש מסחרי ללא אישור בכתב."
  }
};

/* =========================================================
   Helpers
   ========================================================= */

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function getLang() {
  return document.documentElement.getAttribute("data-lang") || "en";
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function applyLang(lang) {
  const html = document.documentElement;
  html.setAttribute("lang", lang === "he" ? "he" : "en");
  html.setAttribute("dir",  lang === "he" ? "rtl" : "ltr");
  html.setAttribute("data-lang", lang);

  // text replace
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const dict = I18N[lang] || I18N.en;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // re-render projects so localized strings update
  renderProjects();

  // store
  try { localStorage.setItem("portfolio.lang", lang); } catch (e) {}
}

/* =========================================================
   Project rendering
   ========================================================= */

function renderProjects() {
  const grid = $("#project-grid");
  if (!grid) return;
  const lang = getLang();
  const dict = I18N[lang];
  const activeFilter = $(".chip-btn.is-active")?.dataset.filter || "all";

  grid.innerHTML = PROJECTS.map((p) => {
    const t = p[lang] || p.en;
    const visible = activeFilter === "all" || p.categories.includes(activeFilter);
    if (!visible) return "";

    const tags = p.categories.map((c) => `
      <span class="card-tag tag-${c}">${CATEGORIES[c][lang] || CATEGORIES[c].en}</span>
    `).join("");

    const primary = p.files[0];
    // every external link opens in new tab; mailto stays in same tab so OS handles it
    const isMailto = primary.href && primary.href.startsWith("mailto:");
    const isAnchor = primary.href && primary.href.startsWith("#");
    const targetAttrs = (isMailto || isAnchor) ? "" : ` target="_blank" rel="noopener"`;

    return `
      <article class="card" data-id="${p.id}">
        <div class="card-cover ${p.coverClass || ''}">${p.cover}</div>
        <div class="card-area">${escapeHtml(t.area)}</div>
        <h3>${escapeHtml(t.name)}</h3>
        <div class="card-tags">${tags}</div>
        <p>${escapeHtml(t.short)}</p>
        <dl class="card-meta">
          <dt>${dict["card.tools"]}</dt><dd>${escapeHtml(t.tools)}</dd>
          <dt>${dict["card.value"]}</dt><dd>${escapeHtml(t.value)}</dd>
        </dl>
        <div class="card-actions">
          <a class="btn-card" href="${primary.href}"${targetAttrs}>${escapeHtml(primary.label[lang] || primary.label.en)}</a>
          <button class="btn-card secondary" type="button" data-modal="${p.id}">${dict["card.details"]}</button>
        </div>
      </article>
    `;
  }).join("");

  // wire detail buttons
  $$("button[data-modal]", grid).forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.dataset.modal));
  });
}

/* =========================================================
   Modal — full case study
   ========================================================= */

function openModal(id) {
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return;
  const lang = getLang();
  const t = project[lang] || project.en;
  const dict = I18N[lang];

  $("#modal-title").textContent = t.name;

  const filesHtml = project.files.map((f) => {
    const isMailto = f.href && f.href.startsWith("mailto:");
    const isAnchor = f.href && f.href.startsWith("#");
    const targetAttrs = (isMailto || isAnchor) ? "" : ` target="_blank" rel="noopener"`;
    return `<a class="btn btn-primary" href="${f.href}"${targetAttrs}>${escapeHtml(f.label[lang] || f.label.en)}</a>`;
  }).join("");

  // Optional iframe embed for Figma / interactive prototypes
  const embedFile = project.files.find((f) => f.embed);
  const embedHtml = embedFile
    ? `
      <div class="modal-embed">
        <p class="modal-embed-note">${dict["modal.embed.note"]}</p>
        <div class="modal-iframe-wrap">
          <iframe class="modal-iframe"
                  src="${embedFile.href}"
                  loading="lazy"
                  allow="clipboard-read; clipboard-write; fullscreen"
                  title="${escapeHtml(t.name)}"></iframe>
        </div>
      </div>`
    : "";

  // Optional "on request" notice
  const onRequest = t.onRequest
    ? `<div class="modal-onrequest"><strong>${dict["modal.onrequest.title"]}:</strong> ${escapeHtml(t.onRequest)}</div>`
    : "";

  $("#modal-body").innerHTML = `
    <div class="modal-area-line"><strong>${dict["modal.area"]}:</strong> ${escapeHtml(t.area)}</div>
    <h4>${dict["modal.need"]}</h4>
    <p>${escapeHtml(t.need)}</p>
    <h4>${dict["modal.solution"]}</h4>
    <p>${escapeHtml(t.solution)}</p>
    <h4>${dict["modal.tools"]}</h4>
    <p>${escapeHtml(t.tools)}</p>
    <h4>${dict["modal.knowledge"]}</h4>
    <p>${escapeHtml(t.knowledge)}</p>
    <h4>${dict["modal.value"]}</h4>
    <p>${escapeHtml(t.value)}</p>
    <h4>${dict["modal.skills"]}</h4>
    <p>${escapeHtml(t.skills)}</p>
    ${onRequest}
    ${embedHtml}
    <div class="modal-actions">${filesHtml}</div>
  `;

  $("#modal").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  // stop any iframe video / app on close
  const wrap = $(".modal-iframe-wrap");
  if (wrap) wrap.innerHTML = "";

  $("#modal").hidden = true;
  document.body.style.overflow = "";
}

/* =========================================================
   Boot
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // initial language
  let lang = "en";
  try {
    const stored = localStorage.getItem("portfolio.lang");
    if (stored === "he" || stored === "en") lang = stored;
    else if ((navigator.language || "").toLowerCase().startsWith("he")) lang = "he";
  } catch (e) {}
  applyLang(lang);

  // language toggle
  $("#lang-toggle").addEventListener("click", () => {
    const next = getLang() === "en" ? "he" : "en";
    applyLang(next);
  });

  // filter chips
  $$(".filters .chip-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".filters .chip-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      renderProjects();
    });
  });

  // modal close
  $$("#modal [data-close]").forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("#modal").hidden) closeModal();
  });

  // first render
  renderProjects();
});
