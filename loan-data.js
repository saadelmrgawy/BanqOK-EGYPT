 // ==================== بيانات البنوك الكاملة (نفس الكود من صفحة الإدارة) ====================
    const completeBanksData = [
      {
        id: 1,
        name: "بنك التنمية الصناعية",
        nameEn: "IDB",
        type: "government",
        logo: "./ASSETS/banks/IDB.png",
        branches: "40+ فرع",
        minSalary: 1500,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "p1",
              name: "القروض الشخصية - أصحاب الأعمال",
              minAmount: 50000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 20% إلى 24% متناقصة سنوياً",
              conditions: "تحويل راتب اختياري، مدة العمل 6 أشهر"
            },
            {
              id: "p2",
              name: "قرض شخصى لتشطيب وتحسين الوحدات",
              minAmount: 100000,
              maxAmount: 15000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 20,
              interestType: "decreasing",
              description: "فائدة 18%-22% متناقصة",
              conditions: "بتحويل راتب أو بدون"
            },
            {
              id: "p3",
              name: "قرض الأطباء",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 17,
              interestType: "decreasing",
              description: "فائدة 16% إلى 18% سنويًا",
              conditions: "خاص بالأطباء"
            },
            {
              id: "p4",
              name: "قرض موظفي البنوك",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 18,
              interestType: "decreasing",
              description: "يتراوح بين 17% إلى 19% سنوياً",
              conditions: "موظفين بنوك"
            },
            {
              id: "p5",
              name: "سداد المديونية",
              minAmount: 100000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 16,
              interestType: "decreasing",
              description: "14% إلى 18%",
              conditions: "لسداد مديونيات"
            },
            {
              id: "p6",
              name: "قرض بضمان وعاء (وديعة)",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 3,
              interestType: "fixed",
              description: "بين 2% إلى 4% فوق سعر عائد الوعاء",
              conditions: "بضمان وديعة"
            },
            {
              id: "p7",
              name: "قرض بضمان شهادة",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 3,
              interestType: "fixed",
              description: "بين 2% إلى 4% فوق سعر عائد الشهادة",
              conditions: "بضمان شهادة"
            },
            {
              id: "p8",
              name: "قرض أصحاب المهن الحرة",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 18,
              interestType: "decreasing",
              description: "فائدة 18%",
              conditions: "لأصحاب المهن الحرة"
            },
            {
              id: "p9",
              name: "قرض الموظفين بدون تحويل",
              minAmount: 20000,
              maxAmount: 75000,
              minTerm: 6,
              maxTerm: 60,
              interestRate: 24,
              interestType: "decreasing",
              description: "تبدأ من 22% وتصل إلى 26%",
              conditions: "بدون تحويل راتب"
            },
            {
              id: "p10",
              name: "قرض الموظفين بتحويل راتب",
              minAmount: 20000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 16,
              interestType: "decreasing",
              description: "تبدأ من 15% إلى 17% سنويًا",
              conditions: "بتحويل راتب"
            }
          ],
          corporate: [
            {
              id: "c1",
              name: "المشروعات الصغيرة والمتوسطة",
              minAmount: 100000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "للمشروعات"
            }
          ],
          mortgage: [
            {
              id: "m1",
              name: "مبادرة البنك المركزي",
              minAmount: 50000,
              maxAmount: 350000,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "لمحدودي الدخل"
            },
            {
              id: "m2",
              name: "التمويل العقاري لمتوسطي الدخل",
              minAmount: 100000,
              maxAmount: 2500000,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 8,
              interestType: "decreasing",
              description: "فائدة 8%",
              conditions: "لمتوسطي الدخل"
            },
            {
              id: "m3",
              name: "التمويل العقاري لمحدودي الدخل",
              minAmount: 50000,
              maxAmount: 350000,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "مبادرة 3% و 8%",
              conditions: "لمحدودي الدخل"
            }
          ]
        }
      },
      {
        id: 2,
        name: "بنك سايب",
        nameEn: "SAIB",
        type: "private",
        logo: "./ASSETS/banks/SAIB.jpg",
        branches: "50 فرع",
        minSalary: 2500,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "saib1",
              name: "بضمان التقرير الائتماني (الاي سكور)",
              minAmount: 20000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 72,
              interestRate: 18.5,
              interestType: "decreasing",
              description: "يبدأ من 17% إلى 20%",
              conditions: "بضمان الاي سكور"
            },
            {
              id: "saib2",
              name: "قرض بضمان وحدة في كمبوند",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 22.5,
              interestType: "decreasing",
              description: "يتراوح بين 21% إلى 24%",
              conditions: "بضمان وحدة سكنية"
            },
            {
              id: "saib3",
              name: "قرض سداد المديونية",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 72,
              interestRate: 21,
              interestType: "decreasing",
              description: "20 إلى 22%",
              conditions: "لسداد مديونيات"
            },
            {
              id: "saib4",
              name: "قرض شخصى بضمان بطاقة ائتمان",
              minAmount: 20000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24,
              interestType: "decreasing",
              description: "فائدة 24%",
              conditions: "بضمان بطاقة ائتمان"
            },
            {
              id: "saib5",
              name: "قرض بضمان وعاء ادخاري",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 2.5,
              interestType: "fixed",
              description: "2 إلى 3% + سعر العائد",
              conditions: "بضمان وعاء ادخاري"
            },
            {
              id: "saib6",
              name: "قرض أصحاب المهن الحرة",
              minAmount: 50000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 72,
              interestRate: 24.5,
              interestType: "decreasing",
              description: "23.5 إلى 26%",
              conditions: "لأصحاب المهن الحرة"
            },
            {
              id: "saib7",
              name: "قرض الصيادلة",
              minAmount: 20000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 72,
              interestRate: 18,
              interestType: "decreasing",
              description: "تبدأ من 18% سنويًا",
              conditions: "للصيادلة"
            },
            {
              id: "saib8",
              name: "قرض الأطباء",
              minAmount: 10000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 72,
              interestRate: 18,
              interestType: "decreasing",
              description: "يبدأ من 18% سنويًا",
              conditions: "للأطباء"
            },
            {
              id: "saib9",
              name: "قرض موظفين الشركات المتعاقدين",
              minAmount: 10000,
              maxAmount: 5000000,
              minTerm: 6,
              maxTerm: 144,
              interestRate: 17,
              interestType: "decreasing",
              description: "16% إلى 18% بتحويل مرتب",
              conditions: "بتحويل مرتب"
            },
            {
              id: "saib10",
              name: "قرض الأساتذة الجامعيين",
              minAmount: 10000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 18,
              interestType: "decreasing",
              description: "17% إلى 19%",
              conditions: "لأعضاء هيئة التدريس"
            },
            {
              id: "saib11",
              name: "قرض التعليم",
              minAmount: 5000,
              maxAmount: 750000,
              minTerm: 6,
              maxTerm: 12,
              interestRate: 19,
              interestType: "decreasing",
              description: "18 إلى 20.5%",
              conditions: "للتعليم"
            },
            {
              id: "saib12",
              name: "قرض المصرفيين",
              minAmount: 10000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 16.5,
              interestType: "decreasing",
              description: "15.5% إلى 17.5%",
              conditions: "للمصرفيين"
            },
            {
              id: "saib13",
              name: "قرض الموظفين 19.5%",
              minAmount: 10000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 144,
              interestRate: 19.5,
              interestType: "decreasing",
              description: "فائدة 19.5%",
              conditions: "للموظفين"
            },
            {
              id: "saib14",
              name: "قرض الموظفين 16.5%",
              minAmount: 10000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 16.5,
              interestType: "decreasing",
              description: "فائدة 16.5%",
              conditions: "للموظفين"
            }
          ],
          car: [
            {
              id: "car1",
              name: "قرض السيارة المستعملة",
              minAmount: 50000,
              maxAmount: 2500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 20,
              interestType: "decreasing",
              description: "19.5 إلى 21%",
              conditions: "لسيارة مستعملة"
            },
            {
              id: "car2",
              name: "قرض السيارة الجديدة (19.75%)",
              minAmount: 50000,
              maxAmount: 6000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 21,
              interestType: "decreasing",
              description: "19.75 إلى 23.75%",
              conditions: "لسيارة جديدة"
            },
            {
              id: "car3",
              name: "قرض السيارة الجديدة (18.25%)",
              minAmount: 50000,
              maxAmount: 6000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 18.75,
              interestType: "decreasing",
              description: "18.25 إلى 19.25%",
              conditions: "لسيارة جديدة"
            }
          ],
          corporate: [
            {
              id: "corp1",
              name: "تمويل المشروعات",
              minAmount: 100000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "للمشروعات"
            }
          ],
          mortgage: [
            {
              id: "mort1",
              name: "مبادرة البنك المركزي",
              minAmount: 50000,
              maxAmount: 350000,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "لمحدودي الدخل"
            },
            {
              id: "mort2",
              name: "التمويل العقاري التقليدي",
              minAmount: 100000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 13.75,
              interestType: "decreasing",
              description: "فائدة 13.75%",
              conditions: "تمويل عقاري"
            },
            {
              id: "mort3",
              name: "مبادرة 8%",
              minAmount: 100000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 8,
              interestType: "decreasing",
              description: "فائدة 8%",
              conditions: "لمتوسطي الدخل"
            }
          ]
        }
      },
      {
        id: 3,
        name: "البنك التجاري الدولي",
        nameEn: "CIB",
        type: "private",
        logo: "./ASSETS/banks/CIB.png",
        branches: "180+ فرع",
        minSalary: 5000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "cib1",
              name: "القرض الشخصي بتحويل الراتب",
              minAmount: 10000,
              maxAmount: 9000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 30,
              interestType: "decreasing",
              description: "26 إلى 36%",
              conditions: "بتحويل راتب"
            }
            ,
            {
              id: "cib2",
              name: "قرض بضمان أوعية ادخارية",
              minAmount: 50000,
              maxAmount: 1200000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 19,
              interestType: "decreasing",
              description: "18 إلى 20%",
              conditions: "بضمان وعاء ادخاري"
            },
            {
              id: "cib3",
              name: "قرض أساتذة الجامعات",
              minAmount: 25000,
              maxAmount: 175000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 19,
              interestType: "decreasing",
              description: "18.75 إلى 19.5%",
              conditions: "لأعضاء هيئة التدريس"
            },
            {
              id: "cib4",
              name: "قرض الأطباء",
              minAmount: 50000,
              maxAmount: 450000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 22.5,
              interestType: "decreasing",
              description: "21.5 إلى 23.5%",
              conditions: "للأطباء"
            },
            {
              id: "cib5",
              name: "قرض التعليم",
              minAmount: 5000,
              maxAmount: 9000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 18,
              interestType: "decreasing",
              description: "يصل إلى 18%",
              conditions: "للتعليم"
            },
            {
              id: "cib6",
              name: "قرض موظفي البنوك",
              minAmount: 50000,
              maxAmount: 300000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 16,
              interestType: "decreasing",
              description: "يصل إلى 25.75%",
              conditions: "للمصرفيين"
            },
            {
              id: "cib7",
              name: "قرض السفر",
              minAmount: 50000,
              maxAmount: 9000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 26,
              interestType: "decreasing",
              description: "فائدة 26%",
              conditions: "للسفر"
            },
            {
              id: "cib8",
              name: "قرض المهن الحرة",
              minAmount: 10000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 21,
              interestType: "decreasing",
              description: "19% حتى 23.5%",
              conditions: "للمهن الحرة"
            },
            {
              id: "cib9",
              name: "قرض الطاقة الشمسية",
              minAmount: 5000,
              maxAmount: 9000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 26,
              interestType: "decreasing",
              description: "فائدة 26%",
              conditions: "للطاقة الشمسية"
            },
            {
              id: "cib10",
              name: "القرض الشخصي بدون تحويل الراتب",
              minAmount: 10000,
              maxAmount: 9000000,
              minTerm: 12,
              maxTerm: 36,
              interestRate: 31,
              interestType: "decreasing",
              description: "26 إلى 36%",
              conditions: "بدون تحويل"
            },
            {
              id: "cib11",
              name: "قرض سداد المديونية",
              minAmount: 50000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 2,
              interestType: "fixed",
              description: "فائدة 2%",
              conditions: "بتحويل مرتب"
            }
          ],
          car: [
            {
              id: "cibcar1",
              name: "قرض السيارة",
              minAmount: 50000,
              maxAmount: 9000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 26,
              interestType: "decreasing",
              description: "فائدة 26%",
              conditions: "للسيارات"
            },
            {
              id: "cibcar2",
              name: "القرض الشخصي لتمويل السيارة",
              minAmount: 50000,
              maxAmount: 9000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 26,
              interestType: "decreasing",
              description: "فائدة 26%",
              conditions: "لتمويل السيارات"
            }
          ],
          corporate: [
            {
              id: "cibcorp1",
              name: "برنامج تمويل سيدات الأعمال",
              minAmount: 100000,
              maxAmount: 7000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 5,
              interestType: "decreasing",
              description: "يصل إلى 5%",
              conditions: "لسيدات الأعمال"
            }
          ],
          mortgage: [
            {
              id: "cibmort1",
              name: "مبادرة البنك المركزي",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "بدون تحويل"
            },
            {
              id: "cibmort2",
              name: "التمويل العقاري",
              minAmount: 100000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 14,
              interestType: "decreasing",
              description: "13.25 إلى 15.25%",
              conditions: "تمويل عقاري"
            },
            {
              id: "cibmort3",
              name: "التمويل العقاري (بديل)",
              minAmount: 100000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 14,
              interestType: "decreasing",
              description: "13.25 إلى 15.25%",
              conditions: "تمويل عقاري"
            }
          ]
        }
      },
      {
        id: 4,
        name: "البنك العربي الافريقي",
        nameEn: "AIB",
        type: "private",
        logo: "./ASSETS/banks/AIB.png",
        branches: "70+ فرع",
        minSalary: 2000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "aib1",
              name: "قرض الطاقة الشمسية",
              minAmount: 50000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 17,
              interestType: "decreasing",
              description: "فائدة 17%",
              conditions: "للطاقة الشمسية"
            },
            {
              id: "aib2",
              name: "قرض التعليم بضمان الوظيفة (بدون تحويل)",
              minAmount: 15000,
              maxAmount: 100000,
              minTerm: 6,
              maxTerm: 12,
              interestRate: 18.5,
              interestType: "decreasing",
              description: "فائدة 18.5%",
              conditions: "بدون تحويل"
            },
            {
              id: "aib3",
              name: "قرض التعليم بضمان الدخل بتحويل مرتب",
              minAmount: 15000,
              maxAmount: 100000,
              minTerm: 6,
              maxTerm: 12,
              interestRate: 17.5,
              interestType: "decreasing",
              description: "فائدة 17.5%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "aib4",
              name: "قرض بضمان شهادات",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 144,
              interestRate: 3,
              interestType: "fixed",
              description: "+3% سعر العائد",
              conditions: "بضمان شهادات"
            },
            {
              id: "aib5",
              name: "قرض المهن الحرة",
              minAmount: 75000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 19,
              interestType: "decreasing",
              description: "فائدة 19% متناقص",
              conditions: "للمهن الحرة"
            },
            {
              id: "aib6",
              name: "قرض موظفي البنوك",
              minAmount: 50000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 12.5,
              interestType: "decreasing",
              description: "12 إلى 13% (حسب المدة)",
              conditions: "للمصرفيين"
            },
            {
              id: "aib7",
              name: "تمويل شراء أجهزة طبية",
              minAmount: 5000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 21,
              interestType: "decreasing",
              description: "فائدة 21% متناقصة",
              conditions: "للأجهزة الطبية"
            },
            {
              id: "aib8",
              name: "التمويل الشخصي للطبيب",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 22.5,
              interestType: "decreasing",
              description: "22% (5 سنوات) - 23% (7 سنوات)",
              conditions: "للأطباء"
            },
            {
              id: "aib9",
              name: "قرض الموظفين",
              minAmount: 15000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 144,
              interestRate: 21.5,
              interestType: "decreasing",
              description: "20 إلى 23.5%",
              conditions: "للموظفين"
            }
          ],
          car: [
            {
              id: "aibcar1",
              name: "قرض السيارة (21-24%)",
              minAmount: 30000,
              maxAmount: 750000,
              minTerm: 60,
              maxTerm: 84,
              interestRate: 22.5,
              interestType: "decreasing",
              description: "21 إلى 24%",
              conditions: "تمويل سيارات"
            },
            {
              id: "aibcar2",
              name: "قرض السيارة (17-19.5%)",
              minAmount: 22000,
              maxAmount: 1500000,
              minTerm: 60,
              maxTerm: 84,
              interestRate: 18,
              interestType: "decreasing",
              description: "17 إلى 19.5%",
              conditions: "تمويل سيارات"
            },
            {
              id: "aibcar3",
              name: "قرض السيارة (20-23%)",
              minAmount: 30000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 21.5,
              interestType: "decreasing",
              description: "20 إلى 23%",
              conditions: "تمويل سيارات"
            },
            {
              id: "aibcar4",
              name: "قرض السيارة (16-18.5%)",
              minAmount: 22000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 17,
              interestType: "decreasing",
              description: "16 إلى 18.5%",
              conditions: "تمويل سيارات"
            }
          ],
          mortgage: [
            {
              id: "aibmort1",
              name: "مبادرة التمويل العقاري",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "مبادرة المركزي"
            }
          ]
        }
      },
      {
        id: 12,
        name: "البنك العربي الدولي",
        nameEn: "AAIB",
        type: "private",
        logo: "./ASSETS/banks/AAIB.png",
        branches: "20+ فرع",
        minSalary: 2000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "aaibint1",
              name: "القرض الشخصي",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 2,
              interestType: "fixed",
              description: "2% + الشهادة او الوديعة",
              conditions: "بضمان شهادة او وديعة"
            }
          ]
        }
      },
      {
        id: 5,
        name: "البنك العربي",
        nameEn: "Arab Bank",
        type: "private",
        logo: "./ASSETS/banks/Arab.png",
        branches: "60+ فرع",
        minSalary: 2000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "arab1",
              name: "قرض الموظفين",
              minAmount: 50000,
              maxAmount: 2000000,
              minTerm: 60,
              maxTerm: 120,
              interestRate: 18,
              interestType: "decreasing",
              description: "16 إلى 20%",
              conditions: "للموظفين"
            }
          ],
          car: [
            {
              id: "arabcar1",
              name: "قرض السيارة جديدة",
              minAmount: 50000,
              maxAmount: 1400000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 17,
              interestType: "decreasing",
              description: "فائدة 17%",
              conditions: "لسيارة جديدة"
            },
            {
              id: "arabcar2",
              name: "قرض السيارة مستعملة",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 21.75,
              interestType: "decreasing",
              description: "فائدة 21.75%",
              conditions: "70% من قيمة السيارة"
            },
            {
              id: "arabcar3",
              name: "قرض السيارة تحويل راتب",
              minAmount: 50000,
              maxAmount: 1400000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 16,
              interestType: "decreasing",
              description: "فائدة 16%",
              conditions: "بتحويل راتب"
            },
            {
              id: "arabcar4",
              name: "قرض السيارة جديدة تحويل راتب",
              minAmount: 50000,
              maxAmount: 1400000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 15,
              interestType: "decreasing",
              description: "فائدة 15%",
              conditions: "بتحويل راتب"
            }
          ]
        }
      },
      {
        id: 6,
        name: "البنك المتحد",
        nameEn: "TUB",
        type: "private",
        logo: "./ASSETS/banks/TUB.jpg",
        branches: "30+ فرع",
        minSalary: 2000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "tub1",
              name: "قرض موظفي شركات الكهرباء تحويل مرتب",
              minAmount: 50000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 19.75,
              interestType: "decreasing",
              description: "فائدة 19.75%",
              conditions: "لشركات الكهرباء"
            },
            {
              id: "tub2",
              name: "قرض سداد المديونية تحويل راتب",
              minAmount: 50000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 16,
              interestType: "decreasing",
              description: "13% الي 19%",
              conditions: "بتحويل راتب"
            },
            {
              id: "tub3",
              name: "المرابحة الشخصية بدون تحويل",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 16,
              interestType: "decreasing",
              description: "13 الي 19%",
              conditions: "بدون تحويل"
            },
            {
              id: "tub4",
              name: "قرض الصيادلة بدون تحويل",
              minAmount: 200000,
              maxAmount: 700000,
              minTerm: 24,
              maxTerm: 48,
              interestRate: 21,
              interestType: "decreasing",
              description: "فائدة 21%",
              conditions: "للصيادلة"
            },
            {
              id: "tub5",
              name: "قرض موظفي البنك المركزي",
              minAmount: 10000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 12,
              interestType: "decreasing",
              description: "11.75 إلى 12.25%",
              conditions: "لموظفي المركزي"
            },
            {
              id: "tub6",
              name: "قرض موظفي البنوك",
              minAmount: 10000,
              maxAmount: 4000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24,
              interestType: "decreasing",
              description: "فائدة 24%",
              conditions: "للمصرفيين"
            },
            {
              id: "tub7",
              name: "قرض التعليم",
              minAmount: 5000,
              maxAmount: 250000,
              minTerm: 12,
              maxTerm: 12,
              interestRate: 16.25,
              interestType: "decreasing",
              description: "فائدة 16.25%",
              conditions: "للتعليم"
            },
            {
              id: "tub8",
              name: "قرض التعليم الجامعي والشهادات المتخصصة",
              minAmount: 5000,
              maxAmount: 250000,
              minTerm: 12,
              maxTerm: 12,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "للتعليم"
            },
            {
              id: "tub9",
              name: "قرض القوات المسلحة",
              minAmount: 10000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 12,
              interestType: "decreasing",
              description: "11.75 إلى 12.5%",
              conditions: "للقوات المسلحة"
            },
            {
              id: "tub10",
              name: "قرض الأطباء",
              minAmount: 10000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 15,
              interestType: "decreasing",
              description: "13.5 إلى 16.5%",
              conditions: "للأطباء"
            },
            {
              id: "tub11",
              name: "قرض الصحفيين",
              minAmount: 10000,
              maxAmount: 200000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 10,
              interestType: "decreasing",
              description: "9 إلى 10.8%",
              conditions: "للصحفيين"
            },
            {
              id: "tub12",
              name: "قرض المهن الحرة",
              minAmount: 10000,
              maxAmount: 2500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 17.75,
              interestType: "decreasing",
              description: "17.5 إلى 18%",
              conditions: "للمهن الحرة"
            },
            {
              id: "tub13",
              name: "قرض الموظفين 35%",
              minAmount: 10000,
              maxAmount: 1000000,
              minTerm: 60,
              maxTerm: 84,
              interestRate: 35,
              interestType: "decreasing",
              description: "فائدة 35%",
              conditions: "للموظفين"
            },
            {
              id: "tub14",
              name: "قرض الموظفين 32%",
              minAmount: 10000,
              maxAmount: 2000000,
              minTerm: 60,
              maxTerm: 96,
              interestRate: 32,
              interestType: "decreasing",
              description: "فائدة 32%",
              conditions: "للموظفين"
            }
          ],
          car: [
            {
              id: "tubcar1",
              name: "قرض السيارة لموظفى البنك المركزي جديدة",
              minAmount: 10000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 11.25,
              interestType: "decreasing",
              description: "فائدة 11.25%",
              conditions: "للمركزي"
            },
            {
              id: "tubcar2",
              name: "قرض السيارة للقوات المسلحة",
              minAmount: 10000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 11.25,
              interestType: "decreasing",
              description: "فائدة 11.25%",
              conditions: "للقوات المسلحة"
            },
            {
              id: "tubcar3",
              name: "قرض تحويل السيارات للعمل بالغاز الطبيعي",
              minAmount: 10000,
              maxAmount: 50000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "للتحويل للغاز"
            },
            {
              id: "tubcar4",
              name: "قرض السيارة لأصحاب المهن الحرة جديدة",
              minAmount: 10000,
              maxAmount: 2500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 17,
              interestType: "decreasing",
              description: "فائدة 17%",
              conditions: "للمهن الحرة"
            },
            {
              id: "tubcar5",
              name: "قرض السيارة مستعملة",
              minAmount: 10000,
              maxAmount: 200000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 27,
              interestType: "decreasing",
              description: "فائدة 27%",
              conditions: "مستعملة"
            },
            {
              id: "tubcar6",
              name: "قرض السيارة جديدة (27.5%)",
              minAmount: 10000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 27.5,
              interestType: "decreasing",
              description: "يصل إلى 27.5%",
              conditions: "جديدة"
            },
            {
              id: "tubcar7",
              name: "قرض السيارة جديدة (23.5-26.5%)",
              minAmount: 10000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 25,
              interestType: "decreasing",
              description: "23.5 إلى 26.5%",
              conditions: "جديدة"
            },
            {
              id: "tubcar8",
              name: "مرابحة السيارة للموظفين جديدة",
              minAmount: 10000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 13,
              interestType: "decreasing",
              description: "فائدة 13%",
              conditions: "مرابحة"
            }
          ],
          corporate: [
            {
              id: "tubcorp1",
              name: "المشروعات الصغيرة والمتوسطة",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 7.5,
              interestType: "decreasing",
              description: "يصل إلى 75%",
              conditions: "للمشروعات"
            },
            {
              id: "tubcorp2",
              name: "المشروعات متناهية الصغر",
              minAmount: 25000,
              maxAmount: 150000,
              minTerm: 12,
              maxTerm: 48,
              interestRate: 19.5,
              interestType: "decreasing",
              description: "18.5 إلى 20.5%",
              conditions: "متناهية الصغر"
            }
          ],
          mortgage: [
            {
              id: "tubmort1",
              name: "مبادرة التمويل العقاري",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "مبادرة المركزي"
            },
            {
              id: "tubmort2",
              name: "التمويل العقاري لأصحاب المهن الحرة",
              minAmount: 100000,
              maxAmount: 10000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 14.5,
              interestType: "decreasing",
              description: "14 إلى 15%",
              conditions: "للمهن الحرة"
            },
            {
              id: "tubmort3",
              name: "لمتوسطي الدخل",
              minAmount: 100000,
              maxAmount: 2250000,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 8,
              interestType: "decreasing",
              description: "فائدة 8%",
              conditions: "لمتوسطي الدخل"
            },
            {
              id: "tubmort4",
              name: "التمويل العقاري للموظفين",
              minAmount: 100000,
              maxAmount: 10000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 14.5,
              interestType: "decreasing",
              description: "14 إلى 15%",
              conditions: "للموظفين"
            }
          ]
        }
      },
      {
        id: 7,
        name: "بنك EG",
        nameEn: "EG Bank",
        type: "private",
        logo: "./ASSETS/banks/EG.png",
        branches: "25+ فرع",
        minSalary: 1500,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "eg1",
              name: "قرض التعليم الجامعي بدون تحويل مرتب",
              minAmount: 10000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 12,
              interestRate: 18.5,
              interestType: "decreasing",
              description: "فائدة 18.5% متناقصة",
              conditions: "بدون تحويل"
            },
            {
              id: "eg2",
              name: "قرض المهن الحرة بدون تحويل مرتب",
              minAmount: 10000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 30.75,
              interestType: "decreasing",
              description: "فائدة 30.75%",
              conditions: "للمهن الحرة"
            },
            {
              id: "eg3",
              name: "قرض السلع المعمرة بدون تحويل",
              minAmount: 10000,
              maxAmount: 120000,
              minTerm: 6,
              maxTerm: 60,
              interestRate: 24,
              interestType: "decreasing",
              description: "فائدة 24% متناقصة",
              conditions: "سلع معمرة"
            },
            {
              id: "eg4",
              name: "قرض السلع المعمرة تحويل مرتب",
              minAmount: 10000,
              maxAmount: 120000,
              minTerm: 6,
              maxTerm: 60,
              interestRate: 24,
              interestType: "decreasing",
              description: "فائدة 24% متناقصة",
              conditions: "بتحويل مرتب"
            },
            {
              id: "eg5",
              name: "القرض الشخصي بضمان وعاء",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 6,
              maxTerm: 120,
              interestRate: 3,
              interestType: "fixed",
              description: "2 إلى 4% فوق العائد",
              conditions: "بضمان وعاء"
            },
            {
              id: "eg6",
              name: "قرض التعليم الجامعي بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 12,
              interestRate: 18.5,
              interestType: "decreasing",
              description: "فائدة 18.5%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "eg7",
              name: "قرض الموظفين",
              minAmount: 20000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 26.75,
              interestType: "decreasing",
              description: "يصل إلي 26.75%",
              conditions: "للموظفين"
            },
            {
              id: "eg8",
              name: "قرض الموظفين بدون تحويل",
              minAmount: 20000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 17,
              interestType: "decreasing",
              description: "فائدة 17%",
              conditions: "بدون تحويل"
            },
            {
              id: "eg9",
              name: "قرض الأطباء بدون تحويل",
              minAmount: 20000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 28.25,
              interestType: "decreasing",
              description: "فائدة 28.25%",
              conditions: "للأطباء"
            }
          ],
          car: [
            {
              id: "egcar1",
              name: "قرض السيارة جديدة بدون تحويل",
              minAmount: 25000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24.75,
              interestType: "decreasing",
              description: "فائدة 24.75%",
              conditions: "بدون تحويل"
            },
            {
              id: "egcar2",
              name: "قرض السيارة جديدة تحويل مرتب",
              minAmount: 25000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24.5,
              interestType: "decreasing",
              description: "يصل إلي 24.5%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "egcar3",
              name: "قرض السيارات المستعملة بدون تحويل",
              minAmount: 25000,
              maxAmount: 400000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 24.75,
              interestType: "decreasing",
              description: "يصل إلي 24.75%",
              conditions: "بدون تحويل"
            },
            {
              id: "egcar4",
              name: "قرض السيارات المستعملة تحويل مرتب",
              minAmount: 25000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 24.5,
              interestType: "decreasing",
              description: "يصل إلي 24.5%",
              conditions: "بتحويل مرتب"
            }
          ],
          corporate: [
            {
              id: "egcorp1",
              name: "برنامج السيولة السريعة للشركات",
              minAmount: 300000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 5,
              interestType: "decreasing",
              description: "يصل إلى 5%",
              conditions: "للشركات"
            }
          ],
          mortgage: [
            {
              id: "egmort1",
              name: "مبادرة التمويل العقاري الجديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "بدون تحويل"
            },
            {
              id: "egmort2",
              name: "تمويل عقاري بدون تحويل",
              minAmount: 50000,
              maxAmount: 5000000,
              minTerm: 6,
              maxTerm: 144,
              interestRate: 23,
              interestType: "decreasing",
              description: "22 إلى 24%",
              conditions: "بدون تحويل"
            },
            {
              id: "egmort3",
              name: "تمويل عقاري (بديل)",
              minAmount: 50000,
              maxAmount: 5000000,
              minTerm: 6,
              maxTerm: 144,
              interestRate: 23,
              interestType: "decreasing",
              description: "22 إلى 24%",
              conditions: "تمويل عقاري"
            }
          ]
        }
      },
      {
        id: 8,
        name: "بنك قناة السويس",
        nameEn: "SCB",
        type: "private",
        logo: "./ASSETS/banks/SCB.jpg",
        branches: "50+ فرع",
        minSalary: 2000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "scb1",
              name: "القرض الشخصي لأصحاب المهن الحرة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 22.5,
              interestType: "decreasing",
              description: "فائدة 22.5%",
              conditions: "للمهن الحرة"
            },
            {
              id: "scb2",
              name: "قرض موظفي البنوك بدون تحويل",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 19.75,
              interestType: "decreasing",
              description: "19.5 إلى 20%",
              conditions: "للمصرفيين"
            },
            {
              id: "scb3",
              name: "قرض التعليم بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24,
              interestType: "decreasing",
              description: "فائدة 24%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "scb4",
              name: "تمويل شخصي لأصحاب المعاشات بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 19.5,
              interestType: "decreasing",
              description: "19 إلى 20%",
              conditions: "لأصحاب المعاشات"
            },
            {
              id: "scb5",
              name: "تمويل بضمان ودائع الادخار",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 4,
              interestType: "fixed",
              description: "4% + سعر العائد",
              conditions: "بضمان ودائع"
            },
            {
              id: "scb6",
              name: "التمويل الشخصي بدون تحويل الراتب",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 22,
              interestType: "decreasing",
              description: "يصل إلي 22%",
              conditions: "بدون تحويل"
            },
            {
              id: "scb7",
              name: "التمويل الشخصي بتحويل الراتب",
              minAmount: 50000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 21,
              interestType: "decreasing",
              description: "يصل إلي 21%",
              conditions: "بتحويل راتب"
            }
          ],
          corporate: [
            {
              id: "scbcorp1",
              name: "قرض الصيدليات",
              minAmount: 100000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 48,
              interestRate: 11.75,
              interestType: "decreasing",
              description: "يصل إلي 11.75%",
              conditions: "للصيدليات"
            },
            {
              id: "scbcorp2",
              name: "المشروعات المتوسطة",
              minAmount: 3000000,
              maxAmount: 40000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 7,
              interestType: "decreasing",
              description: "يصل إلى 7%",
              conditions: "للمشروعات المتوسطة"
            },
            {
              id: "scbcorp3",
              name: "المشروعات الصغيرة",
              minAmount: 3000000,
              maxAmount: 30000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 5,
              interestType: "decreasing",
              description: "يصل إلي 5%",
              conditions: "للمشروعات الصغيرة"
            }
          ],
          mortgage: [
            {
              id: "scbmort1",
              name: "مبادرة التمويل العقاري بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "بدون تحويل"
            },
            {
              id: "scbmort2",
              name: "التمويل العقاري تحويل مرتب",
              minAmount: 50000,
              maxAmount: 15000000,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 13.75,
              interestType: "decreasing",
              description: "13.25 إلى 14.25%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "scbmort3",
              name: "التمويل العقاري بدون تحويل لمتوسطي الدخل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 8,
              interestType: "decreasing",
              description: "فائدة 8%",
              conditions: "لمتوسطي الدخل"
            },
            {
              id: "scbmort4",
              name: "التمويل العقاري بدون تحويل لمحدودي الدخل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 7,
              interestType: "decreasing",
              description: "فائدة 7%",
              conditions: "لمحدودي الدخل"
            }
          ]
        }
      },
      {
        id: 9,
        name: "بنك تنمية الصادرات",
        nameEn: "EBE",
        type: "government",
        logo: "./ASSETS/banks/EBE.jpg",
        branches: "30+ فرع",
        minSalary: 2000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "ebe1",
              name: "قرض الصيدلي بتحويل مرتب",
              minAmount: 20000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 28,
              interestType: "decreasing",
              description: "فائدة 28%",
              conditions: "للصيادلة"
            },
            {
              id: "ebe2",
              name: "قرض الطبيب بتحويل مرتب",
              minAmount: 15000,
              maxAmount: 510000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24,
              interestType: "decreasing",
              description: "23.5 إلى 24.5%",
              conditions: "للأطباء"
            },
            {
              id: "ebe3",
              name: "دريم كاش بدون تحويل",
              minAmount: 30000,
              maxAmount: 1000000,
              minTerm: 60,
              maxTerm: 96,
              interestRate: 19.5,
              interestType: "decreasing",
              description: "19 إلى 20%",
              conditions: "بدون تحويل"
            },
            {
              id: "ebe4",
              name: "دريم كاش بتحويل مرتب",
              minAmount: 15000,
              maxAmount: 1500000,
              minTerm: 60,
              maxTerm: 120,
              interestRate: 19.5,
              interestType: "decreasing",
              description: "19.25 إلى 19.75%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "ebe5",
              name: "قرض موظفي البنوك بدون تحويل",
              minAmount: 50000,
              maxAmount: 5000000,
              minTerm: 84,
              maxTerm: 120,
              interestRate: 17.25,
              interestType: "decreasing",
              description: "17 إلى 17.5%",
              conditions: "للمصرفيين"
            },
            {
              id: "ebe6",
              name: "القرض الشخصي بضمان وعاء",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 3,
              interestType: "fixed",
              description: "2.75 إلى 3% + سعر العائد",
              conditions: "بضمان وعاء"
            },
            {
              id: "ebe7",
              name: "قرض قطاع البترول بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 17,
              interestType: "decreasing",
              description: "16.75 إلى 17.25%",
              conditions: "لقطاع البترول"
            }
          ],
          car: [
            {
              id: "ebecar1",
              name: "قرض السيارة تحويل مرتب مستعملة",
              minAmount: 30000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 23.75,
              interestType: "decreasing",
              description: "22.5 إلى 25%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "ebecar2",
              name: "قرض السيارة بدون تحويل جديدة",
              minAmount: 30000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 22.5,
              interestType: "decreasing",
              description: "فائدة 22.5%",
              conditions: "بدون تحويل"
            },
            {
              id: "ebecar3",
              name: "قرض السيارة بدون تحويل جديدة (22%)",
              minAmount: 30000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "بدون تحويل"
            },
            {
              id: "ebecar4",
              name: "قرض السيارة تحويل مرتب جديدة",
              minAmount: 30000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 19.75,
              interestType: "decreasing",
              description: "فائدة 19.75%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "ebecar5",
              name: "قرض السيارة تحويل مرتب جديدة (19.5%)",
              minAmount: 30000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 19.5,
              interestType: "decreasing",
              description: "فائدة 19.5%",
              conditions: "بتحويل مرتب"
            }
          ],
          corporate: [
            {
              id: "ebecorp1",
              name: "قرض Expo lady",
              minAmount: 100000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 48,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "لسيدات الأعمال"
            },
            {
              id: "ebecorp2",
              name: "الشركات المتوسطة",
              minAmount: 1000000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 10,
              interestType: "decreasing",
              description: "يصل إلي 10%",
              conditions: "للشركات المتوسطة"
            },
            {
              id: "ebecorp3",
              name: "الشركات الصغيرة",
              minAmount: 100000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 5,
              interestType: "decreasing",
              description: "يصل إلى 5%",
              conditions: "للشركات الصغيرة"
            }
          ],
          mortgage: [
            {
              id: "ebemort1",
              name: "مبادرة التمويل العقاري بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "بدون تحويل"
            },
            {
              id: "ebemort2",
              name: "التمويل العقاري بدون تحويل لمتوسطي الدخل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 8,
              interestType: "decreasing",
              description: "فائدة 8%",
              conditions: "لمتوسطي الدخل"
            },
            {
              id: "ebemort3",
              name: "التمويل العقاري بدون تحويل لمحدودي الدخل (7%)",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 7,
              interestType: "decreasing",
              description: "فائدة 7%",
              conditions: "لمحدودي الدخل"
            },
            {
              id: "ebemort4",
              name: "التمويل العقاري بدون تحويل لمحدودي الدخل (5%)",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "لمحدودي الدخل"
            },
            {
              id: "ebemort5",
              name: "التمويل العقاري تحويل مرتب",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 18.5,
              interestType: "decreasing",
              description: "فائدة 18.5%",
              conditions: "بتحويل مرتب"
            }
          ]
        }
      },
      {
        id: 10,
        name: "بنك العقاري المصري",
        nameEn: "REDB",
        type: "government",
        logo: "./ASSETS/banks/REDB.png",
        branches: "40+ فرع",
        minSalary: 1500,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "redb1",
              name: "قرض الصيادلة بدون تحويل",
              minAmount: 150000,
              maxAmount: 200000,
              minTerm: 12,
              maxTerm: 72,
              interestRate: 18,
              interestType: "decreasing",
              description: "17 إلى 19.26%",
              conditions: "للصيادلة"
            },
            {
              id: "redb2",
              name: "قرض الأطباء بتحويل مرتب",
              minAmount: 15000,
              maxAmount: 600000,
              minTerm: 12,
              maxTerm: 48,
              interestRate: 18,
              interestType: "decreasing",
              description: "17.1 إلى 18.9%",
              conditions: "للأطباء"
            },
            {
              id: "redb3",
              name: "القرض النقدي بضمان وعاء ادخاري",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 2,
              interestType: "fixed",
              description: "2% + سعر العائد",
              conditions: "بضمان وعاء"
            },
            {
              id: "redb4",
              name: "قرض موظفي القطاع الخاص بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 13.75,
              interestType: "decreasing",
              description: "13.25 إلى 14.25%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "redb5",
              name: "قرض موظفي البنوك بدون تحويل",
              minAmount: 10000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 17.75,
              interestType: "decreasing",
              description: "17 إلى 18.5%",
              conditions: "للمصرفيين"
            },
            {
              id: "redb6",
              name: "قرض الموظفين (قطاع عام) بدون تحويل",
              minAmount: 10000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 21.75,
              interestType: "decreasing",
              description: "21 إلى 22.5%",
              conditions: "للقطاع العام"
            },
            {
              id: "redb7",
              name: "قرض أصحاب المهن الحرة بدون تحويل",
              minAmount: 10000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 21,
              interestType: "decreasing",
              description: "19.8 إلى 22.75%",
              conditions: "للمهن الحرة"
            },
            {
              id: "redb8",
              name: "قرض الأندية بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 200000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 15.75,
              interestType: "decreasing",
              description: "فائدة 15.75%",
              conditions: "للأندية"
            },
            {
              id: "redb9",
              name: "قرض الموظفين (قطاع عام) بتحويل مرتب",
              minAmount: 7000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 19.75,
              interestType: "decreasing",
              description: "19 إلى 20.5%",
              conditions: "للقطاع العام"
            },
            {
              id: "redb10",
              name: "قرض المصروفات الدراسية للتعليم ما بعد الجامعي",
              minAmount: 5000,
              maxAmount: 200000,
              minTerm: 12,
              maxTerm: 36,
              interestRate: 15.75,
              interestType: "decreasing",
              description: "فائدة 15.75%",
              conditions: "للتعليم"
            }
          ],
          corporate: [
            {
              id: "redbcorp1",
              name: "تمويل المشروعات الصغيرة جدا",
              minAmount: 50000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "صغيرة جدا"
            },
            {
              id: "redbcorp2",
              name: "تمويل المشروعات الصغيرة",
              minAmount: 50000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "صغيرة"
            },
            {
              id: "redbcorp3",
              name: "تمويل المشروعات المتوسطة",
              minAmount: 3000000,
              maxAmount: 15000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 7,
              interestType: "decreasing",
              description: "فائدة 7%",
              conditions: "متوسطة"
            }
          ],
          mortgage: [
            {
              id: "redbmort1",
              name: "مبادرة البنك المركزي بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "بدون تحويل"
            },
            {
              id: "redbmort2",
              name: "التمويل العقاري بدون تحويل لمتوسطي الدخل",
              minAmount: 50000,
              maxAmount: 2250000,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 6.5,
              interestType: "decreasing",
              description: "5 إلى 8%",
              conditions: "لمتوسطي الدخل"
            },
            {
              id: "redbmort3",
              name: "التمويل العقاري بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 16,
              interestType: "decreasing",
              description: "14.47 إلى 18.16%",
              conditions: "تمويل عقاري"
            }
          ]
        }
      },
      {
        id: 11,
        name: "بنك مصر",
        nameEn: "BM",
        type: "government",
        logo: "./ASSETS/banks/BM.PNG",
        branches: "650+ فرع",
        minSalary: 1500,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "bm1",
              name: "قرض موظفي البنوك بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 21,
              interestType: "decreasing",
              description: "يصل إلي 21%",
              conditions: "للمصرفيين"
            },
            {
              id: "bm2",
              name: "قرض بقيمة وعاء",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 2,
              interestType: "fixed",
              description: "2% + سعر العائد",
              conditions: "بضمان وعاء"
            },
            {
              id: "bm3",
              name: "قرض الرحلات والحج لأصحاب المهن الحرة بدون تحويل",
              minAmount: 10000,
              maxAmount: 100000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 22.5,
              interestType: "decreasing",
              description: "فائدة 22.5%",
              conditions: "للمهن الحرة"
            },
            {
              id: "bm4",
              name: "قرض الرحلات والحج للموظفين بدون تحويل",
              minAmount: 10000,
              maxAmount: 100000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 20.5,
              interestType: "decreasing",
              description: "فائدة 20.5%",
              conditions: "للموظفين"
            },
            {
              id: "bm5",
              name: "قرض أصحاب الأعمال بدون تحويل",
              minAmount: 10000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 17.5,
              interestType: "decreasing",
              description: "فائدة 17.5%",
              conditions: "لأصحاب الأعمال"
            },
            {
              id: "bm6",
              name: "قرض أصحاب المعاشات بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 22.75,
              interestType: "decreasing",
              description: "21.5 إلى 24%",
              conditions: "لأصحاب المعاشات"
            },
            {
              id: "bm7",
              name: "قرض السلع المعمرة لأصحاب المعاشات بدون تحويل",
              minAmount: 10000,
              maxAmount: 75000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 20.35,
              interestType: "decreasing",
              description: "فائدة 20.35%",
              conditions: "لأصحاب المعاشات"
            },
            {
              id: "bm8",
              name: "قرض السلع المعمرة لأصحاب المعاشات بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 75000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24.5,
              interestType: "decreasing",
              description: "24 إلى 25.25%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "bm9",
              name: "قرض السلع المعمرة للموظفين بدون تحويل",
              minAmount: 10000,
              maxAmount: 250000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 24.5,
              interestType: "decreasing",
              description: "24 إلى 25.25%",
              conditions: "للموظفين"
            },
            {
              id: "bm10",
              name: "قرض السلع المعمرة للموظفين بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 250000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 24.5,
              interestType: "decreasing",
              description: "24 إلى 25.25%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "bm11",
              name: "قرض السلع المعمرة لأصحاب المهن الحرة بدون تحويل",
              minAmount: 10000,
              maxAmount: 100000,
              minTerm: 12,
              maxTerm: 48,
              interestRate: 24.5,
              interestType: "decreasing",
              description: "24 إلى 25.25%",
              conditions: "للمهن الحرة"
            },
            {
              id: "bm12",
              name: "القرض الشخصي للمهن الحرة بدون تحويل",
              minAmount: 10000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 27,
              interestType: "decreasing",
              description: "يصل إلي 27%",
              conditions: "للمهن الحرة"
            },
            {
              id: "bm13",
              name: "قرض التعليم للموظفين بدون تحويل",
              minAmount: 10000,
              maxAmount: 200000,
              minTerm: 12,
              maxTerm: 48,
              interestRate: 23.5,
              interestType: "decreasing",
              description: "فائدة 23.5%",
              conditions: "بدون تحويل"
            },
            {
              id: "bm14",
              name: "قرض التعليم للموظفين بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 300000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 21,
              interestType: "decreasing",
              description: "فائدة 21%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "bm15",
              name: "القرض الشخصي للموظفين بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 22,
              interestType: "decreasing",
              description: "21.75 إلى 22.5%",
              conditions: "بتحويل مرتب"
            }
          ],
          car: [
            {
              id: "bmcar1",
              name: "قرض السيارة المستعملة لأصحاب المهن الحرة بدون تحويل",
              minAmount: 15000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 24.75,
              interestType: "decreasing",
              description: "فائدة 24.75%",
              conditions: "للمهن الحرة"
            },
            {
              id: "bmcar2",
              name: "قرض السيارة لأصحاب المهن الحرة جديدة بدون تحويل",
              minAmount: 15000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 72,
              interestRate: 26,
              interestType: "decreasing",
              description: "فائدة 26%",
              conditions: "للمهن الحرة"
            },
            {
              id: "bmcar3",
              name: "قرض السيارة للموظفين جديدة بدون تحويل",
              minAmount: 40000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 29,
              interestType: "decreasing",
              description: "فائدة 29%",
              conditions: "للموظفين"
            },
            {
              id: "bmcar4",
              name: "قرض السيارة الصيني بدون تحويل جديدة",
              minAmount: 15000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 29,
              interestType: "decreasing",
              description: "فائدة 29%",
              conditions: "للصيني"
            },
            {
              id: "bmcar5",
              name: "قرض السيارة المستعملة بدون تحويل",
              minAmount: 15000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 29,
              interestType: "decreasing",
              description: "فائدة 29%",
              conditions: "مستعملة"
            },
            {
              id: "bmcar6",
              name: "قرض السيارة المستعملة للموظفين تحويل مرتب",
              minAmount: 15000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 29,
              interestType: "decreasing",
              description: "فائدة 29%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "bmcar7",
              name: "قرض الاسكوتر لأصحاب المهن الحرة بدون تحويل جديدة",
              minAmount: 5000,
              maxAmount: 100000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 25,
              interestType: "decreasing",
              description: "فائدة 25%",
              conditions: "للمهن الحرة"
            },
            {
              id: "bmcar8",
              name: "قرض الاسكوتر للموظفين تحويل مرتب",
              minAmount: 5000,
              maxAmount: 100000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 24,
              interestType: "decreasing",
              description: "فائدة 24%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "bmcar9",
              name: "مرابحة السيارة لأصحاب المهن الحرة بدون تحويل جديدة",
              minAmount: 15000,
              maxAmount: 700000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 11.74,
              interestType: "decreasing",
              description: "فائدة 11.74%",
              conditions: "مرابحة"
            },
            {
              id: "bmcar10",
              name: "مرابحة السيارة للموظفين بدون تحويل جديدة",
              minAmount: 15000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 10,
              interestType: "decreasing",
              description: "فائدة 10%",
              conditions: "مرابحة"
            },
            {
              id: "bmcar11",
              name: "مرابحة السيارة للموظفين تحويل مرتب جديدة",
              minAmount: 15000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 10.3,
              interestType: "decreasing",
              description: "فائدة 10.3%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "bmcar12",
              name: "قرض الاسكوتر للموظفين بدون تحويل جديدة",
              minAmount: 5000,
              maxAmount: 100000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 24.5,
              interestType: "decreasing",
              description: "فائدة 24.5%",
              conditions: "للموظفين"
            },
            {
              id: "bmcar13",
              name: "قرض السيارة للموظفين تحويل مرتب جديدة",
              minAmount: 40000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 29,
              interestType: "decreasing",
              description: "فائدة 29%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "bmcar14",
              name: "قرض السيارة للموظفين تحويل مرتب جديدة (25%)",
              minAmount: 40000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 25,
              interestType: "decreasing",
              description: "فائدة 25%",
              conditions: "بتحويل مرتب"
            }
          ],
          corporate: [
            {
              id: "bmcorp1",
              name: "تمويل المشروعات المتناهية الصغر",
              minAmount: 5000,
              maxAmount: 250000,
              minTerm: 12,
              maxTerm: 36,
              interestRate: 21,
              interestType: "decreasing",
              description: "14.25 إلى 28%",
              conditions: "متناهية الصغر"
            },
            {
              id: "bmcorp2",
              name: "تمويل المشروعات الصغيرة والمتوسطة",
              minAmount: 250000,
              maxAmount: 4000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 7,
              interestType: "decreasing",
              description: "يصل إلي 7%",
              conditions: "صغيرة ومتوسطة"
            }
          ],
          mortgage: [
            {
              id: "bmmort1",
              name: "تمويل عقاري بضمان شهادة",
              minAmount: 100000,
              maxAmount: 50000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 2,
              interestType: "fixed",
              description: "2% + سعر الشهادة",
              conditions: "بضمان شهادة"
            },
            {
              id: "bmmort2",
              name: "مبادرة التمويل العقاري الجديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "بدون تحويل"
            },
            {
              id: "bmmort3",
              name: "التمويل العقاري لمتوسطي الدخل بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 8,
              interestType: "decreasing",
              description: "فائدة 8%",
              conditions: "لمتوسطي الدخل"
            },
            {
              id: "bmmort4",
              name: "قرض التمويل العقاري للتشطيب والتحسين لأصحاب المهن الحرة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 17.5,
              interestType: "decreasing",
              description: "فائدة 17.5%",
              conditions: "للمهن الحرة"
            },
            {
              id: "bmmort5",
              name: "قرض التمويل العقاري للتشطيب والتحسين للموظفين بدون تحويل",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 16.5,
              interestType: "decreasing",
              description: "فائدة 16.5%",
              conditions: "للموظفين"
            },
            {
              id: "bmmort6",
              name: "قرض التمويل العقاري للتشطيب والتحسين للموظفين تحويل مرتب",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 16,
              interestType: "decreasing",
              description: "فائدة 16%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "bmmort7",
              name: "قرض التمويل العقاري لمحدودي الدخل بدون تحويل",
              minAmount: 20000,
              maxAmount: 0,
              minTerm: 96,
              maxTerm: 240,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "لمحدودي الدخل"
            },
            {
              id: "bmmort8",
              name: "قرض التمويل العقاري للأفراد تحويل مرتب",
              minAmount: 50000,
              maxAmount: 5000000,
              minTerm: 120,
              maxTerm: 180,
              interestRate: 17,
              interestType: "decreasing",
              description: "16.5 إلى 17.5%",
              conditions: "بتحويل مرتب"
            }
          ]
        }
      },

      {
        id: 13,
        name: "التجاري وفا بنك",
        nameEn: "CIB",
        type: "private",
        logo: "./ASSETS/banks/التجاري-وفا.png",
        branches: "40+ فرع",
        minSalary: 2000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "cibw1",
              name: "قرض موظفين بدون تحويل",
              minAmount: 10000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 19.5,
              interestType: "decreasing",
              description: "18.5 إلي 20.5%",
              conditions: "بدون تحويل"
            },
            {
              id: "cibw2",
              name: "قرض موظفي البنوك بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 18,
              interestType: "decreasing",
              description: "فائدة 18%",
              conditions: "للمصرفيين"
            },
            {
              id: "cibw3",
              name: "قرض الموظفين بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 17.5,
              interestType: "decreasing",
              description: "16.5 إلى 18.5%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "cibw4",
              name: "قرض المهن الحرة بدون تحويل",
              minAmount: 15000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 25,
              interestType: "decreasing",
              description: "فائدة 25%",
              conditions: "للمهن الحرة"
            },
            {
              id: "cibw5",
              name: "قرض الأطباء بدون تحويل",
              minAmount: 5000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 21,
              interestType: "decreasing",
              description: "18 إلي 24%",
              conditions: "للأطباء"
            }
          ],
          car: [
            {
              id: "cibwcar1",
              name: "قرض السيارة للمهن الحرة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 19,
              interestType: "decreasing",
              description: "فائدة 19%",
              conditions: "للمهن الحرة"
            },
            {
              id: "cibwcar2",
              name: "قرض السيارة الجديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 17.5,
              interestType: "decreasing",
              description: "16.5 إلي 19%",
              conditions: "بدون تحويل"
            },
            {
              id: "cibwcar3",
              name: "قرض السيارة الجديدة بتحويل راتب",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 16.5,
              interestType: "decreasing",
              description: "15.5 إلي 17.5%",
              conditions: "بتحويل راتب"
            },
            {
              id: "cibwcar4",
              name: "قرض السيارة الجديدة (بضمان)",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 3,
              interestType: "fixed",
              description: "3% + سعر العائد",
              conditions: "بضمان"
            }
          ]
        }
      },
      {
        id: 14,
        name: "كريدي اجريكول",
        nameEn: "Credit Agricole",
        type: "private",
        logo: "./ASSETS/banks/كريدي اجريكول.jpg",
        branches: "60+ فرع",
        minSalary: 2500,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "ca1",
              name: "قرض المهندسين بدون تحويل",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 23,
              interestType: "decreasing",
              description: "فائدة 23%",
              conditions: "للمهندسين"
            },
            {
              id: "ca2",
              name: "قرض الأطباء لأصحاب العيادات الخاصة بدون تحويل",
              minAmount: 100000,
              maxAmount: 3500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "للأطباء"
            },
            {
              id: "ca3",
              name: "تمويل بضمان مدخرات",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 3.25,
              interestType: "fixed",
              description: "3 إلي 3.5% + سعر العائد",
              conditions: "بضمان مدخرات"
            },
            {
              id: "ca4",
              name: "قرض أساتذة الجامعات بدون تحويل",
              minAmount: 50000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "لأعضاء هيئة التدريس"
            },
            {
              id: "ca5",
              name: "قرض المعلمين بدون تحويل",
              minAmount: 50000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "للمعلمين"
            },
            {
              id: "ca6",
              name: "قرض أصحاب المهن الحرة",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 24,
              interestType: "decreasing",
              description: "فائدة 24%",
              conditions: "للمهن الحرة"
            },
            {
              id: "ca7",
              name: "قرض موظفي البنوك بدون تحويل",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 20,
              interestType: "decreasing",
              description: "فائدة 20%",
              conditions: "للمصرفيين"
            },
            {
              id: "ca8",
              name: "قرض الصيادلة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 23.5,
              interestType: "decreasing",
              description: "فائدة 23.5%",
              conditions: "للصيادلة"
            },
            {
              id: "ca9",
              name: "قرض الموظفين بدون تحويل",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 20,
              interestType: "decreasing",
              description: "فائدة 20%",
              conditions: "للموظفين"
            },
            {
              id: "ca10",
              name: "قرض الأطباء بدون تحويل",
              minAmount: 50000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 23.5,
              interestType: "decreasing",
              description: "فائدة 23.5%",
              conditions: "للأطباء"
            }
          ],
          car: [
            {
              id: "cacar1",
              name: "قرض السيارة لأصحاب المهن الحرة جديدة",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "للمهن الحرة"
            },
            {
              id: "cacar2",
              name: "قرض السيارة المستعملة بدون تحويل",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 20.5,
              interestType: "decreasing",
              description: "فائدة 20.5%",
              conditions: "مستعملة"
            },
            {
              id: "cacar3",
              name: "قرض السيارة الجديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 20.5,
              interestType: "decreasing",
              description: "فائدة 20.5%",
              conditions: "جديدة"
            },
            {
              id: "cacar4",
              name: "قرض السيارة الجديدة تحويل الراتب",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 6,
              maxTerm: 84,
              interestRate: 20.5,
              interestType: "decreasing",
              description: "فائدة 20.5%",
              conditions: "بتحويل راتب"
            }
          ],
          corporate: [
            {
              id: "cacorp1",
              name: "تمويل المشروعات الصغيرة",
              minAmount: 100000,
              maxAmount: 6000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 5,
              interestType: "decreasing",
              description: "يصل إلي 5%",
              conditions: "صغيرة"
            },
            {
              id: "cacorp2",
              name: "تمويل المشروعات المتوسطة",
              minAmount: 1000000,
              maxAmount: 40000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 7,
              interestType: "decreasing",
              description: "يصل إلى 7%",
              conditions: "متوسطة"
            }
          ],
          mortgage: [
            {
              id: "camort1",
              name: "مبادرة البنك المركزي بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "بدون تحويل"
            },
            {
              id: "camort2",
              name: "التمويل العقاري لمتوسطي الدخل بدون تحويل",
              minAmount: 50000,
              maxAmount: 2250000,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 8,
              interestType: "decreasing",
              description: "فائدة 8%",
              conditions: "لمتوسطي الدخل"
            },
            {
              id: "camort3",
              name: "التمويل العقاري بدون تحويل مرتب",
              minAmount: 50000,
              maxAmount: 10000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 20,
              interestType: "decreasing",
              description: "فائدة 20%",
              conditions: "بدون تحويل"
            }
          ]
        }
      },
      {
        id: 15,
        name: "بنك الاسكندرية",
        nameEn: "ALEX",
        type: "private",
        logo: "./ASSETS/banks/ALEX.png",
        branches: "50+ فرع",
        minSalary: 2000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "alex1",
              name: "قرض سداد المديونية بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 7,
              interestType: "decreasing",
              description: "فائدة 7%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "alex2",
              name: "قرض شخصي بضمان شهادة يوم ورا يوم",
              minAmount: 5000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 3,
              interestType: "fixed",
              description: "3% + فائدة الشهادة",
              conditions: "بضمان شهادة"
            },
            {
              id: "alex3",
              name: "قرض شخصي بضمان وعاء ادخاري",
              minAmount: 5000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 3,
              interestType: "fixed",
              description: "3% + فائدة الوديعة",
              conditions: "بضمان وعاء"
            },
            {
              id: "alex4",
              name: "قرض بضمان شهادة لعملاء ماجنيفكا",
              minAmount: 5000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 2.5,
              interestType: "fixed",
              description: "2.5% + فائدة الشهادة",
              conditions: "لعملاء ماجنيفكا"
            },
            {
              id: "alex5",
              name: "قرض شخصي بضمان وعاء ادخاري (بديل)",
              minAmount: 5000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 2.5,
              interestType: "fixed",
              description: "2.5% + فائدة الشهادة",
              conditions: "بضمان وعاء"
            },
            {
              id: "alex6",
              name: "قرض المهن الحرة بدون تحويل",
              minAmount: 5000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 30,
              interestType: "fixed",
              description: "29.5 إلى 30.5%",
              conditions: "للمهن الحرة"
            },
            {
              id: "alex7",
              name: "قرض المصرفيين بتحويل مرتب",
              minAmount: 5000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 144,
              interestRate: 23.25,
              interestType: "fixed",
              description: "22.5 إلى 24% ثابتة",
              conditions: "للمصرفيين"
            },
            {
              id: "alex8",
              name: "قرض أصحاب المعاشات بتحويل مرتب",
              minAmount: 5000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 144,
              interestRate: 22.25,
              interestType: "decreasing",
              description: "21.5 إلي 23%",
              conditions: "لأصحاب المعاشات"
            },
            {
              id: "alex9",
              name: "قرض الموظفين بدون تحويل",
              minAmount: 5000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 25.25,
              interestType: "decreasing",
              description: "22 إلي 28.5%",
              conditions: "بدون تحويل"
            },
            {
              id: "alex10",
              name: "قرض الموظفين بتحويل مرتب",
              minAmount: 5000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 144,
              interestRate: 25,
              interestType: "decreasing",
              description: "21.5 إلي 28.5%",
              conditions: "بتحويل مرتب"
            }
          ],
          car: [
            {
              id: "alexcar1",
              name: "قرض السيارة لأصحاب المهن الحرة مستعملة بدون تحويل",
              minAmount: 15000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 18,
              interestType: "decreasing",
              description: "17 إلي 19%",
              conditions: "للمهن الحرة"
            },
            {
              id: "alexcar2",
              name: "قرض السيارة لأصحاب المهن الحرة جديدة بدون تحويل",
              minAmount: 15000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 18,
              interestType: "decreasing",
              description: "17 إلي 19%",
              conditions: "للمهن الحرة"
            },
            {
              id: "alexcar3",
              name: "قرض السيارة لأصحاب المهن الحرة بدون تحويل (21.5-29%)",
              minAmount: 15000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 25.25,
              interestType: "decreasing",
              description: "21.5 إلي 29%",
              conditions: "للمهن الحرة"
            },
            {
              id: "alexcar4",
              name: "قرض السيارة لأصحاب المهن الحرة مستعملة (بديل)",
              minAmount: 15000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 19,
              interestType: "decreasing",
              description: "18.5 إلي 19.5%",
              conditions: "للمهن الحرة"
            },
            {
              id: "alexcar5",
              name: "قرض السيارة للموظفين مستعملة تحويل مرتب",
              minAmount: 15000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 17.5,
              interestType: "decreasing",
              description: "15.5 إلي 19.5%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "alexcar6",
              name: "قرض السيارة للموظفين جديدة تحويل مرتب",
              minAmount: 15000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 144,
              interestRate: 25.25,
              interestType: "decreasing",
              description: "21.5 إلي 29%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "alexcar7",
              name: "قرض السيارة للموظفين مستعملة تحويل مرتب (14.5-16.5%)",
              minAmount: 15000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 15.5,
              interestType: "decreasing",
              description: "14.5 إلى 16.5%",
              conditions: "بتحويل مرتب"
            }
          ],
          corporate: [
            {
              id: "alexcorp1",
              name: "الثروة الحيوانية",
              minAmount: 100000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 8.5,
              interestType: "decreasing",
              description: "7.5 إلي 9.5%",
              conditions: "للثروة الحيوانية"
            },
            {
              id: "alexcorp2",
              name: "المشروعات الصغيرة والمتوسطة",
              minAmount: 100000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 6,
              interestType: "decreasing",
              description: "5 إلى 7%",
              conditions: "صغيرة ومتوسطة"
            }
          ]
        }
      },
      {
        id: 16,
        name: "الزراعي المصري",
        nameEn: "ABE",
        type: "government",
        logo: "./ASSETS/banks/ABE.jpg",
        branches: "120+ فرع",
        minSalary: 1000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "abe1",
              name: "قرض التعليم بضمان الحيازة الزراعية",
              minAmount: 2000000,
              maxAmount: 10000000,
              minTerm: 12,
              maxTerm: 12,
              interestRate: 16,
              interestType: "decreasing",
              description: "فائدة 16%",
              conditions: "بضمان حيازة زراعية"
            },
            {
              id: "abe2",
              name: "قرض المهن الحرة",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 21.5,
              interestType: "decreasing",
              description: "فائدة 21.5%",
              conditions: "للمهن الحرة"
            },
            {
              id: "abe3",
              name: "قرض الموظفين بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 24,
              interestType: "decreasing",
              description: "يصل إلي 24%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "abe4",
              name: "القرض الشخصي لأصحاب المعاشات بتحويل مرتب",
              minAmount: 5000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 18.25,
              interestType: "decreasing",
              description: "يصل إلي 18.25%",
              conditions: "لأصحاب المعاشات"
            },
            {
              id: "abe5",
              name: "القرض بضمان الأوعية الإدخارية",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 2,
              interestType: "fixed",
              description: "2% + سعر العائد",
              conditions: "بضمان وعاء"
            },
            {
              id: "abe6",
              name: "قرض باب رزق بدون تحويل",
              minAmount: 2000,
              maxAmount: 15000,
              minTerm: 12,
              maxTerm: 18,
              interestRate: 14,
              interestType: "decreasing",
              description: "فائدة 14%",
              conditions: "بدون تحويل"
            }
          ],
          car: [
            {
              id: "abecar1",
              name: "مرابحة السيارة تحويل مرتب",
              minAmount: 10000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 16,
              interestType: "decreasing",
              description: "فائدة 16%",
              conditions: "مرابحة"
            },
            {
              id: "abecar2",
              name: "قرض السيارة النقل والنصف نقل والميكروباص جديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 72,
              interestRate: 22,
              interestType: "decreasing",
              description: "يصل إلى 22%",
              conditions: "للسيارات التجارية"
            },
            {
              id: "abecar3",
              name: "قرض السيارة للمهن الحرة جديدة بدون تحويل",
              minAmount: 20000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 31,
              interestType: "decreasing",
              description: "فائدة 31%",
              conditions: "للمهن الحرة"
            },
            {
              id: "abecar4",
              name: "قرض التروسيكل جديدة بدون تحويل",
              minAmount: 10000,
              maxAmount: 45000,
              minTerm: 12,
              maxTerm: 24,
              interestRate: 18,
              interestType: "decreasing",
              description: "فائدة 18%",
              conditions: "للتروسيكل"
            },
            {
              id: "abecar5",
              name: "قرض السيارة جديدة بدون تحويل",
              minAmount: 20000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24.75,
              interestType: "decreasing",
              description: "فائدة 24.75%",
              conditions: "بدون تحويل"
            },
            {
              id: "abecar6",
              name: "مبادرة إحلال السيارات القديمة بدون تحويل",
              minAmount: 50000,
              maxAmount: 450000,
              minTerm: 84,
              maxTerm: 120,
              interestRate: 2,
              interestType: "decreasing",
              description: "فائدة 2%",
              conditions: "لإحلال السيارات"
            },
            {
              id: "abecar7",
              name: "قرض السيارة جديدة تحويل مرتب",
              minAmount: 20000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 20.75,
              interestType: "decreasing",
              description: "فائدة 20.75%",
              conditions: "بتحويل مرتب"
            }
          ],
          corporate: [
            {
              id: "abecorp1",
              name: "تمويل نظم الري بالطاقة الشمسية",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "للري"
            },
            {
              id: "abecorp2",
              name: "تمويل مشروعات الثروة الحيوانية",
              minAmount: 100000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 12,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "للثروة الحيوانية"
            },
            {
              id: "abecorp3",
              name: "تمويل إنشاء وتطوير مراكز تجميع الألبان",
              minAmount: 100000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "لمراكز الألبان"
            },
            {
              id: "abecorp4",
              name: "قرض المحاصيل الزراعية",
              minAmount: 100000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 12,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "للمحاصيل"
            },
            {
              id: "abecorp5",
              name: "القرض الشخصي (البلتو) للمنشآت الفردية والشركات",
              minAmount: 100000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 12,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "للمنشآت"
            }
          ],
          mortgage: [
            {
              id: "abemort1",
              name: "مبادرة التمويل العقاري الجديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "بدون تحويل"
            }
          ]
        }
      },
      {
        id: 17,
        name: "بنك القاهرة",
        nameEn: "BDC",
        type: "government",
        logo: "./ASSETS/banks/BDC.png",
        branches: "200+ فرع",
        minSalary: 1500,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "bdc1",
              name: "قرض موظفي البنوك بتحويل مرتب",
              minAmount: 5000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 144,
              interestRate: 23.5,
              interestType: "decreasing",
              description: "23 إلي 24%",
              conditions: "للمصرفيين"
            },
            {
              id: "bdc2",
              name: "قرض موظفي القطاع الخاص بدون تحويل",
              minAmount: 10000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 72,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "بدون تحويل"
            },
            {
              id: "bdc3",
              name: "قرض موظفي القطاع الخاص بتحويل مرتب",
              minAmount: 5000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 22,
              interestType: "decreasing",
              description: "21.5 إلي 22.5%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "bdc4",
              name: "قرض بضمان شهادات",
              minAmount: 5000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 2,
              interestType: "fixed",
              description: "2% + سعر عائد الشهادة",
              conditions: "بضمان شهادات"
            },
            {
              id: "bdc5",
              name: "قرض الأطباء أصحاب العيادات بدون تحويل",
              minAmount: 15000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 72,
              interestRate: 31.5,
              interestType: "decreasing",
              description: "يصل إلي 31.5%",
              conditions: "للأطباء"
            },
            {
              id: "bdc6",
              name: "قرض مصر للسياحة بتحويل مرتب",
              minAmount: 3000,
              maxAmount: 0,
              minTerm: 6,
              maxTerm: 12,
              interestRate: 15,
              interestType: "decreasing",
              description: "فائدة 15%",
              conditions: "للسياحة"
            },
            {
              id: "bdc7",
              name: "قرض سداد المديونية بتحويل مرتب",
              minAmount: 20000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 72,
              interestRate: 21,
              interestType: "decreasing",
              description: "فائدة 21%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "bdc8",
              name: "قرض أصحاب المعاشات بتحويل مرتب",
              minAmount: 3000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 144,
              interestRate: 29,
              interestType: "decreasing",
              description: "يصل إلي 29%",
              conditions: "لأصحاب المعاشات"
            },
            {
              id: "bdc9",
              name: "قرض الموظفين بدون تحويل راتب",
              minAmount: 15000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "بدون تحويل"
            },
            {
              id: "bdc10",
              name: "قرض الأطباء بتحويل مرتب",
              minAmount: 3000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 144,
              interestRate: 15.5,
              interestType: "decreasing",
              description: "فائدة 15.5%",
              conditions: "للأطباء"
            },
            {
              id: "bdc11",
              name: "قرض الأندية بتحويل مرتب",
              minAmount: 15000,
              maxAmount: 850000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 21.5,
              interestType: "decreasing",
              description: "فائدة 21.5%",
              conditions: "للأندية"
            },
            {
              id: "bdc12",
              name: "قرض المهن الحرة بدون تحويل",
              minAmount: 25000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 32,
              interestType: "decreasing",
              description: "يصل إلي 32%",
              conditions: "للمهن الحرة"
            },
            {
              id: "bdc13",
              name: "قرض سلع معمرة للموظفين",
              minAmount: 3000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 25,
              interestType: "decreasing",
              description: "فائدة 25%",
              conditions: "سلع معمرة"
            },
            {
              id: "bdc14",
              name: "قرض الموظفين بتحويل راتب",
              minAmount: 5000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 30,
              interestType: "decreasing",
              description: "29.5 إلي 30.5%",
              conditions: "بتحويل راتب"
            },
            {
              id: "bdc15",
              name: "قرض التعليم المدارس بدون تحويل",
              minAmount: 15000,
              maxAmount: 150000,
              minTerm: 6,
              maxTerm: 12,
              interestRate: 21,
              interestType: "decreasing",
              description: "يصل إلي 21%",
              conditions: "للمدارس"
            },
            {
              id: "bdc16",
              name: "قرض التعليم الجامعات",
              minAmount: 15000,
              maxAmount: 300000,
              minTerm: 6,
              maxTerm: 12,
              interestRate: 21,
              interestType: "decreasing",
              description: "فائدة 21%",
              conditions: "للجامعات"
            }
          ],
          car: [
            {
              id: "bdccar1",
              name: "قرض السيارة الصيني جديدة تحويل مرتب",
              minAmount: 15000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 18.75,
              interestType: "decreasing",
              description: "15.5 إلي 22%",
              conditions: "للصيني"
            },
            {
              id: "bdccar2",
              name: "قرض السيارة بضمان وعاء ادخاري جديدة",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 3,
              interestType: "fixed",
              description: "2 إلي4% + سعر فائدة الشهادة",
              conditions: "بضمان وعاء"
            },
            {
              id: "bdccar3",
              name: "قرض السيارة مستعملة تحويل مرتب",
              minAmount: 15000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 24.25,
              interestType: "decreasing",
              description: "21.5 إلي 27%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "bdccar4",
              name: "قرض السيارة جديدة تحويل مرتب",
              minAmount: 300000,
              maxAmount: 8000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 24.25,
              interestType: "decreasing",
              description: "21.5 إلي 27%",
              conditions: "بتحويل مرتب"
            }
          ],
          corporate: [
            {
              id: "bdccorp1",
              name: "قرض انجاز",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 36,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "للمشروعات"
            }
          ],
          mortgage: [
            {
              id: "bdcmort1",
              name: "مبادرة التمويل العقاري بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "بدون تحويل"
            },
            {
              id: "bdcmort2",
              name: "التمويل العقاري أصحاب المهن الحرة بدون تحويل",
              minAmount: 100000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 18.5,
              interestType: "decreasing",
              description: "فائدة 18.5%",
              conditions: "للمهن الحرة"
            },
            {
              id: "bdcmort3",
              name: "التمويل العقاري للموظفين تحويل مرتب",
              minAmount: 100000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 18.5,
              interestType: "decreasing",
              description: "فائدة 18.5%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "bdcmort4",
              name: "قرض تشطيب الوحدات السكنية للموظفين تحويل مرتب",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 23,
              interestType: "decreasing",
              description: "فائدة 23%",
              conditions: "للتشطيب"
            },
            {
              id: "bdcmort5",
              name: "قرض تشطيب الوحدات السكنية للمهن الحرة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 23,
              interestType: "decreasing",
              description: "فائدة 23%",
              conditions: "للمهن الحرة"
            },
            {
              id: "bdcmort6",
              name: "لمحدودي الدخل تحويل مرتب",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 6,
              interestType: "decreasing",
              description: "5 إلي 7%",
              conditions: "لمحدودي الدخل"
            }
          ]
        }
      },
      {
        id: 18,
        name: "أبو ظبي الأول",
        nameEn: "FAB",
        type: "private",
        logo: "./ASSETS/banks/FAB.png",
        branches: "30+ فرع",
        minSalary: 5000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "fab1",
              name: "قرض المنزل بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 20000000,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 26.5,
              interestType: "decreasing",
              description: "26 إلى 26.75%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "fab2",
              name: "قرض شخصي بدون تحويل",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 72,
              interestRate: 26,
              interestType: "decreasing",
              description: "21.5 إلي 30.5%",
              conditions: "بدون تحويل"
            },
            {
              id: "fab3",
              name: "قرض الموظفين بتحويل مرتب",
              minAmount: 750000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24,
              interestType: "decreasing",
              description: "يصل إلي 24%",
              conditions: "بتحويل مرتب"
            }
          ],
          car: [
            {
              id: "fabcar1",
              name: "قرض السيارة للموظفين جديدة تحويل مرتب",
              minAmount: 50000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 27.25,
              interestType: "decreasing",
              description: "26.5 إلى 28%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "fabcar2",
              name: "قرض السيارة لأصحاب الأعمال الحرة جديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 27.25,
              interestType: "decreasing",
              description: "26.5 إلي 28%",
              conditions: "لأصحاب الأعمال"
            }
          ],
          mortgage: [
            {
              id: "fabmort1",
              name: "قرض تشطيب الوحدات السكنية بدون تحويل",
              minAmount: 100000,
              maxAmount: 15000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 12.75,
              interestType: "decreasing",
              description: "فائدة 12.75%",
              conditions: "للتشطيب"
            },
            {
              id: "fabmort2",
              name: "تمويل عقاري بدون تحويل",
              minAmount: 100000,
              maxAmount: 15000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 12.75,
              interestType: "decreasing",
              description: "فائدة 12.75%",
              conditions: "تمويل عقاري"
            }
          ]
        }
      },
      {
        id: 19,
        name: "الإمارات دبي الوطني",
        nameEn: "ENBD",
        type: "private",
        logo: "./ASSETS/banks/ENBD.png",
        branches: "20+ فرع",
        minSalary: 5000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "enbd1",
              name: "قرض اساتذة الجامعة بتحويل مرتب",
              minAmount: 100000,
              maxAmount: 400000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24.25,
              interestType: "decreasing",
              description: "فائدة 24.25%",
              conditions: "لأعضاء هيئة التدريس"
            },
            {
              id: "enbd2",
              name: "قرض الأطباء بدون تحويل",
              minAmount: 250000,
              maxAmount: 1100000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 24.25,
              interestType: "decreasing",
              description: "فائدة 24.25%",
              conditions: "للأطباء"
            },
            {
              id: "enbd3",
              name: "قرض الأطباء بتحويل مرتب",
              minAmount: 250000,
              maxAmount: 1100000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 24.25,
              interestType: "decreasing",
              description: "فائدة 24.25%",
              conditions: "للأطباء"
            },
            {
              id: "enbd4",
              name: "قرض المهن الحرة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 24.25,
              interestType: "decreasing",
              description: "فائدة 24.25%",
              conditions: "للمهن الحرة"
            },
            {
              id: "enbd5",
              name: "قرض الموظفين بدون تحويل",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 25,
              interestType: "decreasing",
              description: "فائدة 25%",
              conditions: "بدون تحويل"
            },
            {
              id: "enbd6",
              name: "قرض الموظفين بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 25,
              interestType: "decreasing",
              description: "فائدة 25%",
              conditions: "بتحويل مرتب"
            }
          ],
          car: [
            {
              id: "enbdcar1",
              name: "قرض السيارة المستعملة تحويل مرتب",
              minAmount: 50000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 23,
              interestType: "decreasing",
              description: "22 إلى 24%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "enbdcar2",
              name: "قرض السيارة لأصحاب المعاشات جديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 23,
              interestType: "decreasing",
              description: "22.5 إلى 23.5%",
              conditions: "لأصحاب المعاشات"
            },
            {
              id: "enbdcar3",
              name: "قرض السيارة للموظفين جديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 23,
              interestType: "decreasing",
              description: "فائدة 23%",
              conditions: "للموظفين"
            },
            {
              id: "enbdcar4",
              name: "قرض السيارة للمهن الحرة جديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 23.5,
              interestType: "decreasing",
              description: "23 إلى 24%",
              conditions: "للمهن الحرة"
            },
            {
              id: "enbdcar5",
              name: "قرض السيارة للموظفين جديدة تحويل مرتب",
              minAmount: 50000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 22.5,
              interestType: "decreasing",
              description: "22 إلي 23%",
              conditions: "بتحويل مرتب"
            }
          ],
          corporate: [
            {
              id: "enbdcorp1",
              name: "مشروعات متوسطة",
              minAmount: 1000000,
              maxAmount: 40000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 7,
              interestType: "decreasing",
              description: "فائدة 7%",
              conditions: "متوسطة"
            },
            {
              id: "enbdcorp2",
              name: "مشروعات صغيرة",
              minAmount: 100000,
              maxAmount: 6000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "صغيرة"
            }
          ]
        }
      },
      {
        id: 20,
        name: "HSBC",
        nameEn: "HSBC",
        type: "private",
        logo: "./ASSETS/banks/HSBC.png",
        branches: "15+ فرع",
        minSalary: 5000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "hsbc1",
              name: "أصحاب الأعمال والمهن الحرة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24,
              interestType: "decreasing",
              description: "فائدة 24%",
              conditions: "للمهن الحرة"
            },
            {
              id: "hsbc2",
              name: "قرض الموظفين بدون تحويل",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 26,
              interestType: "decreasing",
              description: "فائدة 26%",
              conditions: "بدون تحويل"
            },
            {
              id: "hsbc3",
              name: "قرض الموظفين بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 25,
              interestType: "decreasing",
              description: "فائدة 25%",
              conditions: "بتحويل مرتب"
            }
          ],
          car: [
            {
              id: "hsbccar1",
              name: "قرض السيارة المستعملة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24,
              interestType: "decreasing",
              description: "فائدة 24%",
              conditions: "بدون تحويل"
            },
            {
              id: "hsbccar2",
              name: "قرض السيارة الجديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 25,
              interestType: "decreasing",
              description: "فائدة 25%",
              conditions: "بدون تحويل"
            },
            {
              id: "hsbccar3",
              name: "قرض السيارة المستعملة تحويل مرتب",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 23,
              interestType: "decreasing",
              description: "فائدة 23%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "hsbccar4",
              name: "قرض السيارة الجديدة تحويل مرتب",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24,
              interestType: "decreasing",
              description: "فائدة 24%",
              conditions: "بتحويل مرتب"
            }
          ]
        }
      },
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
            {
              id: "adib1",
              name: "تمويل اليسر لأساتذة الجامعات بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 300000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 21.8,
              interestType: "decreasing",
              description: "فائدة 21.8% متناقصة",
              conditions: "لأعضاء هيئة التدريس"
            },
            {
              id: "adib2",
              name: "تمويل أصحاب الوحدات السكنية",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 17,
              interestType: "decreasing",
              description: "16.6 إلي 17.3% متناقصة",
              conditions: "لأصحاب الوحدات"
            },
            {
              id: "adib3",
              name: "تمويل اليسر لرجال الأعمال بدون تحويل",
              minAmount: 10000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 22.15,
              interestType: "decreasing",
              description: "21.7 إلى 22.6%",
              conditions: "لرجال الأعمال"
            },
            {
              id: "adib4",
              name: "تمويل اليسر بضمان وعاء",
              minAmount: 10000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 8.9,
              interestType: "decreasing",
              description: "فائدة 8.9%",
              conditions: "بضمان وعاء"
            },
            {
              id: "adib5",
              name: "تمويل اليسر للموظفين بدون تحويل",
              minAmount: 10000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 18.8,
              interestType: "decreasing",
              description: "17.5 إلي 20.1%",
              conditions: "بدون تحويل"
            },
            {
              id: "adib6",
              name: "تمويل اليسر للموظفين بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 13.55,
              interestType: "decreasing",
              description: "13.1 إلي 14%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "adib7",
              name: "تمويل اليسر للأطباء بدون تحويل",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 16.5,
              interestType: "decreasing",
              description: "فائدة 16.5%",
              conditions: "للأطباء"
            }
          ],
          car: [
            {
              id: "adibcar1",
              name: "مرابحة السيارة – بضمان الأوعية الإدخارية جديدة",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 15.75,
              interestType: "decreasing",
              description: "فائدة 15.75%",
              conditions: "بضمان أوعية"
            },
            {
              id: "adibcar2",
              name: "مرابحة السيارة لأصحاب الأعمال جديدة بدون تحويل",
              minAmount: 20000,
              maxAmount: 400000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 13.5,
              interestType: "decreasing",
              description: "فائدة 13.5%",
              conditions: "لأصحاب الأعمال"
            },
            {
              id: "adibcar3",
              name: "مرابحة السيارة للموظفين جديدة بدون تحويل",
              minAmount: 20000,
              maxAmount: 400000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 13,
              interestType: "decreasing",
              description: "12.5 إلي 13.5%",
              conditions: "للموظفين"
            },
            {
              id: "adibcar4",
              name: "مرابحة السيارة للموظفين جديدة تحويل مرتب",
              minAmount: 20000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 12.65,
              interestType: "decreasing",
              description: "12.5 إلى 12.8%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "adibcar5",
              name: "مرابحة السيارة للموظفين مستعملة بدون تحويل",
              minAmount: 20000,
              maxAmount: 400000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 14,
              interestType: "decreasing",
              description: "فائدة 14%",
              conditions: "بدون تحويل"
            },
            {
              id: "adibcar6",
              name: "مرابحة السيارة للموظفين مستعملة تحويل مرتب",
              minAmount: 20000,
              maxAmount: 600000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 12.875,
              interestType: "decreasing",
              description: "11.75 إلى 14%",
              conditions: "بتحويل مرتب"
            }
          ]
        }
      },
      {
        id: 22,
        name: "أبو ظبي التجاري",
        nameEn: "ADCB",
        type: "private",
        logo: "./ASSETS/banks/ADCB.png",
        branches: "20+ فرع",
        minSalary: 3000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "adcb1",
              name: "قرض الموظفين بدون تحويل",
              minAmount: 30000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 24.25,
              interestType: "decreasing",
              description: "23 إلى 25.5%",
              conditions: "بدون تحويل"
            },
            {
              id: "adcb2",
              name: "قرض المهن الحرة",
              minAmount: 30000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 27,
              interestType: "decreasing",
              description: "فائدة 27%",
              conditions: "للمهن الحرة"
            },
            {
              id: "adcb3",
              name: "قرض سداد المديونية بدون تحويل",
              minAmount: 30000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "بدون تحويل"
            },
            {
              id: "adcb4",
              name: "قرض الأندية بتحويل مرتب",
              minAmount: 30000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 15.25,
              interestType: "decreasing",
              description: "14 إلي 16.5%",
              conditions: "للأندية"
            },
            {
              id: "adcb5",
              name: "قرض أصحاب المعاش",
              minAmount: 50000,
              maxAmount: 150000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 19,
              interestType: "decreasing",
              description: "18.5 إلى 19.5%",
              conditions: "لأصحاب المعاشات"
            },
            {
              id: "adcb6",
              name: "قرض الأطباء بتحويل مرتب",
              minAmount: 30000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24,
              interestType: "decreasing",
              description: "23 إلي 25%",
              conditions: "للأطباء"
            },
            {
              id: "adcb7",
              name: "قرض الموظفين بتحويل مرتب",
              minAmount: 30000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 22,
              interestType: "decreasing",
              description: "20.75 إلى 23.25%",
              conditions: "بتحويل مرتب"
            }
          ],
          car: [
            {
              id: "adc bcar1",
              name: "قرض السيارة المستعملة تحويل مرتب",
              minAmount: 50000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 21.5,
              interestType: "decreasing",
              description: "فائدة 21.5%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "adc bcar2",
              name: "قرض السيارة الجديدة بدون تحويل",
              minAmount: 250000,
              maxAmount: 1000000,
              minTerm: 36,
              maxTerm: 60,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "بدون تحويل"
            },
            {
              id: "adc bcar3",
              name: "قرض السيارة الجديدة تحويل مرتب",
              minAmount: 500000,
              maxAmount: 1000000,
              minTerm: 36,
              maxTerm: 60,
              interestRate: 20.5,
              interestType: "decreasing",
              description: "فائدة 20.5%",
              conditions: "بتحويل مرتب"
            }
          ],
          mortgage: [
            {
              id: "adcbmort1",
              name: "قرض التمويل العقاري تحويل مرتب",
              minAmount: 100000,
              maxAmount: 10000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "بتحويل مرتب"
            }
          ]
        }
      },
      {
        id: 23,
        name: "بنك الكويت الوطني",
        nameEn: "NBK",
        type: "private",
        logo: "./ASSETS/banks/NBK.jpg",
        branches: "25+ فرع",
        minSalary: 3000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "nbk1",
              name: "قرض المهن الحرة بدون تحويل",
              minAmount: 50000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 24,
              interestType: "decreasing",
              description: "فائدة 24%",
              conditions: "للمهن الحرة"
            },
            {
              id: "nbk2",
              name: "قرض موظفي البنوك بتحويل مرتب",
              minAmount: 20000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 18.5,
              interestType: "decreasing",
              description: "فائدة 18.5%",
              conditions: "للمصرفيين"
            },
            {
              id: "nbk3",
              name: "القرض الشخصي (نقدى) بتحويل مرتب",
              minAmount: 20000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 13,
              interestType: "decreasing",
              description: "فائدة 13%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "nbk4",
              name: "قرض الموظفين – بدون تحويل",
              minAmount: 20000,
              maxAmount: 1800000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 21,
              interestType: "decreasing",
              description: "21.25 إلى 21%",
              conditions: "بدون تحويل"
            },
            {
              id: "nbk5",
              name: "قرض الموظفين – بتحويل راتب",
              minAmount: 20000,
              maxAmount: 2500000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 19.75,
              interestType: "decreasing",
              description: "18 إلى 21.5%",
              conditions: "بتحويل راتب"
            },
            {
              id: "nbk6",
              name: "قرض الأطباء بدون تحويل",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 18.5,
              interestType: "decreasing",
              description: "فائدة 18.5%",
              conditions: "للأطباء"
            }
          ],
          car: [
            {
              id: "nbkcar1",
              name: "قرض السيارة جديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 16.75,
              interestType: "decreasing",
              description: "فائدة 16.75%",
              conditions: "بدون تحويل"
            },
            {
              id: "nbkcar2",
              name: "قرض السيارة جديدة تحويل مرتب",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 15.75,
              interestType: "decreasing",
              description: "فائدة 15.75%",
              conditions: "بتحويل مرتب"
            }
          ],
          mortgage: [
            {
              id: "nbkmort1",
              name: "مبادرة التمويل العقاري الجديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 2500000,
              minTerm: 12,
              maxTerm: 300,
              interestRate: 8,
              interestType: "decreasing",
              description: "يصل إلي 8%",
              conditions: "بدون تحويل"
            },
            {
              id: "nbkmort2",
              name: "مبادرة التمويل العقاري الجديدة 3%",
              minAmount: 50000,
              maxAmount: 1400000,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "بدون تحويل"
            },
            {
              id: "nbkmort3",
              name: "تمويل أصحاب المهن الحرة بدون تحويل",
              minAmount: 100000,
              maxAmount: 7000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 13.5,
              interestType: "decreasing",
              description: "فائدة 13.5%",
              conditions: "للمهن الحرة"
            },
            {
              id: "nbkmort4",
              name: "للموظفين بدون تحويل",
              minAmount: 100000,
              maxAmount: 7000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 13.5,
              interestType: "decreasing",
              description: "فائدة 13.5%",
              conditions: "للموظفين"
            },
            {
              id: "nbkmort5",
              name: "للموظفين بتحويل الراتب",
              minAmount: 100000,
              maxAmount: 4000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 16.5,
              interestType: "decreasing",
              description: "16 إلى 17%",
              conditions: "بتحويل راتب"
            }
          ]
        }
      },
      {
        id: 24,
        name: "بنك المشرق",
        nameEn: "Mashreq",
        type: "private",
        logo: "./ASSETS/banks/mashreq.jpg",
        branches: "10+ فرع",
        minSalary: 4000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "mash1",
              name: "قرض التربو لرجال الأعمال بدون تحويل",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "لرجال الأعمال"
            },
            {
              id: "mash2",
              name: "القرض الشخصي بدون تحويل",
              minAmount: 50000,
              maxAmount: 1320000,
              minTerm: 12,
              maxTerm: 144,
              interestRate: 16.5,
              interestType: "decreasing",
              description: "فائدة 16.5%",
              conditions: "بدون تحويل"
            }
          ],
          car: [
            {
              id: "mashcar1",
              name: "قرض السيارة الجديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1200000,
              minTerm: 12,
              maxTerm: 72,
              interestRate: 16,
              interestType: "decreasing",
              description: "فائدة 16%",
              conditions: "بدون تحويل"
            }
          ],
          mortgage: [
            {
              id: "mashmort1",
              name: "مبادرة التمويل العقاري الجديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "بدون تحويل"
            },
            {
              id: "mashmort2",
              name: "التمويل العقاري لمحدودي الدخل بدون تحويل",
              minAmount: 50000,
              maxAmount: 270000,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 7,
              interestType: "decreasing",
              description: "فائدة 7%",
              conditions: "لمحدودي الدخل"
            }
          ]
        }
        
      },

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
            {
              id: "alb1",
              name: "التمويل الشخصي",
              minAmount: 20000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 17,
              interestType: "decreasing",
              description: "يبدأ من 17% سنوياً",
              conditions: "تمويل شخصي"
            },
            {
              id: "alb2",
              name: "تمويل السيارات الجديدة",
              minAmount: 20000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 16.5,
              interestType: "decreasing",
              description: "يبدأ من حوالي 16.5% سنوياً",
              conditions: "لسيارات جديدة"
            },
            {
              id: "alb3",
              name: "تمويل السيارات المستعملة",
              minAmount: 20000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 17.5,
              interestType: "decreasing",
              description: "يبدأ من حوالي 17.5% سنوياً",
              conditions: "لسيارات مستعملة"
            },
            {
              id: "alb4",
              name: "تمويل مصاريف الخدمات التعليمية",
              minAmount: 20000,
              maxAmount: 250000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 16.25,
              interestType: "decreasing",
              description: "يبدأ من 16.25% سنوياً",
              conditions: "للخدمات التعليمية"
            },
            {
              id: "alb5",
              name: "تمويل اشتراك الاندية",
              minAmount: 20000,
              maxAmount: 200000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 16.5,
              interestType: "decreasing",
              description: "يبدأ من 16.5% سنوياً",
              conditions: "لاشتراكات الأندية"
            },
            {
              id: "alb6",
              name: "تمويل تشطيب وحدات سكنية",
              minAmount: 20000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 6,
              interestRate: 17.5,
              interestType: "decreasing",
              description: "يبدأ من 17.5% سنوياً",
              conditions: "للتشطيب"
            },
            {
              id: "alb7",
              name: "تمويل شراء أثاث منزلي / السلع المعمرة",
              minAmount: 20000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 17,
              interestType: "decreasing",
              description: "عائد تنافسي 17% تقريباً",
              conditions: "لشراء الأثاث والسلع المعمرة"
            },
            {
              id: "alb8",
              name: "تمويل الرحلات السياحية",
              minAmount: 20000,
              maxAmount: 200000,
              minTerm: 12,
              maxTerm: 36,
              interestRate: 16.5,
              interestType: "decreasing",
              description: "تبدأ من 16.5% سنوياً",
              conditions: "للرحلات السياحية"
            }
          ],
          corporate: [
            {
              id: "albcorp1",
              name: "تمويل المشروعات الصغيرة (مبادرة البنك المركزي)",
              minAmount: 50000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 5,
              interestType: "decreasing",
              description: "سعر عائد 5% طبقاً لمبادرة البنك المركزي",
              conditions: "للمشروعات الصغيرة (رأس مال مدفوع 50 ألف إلى 5 مليون للصناعية)"
            },
            {
              id: "albcorp2",
              name: "تمويل المشروعات المتوسطة (مبادرة البنك المركزي)",
              minAmount: 5000000,
              maxAmount: 15000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 8,
              interestType: "decreasing",
              description: "سعر عائد 8% طبقاً لمبادرة البنك المركزي",
              conditions: "للمشروعات المتوسطة (رأس مال مدفوع أكثر من 5 مليون إلى 15 مليون)"
            },
            {
              id: "albcorp3",
              name: "تمويل القطاع الطبي (مبادرة البنك المركزي)",
              minAmount: 250000,
              maxAmount: 25000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 5,
              interestType: "decreasing",
              description: "سعر عائد 5% طبقاً لمبادرة البنك المركزي",
              conditions: "للقطاع الطبي"
            }
          ]
        }
      },
      {
        id: 26,
        name: "البنك الاهلي المصري",
        nameEn: "NBE",
        type: "government",
        logo: "./ASSETS/banks/NBE.jpg",
        branches: "650+ فرع",
        minSalary: 1500,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "nbe1",
              name: "قرض المصريين العاملين بالخارج بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 48,
              interestRate: 15,
              interestType: "decreasing",
              description: "فائدة 15% متناقصة",
              conditions: "للمصريين بالخارج بتحويل مرتب"
            },
            {
              id: "nbe2",
              name: "سداد المديونية بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 16,
              interestType: "decreasing",
              description: "فائدة 16% متناقصة",
              conditions: "بتحويل مرتب"
            },
            {
              id: "nbe3",
              name: "قرض بضمان شهادات",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 18,
              maxTerm: 120,
              interestRate: 2.75,
              interestType: "fixed",
              description: "2% إلى 3.5% + سعر الشهادة",
              conditions: "بضمان شهادات (يصل إلى 90% من قيمة الشهادة)"
            },
            {
              id: "nbe4",
              name: "قرض موظفي البنوك بدون تحويل (7-10 سنوات)",
              minAmount: 50000,
              maxAmount: 700000,
              minTerm: 84,
              maxTerm: 120,
              interestRate: 19.5,
              interestType: "decreasing",
              description: "فائدة 19.5% متناقصة",
              conditions: "لموظفي البنوك بدون تحويل"
            },
            {
              id: "nbe5",
              name: "قرض موظفي البنوك بدون تحويل (حتى 7 سنوات)",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 18.5,
              interestType: "decreasing",
              description: "فائدة 18.5% متناقصة",
              conditions: "لموظفي البنوك بدون تحويل"
            },
            {
              id: "nbe6",
              name: "قرض أصحاب المعاشات بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 21.5,
              interestType: "decreasing",
              description: "يصل إلي 21.5% متناقصة",
              conditions: "لأصحاب المعاشات بتحويل مرتب"
            },
            {
              id: "nbe7",
              name: "قرض الموظفين بدون تحويل",
              minAmount: 50000,
              maxAmount: 700000,
              minTerm: 12,
              maxTerm: 48,
              interestRate: 24.8,
              interestType: "decreasing",
              description: "24% إلى 25.6% متناقصة",
              conditions: "بدون تحويل"
            },
            {
              id: "nbe8",
              name: "قرض موظفين قطاع البترول والغاز بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 21,
              interestType: "decreasing",
              description: "فائدة 21% متناقصة",
              conditions: "لقطاع البترول والغاز بتحويل مرتب"
            },
            {
              id: "nbe9",
              name: "قرض الأطباء بدون تحويل",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 20.5,
              interestType: "decreasing",
              description: "فائدة 20.5% متناقصة",
              conditions: "للأطباء بدون تحويل"
            },
            {
              id: "nbe10",
              name: "قرض أصحاب المهن الحرة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 26.5,
              interestType: "decreasing",
              description: "فائدة 26.5% متناقصة",
              conditions: "لأصحاب المهن الحرة بدون تحويل"
            },
            {
              id: "nbe11",
              name: "قرض موظفين القطاع الخاص بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 23.5,
              interestType: "decreasing",
              description: "فائدة 23.5% متناقصة",
              conditions: "للقطاع الخاص بتحويل مرتب"
            },
            {
              id: "nbe12",
              name: "قرض الموظفين بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 144,
              interestRate: 18.5,
              interestType: "decreasing",
              description: "18.25% إلى 24% متناقصة سنوياً",
              conditions: "بتحويل مرتب"
            }
          ],
          car: [
            {
              id: "nbecar1",
              name: "قرض السيارة لأصحاب المهن الحرة جديدة بدون تحويل",
              minAmount: 20000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 26.25,
              interestType: "decreasing",
              description: "فائدة 26.25% متناقصة",
              conditions: "لأصحاب المهن الحرة"
            },
            {
              id: "nbecar2",
              name: "قرض السيارة المستعملة",
              minAmount: 20000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 3.5,
              interestType: "fixed",
              description: "فائدة 3.5% (مرتفع جدًا، يُرجى مراجعة الدقة)",
              conditions: "لسيارات مستعملة"
            },
            {
              id: "nbecar3",
              name: "قرض السيارة الصينى جديدة تحويل مرتب",
              minAmount: 20000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 48,
              interestRate: 25.25,
              interestType: "decreasing",
              description: "25% إلى 25.5% متناقصة",
              conditions: "للسيارات الصينية بتحويل مرتب"
            },
            {
              id: "nbecar4",
              name: "قرض السيارة تحويل مرتب",
              minAmount: 20000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 23.75,
              interestType: "decreasing",
              description: "23.5% إلى 24% متناقصة",
              conditions: "بتحويل مرتب"
            },
            {
              id: "nbecar5",
              name: "قرض السيارة جديدة تحويل مرتب",
              minAmount: 20000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 25.25,
              interestType: "decreasing",
              description: "25% إلى 25.5% متناقصة",
              conditions: "لسيارة جديدة بتحويل مرتب"
            }
          ],
          corporate: [
            {
              id: "nbecorp1",
              name: "تمويل المشروعات الخدمية والطبية",
              minAmount: 250000,
              maxAmount: 3000000,
              minTerm: 3,
              maxTerm: 6,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "للمشروعات الخدمية والطبية"
            },
            {
              id: "nbecorp2",
              name: "تمويل المشروعات الصناعية الصغيرة والمتوسطة",
              minAmount: 750000,
              maxAmount: 2000000,
              minTerm: 3,
              maxTerm: 6,
              interestRate: 6.5,
              interestType: "decreasing",
              description: "5% إلى 8%",
              conditions: "للصناعات الصغيرة والمتوسطة"
            },
            {
              id: "nbecorp3",
              name: "تمويل المشروعات الزراعية الصغيرة والمتوسطة",
              minAmount: 750000,
              maxAmount: 2000000,
              minTerm: 3,
              maxTerm: 6,
              interestRate: 6.5,
              interestType: "decreasing",
              description: "5% إلى 8%",
              conditions: "للزراعات الصغيرة والمتوسطة"
            },
            {
              id: "nbecorp4",
              name: "المشروعات المتوسطة",
              minAmount: 1000000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 10,
              interestType: "decreasing",
              description: "فائدة 10%",
              conditions: "للمشروعات المتوسطة"
            },
            {
              id: "nbecorp5",
              name: "المشروعات الصغيرة",
              minAmount: 100000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 5,
              interestType: "decreasing",
              description: "يصل إلي 5%",
              conditions: "للمشروعات الصغيرة"
            }
          ],
          mortgage: [
            {
              id: "nbemort1",
              name: "مبادرة التمويل العقاري الجديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "بدون تحويل"
            },
            {
              id: "nbemort2",
              name: "التمويل العقاري لمتوسطي الدخل بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 8,
              interestType: "decreasing",
              description: "فائدة 8%",
              conditions: "لمتوسطي الدخل"
            },
            {
              id: "nbemort3",
              name: "التمويل العقاري لمحدودي الدخل (شريحة جديدة)",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "لمحدودي الدخل"
            },
            {
              id: "nbemort4",
              name: "التمويل العقارى لمحدودي الدخل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 7,
              interestType: "decreasing",
              description: "فائدة 7%",
              conditions: "لمحدودي الدخل"
            },
            {
              id: "nbemort5",
              name: "التمويل العقاري",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 18,
              interestType: "decreasing",
              description: "17.25% إلى 18.75%",
              conditions: "تمويل عقاري"
            }
          ]
        }
      },
      {
        id: 27,
        name: "بنك التعمير و الاسكان",
        nameEn: "HDB",
        type: "government",
        logo: "./ASSETS/banks/HDB.png",
        branches: "40+ فرع",
        minSalary: 1500,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "hdb1",
              name: "سداد المديونية بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 84,
              maxTerm: 144,
              interestRate: 14.5,
              interestType: "decreasing",
              description: "13.5% إلى 16% (حسب الفئة)",
              conditions: "بتحويل مرتب"
            },
            {
              id: "hdb2",
              name: "قرض أصحاب المهن الحرة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 26.5,
              interestType: "decreasing",
              description: "25% إلى 28% متناقصة",
              conditions: "لأصحاب المهن الحرة بدون تحويل"
            },
            {
              id: "hdb3",
              name: "قرض الأطباء بتحويل مرتب",
              minAmount: 3000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 20.5,
              interestType: "decreasing",
              description: "فائدة 20.5% متناقصة",
              conditions: "للأطباء بتحويل مرتب"
            },
            {
              id: "hdb4",
              name: "قرض موظفي القطاع الخاص بدون تحويل",
              minAmount: 15000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 23.75,
              interestType: "decreasing",
              description: "22.5% إلى 25% متناقصة",
              conditions: "للقطاع الخاص بدون تحويل"
            },
            {
              id: "hdb5",
              name: "قرض موظفي القطاع الخاص بتحويل مرتب",
              minAmount: 5000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 25.5,
              interestType: "decreasing",
              description: "24% إلى 27% متناقصة",
              conditions: "للقطاع الخاص بتحويل مرتب"
            },
            {
              id: "hdb6",
              name: "قرض الزفاف للموظفين بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 18,
              interestType: "decreasing",
              description: "فائدة 18% متناقصة",
              conditions: "للزفاف بتحويل مرتب"
            },
            {
              id: "hdb7",
              name: "قرض أصحاب المعاشات بتحويل مرتب",
              minAmount: 3000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 19.5,
              interestType: "decreasing",
              description: "يصل إلي 19.5% متناقصة",
              conditions: "لأصحاب المعاشات بتحويل مرتب"
            },
            {
              id: "hdb8",
              name: "القرض الشخصي للموظفين بدون تحويل",
              minAmount: 15000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 23,
              interestType: "decreasing",
              description: "فائدة 23% متناقصة",
              conditions: "بدون تحويل"
            },
            {
              id: "hdb9",
              name: "القرض الشخصي للموظفين بتحويل مرتب",
              minAmount: 3000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 144,
              interestRate: 20.25,
              interestType: "decreasing",
              description: "20% إلى 20.5% متناقصة",
              conditions: "بتحويل مرتب"
            }
          ],
          car: [
            {
              id: "hdbcar1",
              name: "قرض السيارة جديدة تحويل مرتب",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 17.75,
              interestType: "decreasing",
              description: "14% إلى 19.5% متناقصة (حسب المقدم)",
              conditions: "بتحويل مرتب"
            }
          ],
          corporate: [
            {
              id: "hdbcorp1",
              name: "تمويل المشروعات المتوسطة",
              minAmount: 5000000,
              maxAmount: 15000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 7,
              interestType: "decreasing",
              description: "يصل إلى 7%",
              conditions: "للمشروعات المتوسطة"
            },
            {
              id: "hdbcorp2",
              name: "تمويل المشروعات الصغيرة",
              minAmount: 50000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 5,
              interestType: "decreasing",
              description: "يصل إلي 5%",
              conditions: "للمشروعات الصغيرة"
            }
          ],
          mortgage: [
            {
              id: "hdbmort1",
              name: "مبادرة التمويل العقاري الجديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "بدون تحويل (يصل إلي 90% من قيمة الوحدة)"
            },
            {
              id: "hdbmort2",
              name: "التمويل العقارى لمتوسطي الدخل بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 8,
              interestType: "decreasing",
              description: "فائدة 8%",
              conditions: "لمتوسطي الدخل (يصل إلي 80% من قيمة الوحدة)"
            },
            {
              id: "hdbmort3",
              name: "التمويل العقاري تحويل مرتب",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 14.5,
              interestType: "decreasing",
              description: "14% إلى 15%",
              conditions: "بتحويل مرتب (يصل إلي 80% من قيمة الوحدة)"
            }
          ]
        }
      },
      {
        id: 28,
        name: "بنك QNB",
        nameEn: "QNB",
        type: "private",
        logo: "./ASSETS/banks/QNB.jpg",
        branches: "200+ فرع",
        minSalary: 2000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "qnb1",
              name: "قرض العاملين بقطاع البترول بدون تحويل",
              minAmount: 15000,
              maxAmount: 15000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 26.75,
              interestType: "decreasing",
              description: "يصل إلي 26.75%",
              conditions: "لقطاع البترول بدون تحويل"
            },
            {
              id: "qnb2",
              name: "قرض العاملين بقطاع البترول بتحويل مرتب",
              minAmount: 15000,
              maxAmount: 15000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 25.5,
              interestType: "decreasing",
              description: "يصل إلي 25.5%",
              conditions: "لقطاع البترول بتحويل مرتب"
            },
            {
              id: "qnb3",
              name: "قرض بضمان تحويل ايجار وحدة تجارية",
              minAmount: 100000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 30.5,
              interestType: "decreasing",
              description: "30% إلى 31%",
              conditions: "بضمان إيجار وحدة تجارية"
            },
            {
              id: "qnb4",
              name: "قرض الأطباء بدون تحويل",
              minAmount: 50000,
              maxAmount: 1200000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 31.5,
              interestType: "decreasing",
              description: "فائدة 31.5%",
              conditions: "للأطباء بدون تحويل"
            },
            {
              id: "qnb5",
              name: "قرض الأطباء بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 1200000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 31.5,
              interestType: "decreasing",
              description: "فائدة 31.5%",
              conditions: "للأطباء بتحويل مرتب"
            },
            {
              id: "qnb6",
              name: "قرض الطاقة الشمسية بدون تحويل",
              minAmount: 100000,
              maxAmount: 400000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 25.5,
              interestType: "decreasing",
              description: "فائدة 25.5%",
              conditions: "للطاقة الشمسية بدون تحويل"
            },
            {
              id: "qnb7",
              name: "قرض الطاقة الشمسية بتحويل مرتب",
              minAmount: 100000,
              maxAmount: 400000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24.75,
              interestType: "decreasing",
              description: "24.5% إلى 25%",
              conditions: "للطاقة الشمسية بتحويل مرتب"
            },
            {
              id: "qnb8",
              name: "قروض المهن الحرة بدون تحويل",
              minAmount: 50000,
              maxAmount: 100000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 27.25,
              interestType: "decreasing",
              description: "فائدة 27.25%",
              conditions: "للمهن الحرة بدون تحويل"
            },
            {
              id: "qnb9",
              name: "قرض السلع المعمرة للمهن الحرة بدون تحويل",
              minAmount: 5000,
              maxAmount: 150000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 25.5,
              interestType: "decreasing",
              description: "فائدة 25.5%",
              conditions: "للمهن الحرة"
            },
            {
              id: "qnb10",
              name: "قرض إكسبريس بتحويل مرتب",
              minAmount: 5000,
              maxAmount: 100000,
              minTerm: 12,
              maxTerm: 48,
              interestRate: 26.5,
              interestType: "decreasing",
              description: "فائدة 26.5%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "qnb11",
              name: "قرض السلع المعمرة للموظفين بتحويل مرتب",
              minAmount: 5000,
              maxAmount: 150000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 24.5,
              interestType: "decreasing",
              description: "فائدة 24.5%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "qnb12",
              name: "القرض الشخصي بضمان وعاء ادخاري",
              minAmount: 5000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 3.5,
              interestType: "fixed",
              description: "3.5% فوق العائد",
              conditions: "بضمان وعاء ادخاري (يصل إلى 90% من قيمة الوعاء)"
            },
            {
              id: "qnb13",
              name: "القرض الشخصي بدون تحويل الراتب",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 60,
              maxTerm: 84,
              interestRate: 26.8,
              interestType: "decreasing",
              description: "فائدة 26.8%",
              conditions: "بدون تحويل"
            },
            {
              id: "qnb14",
              name: "القرض الشخصي بتحويل الراتب",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 60,
              maxTerm: 84,
              interestRate: 25.5,
              interestType: "decreasing",
              description: "25.5% إلى 25.5%",
              conditions: "بتحويل راتب"
            }
          ],
          car: [
            {
              id: "qnbcar1",
              name: "قرض الاسكوتر لأصحاب المهن الحرة جديدة بدون تحويل",
              minAmount: 1000,
              maxAmount: 100000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 24,
              interestType: "decreasing",
              description: "فائدة 24%",
              conditions: "للمهن الحرة"
            },
            {
              id: "qnbcar2",
              name: "قرض السيارة لأصحاب المهن الحرة مستعملة بدون تحويل",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 34,
              interestType: "decreasing",
              description: "فائدة 34%",
              conditions: "للمهن الحرة"
            },
            {
              id: "qnbcar3",
              name: "قرض السيارة للموظفين جديدة بدون تحويل",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 33.5,
              interestType: "decreasing",
              description: "فائدة 33.5%",
              conditions: "للموظفين"
            },
            {
              id: "qnbcar4",
              name: "قرض السيارة المستعملة تحويل مرتب",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 23.75,
              interestType: "decreasing",
              description: "فائدة 23.75%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "qnbcar5",
              name: "قرض الاسكوتر جديدة تحويل مرتب",
              minAmount: 10000,
              maxAmount: 100000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 24,
              interestType: "decreasing",
              description: "فائدة 24%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "qnbcar6",
              name: "قرض السيارة لأصحاب المهن الحرة جديدة بدون تحويل (34%)",
              minAmount: 50000,
              maxAmount: 400000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 34,
              interestType: "decreasing",
              description: "فائدة 34%",
              conditions: "للمهن الحرة"
            },
            {
              id: "qnbcar7",
              name: "قرض السيارة للموظفين جديدة تحويل مرتب",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 33,
              interestType: "decreasing",
              description: "فائدة 33%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "qnbcar8",
              name: "قرض السيارة المستعملة بدون تحويل",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 24.5,
              interestType: "decreasing",
              description: "فائدة 24.5%",
              conditions: "بدون تحويل"
            }
          ],
          corporate: [
            {
              id: "qnbcorp1",
              name: "الشركات والمنشأت المتوسطة",
              minAmount: 1000000,
              maxAmount: 40000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 7,
              interestType: "decreasing",
              description: "فائدة 7%",
              conditions: "للمنشآت المتوسطة"
            },
            {
              id: "qnbcorp2",
              name: "الشركات والمنشأت الصغيرة",
              minAmount: 100000,
              maxAmount: 6000000,
              minTerm: 12,
              maxTerm: 12,
              interestRate: 5,
              interestType: "decreasing",
              description: "فائدة 5%",
              conditions: "للمنشآت الصغيرة"
            },
            {
              id: "qnbcorp3",
              name: "المشروعات الصغيرة والمتوسطة",
              minAmount: 100000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 12,
              interestRate: 16,
              interestType: "decreasing",
              description: "فائدة 16%",
              conditions: "تمويل رأس المال العامل (يصل إلى 20% من المبيعات)"
            }
          ],
          mortgage: [
            {
              id: "qnbmort1",
              name: "قرض التمويل العقاري",
              minAmount: 50000,
              maxAmount: 10000000,
              minTerm: 12,
              maxTerm: 240,
              interestRate: 5.85,
              interestType: "decreasing",
              description: "يصل إلي 5.85%",
              conditions: "تمويل عقاري"
            },
            {
              id: "qnbmort2",
              name: "مبادرة البنك المركزي بدون تحويل",
              minAmount: 50000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 360,
              interestRate: 3,
              interestType: "decreasing",
              description: "فائدة 3%",
              conditions: "بدون تحويل (يصل إلى 90% من قيمة الوحدة)"
            },
            {
              id: "qnbmort3",
              name: "قرض تشطيب الوحدات بدون تحويل",
              minAmount: 50000,
              maxAmount: 250000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 15.5,
              interestType: "decreasing",
              description: "فائدة 15.5%",
              conditions: "للتشطيب"
            },
            {
              id: "qnbmort4",
              name: "قرض التمويل العقاري بدون تحويل",
              minAmount: 50000,
              maxAmount: 7000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 18.25,
              interestType: "decreasing",
              description: "فائدة 18.25%",
              conditions: "تمويل عقاري"
            },
            {
              id: "qnbmort5",
              name: "قرض التمويل العقاري تحويل مرتب",
              minAmount: 50000,
              maxAmount: 7000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 18.25,
              interestType: "decreasing",
              description: "فائدة 18.25%",
              conditions: "بتحويل مرتب"
            }
          ]
        }
      },
      {
        id: 29,
        name: "البنك الاهلي الكويتي",
        nameEn: "ABK",
        type: "private",
        logo: "./ASSETS/banks/ABK.png",
        branches: "40+ فرع",
        minSalary: 2000,
        onlineAvailable: true,
        loanCategories: {
          personal: [
            {
              id: "abk1",
              name: "قرض بضمان بطاقة ائتمان",
              minAmount: 50000,
              maxAmount: 400000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 25,
              interestType: "decreasing",
              description: "فائدة 25%",
              conditions: "بضمان بطاقة ائتمان"
            },
            {
              id: "abk2",
              name: "قرض بضمان وحدة في كمبوند",
              minAmount: 50000,
              maxAmount: 1500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 23.75,
              interestType: "decreasing",
              description: "فائدة 23.75%",
              conditions: "بضمان وحدة في كمبوند"
            },
            {
              id: "abk3",
              name: "قرض سداد المديونية بدون تحويل راتب",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "بدون تحويل"
            },
            {
              id: "abk4",
              name: "قرض سداد المديونية بتحويل راتب",
              minAmount: 50000,
              maxAmount: 1000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "بتحويل راتب"
            },
            {
              id: "abk5",
              name: "قرض لأساتذة الجامعات بدون تحويل",
              minAmount: 50000,
              maxAmount: 400000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 26,
              interestType: "decreasing",
              description: "فائدة 26%",
              conditions: "لأساتذة الجامعات"
            },
            {
              id: "abk6",
              name: "قرض لاعبي كرة القدم بدون تحويل",
              minAmount: 50000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 32,
              interestType: "decreasing",
              description: "فائدة 32%",
              conditions: "للاعبي كرة القدم"
            },
            {
              id: "abk7",
              name: "قرض الموظفين بدون تحويل",
              minAmount: 15000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 20,
              interestType: "decreasing",
              description: "18.5% (لعملاء البنك) إلى 20%",
              conditions: "بدون تحويل"
            },
            {
              id: "abk8",
              name: "قرض الموظفين بتحويل مرتب",
              minAmount: 15000,
              maxAmount: 2000000,
              minTerm: 12,
              maxTerm: 96,
              interestRate: 18.5,
              interestType: "decreasing",
              description: "فائدة 18.5%",
              conditions: "بتحويل مرتب"
            },
            {
              id: "abk9",
              name: "تمويل الصيادلة بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 400000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 25,
              interestType: "decreasing",
              description: "فائدة 25%",
              conditions: "للصيادلة"
            },
            {
              id: "abk10",
              name: "قرض بضمان وعاء ادخاری",
              minAmount: 50000,
              maxAmount: 5000000,
              minTerm: 12,
              maxTerm: 120,
              interestRate: 3,
              interestType: "fixed",
              description: "3% + سعر العائد على الوعاء الادخاري",
              conditions: "بضمان وعاء ادخاري"
            },
            {
              id: "abk11",
              name: "تمويل عضويات الأندية بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 25.5,
              interestType: "decreasing",
              description: "فائدة 25.5%",
              conditions: "لعضوية الأندية"
            },
            {
              id: "abk12",
              name: "الأطباء وأطباء الأسنان بدون تحويل",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 26,
              interestType: "decreasing",
              description: "فائدة 26%",
              conditions: "للأطباء"
            },
            {
              id: "abk13",
              name: "قرض أصحاب المهن الحرة بدون تحويل",
              minAmount: 50000,
              maxAmount: 750000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 25,
              interestType: "decreasing",
              description: "فائدة 25%",
              conditions: "لأصحاب المهن الحرة"
            },
            {
              id: "abk14",
              name: "تمويل موظفي البنوك بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 4000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 19.75,
              interestType: "decreasing",
              description: "فائدة 19.75%",
              conditions: "لموظفي البنوك"
            },
            {
              id: "abk15",
              name: "المعاشات بتحويل مرتب",
              minAmount: 15000,
              maxAmount: 150000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "لأصحاب المعاشات"
            },
            {
              id: "abk16",
              name: "تمويل التعليم بتحويل مرتب",
              minAmount: 15000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 12,
              interestRate: 25,
              interestType: "decreasing",
              description: "فائدة 25%",
              conditions: "للتعليم"
            },
            {
              id: "abk17",
              name: "التمويل الشخصي بتحويل مرتب",
              minAmount: 15000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 180,
              interestRate: 20.5,
              interestType: "decreasing",
              description: "فائدة 20.5%",
              conditions: "بتحويل مرتب"
            }
          ],
          car: [
            {
              id: "abkcar1",
              name: "قرض السيارة جديدة بدون تحويل (22%)",
              minAmount: 50000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 22,
              interestType: "decreasing",
              description: "فائدة 22%",
              conditions: "بدون تحويل (مقدم 70%)"
            },
            {
              id: "abkcar2",
              name: "قرض السيارة جديدة بدون تحويل (20%)",
              minAmount: 50000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 20,
              interestType: "decreasing",
              description: "فائدة 20%",
              conditions: "بدون تحويل"
            },
            {
              id: "abkcar3",
              name: "قرض السيارة جديدة بدون تحويل (21%)",
              minAmount: 50000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 21,
              interestType: "decreasing",
              description: "فائدة 21%",
              conditions: "بدون تحويل"
            },
            {
              id: "abkcar4",
              name: "قرض السيارة جديدة بدون تحويل (24%)",
              minAmount: 50000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 24,
              interestType: "decreasing",
              description: "فائدة 24%",
              conditions: "بدون تحويل"
            },
            {
              id: "abkcar5",
              name: "قرض السيارة جديدة بدون تحويل (26.5%)",
              minAmount: 50000,
              maxAmount: 6000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 26.5,
              interestType: "decreasing",
              description: "فائدة 26.5%",
              conditions: "بدون تحويل"
            },
            {
              id: "abkcar6",
              name: "قرض السيارة جديدة تحويل مرتب",
              minAmount: 50000,
              maxAmount: 6000000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 26.5,
              interestType: "decreasing",
              description: "فائدة 26.5%",
              conditions: "بتحويل مرتب"
            }
          ]
        }
      },
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
            {
              id: "kfh1",
              name: "قرض التعليم بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 300000,
              minTerm: 12,
              maxTerm: 72,
              interestRate: 18,
              interestType: "decreasing",
              description: "فائدة 18%",
              conditions: "للتعليم"
            },
            {
              id: "kfh2",
              name: "قرض موظفي البنوك بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 3000000,
              minTerm: 12,
              maxTerm: 144,
              interestRate: 20.75,
              interestType: "decreasing",
              description: "20% إلى 21.5% (حسب المدة)",
              conditions: "لموظفي البنوك"
            },
            {
              id: "kfh3",
              name: "قرض الأندية بتحويل مرتب",
              minAmount: 50000,
              maxAmount: 300000,
              minTerm: 12,
              maxTerm: 84,
              interestRate: 19,
              interestType: "decreasing",
              description: "فائدة 19%",
              conditions: "للأندية"
            },
            {
              id: "kfh4",
              name: "القرض النقدي بضمان وعاء ادخاري",
              minAmount: 10000,
              maxAmount: 0,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 2.5,
              interestType: "fixed",
              description: "2.5% + سعر العائد على الوعاء",
              conditions: "بضمان وعاء ادخاري (يصل إلى 90% من قيمة الوعاء)"
            },
            {
              id: "kfh5",
              name: "قرض الموظفين بتحويل مرتب",
              minAmount: 10000,
              maxAmount: 500000,
              minTerm: 12,
              maxTerm: 60,
              interestRate: 16.75,
              interestType: "decreasing",
              description: "16.5% إلى 17%",
              conditions: "بتحويل مرتب"
            }
          ],
          car: [
            {
              id: "kfhcar1",
              name: "قرض السيارة الكهربائية جديدة",
              minAmount: 50000,
              maxAmount: 2000000,
              minTerm: 24,
              maxTerm: 84,
              interestRate: 16.5,
              interestType: "decreasing",
              description: "يبدأ من 16.5% سنوياً",
              conditions: "لسيارة كهربائية جديدة"
            }
          ]
        }
      }
      // ==================== نهاية البيانات الجديدة ====================
      
    ];
 
