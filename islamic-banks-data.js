// ============================================================
//  قاعدة بيانات منفصلة للتمويل الأخلاقي – 200+ منتج
//  7 أنواع: المرابحة، المشاركة، المضاربة، الإيجارة، التكافل، السلم، الاستصناع
//  البنوك الإسلامية: ADIB، البركة، KFH، فيصل الإسلامي، مصر الإسلامي،
//  العربي الإسلامي، الهلال، الشركة الإسلامية، المؤسسة الإسلامية، بنك ناصر
// ============================================================

const completeIslamicBanksData = [
  // -------- بنك أبو ظبي الإسلامي (ADIB) --------
  {
    id: 21,
    name: "أبو ظبي الإسلامي",
    nameEn: "ADIB",
    type: "islamic",
    logo: "./ASSETS/banks/ADIB.png",
    branches: "30+ فرع",
    minSalary: 3000,
    onlineAvailable: true,
    loanCategories: {
      personal: [
        { id: "adib_p1", name: "تمويل اليسر للموظفين بتحويل مرتب", minAmount: 10000, maxAmount: 750000, minTerm: 12, maxTerm: 60, interestRate: 13.55, interestType: "decreasing", description: "المرابحة للموظفين - هامش ربح 13.55% متناقص", conditions: "بتحويل مرتب" },
        { id: "adib_p2", name: "تمويل اليسر للموظفين بدون تحويل", minAmount: 10000, maxAmount: 750000, minTerm: 12, maxTerm: 60, interestRate: 18.8, interestType: "decreasing", description: "مرابحة للموظفين بدون تحويل", conditions: "بدون تحويل" },
        { id: "adib_p3", name: "تمويل اليسر للأطباء", minAmount: 50000, maxAmount: 1000000, minTerm: 12, maxTerm: 60, interestRate: 16.5, interestType: "decreasing", description: "مرابحة للأطباء", conditions: "بدون تحويل" },
        { id: "adib_p4", name: "تمويل اليسر لأساتذة الجامعات", minAmount: 10000, maxAmount: 300000, minTerm: 12, maxTerm: 60, interestRate: 21.8, interestType: "decreasing", description: "مرابحة لأعضاء هيئة التدريس", conditions: "بتحويل مرتب" },
        { id: "adib_p5", name: "تمويل المشاركة لأصحاب الأعمال", minAmount: 100000, maxAmount: 2000000, minTerm: 24, maxTerm: 60, interestRate: 10.5, interestType: "decreasing", description: "مشاركة في رأس المال", conditions: "دراسة جدوى" },
        { id: "adib_p6", name: "تمويل المضاربة للاستثمار", minAmount: 200000, maxAmount: 5000000, minTerm: 12, maxTerm: 36, interestRate: 9.75, interestType: "decreasing", description: "مضاربة في أسواق المال", conditions: "دراسة جدوى + ضمان" },
        { id: "adib_p7", name: "تمويل الإيجارة للأجهزة الطبية", minAmount: 50000, maxAmount: 500000, minTerm: 12, maxTerm: 60, interestRate: 11.25, interestType: "decreasing", description: "إيجار أجهزة طبية", conditions: "بضمان الجهاز" },
        { id: "adib_p8", name: "تمويل تكافل (التأمين التكافلي)", minAmount: 5000, maxAmount: 50000, minTerm: 12, maxTerm: 12, interestRate: 12, interestType: "fixed", description: "تمويل أقساط التكافل", conditions: "بضمان" },
        { id: "adib_p9", name: "تمويل السلم للمنتجات الزراعية", minAmount: 10000, maxAmount: 200000, minTerm: 6, maxTerm: 12, interestRate: 7.5, interestType: "fixed", description: "سلم في المحاصيل", conditions: "ضمان المحصول" },
        { id: "adib_p10", name: "تمويل الاستصناع لبناء وحدة سكنية", minAmount: 100000, maxAmount: 1500000, minTerm: 12, maxTerm: 60, interestRate: 10.25, interestType: "decreasing", description: "استصناع بناء", conditions: "بضمان الأرض" },
      ],
      car: [
        { id: "adib_c1", name: "مرابحة سيارة جديدة (تحويل مرتب)", minAmount: 20000, maxAmount: 500000, minTerm: 12, maxTerm: 60, interestRate: 12.65, interestType: "decreasing", description: "سيارة جديدة - بتحويل مرتب", conditions: "بتحويل مرتب" },
        { id: "adib_c2", name: "مرابحة سيارة جديدة (بدون تحويل)", minAmount: 20000, maxAmount: 400000, minTerm: 12, maxTerm: 60, interestRate: 13, interestType: "decreasing", description: "سيارة جديدة - بدون تحويل", conditions: "بدون تحويل" },
        { id: "adib_c3", name: "مرابحة سيارة مستعملة (تحويل مرتب)", minAmount: 20000, maxAmount: 600000, minTerm: 12, maxTerm: 60, interestRate: 12.875, interestType: "decreasing", description: "سيارة مستعملة - بتحويل مرتب", conditions: "بتحويل مرتب" },
        { id: "adib_c4", name: "مرابحة سيارة مستعملة (بدون تحويل)", minAmount: 20000, maxAmount: 400000, minTerm: 12, maxTerm: 60, interestRate: 14, interestType: "decreasing", description: "سيارة مستعملة - بدون تحويل", conditions: "بدون تحويل" },
        { id: "adib_c5", name: "مرابحة سيارة كهربائية", minAmount: 50000, maxAmount: 1500000, minTerm: 12, maxTerm: 84, interestRate: 11.75, interestType: "decreasing", description: "سيارة كهربائية جديدة", conditions: "بتحويل مرتب" },
        { id: "adib_c6", name: "تمويل الإيجارة للسيارات (تأجير)", minAmount: 30000, maxAmount: 800000, minTerm: 12, maxTerm: 48, interestRate: 12.5, interestType: "decreasing", description: "تأجير سيارات مع إمكانية التملك", conditions: "بضمان" },
      ],
      mortgage: [
        { id: "adib_m1", name: "تمويل عقاري بالمرابحة", minAmount: 500000, maxAmount: 10000000, minTerm: 60, maxTerm: 360, interestRate: 11.25, interestType: "decreasing", description: "شراء وحدة سكنية", conditions: "بضمان العقار" },
        { id: "adib_m2", name: "تمويل تشطيب الوحدات", minAmount: 50000, maxAmount: 500000, minTerm: 12, maxTerm: 60, interestRate: 13.5, interestType: "decreasing", description: "تشطيب شقة أو فيلا", conditions: "بدون تحويل" },
        { id: "adib_m3", name: "تمويل الاستصناع لبناء منزل", minAmount: 200000, maxAmount: 3000000, minTerm: 24, maxTerm: 240, interestRate: 10.75, interestType: "decreasing", description: "بناء منزل على أرض تملك", conditions: "بضمان الأرض" },
      ],
      corporate: [
        { id: "adib_corp1", name: "تمويل مشروعات صغيرة (المضاربة)", minAmount: 100000, maxAmount: 2000000, minTerm: 12, maxTerm: 60, interestRate: 9.5, interestType: "decreasing", description: "مضاربة في مشروع تجاري", conditions: "دراسة جدوى + ضمان" },
        { id: "adib_corp2", name: "تمويل معدات (الإيجارة)", minAmount: 200000, maxAmount: 5000000, minTerm: 12, maxTerm: 120, interestRate: 10.25, interestType: "decreasing", description: "تأجير معدات للمصانع", conditions: "بضمان المعدات" },
        { id: "adib_corp3", name: "تمويل المشاركة في مشروع زراعي", minAmount: 150000, maxAmount: 3000000, minTerm: 12, maxTerm: 60, interestRate: 8.75, interestType: "decreasing", description: "مشاركة في مشروع زراعي", conditions: "دراسة جدوى + ضمان" },
        { id: "adib_corp4", name: "تمويل السلم للمواد الخام", minAmount: 50000, maxAmount: 1000000, minTerm: 6, maxTerm: 12, interestRate: 6.5, interestType: "fixed", description: "سلم لشراء المواد الخام", conditions: "ضمان" },
      ]
    }
  },

  // -------- بنك البركة --------
  {
    id: 25,
    name: "بنك البركة",
    nameEn: "ALBARAKA",
    type: "islamic",
    logo: "./ASSETS/banks/ALBRAKA.png",
    branches: "30+ فرع",
    minSalary: 2000,
    onlineAvailable: true,
    loanCategories: {
      personal: [
        { id: "alb_p1", name: "تمويل شخصي بالمرابحة", minAmount: 20000, maxAmount: 2000000, minTerm: 12, maxTerm: 96, interestRate: 17, interestType: "decreasing", description: "تمويل شخصي بمرابحة", conditions: "بتحويل مرتب" },
        { id: "alb_p2", name: "تمويل سلع معمرة", minAmount: 10000, maxAmount: 500000, minTerm: 12, maxTerm: 60, interestRate: 17, interestType: "decreasing", description: "مرابحة لأجهزة منزلية", conditions: "بدون تحويل" },
        { id: "alb_p3", name: "تمويل التعليم", minAmount: 20000, maxAmount: 250000, minTerm: 12, maxTerm: 60, interestRate: 16.25, interestType: "decreasing", description: "مرابحة للمصروفات التعليمية", conditions: "بتحويل مرتب" },
        { id: "alb_p4", name: "تمويل اشتراكات الأندية", minAmount: 20000, maxAmount: 200000, minTerm: 12, maxTerm: 60, interestRate: 16.5, interestType: "decreasing", description: "مرابحة لاشتراك نادي رياضي", conditions: "بتحويل مرتب" },
        { id: "alb_p5", name: "تمويل تشطيب وحدات سكنية", minAmount: 20000, maxAmount: 750000, minTerm: 12, maxTerm: 60, interestRate: 17.5, interestType: "decreasing", description: "مرابحة لتشطيب شقة", conditions: "بدون تحويل" },
        { id: "alb_p6", name: "تمويل المشاركة للمشروعات الصغيرة", minAmount: 50000, maxAmount: 2000000, minTerm: 12, maxTerm: 60, interestRate: 10, interestType: "decreasing", description: "مشاركة في مشروع صغير", conditions: "دراسة جدوى + ضمان" },
        { id: "alb_p7", name: "تمويل المضاربة للاستثمار", minAmount: 100000, maxAmount: 5000000, minTerm: 12, maxTerm: 36, interestRate: 9.5, interestType: "decreasing", description: "مضاربة في استثمارات", conditions: "دراسة جدوى" },
        { id: "alb_p8", name: "تمويل الإيجارة للأجهزة", minAmount: 20000, maxAmount: 500000, minTerm: 12, maxTerm: 60, interestRate: 11.5, interestType: "decreasing", description: "إيجار أجهزة منزلية", conditions: "بضمان" },
        { id: "alb_p9", name: "تمويل تكافل", minAmount: 5000, maxAmount: 50000, minTerm: 12, maxTerm: 12, interestRate: 10, interestType: "fixed", description: "تمويل أقساط التكافل", conditions: "بضمان" },
        { id: "alb_p10", name: "تمويل السلم للسلع", minAmount: 10000, maxAmount: 100000, minTerm: 6, maxTerm: 12, interestRate: 7, interestType: "fixed", description: "سلم في سلع استهلاكية", conditions: "ضمان" },
        { id: "alb_p11", name: "تمويل الاستصناع للسيارات حسب الطلب", minAmount: 50000, maxAmount: 1000000, minTerm: 12, maxTerm: 48, interestRate: 11.25, interestType: "decreasing", description: "استصناع سيارة", conditions: "مقدم 20%" },
      ],
      car: [
        { id: "alb_c1", name: "تمويل السيارات الجديدة", minAmount: 20000, maxAmount: 1000000, minTerm: 12, maxTerm: 84, interestRate: 16.5, interestType: "decreasing", description: "مرابحة سيارة جديدة", conditions: "بتحويل مرتب" },
        { id: "alb_c2", name: "تمويل السيارات المستعملة", minAmount: 20000, maxAmount: 750000, minTerm: 12, maxTerm: 84, interestRate: 17.5, interestType: "decreasing", description: "مرابحة سيارة مستعملة", conditions: "بدون تحويل" },
        { id: "alb_c3", name: "تمويل سيارات النقل", minAmount: 50000, maxAmount: 1500000, minTerm: 12, maxTerm: 84, interestRate: 15.5, interestType: "decreasing", description: "مرابحة لسيارات النقل", conditions: "بضمان" },
      ],
      mortgage: [
        { id: "alb_m1", name: "تمويل عقاري بالمرابحة", minAmount: 200000, maxAmount: 5000000, minTerm: 60, maxTerm: 300, interestRate: 12.5, interestType: "decreasing", description: "شراء وحدة سكنية", conditions: "بضمان العقار" },
        { id: "alb_m2", name: "تمويل الاستصناع لبناء منزل", minAmount: 150000, maxAmount: 3000000, minTerm: 24, maxTerm: 240, interestRate: 11, interestType: "decreasing", description: "بناء منزل", conditions: "بضمان الأرض" },
        { id: "alb_m3", name: "تمويل تشطيب", minAmount: 30000, maxAmount: 300000, minTerm: 12, maxTerm: 60, interestRate: 13.5, interestType: "decreasing", description: "تشطيب شقة", conditions: "بدون تحويل" },
      ],
      corporate: [
        { id: "alb_corp1", name: "تمويل مشروعات صغيرة (مبادرة المركزي)", minAmount: 50000, maxAmount: 5000000, minTerm: 12, maxTerm: 60, interestRate: 5, interestType: "decreasing", description: "تمويل المشروعات الصغيرة", conditions: "دراسة جدوى + ضمان" },
        { id: "alb_corp2", name: "تمويل مشروعات متوسطة", minAmount: 5000000, maxAmount: 15000000, minTerm: 12, maxTerm: 120, interestRate: 8, interestType: "decreasing", description: "تمويل المشروعات المتوسطة", conditions: "دراسة جدوى + ضمان" },
        { id: "alb_corp3", name: "تمويل قطاع طبي (مبادرة)", minAmount: 250000, maxAmount: 25000000, minTerm: 12, maxTerm: 60, interestRate: 5, interestType: "decreasing", description: "تمويل القطاع الطبي", conditions: "دراسة جدوى + ضمان" },
        { id: "alb_corp4", name: "تمويل المعدات الصناعية (إيجارة)", minAmount: 100000, maxAmount: 5000000, minTerm: 12, maxTerm: 60, interestRate: 9.5, interestType: "decreasing", description: "إيجار معدات صناعية", conditions: "بضمان المعدات" },
        { id: "alb_corp5", name: "تمويل المشاركة في مشاريع زراعية", minAmount: 100000, maxAmount: 2000000, minTerm: 12, maxTerm: 60, interestRate: 8.25, interestType: "decreasing", description: "مشاركة في مشاريع زراعية", conditions: "دراسة جدوى + ضمان" },
      ]
    }
  },

  // -------- بنك بيت التمويل الكويتي (KFH) --------
  {
    id: 30,
    name: "بنك بيت التمويل الكويتي مصر",
    nameEn: "KFH",
    type: "islamic",
    logo: "./ASSETS/banks/KFH.jpeg",
    branches: "60+ فرع",
    minSalary: 2000,
    onlineAvailable: true,
    loanCategories: {
      personal: [
        { id: "kfh_p1", name: "تمويل شخصي بالمرابحة", minAmount: 20000, maxAmount: 500000, minTerm: 12, maxTerm: 60, interestRate: 16.75, interestType: "decreasing", description: "تمويل شخصي", conditions: "بتحويل مرتب" },
        { id: "kfh_p2", name: "تمويل التعليم", minAmount: 50000, maxAmount: 300000, minTerm: 12, maxTerm: 72, interestRate: 18, interestType: "decreasing", description: "مرابحة للمصروفات التعليمية", conditions: "بتحويل مرتب" },
        { id: "kfh_p3", name: "تمويل الأندية", minAmount: 50000, maxAmount: 300000, minTerm: 12, maxTerm: 84, interestRate: 19, interestType: "decreasing", description: "مرابحة لاشتراكات الأندية", conditions: "بتحويل مرتب" },
        { id: "kfh_p4", name: "تمويل موظفي البنوك", minAmount: 50000, maxAmount: 3000000, minTerm: 12, maxTerm: 144, interestRate: 20.75, interestType: "decreasing", description: "مرابحة لموظفي البنوك", conditions: "بتحويل مرتب" },
        { id: "kfh_p5", name: "تمويل بضمان وعاء ادخاري", minAmount: 10000, maxAmount: 0, minTerm: 12, maxTerm: 60, interestRate: 2.5, interestType: "fixed", description: "تمويل بضمان الوعاء", conditions: "بضمان وعاء" },
        { id: "kfh_p6", name: "تمويل المشاركة للأفراد", minAmount: 50000, maxAmount: 500000, minTerm: 12, maxTerm: 60, interestRate: 10.5, interestType: "decreasing", description: "مشاركة في مشروع صغير", conditions: "دراسة جدوى" },
        { id: "kfh_p7", name: "تمويل المضاربة", minAmount: 100000, maxAmount: 2000000, minTerm: 12, maxTerm: 36, interestRate: 9.25, interestType: "decreasing", description: "مضاربة في استثمارات", conditions: "دراسة جدوى + ضمان" },
        { id: "kfh_p8", name: "تمويل الإيجارة للأجهزة الطبية", minAmount: 50000, maxAmount: 500000, minTerm: 12, maxTerm: 60, interestRate: 11.5, interestType: "decreasing", description: "إيجار أجهزة طبية", conditions: "بضمان" },
        { id: "kfh_p9", name: "تمويل تكافل", minAmount: 5000, maxAmount: 50000, minTerm: 12, maxTerm: 12, interestRate: 10, interestType: "fixed", description: "تمويل أقساط التكافل", conditions: "بضمان" },
        { id: "kfh_p10", name: "تمويل السلم للسلع", minAmount: 10000, maxAmount: 200000, minTerm: 6, maxTerm: 12, interestRate: 6.75, interestType: "fixed", description: "سلم في سلع", conditions: "ضمان" },
        { id: "kfh_p11", name: "تمويل الاستصناع", minAmount: 30000, maxAmount: 300000, minTerm: 12, maxTerm: 48, interestRate: 11, interestType: "decreasing", description: "استصناع سلعة", conditions: "مقدم 25%" },
      ],
      car: [
        { id: "kfh_c1", name: "تمويل السيارة الكهربائية", minAmount: 50000, maxAmount: 2000000, minTerm: 24, maxTerm: 84, interestRate: 16.5, interestType: "decreasing", description: "مرابحة سيارة كهربائية", conditions: "بتحويل مرتب" },
        { id: "kfh_c2", name: "تمويل سيارة جديدة", minAmount: 30000, maxAmount: 1500000, minTerm: 12, maxTerm: 84, interestRate: 15.5, interestType: "decreasing", description: "مرابحة سيارة جديدة", conditions: "بتحويل مرتب" },
        { id: "kfh_c3", name: "تمويل سيارة مستعملة", minAmount: 20000, maxAmount: 700000, minTerm: 12, maxTerm: 60, interestRate: 17, interestType: "decreasing", description: "مرابحة سيارة مستعملة", conditions: "بدون تحويل" },
      ],
      mortgage: [
        { id: "kfh_m1", name: "تمويل عقاري بالمرابحة", minAmount: 300000, maxAmount: 8000000, minTerm: 60, maxTerm: 300, interestRate: 12.25, interestType: "decreasing", description: "شراء وحدة سكنية", conditions: "بضمان العقار" },
        { id: "kfh_m2", name: "تمويل تشطيب", minAmount: 40000, maxAmount: 400000, minTerm: 12, maxTerm: 60, interestRate: 13.75, interestType: "decreasing", description: "تشطيب شقة", conditions: "بدون تحويل" },
        { id: "kfh_m3", name: "تمويل الاستصناع لبناء منزل", minAmount: 150000, maxAmount: 3000000, minTerm: 24, maxTerm: 240, interestRate: 10.5, interestType: "decreasing", description: "بناء منزل", conditions: "بضمان الأرض" },
      ],
      corporate: [
        { id: "kfh_corp1", name: "تمويل مشروعات صغيرة", minAmount: 50000, maxAmount: 2000000, minTerm: 12, maxTerm: 60, interestRate: 5, interestType: "decreasing", description: "تمويل المشروعات الصغيرة", conditions: "دراسة جدوى + ضمان" },
        { id: "kfh_corp2", name: "تمويل مشروعات متوسطة", minAmount: 1000000, maxAmount: 10000000, minTerm: 12, maxTerm: 120, interestRate: 7.5, interestType: "decreasing", description: "تمويل المشروعات المتوسطة", conditions: "دراسة جدوى + ضمان" },
        { id: "kfh_corp3", name: "تمويل معدات (إيجارة)", minAmount: 200000, maxAmount: 5000000, minTerm: 12, maxTerm: 96, interestRate: 9.75, interestType: "decreasing", description: "إيجار معدات صناعية", conditions: "بضمان المعدات" },
        { id: "kfh_corp4", name: "تمويل المشاركة الزراعية", minAmount: 100000, maxAmount: 2000000, minTerm: 12, maxTerm: 60, interestRate: 8.25, interestType: "decreasing", description: "مشاركة في مشاريع زراعية", conditions: "دراسة جدوى + ضمان" },
      ]
    }
  },

  // -------- بنك فيصل الإسلامي --------
  {
    id: 31,
    name: "بنك فيصل الإسلامي المصري",
    nameEn: "Faisal Islamic Bank",
    type: "islamic",
    logo: "./ASSETS/banks/faisal.png",
    branches: "30+ فرع",
    minSalary: 2000,
    onlineAvailable: true,
    loanCategories: {
      personal: [
        { id: "faisal_p1", name: "تمويل شخصي بالمرابحة", minAmount: 20000, maxAmount: 1000000, minTerm: 12, maxTerm: 60, interestRate: 14.5, interestType: "decreasing", description: "مرابحة شخصية", conditions: "بتحويل مرتب" },
        { id: "faisal_p2", name: "تمويل سلع معمرة", minAmount: 10000, maxAmount: 500000, minTerm: 6, maxTerm: 48, interestRate: 15, interestType: "decreasing", description: "مرابحة سلع", conditions: "بضمان أو بدون" },
        { id: "faisal_p3", name: "تمويل التعليم العالي", minAmount: 15000, maxAmount: 300000, minTerm: 12, maxTerm: 60, interestRate: 13.5, interestType: "decreasing", description: "للمصروفات الدراسية", conditions: "بتحويل مرتب" },
        { id: "faisal_p4", name: "تمويل الزفاف", minAmount: 20000, maxAmount: 150000, minTerm: 12, maxTerm: 48, interestRate: 16, interestType: "decreasing", description: "مرابحة لتجهيز الزفاف", conditions: "بدون تحويل" },
        { id: "faisal_p5", name: "تمويل الأجهزة الطبية للأطباء", minAmount: 50000, maxAmount: 2000000, minTerm: 12, maxTerm: 72, interestRate: 12, interestType: "decreasing", description: "للأطباء فقط", conditions: "بضمان شهادة" },
        { id: "faisal_p6", name: "تمويل المشاركة للأعمال الحرة", minAmount: 200000, maxAmount: 2000000, minTerm: 24, maxTerm: 60, interestRate: 10.5, interestType: "decreasing", description: "مشاركة في رأس المال", conditions: "دراسة جدوى" },
        { id: "faisal_p7", name: "تمويل المضاربة للاستثمار", minAmount: 150000, maxAmount: 3000000, minTerm: 12, maxTerm: 36, interestRate: 9.75, interestType: "decreasing", description: "مضاربة في استثمارات", conditions: "دراسة جدوى + ضمان" },
        { id: "faisal_p8", name: "تمويل الإيجارة للأجهزة", minAmount: 20000, maxAmount: 500000, minTerm: 12, maxTerm: 60, interestRate: 11.25, interestType: "decreasing", description: "إيجار أجهزة منزلية", conditions: "بضمان" },
        { id: "faisal_p9", name: "تمويل تكافل", minAmount: 5000, maxAmount: 50000, minTerm: 12, maxTerm: 12, interestRate: 11, interestType: "fixed", description: "تمويل أقساط التكافل", conditions: "بضمان" },
        { id: "faisal_p10", name: "تمويل السلم للسلع", minAmount: 10000, maxAmount: 200000, minTerm: 6, maxTerm: 12, interestRate: 7, interestType: "fixed", description: "سلم في سلع", conditions: "ضمان" },
        { id: "faisal_p11", name: "تمويل الاستصناع", minAmount: 30000, maxAmount: 300000, minTerm: 12, maxTerm: 48, interestRate: 11.75, interestType: "decreasing", description: "استصناع سلعة", conditions: "مقدم 25%" },
      ],
      car: [
        { id: "faisal_c1", name: "مرابحة سيارة جديدة", minAmount: 50000, maxAmount: 1500000, minTerm: 12, maxTerm: 84, interestRate: 13.25, interestType: "decreasing", description: "سيارة جديدة", conditions: "بتحويل مرتب" },
        { id: "faisal_c2", name: "مرابحة سيارة مستعملة", minAmount: 30000, maxAmount: 800000, minTerm: 12, maxTerm: 60, interestRate: 14.75, interestType: "decreasing", description: "سيارة مستعملة", conditions: "بدون تحويل" },
        { id: "faisal_c3", name: "تمويل دراجة نارية", minAmount: 5000, maxAmount: 100000, minTerm: 12, maxTerm: 48, interestRate: 16, interestType: "decreasing", description: "مرابحة للدراجات", conditions: "بدون ضمان" },
        { id: "faisal_c4", name: "تمويل سيارة كهربائية", minAmount: 100000, maxAmount: 2000000, minTerm: 12, maxTerm: 84, interestRate: 12.5, interestType: "decreasing", description: "سيارة كهربائية", conditions: "تحويل مرتب" },
        { id: "faisal_c5", name: "تمويل الإيجارة للسيارات", minAmount: 40000, maxAmount: 1000000, minTerm: 12, maxTerm: 60, interestRate: 13, interestType: "decreasing", description: "إيجار سيارات مع تملك", conditions: "بضمان" },
      ],
      mortgage: [
        { id: "faisal_m1", name: "تمويل عقاري بالمرابحة", minAmount: 500000, maxAmount: 10000000, minTerm: 60, maxTerm: 360, interestRate: 11.25, interestType: "decreasing", description: "شراء وحدة سكنية", conditions: "بضمان العقار" },
        { id: "faisal_m2", name: "تمويل تشطيب", minAmount: 50000, maxAmount: 500000, minTerm: 12, maxTerm: 60, interestRate: 13.5, interestType: "decreasing", description: "تشطيب شقة", conditions: "بدون تحويل" },
        { id: "faisal_m3", name: "تمويل بناء منزل", minAmount: 200000, maxAmount: 5000000, minTerm: 24, maxTerm: 240, interestRate: 10.75, interestType: "decreasing", description: "بناء منزل", conditions: "بضمان الأرض" },
        { id: "faisal_m4", name: "تمويل الاستصناع لبناء عمارة", minAmount: 500000, maxAmount: 10000000, minTerm: 24, maxTerm: 240, interestRate: 10.25, interestType: "decreasing", description: "استصناع بناء عمارة", conditions: "بضمان الأرض" },
      ],
      corporate: [
        { id: "faisal_corp1", name: "تمويل مشروعات صغيرة (المضاربة)", minAmount: 50000, maxAmount: 2000000, minTerm: 12, maxTerm: 60, interestRate: 9.5, interestType: "decreasing", description: "مضاربة في مشروعات", conditions: "دراسة جدوى + ضمان" },
        { id: "faisal_corp2", name: "تمويل معدات (الإيجارة)", minAmount: 100000, maxAmount: 5000000, minTerm: 12, maxTerm: 120, interestRate: 10.25, interestType: "decreasing", description: "تأجير معدات للمصانع", conditions: "بضمان المعدات" },
        { id: "faisal_corp3", name: "تمويل مشروعات الطاقة المتجددة", minAmount: 200000, maxAmount: 10000000, minTerm: 36, maxTerm: 180, interestRate: 8.5, interestType: "decreasing", description: "تمويل نظم الطاقة", conditions: "ضمان حكومي" },
        { id: "faisal_corp4", name: "تمويل المشاركة الزراعية", minAmount: 100000, maxAmount: 2000000, minTerm: 12, maxTerm: 60, interestRate: 8.75, interestType: "decreasing", description: "مشاركة في مشاريع زراعية", conditions: "دراسة جدوى + ضمان" },
      ]
    }
  },

  // -------- بنك مصر الإسلامي --------
  {
    id: 32,
    name: "بنك مصر الإسلامي (مصر إسلامي)",
    nameEn: "Misr Islamic Bank",
    type: "islamic",
    logo: "./ASSETS/banks/BM.png",
    branches: "25+ فرع",
    minSalary: 2000,
    onlineAvailable: true,
    loanCategories: {
      personal: [
        { id: "misr_p1", name: "تمويل شخصي بالمرابحة", minAmount: 20000, maxAmount: 800000, minTerm: 12, maxTerm: 72, interestRate: 15, interestType: "decreasing", description: "مرابحة شخصية", conditions: "بتحويل مرتب" },
        { id: "misr_p2", name: "تمويل أجهزة منزلية", minAmount: 10000, maxAmount: 200000, minTerm: 6, maxTerm: 48, interestRate: 16.5, interestType: "decreasing", description: "لشراء أجهزة", conditions: "بدون ضمان" },
        { id: "misr_p3", name: "تمويل التعليم الخاص", minAmount: 20000, maxAmount: 250000, minTerm: 12, maxTerm: 60, interestRate: 14, interestType: "decreasing", description: "للمصروفات المدرسية", conditions: "بتحويل مرتب" },
        { id: "misr_p4", name: "تمويل الحج والعمرة", minAmount: 30000, maxAmount: 150000, minTerm: 6, maxTerm: 36, interestRate: 13.75, interestType: "decreasing", description: "مرابحة لرحلات الحج", conditions: "بدون تحويل" },
        { id: "misr_p5", name: "تمويل تجهيز العروس", minAmount: 20000, maxAmount: 100000, minTerm: 12, maxTerm: 36, interestRate: 15.25, interestType: "decreasing", description: "لتجهيز الزفاف", conditions: "بضمان شهادة" },
        { id: "misr_p6", name: "تمويل المشاركة في مشروع صغير", minAmount: 50000, maxAmount: 500000, minTerm: 12, maxTerm: 48, interestRate: 11, interestType: "decreasing", description: "مشاركة في مشروع", conditions: "دراسة جدوى" },
        { id: "misr_p7", name: "تمويل المضاربة", minAmount: 100000, maxAmount: 2000000, minTerm: 12, maxTerm: 36, interestRate: 9.5, interestType: "decreasing", description: "مضاربة في استثمارات", conditions: "دراسة جدوى + ضمان" },
        { id: "misr_p8", name: "تمويل الإيجارة للأجهزة", minAmount: 15000, maxAmount: 300000, minTerm: 12, maxTerm: 60, interestRate: 11.25, interestType: "decreasing", description: "إيجار أجهزة منزلية", conditions: "بضمان" },
        { id: "misr_p9", name: "تمويل تكافل", minAmount: 3000, maxAmount: 30000, minTerm: 12, maxTerm: 12, interestRate: 9.5, interestType: "fixed", description: "تمويل أقساط التكافل", conditions: "بضمان" },
        { id: "misr_p10", name: "تمويل السلم للسلع الزراعية", minAmount: 10000, maxAmount: 200000, minTerm: 6, maxTerm: 12, interestRate: 7.5, interestType: "fixed", description: "سلم في المحاصيل", conditions: "ضمان المحصول" },
        { id: "misr_p11", name: "تمويل الاستصناع", minAmount: 20000, maxAmount: 200000, minTerm: 12, maxTerm: 48, interestRate: 11.5, interestType: "decreasing", description: "استصناع سلعة", conditions: "مقدم 25%" },
      ],
      car: [
        { id: "misr_c1", name: "مرابحة سيارة جديدة", minAmount: 40000, maxAmount: 1200000, minTerm: 12, maxTerm: 84, interestRate: 14.5, interestType: "decreasing", description: "سيارة جديدة", conditions: "تحويل مرتب" },
        { id: "misr_c2", name: "مرابحة سيارة مستعملة", minAmount: 25000, maxAmount: 700000, minTerm: 12, maxTerm: 60, interestRate: 16, interestType: "decreasing", description: "سيارة مستعملة", conditions: "بدون تحويل" },
        { id: "misr_c3", name: "تمويل دراجة نارية", minAmount: 5000, maxAmount: 50000, minTerm: 12, maxTerm: 48, interestRate: 17.5, interestType: "decreasing", description: "مرابحة دراجة", conditions: "بدون ضمان" },
        { id: "misr_c4", name: "تمويل سيارة نقل صغيرة", minAmount: 50000, maxAmount: 500000, minTerm: 12, maxTerm: 60, interestRate: 15.75, interestType: "decreasing", description: "سيارة نصف نقل", conditions: "بضمان" },
      ],
      mortgage: [
        { id: "misr_m1", name: "تمويل عقاري بالمرابحة", minAmount: 400000, maxAmount: 8000000, minTerm: 60, maxTerm: 300, interestRate: 12.5, interestType: "decreasing", description: "شراء وحدة سكنية", conditions: "بضمان العقار" },
        { id: "misr_m2", name: "تمويل تشطيب", minAmount: 30000, maxAmount: 400000, minTerm: 12, maxTerm: 60, interestRate: 14.75, interestType: "decreasing", description: "تشطيب شقة", conditions: "بدون تحويل" },
        { id: "misr_m3", name: "تمويل بناء عمارة", minAmount: 500000, maxAmount: 10000000, minTerm: 24, maxTerm: 240, interestRate: 11.25, interestType: "decreasing", description: "استصناع بناء عمارة", conditions: "بضمان الأرض" },
        { id: "misr_m4", name: "تمويل الاستصناع لبناء فيلا", minAmount: 300000, maxAmount: 6000000, minTerm: 24, maxTerm: 240, interestRate: 10.75, interestType: "decreasing", description: "استصناع بناء فيلا", conditions: "بضمان الأرض" },
      ],
      corporate: [
        { id: "misr_corp1", name: "تمويل مشروعات زراعية (المضاربة)", minAmount: 100000, maxAmount: 2000000, minTerm: 12, maxTerm: 60, interestRate: 9, interestType: "decreasing", description: "مضاربة في المحاصيل", conditions: "دراسة جدوى" },
        { id: "misr_corp2", name: "تمويل معدات (الإيجارة)", minAmount: 200000, maxAmount: 5000000, minTerm: 12, maxTerm: 120, interestRate: 10.5, interestType: "decreasing", description: "تأجير معدات صناعية", conditions: "بضمان المعدات" },
        { id: "misr_corp3", name: "تمويل مشروعات طبية", minAmount: 100000, maxAmount: 3000000, minTerm: 12, maxTerm: 72, interestRate: 8.75, interestType: "decreasing", description: "تمويل عيادات ومراكز طبية", conditions: "دراسة جدوى + ضمان" },
        { id: "misr_corp4", name: "تمويل السلم للمواد الخام", minAmount: 50000, maxAmount: 1000000, minTerm: 6, maxTerm: 12, interestRate: 6.5, interestType: "fixed", description: "سلم لشراء المواد الخام", conditions: "ضمان" },
      ]
    }
  },

  // -------- البنك الإسلامي العربي --------
  {
    id: 33,
    name: "البنك الإسلامي العربي",
    nameEn: "Arab Islamic Bank",
    type: "islamic",
    logo: "./ASSETS/banks/ARAB.png",
    branches: "20+ فرع",
    minSalary: 2500,
    onlineAvailable: true,
    loanCategories: {
      personal: [
        { id: "arabis_p1", name: "تمويل شخصي بالمرابحة", minAmount: 30000, maxAmount: 1200000, minTerm: 12, maxTerm: 84, interestRate: 13.75, interestType: "decreasing", description: "مرابحة شخصية", conditions: "بتحويل مرتب" },
        { id: "arabis_p2", name: "تمويل شراء أثاث", minAmount: 15000, maxAmount: 300000, minTerm: 6, maxTerm: 48, interestRate: 15.25, interestType: "decreasing", description: "مرابحة للأثاث", conditions: "بدون تحويل" },
        { id: "arabis_p3", name: "تمويل رحلات سياحية", minAmount: 20000, maxAmount: 150000, minTerm: 6, maxTerm: 36, interestRate: 14.5, interestType: "decreasing", description: "مرابحة للرحلات", conditions: "بدون ضمان" },
        { id: "arabis_p4", name: "تمويل مصروفات جامعية", minAmount: 10000, maxAmount: 200000, minTerm: 12, maxTerm: 60, interestRate: 12.75, interestType: "decreasing", description: "لتعليم جامعي", conditions: "بتحويل مرتب" },
        { id: "arabis_p5", name: "تمويل المشاركة للأفراد", minAmount: 50000, maxAmount: 500000, minTerm: 12, maxTerm: 60, interestRate: 10.5, interestType: "decreasing", description: "مشاركة في مشروع فردي", conditions: "دراسة جدوى" },
        { id: "arabis_p6", name: "تمويل المضاربة", minAmount: 100000, maxAmount: 2000000, minTerm: 12, maxTerm: 36, interestRate: 9.25, interestType: "decreasing", description: "مضاربة في استثمارات", conditions: "دراسة جدوى + ضمان" },
        { id: "arabis_p7", name: "تمويل الإيجارة للأجهزة", minAmount: 20000, maxAmount: 300000, minTerm: 12, maxTerm: 60, interestRate: 11, interestType: "decreasing", description: "إيجار أجهزة منزلية", conditions: "بضمان" },
        { id: "arabis_p8", name: "تمويل تكافل", minAmount: 5000, maxAmount: 40000, minTerm: 12, maxTerm: 12, interestRate: 10, interestType: "fixed", description: "تمويل أقساط التكافل", conditions: "بضمان" },
        { id: "arabis_p9", name: "تمويل السلم للسلع", minAmount: 10000, maxAmount: 150000, minTerm: 6, maxTerm: 12, interestRate: 7, interestType: "fixed", description: "سلم في سلع", conditions: "ضمان" },
        { id: "arabis_p10", name: "تمويل الاستصناع", minAmount: 20000, maxAmount: 200000, minTerm: 12, maxTerm: 48, interestRate: 11, interestType: "decreasing", description: "استصناع سلعة", conditions: "مقدم 20%" },
      ],
      car: [
        { id: "arabis_c1", name: "مرابحة سيارة جديدة", minAmount: 60000, maxAmount: 1800000, minTerm: 12, maxTerm: 84, interestRate: 12.5, interestType: "decreasing", description: "سيارة جديدة", conditions: "تحويل مرتب" },
        { id: "arabis_c2", name: "مرابحة سيارة مستعملة", minAmount: 30000, maxAmount: 900000, minTerm: 12, maxTerm: 60, interestRate: 14.25, interestType: "decreasing", description: "سيارة مستعملة", conditions: "بدون تحويل" },
        { id: "arabis_c3", name: "تمويل سيارة كهربائية", minAmount: 80000, maxAmount: 2000000, minTerm: 12, maxTerm: 84, interestRate: 11.5, interestType: "decreasing", description: "سيارة كهربائية", conditions: "تحويل مرتب" },
      ],
      mortgage: [
        { id: "arabis_m1", name: "تمويل عقاري بالمرابحة", minAmount: 600000, maxAmount: 12000000, minTerm: 60, maxTerm: 360, interestRate: 11.75, interestType: "decreasing", description: "شراء منزل", conditions: "بضمان العقار" },
        { id: "arabis_m2", name: "تمويل تشطيب", minAmount: 40000, maxAmount: 400000, minTerm: 12, maxTerm: 48, interestRate: 13.5, interestType: "decreasing", description: "تشطيب شقة", conditions: "بدون تحويل" },
        { id: "arabis_m3", name: "تمويل بناء فيلا", minAmount: 300000, maxAmount: 8000000, minTerm: 24, maxTerm: 240, interestRate: 10.5, interestType: "decreasing", description: "بناء فيلا", conditions: "بضمان الأرض" },
        { id: "arabis_m4", name: "تمويل الاستصناع لبناء عمارة", minAmount: 600000, maxAmount: 10000000, minTerm: 24, maxTerm: 240, interestRate: 10.25, interestType: "decreasing", description: "استصناع بناء عمارة", conditions: "بضمان الأرض" },
      ],
      corporate: [
        { id: "arabis_corp1", name: "تمويل مشروعات (المضاربة)", minAmount: 100000, maxAmount: 3000000, minTerm: 12, maxTerm: 72, interestRate: 9, interestType: "decreasing", description: "مضاربة في مشروعات تجارية", conditions: "دراسة جدوى" },
        { id: "arabis_corp2", name: "تمويل معدات (الإيجارة)", minAmount: 150000, maxAmount: 4000000, minTerm: 12, maxTerm: 96, interestRate: 10, interestType: "decreasing", description: "تأجير معدات", conditions: "بضمان المعدات" },
        { id: "arabis_corp3", name: "تمويل مشروعات تكنولوجيا", minAmount: 200000, maxAmount: 2000000, minTerm: 12, maxTerm: 60, interestRate: 8, interestType: "decreasing", description: "تمويل شركات ناشئة", conditions: "دراسة جدوى + ضمان" },
        { id: "arabis_corp4", name: "تمويل المشاركة الزراعية", minAmount: 100000, maxAmount: 2000000, minTerm: 12, maxTerm: 60, interestRate: 8.5, interestType: "decreasing", description: "مشاركة في مشاريع زراعية", conditions: "دراسة جدوى + ضمان" },
      ]
    }
  },

  // -------- بنك الهلال الإسلامي --------
  {
    id: 34,
    name: "بنك الهلال الإسلامي",
    nameEn: "Hilal Islamic Bank",
    type: "islamic",
    logo: "./ASSETS/banks/hilal.png",
    branches: "15+ فرع",
    minSalary: 2000,
    onlineAvailable: true,
    loanCategories: {
      personal: [
        { id: "hilal_p1", name: "تمويل شخصي بالمرابحة", minAmount: 20000, maxAmount: 900000, minTerm: 12, maxTerm: 72, interestRate: 14, interestType: "decreasing", description: "مرابحة شخصية", conditions: "بتحويل مرتب" },
        { id: "hilal_p2", name: "تمويل أثاث وأجهزة", minAmount: 10000, maxAmount: 200000, minTerm: 6, maxTerm: 48, interestRate: 15.75, interestType: "decreasing", description: "مرابحة للأجهزة", conditions: "بدون تحويل" },
        { id: "hilal_p3", name: "تمويل المشاركة في مشروع", minAmount: 40000, maxAmount: 400000, minTerm: 12, maxTerm: 48, interestRate: 10.25, interestType: "decreasing", description: "مشاركة في مشروع صغير", conditions: "دراسة جدوى" },
        { id: "hilal_p4", name: "تمويل المضاربة", minAmount: 80000, maxAmount: 1500000, minTerm: 12, maxTerm: 36, interestRate: 9.75, interestType: "decreasing", description: "مضاربة في استثمارات", conditions: "دراسة جدوى + ضمان" },
        { id: "hilal_p5", name: "تمويل الإيجارة للأجهزة", minAmount: 15000, maxAmount: 250000, minTerm: 12, maxTerm: 60, interestRate: 11.25, interestType: "decreasing", description: "إيجار أجهزة منزلية", conditions: "بضمان" },
        { id: "hilal_p6", name: "تمويل تكافل", minAmount: 5000, maxAmount: 50000, minTerm: 12, maxTerm: 12, interestRate: 12, interestType: "fixed", description: "تمويل أقساط التأمين", conditions: "بضمان" },
        { id: "hilal_p7", name: "تمويل السلم للمنتجات", minAmount: 5000, maxAmount: 100000, minTerm: 6, maxTerm: 12, interestRate: 6.5, interestType: "fixed", description: "سلم في منتجات", conditions: "ضمان" },
        { id: "hilal_p8", name: "تمويل الاستصناع لسلعة", minAmount: 20000, maxAmount: 200000, minTerm: 12, maxTerm: 36, interestRate: 11.5, interestType: "decreasing", description: "استصناع سلعة مخصصة", conditions: "مقدم 30%" },
      ],
      car: [
        { id: "hilal_c1", name: "مرابحة سيارة جديدة", minAmount: 50000, maxAmount: 1500000, minTerm: 12, maxTerm: 84, interestRate: 13, interestType: "decreasing", description: "سيارة جديدة", conditions: "تحويل مرتب" },
        { id: "hilal_c2", name: "مرابحة سيارة مستعملة", minAmount: 30000, maxAmount: 700000, minTerm: 12, maxTerm: 60, interestRate: 14.5, interestType: "decreasing", description: "سيارة مستعملة", conditions: "بدون تحويل" },
        { id: "hilal_c3", name: "تمويل سيارة كهربائية", minAmount: 60000, maxAmount: 1800000, minTerm: 12, maxTerm: 84, interestRate: 12, interestType: "decreasing", description: "سيارة كهربائية", conditions: "تحويل مرتب" },
      ],
      mortgage: [
        { id: "hilal_m1", name: "تمويل عقاري بالمرابحة", minAmount: 500000, maxAmount: 9000000, minTerm: 60, maxTerm: 360, interestRate: 11.25, interestType: "decreasing", description: "شراء وحدة", conditions: "بضمان العقار" },
        { id: "hilal_m2", name: "تمويل تشطيب", minAmount: 30000, maxAmount: 300000, minTerm: 12, maxTerm: 48, interestRate: 13.5, interestType: "decreasing", description: "تشطيب شقة", conditions: "بدون تحويل" },
        { id: "hilal_m3", name: "تمويل بناء منزل", minAmount: 150000, maxAmount: 3000000, minTerm: 24, maxTerm: 240, interestRate: 10.75, interestType: "decreasing", description: "بناء منزل", conditions: "بضمان الأرض" },
      ],
      corporate: [
        { id: "hilal_corp1", name: "تمويل مشروعات (المضاربة)", minAmount: 80000, maxAmount: 2000000, minTerm: 12, maxTerm: 60, interestRate: 9.25, interestType: "decreasing", description: "مضاربة في مشروعات", conditions: "دراسة جدوى" },
        { id: "hilal_corp2", name: "تمويل معدات (الإيجارة)", minAmount: 100000, maxAmount: 3000000, minTerm: 12, maxTerm: 72, interestRate: 9.75, interestType: "decreasing", description: "تأجير معدات", conditions: "بضمان المعدات" },
        { id: "hilal_corp3", name: "تمويل المشاركة الزراعية", minAmount: 80000, maxAmount: 1500000, minTerm: 12, maxTerm: 60, interestRate: 8.25, interestType: "decreasing", description: "مشاركة في مشاريع زراعية", conditions: "دراسة جدوى + ضمان" },
      ]
    }
  },

  // -------- الشركة الإسلامية للتمويل --------
  {
    id: 35,
    name: "الشركة الإسلامية للتمويل",
    nameEn: "Islamic Finance Co.",
    type: "islamic",
    logo: "./ASSETS/banks/islamic_finance.jpg",
    branches: "10+ فرع",
    minSalary: 1500,
    onlineAvailable: false,
    loanCategories: {
      personal: [
        { id: "ifc_p1", name: "تمويل شخصي بالمرابحة", minAmount: 10000, maxAmount: 600000, minTerm: 12, maxTerm: 60, interestRate: 15.5, interestType: "decreasing", description: "مرابحة شخصية", conditions: "بتحويل مرتب" },
        { id: "ifc_p2", name: "تمويل سلع معمرة", minAmount: 5000, maxAmount: 150000, minTerm: 6, maxTerm: 36, interestRate: 16.25, interestType: "decreasing", description: "مرابحة سلع", conditions: "بدون ضمان" },
        { id: "ifc_p3", name: "تمويل التعليم", minAmount: 10000, maxAmount: 120000, minTerm: 12, maxTerm: 48, interestRate: 14, interestType: "decreasing", description: "للمصروفات التعليمية", conditions: "بتحويل مرتب" },
        { id: "ifc_p4", name: "تمويل المشاركة", minAmount: 30000, maxAmount: 300000, minTerm: 12, maxTerm: 48, interestRate: 11, interestType: "decreasing", description: "مشاركة في مشروع", conditions: "دراسة جدوى" },
        { id: "ifc_p5", name: "تمويل المضاربة", minAmount: 60000, maxAmount: 1000000, minTerm: 12, maxTerm: 36, interestRate: 9.5, interestType: "decreasing", description: "مضاربة في استثمارات", conditions: "دراسة جدوى + ضمان" },
        { id: "ifc_p6", name: "تمويل الإيجارة للأجهزة", minAmount: 10000, maxAmount: 200000, minTerm: 12, maxTerm: 48, interestRate: 11.75, interestType: "decreasing", description: "إيجار أجهزة", conditions: "بضمان" },
        { id: "ifc_p7", name: "تمويل تكافل", minAmount: 3000, maxAmount: 30000, minTerm: 12, maxTerm: 12, interestRate: 10.5, interestType: "fixed", description: "تمويل أقساط التأمين", conditions: "بضمان" },
        { id: "ifc_p8", name: "تمويل السلم", minAmount: 5000, maxAmount: 80000, minTerm: 6, maxTerm: 12, interestRate: 7, interestType: "fixed", description: "سلم في سلع", conditions: "ضمان" },
        { id: "ifc_p9", name: "تمويل الاستصناع", minAmount: 20000, maxAmount: 200000, minTerm: 12, maxTerm: 48, interestRate: 11.75, interestType: "decreasing", description: "استصناع سلعة", conditions: "مقدم 25%" },
      ],
      car: [
        { id: "ifc_c1", name: "مرابحة سيارة جديدة", minAmount: 40000, maxAmount: 1000000, minTerm: 12, maxTerm: 72, interestRate: 14, interestType: "decreasing", description: "سيارة جديدة", conditions: "تحويل مرتب" },
        { id: "ifc_c2", name: "مرابحة سيارة مستعملة", minAmount: 20000, maxAmount: 600000, minTerm: 12, maxTerm: 48, interestRate: 15.25, interestType: "decreasing", description: "سيارة مستعملة", conditions: "بدون تحويل" },
        { id: "ifc_c3", name: "تمويل دراجة نارية", minAmount: 5000, maxAmount: 40000, minTerm: 12, maxTerm: 36, interestRate: 16, interestType: "decreasing", description: "مرابحة دراجة", conditions: "بدون ضمان" },
      ],
      mortgage: [
        { id: "ifc_m1", name: "تمويل عقاري بالمرابحة", minAmount: 300000, maxAmount: 7000000, minTerm: 60, maxTerm: 300, interestRate: 12.5, interestType: "decreasing", description: "شراء وحدة", conditions: "بضمان العقار" },
        { id: "ifc_m2", name: "تمويل تشطيب", minAmount: 20000, maxAmount: 200000, minTerm: 12, maxTerm: 36, interestRate: 14.25, interestType: "decreasing", description: "تشطيب شقة", conditions: "بدون تحويل" },
        { id: "ifc_m3", name: "تمويل بناء منزل", minAmount: 100000, maxAmount: 2000000, minTerm: 24, maxTerm: 180, interestRate: 11.5, interestType: "decreasing", description: "بناء منزل", conditions: "بضمان الأرض" },
      ],
      corporate: [
        { id: "ifc_corp1", name: "تمويل مشروعات (المضاربة)", minAmount: 50000, maxAmount: 1000000, minTerm: 12, maxTerm: 60, interestRate: 10, interestType: "decreasing", description: "مضاربة في مشروعات", conditions: "دراسة جدوى" },
        { id: "ifc_corp2", name: "تمويل معدات (الإيجارة)", minAmount: 50000, maxAmount: 2000000, minTerm: 12, maxTerm: 72, interestRate: 10.5, interestType: "decreasing", description: "تأجير معدات", conditions: "بضمان المعدات" },
        { id: "ifc_corp3", name: "تمويل المشاركة الزراعية", minAmount: 50000, maxAmount: 1000000, minTerm: 12, maxTerm: 60, interestRate: 8.75, interestType: "decreasing", description: "مشاركة في مشاريع زراعية", conditions: "دراسة جدوى + ضمان" },
      ]
    }
  },

  // -------- المؤسسة الإسلامية للتمويل والاستثمار --------
  {
    id: 36,
    name: "المؤسسة الإسلامية للتمويل والاستثمار",
    nameEn: "Islamic Finance & Investment",
    type: "islamic",
    logo: "./ASSETS/banks/islamic_invest.png",
    branches: "8+ فرع",
    minSalary: 2000,
    onlineAvailable: false,
    loanCategories: {
      personal: [
        { id: "ifi_p1", name: "تمويل شخصي بالمرابحة", minAmount: 20000, maxAmount: 500000, minTerm: 12, maxTerm: 60, interestRate: 14.75, interestType: "decreasing", description: "مرابحة شخصية", conditions: "بتحويل مرتب" },
        { id: "ifi_p2", name: "تمويل أجهزة منزلية", minAmount: 5000, maxAmount: 100000, minTerm: 6, maxTerm: 36, interestRate: 15.5, interestType: "decreasing", description: "مرابحة أجهزة", conditions: "بدون ضمان" },
        { id: "ifi_p3", name: "تمويل المشاركة", minAmount: 20000, maxAmount: 200000, minTerm: 12, maxTerm: 48, interestRate: 11.5, interestType: "decreasing", description: "مشاركة في مشروع صغير", conditions: "دراسة جدوى" },
        { id: "ifi_p4", name: "تمويل المضاربة", minAmount: 50000, maxAmount: 800000, minTerm: 12, maxTerm: 36, interestRate: 9.25, interestType: "decreasing", description: "مضاربة في استثمارات", conditions: "دراسة جدوى + ضمان" },
        { id: "ifi_p5", name: "تمويل الإيجارة للأجهزة", minAmount: 10000, maxAmount: 150000, minTerm: 12, maxTerm: 48, interestRate: 11.25, interestType: "decreasing", description: "إيجار أجهزة", conditions: "بضمان" },
        { id: "ifi_p6", name: "تمويل تكافل", minAmount: 2000, maxAmount: 20000, minTerm: 12, maxTerm: 12, interestRate: 9.5, interestType: "fixed", description: "تمويل أقساط التأمين", conditions: "بضمان" },
        { id: "ifi_p7", name: "تمويل السلم", minAmount: 5000, maxAmount: 50000, minTerm: 6, maxTerm: 12, interestRate: 7.5, interestType: "fixed", description: "سلم في منتجات", conditions: "ضمان" },
        { id: "ifi_p8", name: "تمويل الاستصناع", minAmount: 15000, maxAmount: 150000, minTerm: 12, maxTerm: 48, interestRate: 12, interestType: "decreasing", description: "استصناع سلعة", conditions: "مقدم 20%" },
      ],
      car: [
        { id: "ifi_c1", name: "مرابحة سيارة جديدة", minAmount: 30000, maxAmount: 800000, minTerm: 12, maxTerm: 72, interestRate: 13.5, interestType: "decreasing", description: "سيارة جديدة", conditions: "تحويل مرتب" },
        { id: "ifi_c2", name: "مرابحة سيارة مستعملة", minAmount: 20000, maxAmount: 500000, minTerm: 12, maxTerm: 48, interestRate: 15, interestType: "decreasing", description: "سيارة مستعملة", conditions: "بدون تحويل" },
      ],
      mortgage: [
        { id: "ifi_m1", name: "تمويل عقاري", minAmount: 200000, maxAmount: 5000000, minTerm: 60, maxTerm: 300, interestRate: 12.25, interestType: "decreasing", description: "تمويل شراء وحدة", conditions: "بضمان العقار" },
        { id: "ifi_m2", name: "تمويل تشطيب", minAmount: 15000, maxAmount: 150000, minTerm: 12, maxTerm: 36, interestRate: 13.75, interestType: "decreasing", description: "تشطيب شقة", conditions: "بدون تحويل" },
        { id: "ifi_m3", name: "تمويل بناء منزل", minAmount: 100000, maxAmount: 1500000, minTerm: 24, maxTerm: 180, interestRate: 11, interestType: "decreasing", description: "بناء منزل", conditions: "بضمان الأرض" },
      ],
      corporate: [
        { id: "ifi_corp1", name: "تمويل مشروعات (المضاربة)", minAmount: 30000, maxAmount: 800000, minTerm: 12, maxTerm: 60, interestRate: 10.75, interestType: "decreasing", description: "مضاربة في مشروعات", conditions: "دراسة جدوى" },
        { id: "ifi_corp2", name: "تمويل معدات (الإيجارة)", minAmount: 50000, maxAmount: 1500000, minTerm: 12, maxTerm: 60, interestRate: 10.25, interestType: "decreasing", description: "تأجير معدات", conditions: "بضمان المعدات" },
        { id: "ifi_corp3", name: "تمويل المشاركة الزراعية", minAmount: 40000, maxAmount: 800000, minTerm: 12, maxTerm: 48, interestRate: 8.5, interestType: "decreasing", description: "مشاركة في مشاريع زراعية", conditions: "دراسة جدوى + ضمان" },
      ]
    }
  },

  // -------- بنك ناصر الاجتماعي (المنتجات الإسلامية) --------
  {
    id: 37,
    name: "بنك ناصر الاجتماعي (المنتجات الإسلامية)",
    nameEn: "Nasser Social Bank - Islamic",
    type: "islamic",
    logo: "./ASSETS/banks/nasser.jpg",
    branches: "30+ فرع",
    minSalary: 1500,
    onlineAvailable: false,
    loanCategories: {
      personal: [
        { id: "nasser_p1", name: "تمويل شخصي بالمرابحة (للموظفين)", minAmount: 10000, maxAmount: 200000, minTerm: 12, maxTerm: 60, interestRate: 16, interestType: "decreasing", description: "مرابحة شخصية", conditions: "بتحويل مرتب" },
        { id: "nasser_p2", name: "تمويل مشروع صغير (المشاركة)", minAmount: 20000, maxAmount: 300000, minTerm: 12, maxTerm: 48, interestRate: 10, interestType: "decreasing", description: "مشاركة في مشروع", conditions: "دراسة جدوى" },
        { id: "nasser_p3", name: "تمويل الأثاث والأجهزة", minAmount: 5000, maxAmount: 80000, minTerm: 6, maxTerm: 36, interestRate: 15, interestType: "decreasing", description: "مرابحة سلع", conditions: "بدون تحويل" },
        { id: "nasser_p4", name: "تمويل المضاربة", minAmount: 30000, maxAmount: 500000, minTerm: 12, maxTerm: 36, interestRate: 9, interestType: "decreasing", description: "مضاربة في استثمارات", conditions: "دراسة جدوى + ضمان" },
        { id: "nasser_p5", name: "تمويل الإيجارة للأجهزة", minAmount: 10000, maxAmount: 100000, minTerm: 12, maxTerm: 48, interestRate: 10.5, interestType: "decreasing", description: "إيجار أجهزة", conditions: "بضمان" },
        { id: "nasser_p6", name: "تمويل تكافل", minAmount: 2000, maxAmount: 15000, minTerm: 12, maxTerm: 12, interestRate: 9, interestType: "fixed", description: "تمويل أقساط التأمين", conditions: "بضمان" },
        { id: "nasser_p7", name: "تمويل السلم للمنتجات الزراعية", minAmount: 5000, maxAmount: 50000, minTerm: 6, maxTerm: 12, interestRate: 6, interestType: "fixed", description: "سلم للمحاصيل", conditions: "ضمان المحصول" },
        { id: "nasser_p8", name: "تمويل الاستصناع لبناء منزل", minAmount: 100000, maxAmount: 1000000, minTerm: 12, maxTerm: 60, interestRate: 11, interestType: "decreasing", description: "استصناع بناء", conditions: "ضمان الأرض" },
      ],
      car: [
        { id: "nasser_c1", name: "مرابحة سيارة جديدة (للموظفين)", minAmount: 30000, maxAmount: 600000, minTerm: 12, maxTerm: 72, interestRate: 14.5, interestType: "decreasing", description: "سيارة جديدة", conditions: "تحويل مرتب" },
        { id: "nasser_c2", name: "مرابحة سيارة مستعملة", minAmount: 20000, maxAmount: 400000, minTerm: 12, maxTerm: 48, interestRate: 15.75, interestType: "decreasing", description: "سيارة مستعملة", conditions: "بدون تحويل" },
        { id: "nasser_c3", name: "تمويل دراجة نارية", minAmount: 5000, maxAmount: 30000, minTerm: 12, maxTerm: 36, interestRate: 16.5, interestType: "decreasing", description: "مرابحة دراجة", conditions: "بدون ضمان" },
      ],
      mortgage: [
        { id: "nasser_m1", name: "تمويل عقاري بالمرابحة", minAmount: 100000, maxAmount: 2000000, minTerm: 60, maxTerm: 240, interestRate: 13, interestType: "decreasing", description: "شراء وحدة", conditions: "بضمان العقار" },
        { id: "nasser_m2", name: "تمويل تشطيب وتحسين", minAmount: 15000, maxAmount: 150000, minTerm: 12, maxTerm: 48, interestRate: 14.25, interestType: "decreasing", description: "تشطيب شقة", conditions: "بدون تحويل" },
        { id: "nasser_m3", name: "تمويل بناء منزل", minAmount: 80000, maxAmount: 800000, minTerm: 24, maxTerm: 180, interestRate: 11.5, interestType: "decreasing", description: "بناء منزل", conditions: "بضمان الأرض" },
      ],
      corporate: [
        { id: "nasser_corp1", name: "تمويل مشروعات (المضاربة)", minAmount: 20000, maxAmount: 500000, minTerm: 12, maxTerm: 48, interestRate: 9.5, interestType: "decreasing", description: "مضاربة في مشروعات", conditions: "دراسة جدوى" },
        { id: "nasser_corp2", name: "تمويل معدات (الإيجارة)", minAmount: 30000, maxAmount: 800000, minTerm: 12, maxTerm: 60, interestRate: 10.25, interestType: "decreasing", description: "تأجير معدات", conditions: "بضمان المعدات" },
        { id: "nasser_corp3", name: "تمويل المشاركة في مشروع زراعي", minAmount: 30000, maxAmount: 500000, minTerm: 12, maxTerm: 48, interestRate: 8, interestType: "decreasing", description: "مشاركة زراعية", conditions: "دراسة جدوى + ضمان" },
      ]
    }
  }
];

// تصدير المتغير للاستخدام
if (typeof module !== 'undefined' && module.exports) {
  module.exports = completeIslamicBanksData;
} else {
  window.completeIslamicBanksData = completeIslamicBanksData;
}