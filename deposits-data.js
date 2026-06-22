// deposit-data.js
// بيانات شاملة لـ 29 بنكًا مصريًا مع كافة تفاصيل الودائع
// تم تحديث البيانات بالكامل لتطابق المعلومات المقدمة من الملف النصي الأصلي

const completeDepositBanksData = [

  // ================= 1. بنك القاهرة =================
  {
    "id": 1,
    "name": "بنك القاهرة",
    "nameEn": "Bank of Cairo",
    "logo": "./ASSETS/banks/BDC.png",
    "type": "government",
    "safetyIndex": 88,
    "branches": 250,
    "onlineAvailable": true,
    "contactPhone": "19888",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة لأجل ذات العائد الدوري - 3 شهور (جنيه)",
          "minAmount": 10000,
          "maxAmount": 0,
          "interestRates": 14.25,
          "durations": [3],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "خصم العوائد المنصرفة",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل ذات العائد الدوري - 6 شهور (جنيه)",
          "minAmount": 10000,
          "maxAmount": 0,
          "interestRates": 14.0,
          "durations": [6],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "خصم العوائد المنصرفة",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل ذات العائد الدوري (جنيه) - ممددة",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": {
            "1-2years_monthly": 4.25, "1-2years_quarterly": 4.35, "1-2years_semiAnnual": 4.45,
            "2-3years_monthly": 5.0, "2-3years_quarterly": 5.1, "2-3years_semiAnnual": 5.2,
            "3-5years_monthly": 5.25, "3-5years_quarterly": 5.35, "3-5years_semiAnnual": 5.45,
            "5-7years_monthly": 5.5, "5-7years_quarterly": 5.6, "5-7years_semiAnnual": 5.7
          },
          "durations": [12, 24, 36, 48, 60, 72, 84],
          "returnType": ["monthly", "quarterly", "semiAnnual"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "خصم العوائد المنصرفة",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل ذات العائد الدوري (دولار)",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": {
            "13-24months_monthly": 0.5, "13-24months_quarterly": 0.6, "13-24months_semiAnnual": 0.8, "13-24months_annual": 0.9,
            "25-36months_monthly": 0.75, "25-36months_quarterly": 0.85, "25-36months_semiAnnual": 0.95, "25-36months_annual": 1.0
          },
          "durations": [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
          "returnType": ["monthly", "quarterly", "semiAnnual", "annual"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "خصم اجمالي العوائد المنصرفه",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة ثابتة لأجل (جنيه) - عائد الاستحقاق",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "7days": 2.75, "15days": 3.0, "1month": 4.5, "2months": 4.5, "3months": 4.75, "6months": 4.75, "1year": 5.0 },
          "durations": [0.25, 0.5, 1, 2, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "لا عائد للعملات الأجنبية",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة ثابتة 3 شهور (دولار) - مبلغ كبير",
          "minAmount": 50000,
          "maxAmount": 0,
          "interestRates": 3.25,
          "durations": [3],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "لا يتم احتساب عائد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل (دولار) - شرائح",
          "minAmount": 500,
          "maxAmount": 0,
          "interestRates": {
            "weekly": { "500-25000": 0.01, "25001-100000": 0.03, "100001-250000": 0.03, "250000+": 0.06 },
            "monthly": { "500-25000": 0.06, "25001-100000": 0.08, "100001-250000": 0.09, "250000+": 0.11 },
            "yearly": { "500-25000": 0.32, "25001-100000": 0.34, "100001-250000": 0.35, "250000+": 0.37 }
          },
          "durations": [0.25, 1, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "لا عائد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة ذات العائد المقدم (جنيه) - أفراد وشركات",
          "minAmount": 100000,
          "maxAmount": 0,
          "interestRates": { "1month": 15.4, "3months": 13.75, "6months": 13.25, "9months": 13.0, "1year": 11.5 },
          "durations": [1, 3, 6, 9, 12],
          "returnType": ["advance"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة ذات العائد المقدم (جنيه) - أفراد فقط",
          "minAmount": 300000,
          "maxAmount": 0,
          "interestRates": { "3months": 7.5, "6months": 8.5, "1year": 9.0 },
          "durations": [3, 6, 12],
          "returnType": ["advance"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 2. بنك التنمية الصناعية =================
  {
    "id": 2,
    "name": "بنك التنمية الصناعية",
    "nameEn": "Industrial Development Bank",
    "logo": "./ASSETS/banks/IDB.png",
    "type": "government",
    "safetyIndex": 85,
    "branches": 50,
    "onlineAvailable": false,
    "contactPhone": "19022",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة لأجل (جنيه) - أسبوع",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "1000-1500000": 4.88, "1500000+": 6.2 },
          "durations": [0.25],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب قواعد الاسترداد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل (جنيه) - شهر",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "1000-1500000": 5.75, "1500000+": 6.0 },
          "durations": [1],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب قواعد الاسترداد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل (جنيه) - 3 شهور",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "1000-1500000": 5.0, "1500000+": 5.25 },
          "durations": [3],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب قواعد الاسترداد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل (جنيه) - 6 شهور",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "1000-1500000": 5.0, "1500000+": 5.25 },
          "durations": [6],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب قواعد الاسترداد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل (جنيه) - سنة",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "1000-1500000": 5.25, "1500000+": 5.0 },
          "durations": [12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب قواعد الاسترداد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة أسبوعية دولارية",
          "minAmount": 2000,
          "maxAmount": 0,
          "interestRates": { "2000-25000": 0.25, "25000-100000": 0.31, "100000+": 0.37 },
          "durations": [0.25],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب قواعد الاسترداد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة شهرية دولارية",
          "minAmount": 2000,
          "maxAmount": 0,
          "interestRates": { "2000-25000": 0.31, "25000-100000": 0.37, "100000+": 0.43 },
          "durations": [1],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب قواعد الاسترداد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة 3 شهور دولارية",
          "minAmount": 2000,
          "maxAmount": 0,
          "interestRates": { "2000-25000": 0.37, "25000-100000": 0.43, "100000+": 0.5 },
          "durations": [3],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب قواعد الاسترداد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة 6 شهور دولارية",
          "minAmount": 2000,
          "maxAmount": 0,
          "interestRates": { "2000-25000": 0.43, "25000-100000": 0.5, "100000+": 0.56 },
          "durations": [6],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب قواعد الاسترداد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة سنوية دولارية",
          "minAmount": 2000,
          "maxAmount": 0,
          "interestRates": { "2000-25000": 0.56, "25000-100000": 0.61, "100000+": 0.75 },
          "durations": [12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب قواعد الاسترداد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 3. المصرف العربي =================
  {
    "id": 3,
    "name": "المصرف العربي",
    "nameEn": "Al Ahli Bank",
    "logo": "./ASSETS/banks/AIB.png",
    "type": "private",
    "safetyIndex": 87,
    "branches": 280,
    "onlineAvailable": true,
    "contactPhone": "19449",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة شهرية",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "5000-100000": 6.5, "100000-500000": 7.0, "500000-1000000": 7.5, "1000000+": 8.0 },
          "durations": [1],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة 3 أشهر",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "5000-100000": 6.75, "100000-500000": 7.25, "500000-1000000": 7.75, "1000000+": 8.25 },
          "durations": [3],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة 6 أشهر",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "5000-100000": 7.0, "100000-500000": 7.5, "500000-1000000": 8.0, "1000000+": 8.25 },
          "durations": [6],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة سنوية",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "5000-100000": 7.625, "100000-500000": 8.125, "500000-1000000": 8.625, "1000000+": 8.125 },
          "durations": [12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية - 7 أيام",
          "minAmount": 3000,
          "maxAmount": 0,
          "interestRates": 0.14,
          "durations": [0.25],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية - شهر",
          "minAmount": 3000,
          "maxAmount": 0,
          "interestRates": 0.25,
          "durations": [1],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية - شهرين",
          "minAmount": 3000,
          "maxAmount": 0,
          "interestRates": 0.25,
          "durations": [2],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية - 3 شهور",
          "minAmount": 3000,
          "maxAmount": 0,
          "interestRates": 0.55,
          "durations": [3],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية - 6 أشهر",
          "minAmount": 3000,
          "maxAmount": 0,
          "interestRates": 0.75,
          "durations": [6],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية - 9 أشهر",
          "minAmount": 3000,
          "maxAmount": 0,
          "interestRates": 1.4,
          "durations": [9],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية - سنة",
          "minAmount": 3000,
          "maxAmount": 0,
          "interestRates": 1.5,
          "durations": [12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 4. بنك الإسكندرية =================
  {
    "id": 4,
    "name": "بنك الإسكندرية",
    "nameEn": "AlexBank",
    "logo": "./ASSETS/banks/ALEX.png",
    "type": "private",
    "safetyIndex": 86,
    "branches": 200,
    "onlineAvailable": true,
    "contactPhone": "19999",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة قصيرة الأجل (جنيه)",
          "minAmount": 100,
          "maxAmount": 0,
          "interestRates": { "1week": 3.0, "2weeks": 4.0, "1month": 6.75, "3months": 6.75, "6months": 7.0, "9months": 7.0, "1year": 7.0 },
          "durations": [0.25, 0.5, 1, 3, 6, 9, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "خصم 3% من العائد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة قصيرة الأجل (عملات أجنبية)",
          "minAmount": 100,
          "maxAmount": 0,
          "interestRates": { "1week": 3.0, "2weeks": 4.0, "1month": 6.75, "3months": 6.75, "6months": 7.0, "9months": 7.0, "1year": 7.0, "2years": 7.0 },
          "durations": [0.25, 0.5, 1, 3, 6, 9, 12, 24],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "خصم 3% من العائد المطبق علي الفئة المنقضية",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 5. بنك قناة السويس =================
  {
    "id": 5,
    "name": "بنك قناة السويس",
    "nameEn": "Suez Canal Bank",
    "logo": "./ASSETS/banks/SCB.jpg",
    "type": "private",
    "safetyIndex": 84,
    "branches": 60,
    "onlineAvailable": true,
    "contactPhone": "19149",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة لأجل (جنيه) - أفراد وشركات",
          "minAmount": 2000,
          "maxAmount": 0,
          "interestRates": { "1week": 8.75, "1month": 11.25, "3months": 11.75, "6months": 11.25, "1year": 11.75 },
          "durations": [0.25, 1, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية - أفراد وشركات",
          "minAmount": 100,
          "maxAmount": 0,
          "interestRates": {
            "100-49999": { "1week": 2.35, "1month": 2.36406, "2months": 2.31406, "3months": 1.85534, "6months": 1.79801, "1year": 1.14086 },
            "50000-149999": { "1week": 2.40, "1month": 2.41406, "2months": 2.36406, "3months": 1.90534, "6months": 1.84801, "1year": 1.19086 },
            "150000-299999": { "1week": 2.45, "1month": 2.46406, "2months": 2.41406, "3months": 1.95534, "6months": 1.89801, "1year": 1.24086 },
            "300000-499999": { "1week": 2.50, "1month": 2.51406, "2months": 2.46406, "3months": 2.00534, "6months": 1.94801, "1year": 1.29086 },
            "500000+": { "1week": 2.55, "1month": 2.56406, "2months": 2.51406, "3months": 2.05534, "6months": 1.99801, "1year": 1.34086 }
          },
          "durations": [0.25, 1, 2, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة ذات العائد المدفوع مقدماً (جنيه)",
          "minAmount": 100000,
          "maxAmount": 0,
          "interestRates": { "6months": 12.0, "1year": 11.75 },
          "durations": [6, 12],
          "returnType": ["advance"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة ذات العائد المدفوع مقدماً (دولار)",
          "minAmount": 10000,
          "maxAmount": 0,
          "interestRates": { "1month": 3.5, "3months": 3.4, "6months": 3.25, "1year": 3.15 },
          "durations": [1, 3, 6, 12],
          "returnType": ["advance"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "صكوك الودائع المتغيرة بالجنيه (بصيغة الوكالة) - شرائح",
          "minAmount": 10000,
          "maxAmount": 0,
          "interestRates": {
            "lessThan100k": { "1week": 10.88, "2weeks": 10.88, "1month": 13.38, "2months": 13.38, "3months": 13.88, "6months": 11.38, "9months": 11.38, "1year": 11.88 },
            "100k-500k": { "1week": 10.88, "2weeks": 10.88, "1month": 13.38, "2months": 13.38, "3months": 13.88, "6months": 12.38, "9months": 12.38, "1year": 12.88 },
            "500k-1M": { "1week": 10.88, "2weeks": 10.88, "1month": 13.38, "2months": 13.38, "3months": 13.88, "6months": 13.38, "9months": 13.38, "1year": 13.88 },
            "1M-5M": { "1week": 10.88, "2weeks": 10.88, "1month": 13.38, "2months": 13.38, "3months": 13.88, "6months": 13.88, "9months": 13.88, "1year": 14.38 },
            "5M-10M": { "1week": 10.88, "2weeks": 10.88, "1month": 13.38, "2months": 13.38, "3months": 13.88, "6months": 14.38, "9months": 14.38, "1year": 14.88 },
            "10M+": { "1week": 10.88, "2weeks": 10.88, "1month": 13.38, "2months": 13.38, "3months": 13.88, "6months": 14.88, "9months": 14.88, "1year": 15.38 }
          },
          "durations": [0.25, 0.5, 1, 2, 3, 6, 9, 12],
          "returnType": ["monthly", "quarterly", "semiAnnual", "annual"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "صكوك الودائع بالجنيه (بصيغة الوكالة)",
          "minAmount": 2000,
          "maxAmount": 0,
          "interestRates": { "weekly": 6.75, "monthly": 10.25, "quarterly": 10.75, "semiAnnual": 11.25, "annual": 11.75 },
          "durations": [0.25, 1, 3, 6, 12],
          "returnType": ["monthly", "quarterly", "semiAnnual", "annual"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "صكوك الودائع بالدولار (بصيغة الوكالة)",
          "minAmount": 100,
          "maxAmount": 0,
          "interestRates": {
            "100-49999": { "monthly": 2.37, "quarterly": 1.86, "semiAnnual": 1.82, "annual": 1.20 },
            "50000-149999": { "monthly": 2.42, "quarterly": 1.91, "semiAnnual": 1.87, "annual": 1.25 },
            "150000-299999": { "monthly": 2.47, "quarterly": 1.96, "semiAnnual": 1.92, "annual": 1.30 },
            "300000-499999": { "monthly": 2.52, "quarterly": 2.01, "semiAnnual": 1.97, "annual": 1.35 },
            "500000+": { "monthly": 2.57, "quarterly": 2.06, "semiAnnual": 2.02, "annual": 1.40 }
          },
          "durations": [1, 3, 6, 12],
          "returnType": ["monthly", "quarterly", "semiAnnual", "annual"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 6. CIB =================
  {
    "id": 6,
    "name": "CIB",
    "nameEn": "Commercial International Bank",
    "logo": "./ASSETS/banks/CIB.png",
    "type": "private",
    "safetyIndex": 92,
    "branches": 200,
    "onlineAvailable": true,
    "contactPhone": "19666",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة لأجل - برايم (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "1week": 4.25, "1month": 5.0, "2months": 5.25, "3months": 5.5, "6months_maturity": 5.75, "1year_monthly": 7.5, "1year_maturity": 8.0, "2years_monthly": 10.5 },
          "durations": [0.25, 1, 2, 3, 6, 12, 24],
          "returnType": ["monthly", "maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل - بلس (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "1week": 4.75, "1month": 8.0, "2months": 8.25, "3months": 8.5, "6months_maturity": 8.75, "1year_monthly": 8.5, "1year_maturity": 9.0, "2years_monthly": 11.0 },
          "durations": [0.25, 1, 2, 3, 6, 12, 24],
          "returnType": ["monthly", "maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل - ويلث (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "1week": 6.75, "1month": 11.0, "2months": 11.25, "3months": 11.5, "6months_maturity": 11.75, "1year_monthly": 11.5, "1year_maturity": 12.0, "2years_monthly": 11.5 },
          "durations": [0.25, 1, 2, 3, 6, 12, 24],
          "returnType": ["monthly", "maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل - إكسكلوسيف ويلث (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "1week": 7.25, "1month": 11.5, "2months": 11.75, "3months": 12.0, "6months_maturity": 12.25, "1year_monthly": 12.0, "1year_maturity": 12.5, "2years_monthly": 12.0 },
          "durations": [0.25, 1, 2, 3, 6, 12, 24],
          "returnType": ["monthly", "maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل - برايفت (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "1week": 8.25, "1month": 12.0, "2months": 12.25, "3months": 12.5, "6months_maturity": 12.75, "1year_monthly": 12.5, "1year_maturity": 13.0, "2years_monthly": 12.5 },
          "durations": [0.25, 1, 2, 3, 6, 12, 24],
          "returnType": ["monthly", "maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل - كبار السن (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": {
            "Prime": { "1week": 4.5, "1month": 5.25, "2months": 5.5, "3months": 5.75, "6months_maturity": 6.0, "1year_monthly": 7.75, "1year_maturity": 8.25, "2years_monthly": 10.75 },
            "Plus": { "1week": 5.0, "1month": 8.25, "2months": 8.5, "3months": 8.75, "6months_maturity": 9.0, "1year_monthly": 8.75, "1year_maturity": 9.75, "2years_monthly": 11.25 },
            "Wealth": { "1week": 7.0, "1month": 11.25, "2months": 11.5, "3months": 11.75, "6months_maturity": 12.0, "1year_monthly": 11.75, "1year_maturity": 12.25, "2years_monthly": 11.75 },
            "ExclusiveWealth": { "1week": 7.25, "1month": 11.75, "2months": 12.0, "3months": 12.25, "6months_maturity": 12.5, "1year_monthly": 12.25, "1year_maturity": 12.75, "2years_monthly": 12.25 },
            "Private": { "1week": 8.5, "1month": 12.25, "2months": 12.5, "3months": 12.75, "6months_maturity": 13.0, "1year_monthly": 12.75, "1year_maturity": 13.25, "2years_monthly": 12.75 }
          },
          "durations": [0.25, 1, 2, 3, 6, 12, 24],
          "returnType": ["monthly", "maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة دولار أمريكي",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": {
            "Prime": { "1week": 0.75, "1month": 2.0, "3months": 2.5, "6months": 2.75, "1year_monthly": 3.25 },
            "Plus": { "1week": 1.0, "1month": 2.25, "3months": 2.75, "6months": 3.0, "1year_monthly": 3.5 },
            "Wealth": { "1week": 1.25, "1month": 2.5, "3months": 3.0, "6months": 3.25, "1year_monthly": 3.75 },
            "ExclusiveWealth": { "1week": 1.25, "1month": 2.1, "3months": 3.1, "6months": 3.35, "1year_monthly": 4.0 },
            "Private": { "1week": 1.0, "1month": 2.75, "3months": 3.25, "6months": 3.5, "1year_monthly": 4.1 }
          },
          "durations": [0.25, 1, 3, 6, 12],
          "returnType": ["monthly", "maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة يورو",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": {
            "1week": { "5000-99999": 0.001, "100000-999999": 0.001, "1000000-9999999": 0.001, "10000000+": 0.001 },
            "1month": { "5000-99999": 0.005, "100000-999999": 0.005, "1000000-9999999": 0.005, "10000000+": 0.005 },
            "2months": { "5000-99999": 0.006, "100000-999999": 0.006, "1000000-9999999": 0.006, "10000000+": 0.006 },
            "3months": { "5000-99999": 0.007, "100000-999999": 0.007, "1000000-9999999": 0.007, "10000000+": 0.007 },
            "6months": { "5000-99999": 0.008, "100000-999999": 0.008, "1000000-9999999": 0.008, "10000000+": 0.008 },
            "1year": { "5000-99999": 0.009, "100000-999999": 0.009, "1000000-9999999": 0.009, "10000000+": 0.009 }
          },
          "durations": [0.25, 1, 2, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة جنيه إسترليني",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": {
            "1week": { "5000-99999": 0.01, "100000-999999": 0.05, "1000000-9999999": 0.1, "10000000+": 0.125 },
            "1month": { "5000-99999": 0.1, "100000-999999": 0.125, "1000000-9999999": 0.15, "10000000+": 0.225 },
            "2months": { "5000-99999": 0.15, "100000-999999": 0.175, "1000000-9999999": 0.2, "10000000+": 0.275 },
            "3months": { "5000-99999": 0.2, "100000-999999": 0.225, "1000000-9999999": 0.25, "10000000+": 0.325 },
            "6months": { "5000-99999": 0.25, "100000-999999": 0.275, "1000000-9999999": 0.3, "10000000+": 0.375 },
            "1year": { "5000-99999": 0.3, "100000-999999": 0.325, "1000000-9999999": 0.35, "10000000+": 0.425 }
          },
          "durations": [0.25, 1, 2, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 7. بنك مصر =================
  {
    "id": 7,
    "name": "بنك مصر",
    "nameEn": "Banque Misr",
    "logo": "./ASSETS/banks/BM.PNG",
    "type": "government",
    "safetyIndex": 90,
    "branches": 800,
    "onlineAvailable": true,
    "contactPhone": "19888",
    "depositTypes": {
      "certificates": [
        {
          "name": "وديعة فليكس 6 شهور",
          "minAmount": 50000,
          "maxAmount": 0,
          "interestRates": 14.0,
          "durations": [6],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة فليكس 9 شهور",
          "minAmount": 50000,
          "maxAmount": 0,
          "interestRates": 12.75,
          "durations": [9],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        }
      ],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة لأجل (جنيه) - شرائح",
          "minAmount": 500,
          "maxAmount": 0,
          "interestRates": {
            "7days": { "500-1M": 6.875, "1M-2M": 7.0, "2M-5M": 7.125, "5M-10M": 7.25 },
            "15days": { "500-1M": 7.375, "1M-2M": 7.5, "2M-5M": 7.625, "5M-10M": 7.75 },
            "1month": { "500-1M": 8.375, "1M-2M": 8.5, "2M-5M": 8.625, "5M-10M": 8.75 },
            "2months": { "500-1M": 8.375, "1M-2M": 8.5, "2M-5M": 8.625, "5M-10M": 8.75 },
            "3months": { "500-1M": 8.125, "1M-2M": 8.25, "2M-5M": 8.375, "5M-10M": 8.5 },
            "6months": { "500-1M": 7.875, "1M-2M": 8.0, "2M-5M": 8.125, "5M-10M": 8.25 },
            "1year": { "500-1M": 8.125, "1M-2M": 8.25, "2M-5M": 8.375, "5M-10M": 8.5 },
            "2years": { "500-1M": 9.625, "1M-2M": 9.75, "2M-5M": 9.875, "5M-10M": 10.0 }
          },
          "durations": [0.25, 0.5, 1, 2, 3, 6, 12, 24],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة دولار أمريكي - شرائح",
          "minAmount": 500,
          "maxAmount": 0,
          "interestRates": {
            "500-25000": { "1week": 0.6, "1month": 3.27434, "2months": 3.27246, "3months": 3.27057, "6months": 3.23486, "1year": 3.12148 },
            "25001-100000": { "1week": 0.7, "1month": 3.37434, "2months": 3.37246, "3months": 3.37057, "6months": 3.33486, "1year": 3.22148 },
            "100001-250000": { "1week": 0.8, "1month": 3.47434, "2months": 3.47246, "3months": 3.47057, "6months": 3.43486, "1year": 3.32148 },
            "250001-500000": { "1week": 0.9, "1month": 3.57434, "2months": 3.57246, "3months": 3.57057, "6months": 3.53486, "1year": 3.42148 }
          },
          "durations": [0.25, 1, 2, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة جنيه إسترليني - شرائح",
          "minAmount": 500,
          "maxAmount": 0,
          "interestRates": {
            "500-25000": { "1week": 0.07, "1month": 3.3287, "2months": 3.3244, "3months": 3.3201, "6months": 3.2415, "1year": 3.1502 },
            "25001-100000": { "1week": 0.08, "1month": 3.4287, "2months": 3.4244, "3months": 3.4201, "6months": 3.3415, "1year": 3.2502 },
            "100001-250000": { "1week": 0.09, "1month": 3.5287, "2months": 3.5244, "3months": 3.5201, "6months": 3.4415, "1year": 3.3502 },
            "250001-500000": { "1week": 0.1, "1month": 3.6287, "2months": 3.6244, "3months": 3.6201, "6months": 3.5415, "1year": 3.4502 }
          },
          "durations": [0.25, 1, 2, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة يورو - شرائح",
          "minAmount": 500,
          "maxAmount": 0,
          "interestRates": {
            "500-25000": { "1week": 0.001, "1month": 1.539, "2months": 1.5885, "3months": 1.638, "6months": 1.756, "1year": 1.847 },
            "25001-100000": { "1week": 0.002, "1month": 1.639, "2months": 1.6885, "3months": 1.738, "6months": 1.856, "1year": 1.947 },
            "100001-250000": { "1week": 0.003, "1month": 1.739, "2months": 1.7885, "3months": 1.838, "6months": 1.956, "1year": 2.047 },
            "250001-500000": { "1week": 0.004, "1month": 1.839, "2months": 1.8885, "3months": 1.938, "6months": 2.056, "1year": 2.147 }
          },
          "durations": [0.25, 1, 2, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة ريال سعودي - شرائح",
          "minAmount": 2000,
          "maxAmount": 0,
          "interestRates": {
            "2000-100000": { "1month": 0.02, "2months": 0.02, "3months": 0.03, "6months": 0.03, "1year": 0.0625 },
            "100001-300000": { "1month": 0.03, "2months": 0.03, "3months": 0.04, "6months": 0.04, "1year": 0.07 },
            "300001-500000": { "1month": 0.04, "2months": 0.04, "3months": 0.05, "6months": 0.05, "1year": 0.08 },
            "500001-1000000": { "1month": 0.05, "2months": 0.05, "3months": 0.0625, "6months": 0.0625, "1year": 0.09 }
          },
          "durations": [1, 2, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 8. البنك الأهلي المصري =================
  {
    "id": 8,
    "name": "البنك الأهلي المصري",
    "nameEn": "National Bank of Egypt",
    "logo": "./ASSETS/banks/NBE.jpg",
    "type": "government",
    "safetyIndex": 95,
    "branches": 500,
    "onlineAvailable": true,
    "contactPhone": "19623",
    "depositTypes": {
      "certificates": [
        {
          "name": "شهادة ذات عائد متنوع",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": {
            "1year": { "monthly": 14.5, "quarterly": 15.0, "semiAnnual": 15.25, "annual": 15.5 },
            "2years": { "monthly": 12.75, "quarterly": 12.9, "semiAnnual": 13.1, "annual": 13.5 },
            "3years": { "monthly": 12.3, "quarterly": 12.4, "semiAnnual": 12.6, "annual": 13.0 },
            "4years": { "monthly": 9.34, "quarterly": 9.35, "semiAnnual": 9.38, "annual": 9.5 },
            "5years": { "monthly": 9.1, "quarterly": 9.11, "semiAnnual": 9.14, "annual": 9.25 },
            "6years": { "monthly": 9.1, "quarterly": 9.11, "semiAnnual": 9.14, "annual": 9.25 },
            "7years": { "monthly": 9.1, "quarterly": 9.11, "semiAnnual": 9.14, "annual": 9.25 }
          },
          "durations": [12, 24, 36, 48, 60, 72, 84],
          "returnType": ["monthly", "quarterly", "semiAnnual", "annual"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        }
      ],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة عائد الاستحقاق (جنيه)",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": {
            "7days": 8.75, "15days": 8.75, "1month": 12.5, "2months": 12.75, "3months": 13.0, "6months": 13.25, "1year": 13.5, "2years": 13.5, "3years": 13.0, "4years": 13.0, "5years": 12.75, "6years": 12.75, "7years": 12.75
          },
          "durations": [0.25, 0.5, 1, 2, 3, 6, 12, 24, 36, 48, 60, 72, 84],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة دولار أمريكي - سنة (عائد متنوع)",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "monthly": 3.59, "quarterly": 3.6, "semiAnnual": 3.61, "annual": 3.65 },
          "durations": [12],
          "returnType": ["monthly", "quarterly", "semiAnnual", "annual"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة دولار أمريكي - 3 سنوات (عائد متنوع)",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "monthly": 3.29, "quarterly": 3.3, "semiAnnual": 3.31, "annual": 3.35 },
          "durations": [36],
          "returnType": ["monthly", "quarterly", "semiAnnual", "annual"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة دولار أمريكي - عائد الاستحقاق",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "1week": 1.0, "1month": 3.65, "2months": 3.64, "3months": 3.63, "6months": 3.66, "9months": 3.58, "1year": 3.65 },
          "durations": [0.25, 1, 2, 3, 6, 9, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 9. بنك التعمير والإسكان =================
  {
    "id": 9,
    "name": "بنك التعمير والإسكان",
    "nameEn": "Housing and Development Bank",
    "logo": "./ASSETS/banks/HDB.png",
    "type": "private",
    "safetyIndex": 86,
    "branches": 100,
    "onlineAvailable": true,
    "contactPhone": "19032",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "الوديعة الذهبية المدفوعة مقدماً (دولار)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "6months": 3.0, "1year": 3.25 },
          "durations": [6, 12],
          "returnType": ["advance"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "استرداد العائد بالكامل",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "الوديعة الذهبية (جنيه - شركات)",
          "minAmount": 250000,
          "maxAmount": 0,
          "interestRates": { "1month": 11, "3months": 11.5, "6months": 12, "1year": 13 },
          "durations": [1, 3, 6, 12],
          "returnType": ["advance"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 10. البنك الزراعي المصري =================
  {
    "id": 10,
    "name": "البنك الزراعي المصري",
    "nameEn": "Agricultural Bank of Egypt",
    "logo": "./ASSETS/banks/ABE.jpg",
    "type": "government",
    "safetyIndex": 88,
    "branches": 1200,
    "onlineAvailable": false,
    "contactPhone": "19561",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة للشخصيات الاعتبارية (جنيه)",
          "minAmount": 100000,
          "maxAmount": 0,
          "interestRates": { "7days": 4.25, "15days": 5.25, "1month": 7.75, "3months": 8.0, "6months": 8.25, "1year": 8.25, "2years": 8.5, "3years": 8.75 },
          "durations": [0.25, 0.5, 1, 3, 6, 12, 24, 36],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 11. بنك تنمية الصادرات =================
  {
    "id": 11,
    "name": "بنك تنمية الصادرات",
    "nameEn": "Export Development Bank",
    "logo": "./ASSETS/banks/EBE.jpg",
    "type": "private",
    "safetyIndex": 83,
    "branches": 30,
    "onlineAvailable": true,
    "contactPhone": "19389",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة أسبوعية (جنيه)",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": 2.25,
          "durations": [0.25],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة سنوية بعائد شهري",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": 8.0,
          "durations": [12],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية شهرية",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": 1.54,
          "durations": [1],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 12. HSBC =================
  {
    "id": 12,
    "name": "HSBC",
    "nameEn": "HSBC Egypt",
    "logo": "./ASSETS/banks/HSBC.png",
    "type": "private",
    "safetyIndex": 94,
    "branches": 50,
    "onlineAvailable": true,
    "contactPhone": "19022",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة لأجل (جنيه) - بريميير",
          "minAmount": 10000,
          "maxAmount": 0,
          "interestRates": {
            "10k-100k": { "1month": 1.5, "2months": 1.6, "3months": 1.75, "6months": 2.25, "12months": 7.75 },
            "100k-500k": { "1month": 2.25, "2months": 2.5, "3months": 2.75, "6months": 3.25, "12months": 7.75 },
            "500k-1M": { "1month": 3.25, "2months": 3.5, "3months": 3.75, "6months": 4.25, "12months": 7.75 },
            "1M+": { "1month": 4.5, "2months": 4.6, "3months": 4.75, "6months": 5.0, "12months": 7.75 }
          },
          "durations": [1, 2, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل (جنيه) - عادي",
          "minAmount": 10000,
          "maxAmount": 0,
          "interestRates": {
            "10k-100k": { "1month": 1.25, "2months": 1.35, "3months": 1.5, "6months": 2.0, "12months": 7.5 },
            "100k-500k": { "1month": 2.0, "2months": 2.25, "3months": 2.5, "6months": 3.0, "12months": 7.5 },
            "500k-1M": { "1month": 3.0, "2months": 3.25, "3months": 3.5, "6months": 4.0, "12months": 7.5 },
            "1M+": { "1month": 4.25, "2months": 4.35, "3months": 4.5, "6months": 4.75, "12months": 7.5 }
          },
          "durations": [1, 2, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة دولار (بريميير)",
          "minAmount": 2000,
          "maxAmount": 0,
          "interestRates": { "1month": 0.2, "3months": 0.2, "6months": 3.1, "12months": 2.85, "18months": 1.75, "24months": 1.9, "36months": 2.2 },
          "durations": [1, 3, 6, 12, 18, 24, 36],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة دولار (عادي)",
          "minAmount": 2000,
          "maxAmount": 0,
          "interestRates": { "1month": 0.1, "3months": 0.1, "6months": 3.0, "12months": 2.75, "18months": 1.65, "24months": 1.8, "36months": 2.1 },
          "durations": [1, 3, 6, 12, 18, 24, 36],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة يورو (بريميير)",
          "minAmount": 2000,
          "maxAmount": 0,
          "interestRates": { "3months": 0.2, "6months": 0.3, "12months": 0.4, "24months": 0.5 },
          "durations": [3, 6, 12, 24],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة يورو (عادي)",
          "minAmount": 2000,
          "maxAmount": 0,
          "interestRates": { "3months": 0.1, "6months": 0.2, "12months": 0.3, "24months": 0.4 },
          "durations": [3, 6, 12, 24],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 13. البنك العربي الأفريقي =================
  {
    "id": 13,
    "name": "البنك العربي الأفريقي",
    "nameEn": "Arab African International Bank",
    "logo": "./ASSETS/banks/AAIB.png",
    "type": "private",
    "safetyIndex": 89,
    "branches": 80,
    "onlineAvailable": true,
    "contactPhone": "19860",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة مدفوعة مقدماً (جنيه)",
          "minAmount": 30000,
          "maxAmount": 0,
          "interestRates": { "3months": 105, "6months": 110, "9months": 116, "12months": 121 },
          "durations": [3, 6, 9, 12],
          "returnType": ["advance"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "خصم من العائد المدفوع",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة 18 شهر Bullet",
          "minAmount": 1000000,
          "maxAmount": 0,
          "interestRates": 14.22,
          "durations": [18],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة يورو",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": {
            "2years": { "monthly": 0.13, "quarterly": 0.19, "semiAnnual": 0.25, "annual": 0.38 },
            "3years": { "monthly": 0.19, "quarterly": 0.25, "semiAnnual": 0.38, "annual": 0.5 },
            "4years": { "monthly": 0.25, "quarterly": 0.44, "semiAnnual": 0.5, "annual": 0.63 },
            "5years": { "monthly": 0.44, "quarterly": 0.5, "semiAnnual": 0.63, "annual": 0.75 }
          },
          "durations": [24, 36, 48, 60],
          "returnType": ["monthly", "quarterly", "semiAnnual", "annual"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة جنيه إسترليني",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": {
            "2years": { "monthly": 0.13, "quarterly": 0.25, "semiAnnual": 0.38, "annual": 0.5 },
            "3years": { "monthly": 0.38, "quarterly": 0.5, "semiAnnual": 0.63, "annual": 0.75 },
            "4years": { "monthly": 0.5, "quarterly": 0.63, "semiAnnual": 0.75, "annual": 0.88 },
            "5years": { "monthly": 0.63, "quarterly": 0.75, "semiAnnual": 0.88, "annual": 1.0 }
          },
          "durations": [24, 36, 48, 60],
          "returnType": ["monthly", "quarterly", "semiAnnual", "annual"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 14. البنك العربي الخليجي =================
  {
    "id": 14,
    "name": "البنك العربي الخليجي",
    "nameEn": "EGBANK",
    "logo": "./ASSETS/banks/EG.png",
    "type": "private",
    "safetyIndex": 85,
    "branches": 70,
    "onlineAvailable": true,
    "contactPhone": "19961",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة عائد مدفوع مقدماً (جنيه)",
          "minAmount": 10000,
          "maxAmount": 0,
          "interestRates": { "3months": { "lessThan1M": 4.75, "1M+": 5.23 }, "6months": { "lessThan1M": 4.57, "1M+": 5.02 }, "1year": { "lessThan1M": 4.2, "1M+": 4.6 } },
          "durations": [3, 6, 12],
          "returnType": ["advance"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "لا يستحق عائد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "1week": 2.5, "2weeks": 2.5, "1month": 3.0, "2months": 3.0, "3months": 3.5, "6months": 4.0, "9months": 4.5, "1year": 5.0 },
          "durations": [0.25, 0.5, 1, 2, 3, 6, 9, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 15. بنك الإمارات دبي الوطني =================
  {
    "id": 15,
    "name": "بنك الإمارات دبي الوطني",
    "nameEn": "Emirates NBD Egypt",
    "logo": "./ASSETS/banks/ENBD.png",
    "type": "private",
    "safetyIndex": 90,
    "branches": 40,
    "onlineAvailable": true,
    "contactPhone": "19812",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة مدفوعة مقدماً (جنيه)",
          "minAmount": 100000,
          "maxAmount": 0,
          "interestRates": { "1month": 5, "3months": 6, "6months": 7, "1year": 8 },
          "durations": [1, 3, 6, 12],
          "returnType": ["advance"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "استرداد العائد بالكامل",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "1week": 2, "2weeks": 2, "1month": 3, "2months": 3, "3months": 3.25, "4months": 3.25, "5months": 3.25, "6months": 3.75, "1year": 4 },
          "durations": [0.25, 0.5, 1, 2, 3, 4, 5, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "خصم 2% للجنيه ولا عائد للأجنبي",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل 12 شهر بعائد شهري (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": 4.0,
          "durations": [12],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل 12 شهر بعائد ربع سنوي (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": 7.5,
          "durations": [12],
          "returnType": ["quarterly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل 18 شهر (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": 8.0,
          "durations": [18],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل 24 شهر (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": 8.5,
          "durations": [24],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 16. مصرف أبو ظبي الإسلامي =================
  {
    "id": 16,
    "name": "مصرف أبو ظبي الإسلامي",
    "nameEn": "ADIB Egypt",
    "logo": "./ASSETS/banks/ADIB.png",
    "type": "islamic",
    "safetyIndex": 91,
    "branches": 70,
    "onlineAvailable": true,
    "contactPhone": "19957",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة استثمار مضاربة (جنيه)",
          "minAmount": 3000,
          "maxAmount": 0,
          "interestRates": { "1month": 2.05, "3months": 5.6, "6months": 5.8, "1year": 6.55 },
          "durations": [1, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب قواعد الاسترداد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة استثمار مضاربة (دولار)",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "1month": 2.05, "3months": 5.6, "6months": 5.8, "1year": 6.55 },
          "durations": [1, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب قواعد الاسترداد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 17. بنك أبو ظبي التجاري =================
  {
    "id": 17,
    "name": "بنك أبو ظبي التجاري",
    "nameEn": "ADCB Egypt",
    "logo": "./ASSETS/banks/ADCB.png",
    "type": "private",
    "safetyIndex": 88,
    "branches": 30,
    "onlineAvailable": true,
    "contactPhone": "19561",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة أسبوعية (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": 10,
          "durations": [0.25],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة أسبوعين (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": 10,
          "durations": [0.5],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة 3 شهور (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": 11,
          "durations": [3],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة 6 شهور (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": 11,
          "durations": [6],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة سنة (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": 12,
          "durations": [12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة بريميوم سنة (جنيه) - عملاء اكسيلنسي",
          "minAmount": 100000,
          "maxAmount": 0,
          "interestRates": 10.5,
          "durations": [12],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية أسبوع",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "1000-10000": 0.8, "10000-30000": 0.13, "30000-50000": 0.18, "50000+": 0.23 },
          "durations": [0.25],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية شهر",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "1000-10000": 0.23, "10000-30000": 0.28, "30000-50000": 0.33, "50000+": 0.38 },
          "durations": [1],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية 3 أشهر",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "1000-10000": 0.38, "10000-30000": 0.43, "30000-50000": 0.48, "50000+": 0.53 },
          "durations": [3],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية 6 أشهر",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "1000-10000": 0.53, "10000-30000": 0.63, "30000-50000": 0.68, "50000+": 0.73 },
          "durations": [6],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية سنة",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "1000-10000": 0.78, "10000-30000": 0.83, "30000-50000": 0.88, "50000+": 0.93 },
          "durations": [12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية سنة - عائد مقدم",
          "minAmount": 500,
          "maxAmount": 0,
          "interestRates": 1.0,
          "durations": [12],
          "returnType": ["advance"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 18. بنك SAIB =================
  {
    "id": 18,
    "name": "بنك SAIB",
    "nameEn": "SAIB Bank",
    "logo": "./ASSETS/banks/SAIB.jpg",
    "type": "private",
    "safetyIndex": 85,
    "branches": 75,
    "onlineAvailable": true,
    "contactPhone": "19829",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة سمارت (جنيه) - أفراد",
          "minAmount": 150000,
          "maxAmount": 0,
          "interestRates": { "3months": 15.0, "6months": 14.5, "1year_monthly": 13.0, "1year_maturity": 14.0 },
          "durations": [3, 6, 12],
          "returnType": ["monthly", "maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "الوديعة الماسية 3 سنوات",
          "minAmount": 500,
          "maxAmount": 0,
          "interestRates": 9.0,
          "durations": [36],
          "returnType": ["monthly", "quarterly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة سمارت (جنيه - شركات)",
          "minAmount": 1000000,
          "maxAmount": 0,
          "interestRates": { "3months": 15.0, "6months": 14.5, "1year_monthly": 13.0, "1year_maturity": 14.0 },
          "durations": [3, 6, 12],
          "returnType": ["monthly", "maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 19. البنك الأهلي الكويتي - مصر =================
  {
    "id": 19,
    "name": "البنك الأهلي الكويتي - مصر",
    "nameEn": "Al Ahli Bank of Kuwait - Egypt",
    "logo": "./ASSETS/banks/ABK.png",
    "type": "private",
    "safetyIndex": 84,
    "branches": 50,
    "onlineAvailable": true,
    "contactPhone": "19524",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة لأجل (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "1week": 0.5, "2weeks": 0.5, "1month": 2.0, "2months": 2.0, "3months": 2.25, "6months": 2.5, "9months": 3.0, "1year": 3.25 },
          "durations": [0.25, 0.5, 1, 2, 3, 6, 9, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب جدول الغرامات",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة ذات عائد شهري (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "3months": 7.0, "6months": 7.0, "1year": 6.5 },
          "durations": [3, 6, 12],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب الجدول",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية - عائد متغير",
          "minAmount": 500,
          "maxAmount": 0,
          "interestRates": 3.7,
          "durations": [12],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب جدول الغرامات",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 20. بنك البركة =================
  {
    "id": 20,
    "name": "بنك البركة",
    "nameEn": "Al Baraka Bank Egypt",
    "logo": "./ASSETS/banks/ALBRAKA.png",
    "type": "islamic",
    "safetyIndex": 87,
    "branches": 50,
    "onlineAvailable": true,
    "contactPhone": "19042",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة لأجل (جنيه)",
          "minAmount": 500,
          "maxAmount": 0,
          "interestRates": { "7days": 1.5, "14days": 2.0, "1month": 3.25, "2months": 5.0, "3months": 5.5, "6months": 5.75, "1year": 6.0, "2years": 6.5 },
          "durations": [0.25, 0.5, 1, 2, 3, 6, 12, 24],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "خصم 100% قبل شهر، 80% بعد شهر",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة 6 شهور بعائد شهري (جنيه)",
          "minAmount": 250000,
          "maxAmount": 0,
          "interestRates": { "250k-5m": 10.75, "5m-10m": 11.25, "10m+": 11.75 },
          "durations": [6],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "خصم 100% قبل شهر، 90% بعد شهر",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة سنة بعائد شهري (جنيه)",
          "minAmount": 250000,
          "maxAmount": 0,
          "interestRates": { "250k-5m": 11.75, "5m-10m": 12.25, "10m+": 12.75 },
          "durations": [12],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "خصم 100% قبل شهر، 90% بعد شهر",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 21. التجاري وفا بنك =================
  {
    "id": 21,
    "name": "التجاري وفا بنك",
    "nameEn": "Crédit du Maroc",
    "logo": "./ASSETS/banks/التجاري-وفا.png",
    "type": "private",
    "safetyIndex": 82,
    "branches": 30,
    "onlineAvailable": true,
    "contactPhone": "19600",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة أسبوعية (جنيه)",
          "minAmount": 20000,
          "maxAmount": 0,
          "interestRates": 3.0,
          "durations": [0.25],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة شهرية (جنيه)",
          "minAmount": 20000,
          "maxAmount": 0,
          "interestRates": 4.25,
          "durations": [1],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة 3 شهور (جنيه)",
          "minAmount": 20000,
          "maxAmount": 0,
          "interestRates": 4.75,
          "durations": [3],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة 6 شهور (جنيه)",
          "minAmount": 20000,
          "maxAmount": 0,
          "interestRates": 5.0,
          "durations": [6],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة سنة (جنيه)",
          "minAmount": 20000,
          "maxAmount": 0,
          "interestRates": 5.25,
          "durations": [12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة فليكس 3in1 (جنيه)",
          "minAmount": 20000,
          "maxAmount": 0,
          "interestRates": 7.0,
          "durations": [12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة Maxi Time (جنيه)",
          "minAmount": 20000,
          "maxAmount": 0,
          "interestRates": 6.0,
          "durations": [12],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "خصم 3% من قيمة المبلغ",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة نصف سنوية (جنيه - مبالغ كبيرة)",
          "minAmount": 10000000,
          "maxAmount": 0,
          "interestRates": { "10M-20M": 16.0, "20M-50M": 16.25, "50M+": 16.5 },
          "durations": [6],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "5% في أول 3 شهور، 3% بعدها",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة دولارية",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "1000-1000000": 0.1, "1000000+": 0.9 },
          "durations": [0],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 22. البنك العربي =================
  {
    "id": 22,
    "name": "البنك العربي",
    "nameEn": "Arab Bank",
    "logo": "./ASSETS/banks/Arab.png",
    "type": "private",
    "safetyIndex": 89,
    "branches": 60,
    "onlineAvailable": true,
    "contactPhone": "19525",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "الوديعة اليومية بالجنيه المصري (DPE)",
          "minAmount": 100001,
          "maxAmount": 0,
          "interestRates": { "100k-1M": 10.0, "1M-10M": 12.0, "10M-30M": 14.5, "30M+": 16.0 },
          "durations": [0],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "لا يوجد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "الوديعة اليومية بالدولار الأمريكي (DPU)",
          "minAmount": 10001,
          "maxAmount": 0,
          "interestRates": { "0-10000": 0.0, "10001-20000": 0.25, "20001-50000": 0.5, "50001-100000": 1.5, "100001-250000": 2.25, "250001-500000": 3.0, "500000+": 3.25 },
          "durations": [0],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "لا يوجد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 23. بنك الكويت الوطني =================
  {
    "id": 23,
    "name": "بنك الكويت الوطني",
    "nameEn": "National Bank of Kuwait - Egypt",
    "logo": "./ASSETS/banks/NBK.jpg",
    "type": "private",
    "safetyIndex": 86,
    "branches": 30,
    "onlineAvailable": true,
    "contactPhone": "19955",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة لأجل (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "1week": 5.5, "2weeks": 5.5, "3weeks": 5.5, "1month": 6.0, "2months": 6.0, "3months": 6.5, "6months": 5.5, "9months": 5.5, "1year": 6.5 },
          "durations": [0.25, 0.5, 0.75, 1, 2, 3, 6, 9, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة عائد مدفوع مقدماً (جنيه)",
          "minAmount": 100000,
          "maxAmount": 0,
          "interestRates": { "3months": 12.0, "6months": 13.0, "1year": 14.0 },
          "durations": [3, 6, 12],
          "returnType": ["advance"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "خصم كامل العائد",
          "taxRate": 10,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 24. بنك أبو ظبي الأول =================
  {
    "id": 24,
    "name": "بنك أبو ظبي الأول",
    "nameEn": "First Abu Dhabi Bank Egypt",
    "logo": "./ASSETS/banks/FAB.png",
    "type": "private",
    "safetyIndex": 90,
    "branches": 20,
    "onlineAvailable": true,
    "contactPhone": "19266",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة وكالة أسبوعية (جنيه)",
          "minAmount": 0,
          "maxAmount": 0,
          "interestRates": { "0-100k": 5.5, "100k-500k": 7.0, "500k-2M": 9.0, "2M+": 10.5 },
          "durations": [0.25],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة وكالة شهرية (جنيه)",
          "minAmount": 0,
          "maxAmount": 0,
          "interestRates": { "0-100k": 6.0, "100k-500k": 7.5, "500k-2M": 9.5, "2M+": 11.0 },
          "durations": [1],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة وكالة شهرية مميزة (جنيه)",
          "minAmount": 4000000,
          "maxAmount": 0,
          "interestRates": 15.5,
          "durations": [1],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة وكالة 3 أشهر (جنيه)",
          "minAmount": 0,
          "maxAmount": 0,
          "interestRates": { "0-100k": 7.0, "100k-500k": 8.5, "500k-2M": 10.5, "2M+": 12.0 },
          "durations": [3],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة وكالة 6 أشهر (جنيه)",
          "minAmount": 0,
          "maxAmount": 0,
          "interestRates": { "0-100k": 7.5, "100k-500k": 9.0, "500k-2M": 10.75, "2M+": 12.75 },
          "durations": [6],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة وكالة 9 أشهر (جنيه)",
          "minAmount": 0,
          "maxAmount": 0,
          "interestRates": { "0-100k": 8.0, "100k-500k": 9.5, "500k-2M": 11.0, "2M+": 12.5 },
          "durations": [9],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة وكالة سنة (جنيه)",
          "minAmount": 0,
          "maxAmount": 0,
          "interestRates": { "0-100k": 12.0, "100k-500k": 12.25, "500k-2M": 12.5, "2M+": 12.75 },
          "durations": [12],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        },
        {
          "name": "وديعة الأرباح السنوية المدفوعة مقدمًا (جنيه)",
          "minAmount": 500000,
          "maxAmount": 0,
          "interestRates": { "500k-2.5M": 15.0, "2.5M+": 15.25 },
          "durations": [12],
          "returnType": ["advance"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 25. البنك العقاري المصري العربي =================
  {
    "id": 25,
    "name": "البنك العقاري المصري العربي",
    "nameEn": "Egyptian Arab Land Bank",
    "logo": "./ASSETS/banks/REDB.png",
    "type": "government",
    "safetyIndex": 83,
    "branches": 80,
    "onlineAvailable": false,
    "contactPhone": "19143",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة لأجل (جنيه)",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": {
            "1week": { "lessThan100k": 3.125, "100k-250k": 3.25, "250k-1M": 3.375, "1M+": 3.625 },
            "1month": { "lessThan100k": 5.0, "100k-250k": 5.125, "250k-1M": 5.25, "1M+": 5.5 },
            "3months": { "lessThan100k": 5.25, "100k-250k": 5.375, "250k-1M": 5.5, "1M+": 5.75 },
            "6months": { "lessThan100k": 5.5, "100k-250k": 5.625, "250k-1M": 5.75, "1M+": 6.0 },
            "1year": { "lessThan100k": 5.75, "100k-250k": 6.0, "250k-1M": 5.875, "1M+": 6.25 }
          },
          "durations": [0.25, 1, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 26. بنك بيت التمويل الكويتي =================
  {
    "id": 26,
    "name": "بنك بيت التمويل الكويتي",
    "nameEn": "Kuwait Finance House - Egypt",
    "logo": "./ASSETS/banks/KFH.jpeg",
    "type": "islamic",
    "safetyIndex": 87,
    "branches": 25,
    "onlineAvailable": true,
    "contactPhone": "19655",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة استثمارية عائد مقدم (جنيه)",
          "minAmount": 500000,
          "maxAmount": 0,
          "interestRates": { "1month": 11.0, "3months": 11.5, "6months": 12.0, "1year": 12.5 },
          "durations": [1, 3, 6, 12],
          "returnType": ["advance"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 0,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 27. بنك قطر الوطني =================
  {
    "id": 27,
    "name": "بنك قطر الوطني",
    "nameEn": "QNB Alahli",
    "logo": "./ASSETS/banks/QNB.jpg",
    "type": "private",
    "safetyIndex": 92,
    "branches": 200,
    "onlineAvailable": true,
    "contactPhone": "19444",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة لأجل (جنيه) - عبر الموبيل",
          "minAmount": 25000,
          "maxAmount": 0,
          "interestRates": { "1week": 9.5, "1month": 10.0, "3months": 10.5, "6months": 11.0, "1year": 11.25 },
          "durations": [0.25, 1, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب المعادلة المعلنة",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة قصيرة الأجل (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": { "1week": 5.0, "1month": 6.25, "3months": 6.5, "6months": 7.25, "1year": 7.5 },
          "durations": [0.25, 1, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب المعادلة",
          "taxRate": 10,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 28. بنك كريدي أجريكول =================
  {
    "id": 28,
    "name": "بنك كريدي أجريكول",
    "nameEn": "Crédit Agricole Egypt",
    "logo": "./ASSETS/banks/كريدي اجريكول.jpg",
    "type": "private",
    "safetyIndex": 88,
    "branches": 150,
    "onlineAvailable": true,
    "contactPhone": "19199",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "الوديعة السنوية (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": 5.5,
          "durations": [12],
          "returnType": ["monthly"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل (جنيه)",
          "minAmount": 1000,
          "maxAmount": 0,
          "interestRates": { "1week": 1.0, "1month": 3.0, "3months": 3.5, "6months": 4.0, "1year": 5.75 },
          "durations": [0.25, 1, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        }
      ]
    }
  },

  // ================= 29. المصرف المتحد =================
  {
    "id": 29,
    "name": "المصرف المتحد",
    "nameEn": "United Bank",
    "logo": "./ASSETS/banks/TUB.jpg",
    "type": "government",
    "safetyIndex": 86,
    "branches": 70,
    "onlineAvailable": true,
    "contactPhone": "19123",
    "depositTypes": {
      "certificates": [],
      "savingsAccounts": [],
      "fixedDeposits": [
        {
          "name": "وديعة عائد مدفوع مقدماً (جنيه)",
          "minAmount": 20000,
          "maxAmount": 0,
          "interestRates": { "3months": 12.25, "6months": 12.75, "9months": 13.25, "1year": 14.25 },
          "durations": [3, 6, 9, 12],
          "returnType": ["advance"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        },
        {
          "name": "وديعة لأجل (جنيه)",
          "minAmount": 5000,
          "maxAmount": 0,
          "interestRates": {
            "1week": { "5k-125k": 10.0, "125k-3M": 10.5, "3M+": 11.0 },
            "1month": { "5k-125k": 10.0, "125k-3M": 10.5, "3M+": 11.0 },
            "3months": { "5k-125k": 9.0, "125k-3M": 9.5, "3M+": 10.0 },
            "6months": { "5k-125k": 9.0, "125k-3M": 9.5, "3M+": 10.0 },
            "1year": { "5k-125k": 9.0, "125k-3M": 9.5, "3M+": 10.0 }
          },
          "durations": [0.25, 1, 3, 6, 12],
          "returnType": ["maturity"],
          "earlyWithdrawal": true,
          "earlyWithdrawalFee": "حسب القواعد",
          "taxRate": 10,
          "accountFees": 0
        }
      ]
    }
  }
];

// تصدير البيانات لجعلها متاحة للنطاق العام
if (typeof window !== 'undefined') {
  window.completeDepositBanksData = completeDepositBanksData;
}