// دالة تحميل البيانات من IndexedDB
async function loadBanksFromDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('BanksDatabase', 1);
    
    request.onerror = () => {
      console.error('Error opening DB, using default data');
      resolve(JSON.parse(JSON.stringify(completeBanksData)));
    };
    
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['banks'], 'readonly');
      const store = transaction.objectStore('banks');
      const getRequest = store.getAll();
      
      getRequest.onsuccess = () => {
        const data = getRequest.result;
        if (data && data.length > 0) {
          resolve(data);
        } else {
          // لا توجد بيانات في DB، نستخدم الافتراضية
          resolve(JSON.parse(JSON.stringify(completeBanksData)));
        }
      };
      
      getRequest.onerror = () => {
        resolve(JSON.parse(JSON.stringify(completeBanksData)));
      };
    };
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('banks')) {
        db.createObjectStore('banks', { keyPath: 'id' });
      }
    };
  });
}

// دالة حفظ البيانات في IndexedDB
async function saveBanksToDB(data) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('BanksDatabase', 1);
    
    request.onerror = () => reject(request.error);
    
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['banks'], 'readwrite');
      const store = transaction.objectStore('banks');
      
      // مسح البيانات القديمة
      store.clear();
      
      // إضافة البيانات الجديدة
      data.forEach(bank => {
        store.add(bank);
      });
      
      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    };
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('banks')) {
        db.createObjectStore('banks', { keyPath: 'id' });
      }
    };
  });
}

// تهيئة قاعدة البيانات بالبيانات الافتراضية إذا كانت فارغة
async function initializeDatabase() {
  try {
    const data = await loadBanksFromDB();
    if (data.length === 0 || JSON.stringify(data) === JSON.stringify(completeBanksData)) {
      await saveBanksToDB(completeBanksData);
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

// تنفيذ التهيئة عند تحميل الملف
initializeDatabase();

// جعل الدوال والبيانات متاحة عالمياً
window.completeBanksData = completeBanksData;
window.loadBanksFromDB = loadBanksFromDB;
window.saveBanksToDB = saveBanksToDB;
window.initializeDatabase = initializeDatabase;