// Menu Registry
export const DataAsideMenuListRegistry = [
  {
    rootPath: "/registry/regis-page",
    icon: "/All/notes-medical-solid.svg",
    title: "LABEL.RESERVATION",
    subMenu: [
      {
        rootPath: "/registry/regis-page/reservation",
        title: "LABEL.NEW_RESERVATION",
        subMenu: null,
      },
      {
        rootPath: "/registry/regis-page/list-all",
        title: "LABEL.RESERVATION_LIST",
        subMenu: null,
      },
    ],
  },
  {
    rootPath: "/registry/patient",
    icon: "/All/hospital-user-solid.svg",
    title: "LABEL.PATIENT",
    subMenu: [
      {
        rootPath: "/registry/patient/registration",
        title: "LABEL.REGISTRATION",
        subMenu: null,
      },
      {
        rootPath: "/registry/patient/list",
        title: "LABEL.PATIENT_LIST",
        subMenu: null,
      },
    ],
  },
  {
    rootPath: "/registry/screening",
    icon: "/All/prescription-bottle-solid.svg",
    title: "LABEL.SCREENING",
    subMenu: null,
  },
  {
    rootPath: "/registry/testimonial",
    icon: "/All/comment-dots-solid.svg",
    title: "LABEL.TESTIMONIAL",
    subMenu: null,
  },
];

// Menu Doctor
export const DataAsideMenuListDoctor = [
  {
    rootPath: "/doctor/patient/list",
    icon: "/All/hospital-user-solid.svg",
    title: "LABEL.PATIENT_LIST",
    subMenu: null,
  },
  {
    rootPath: "/doctor/special-case",
    icon: "/All/user-injured-solid.svg",
    title: "LABEL.SPECIAL_CASE",
    subMenu: null,
  },
];

// Menu Teller
export const DataAsideMenuListTeller = [
  {
    rootPath: "/teller/report-page",
    icon: "/All/chart-line-solid.svg",
    title: "LABEL.REPORT",
    subMenu: [
      {
        rootPath: "/teller/report-page/daily-income",
        title: "LABEL.DAILY_INCOME",
        subMenu: null,
      },
      {
        rootPath: "/teller/report-page/transaction",
        title: "LABEL.TRANSACTION",
        subMenu: null,
      },
    ],
  },
];

// Menu Pharmacist
export const DataAsideMenuListPharmacist = [
  {
    rootPath: "/pharmacist/drug-purchase",
    icon: "/All/prescription-solid.svg",
    title: "LABEL.DRUG_PURCHASE",
    subMenu: null,
  },
  {
    rootPath: "/pharmacist/medicine-page",
    icon: "/All/prescription-bottle-alt-solid.svg",
    title: "LABEL.PRODUCT",
    subMenu: [
      {
        rootPath: "/pharmacist/medicine-page/list",
        title: "LABEL.PRODUCT_LIST",
        subMenu: null,
      },
    ],
  },
  {
    rootPath: "/pharmacist/stock-name-page/list",
    icon: "/All/cubes-solid.svg",
    title: "LABEL.STOCK_OF_NAME",
    subMenu: null,
  },
  // {
  //   rootPath: "/pharmacist/invoice_monitoring",
  //   icon: "/All/file-invoice-dollar-solid.svg",
  //   title: "LABEL.TEST",
  //   subMenu: [
  //     {
  //       rootPath: "/pharmacist/invoice_monitoring/contract",
  //       title: "LABEL.TEST",
  //       subMenu: null,
  //     },
  //     {
  //       rootPath: "/pharmacist/invoice_monitoring-1/error-v",
  //       title: "LABEL.TEST",
  //       subMenu: [
  //         {
  //           rootPath: "/pharmacist/invoice_monitoring-1/error-v/1",
  //           title: "LABEL.TEST",
  //         },
  //       ],
  //     },
  //     {
  //       rootPath: "/pharmacist/invoice_monitoring-2/error-v",
  //       title: "LABEL.TEST",
  //       subMenu: [
  //         {
  //           rootPath: "/pharmacist/invoice_monitoring-2/error-v/1",
  //           title: "LABEL.TEST",
  //         },
  //       ],
  //     },
  //     {
  //       rootPath: "/pharmacist/invoice_monitoring-3/error-v",
  //       title: "LABEL.TEST",
  //       subMenu: [
  //         {
  //           rootPath: "/pharmacist/invoice_monitoring-3/error-v/1",
  //           title: "LABEL.TEST",
  //         },
  //       ],
  //     },
  //     {
  //       rootPath: "/pharmacist/invoice_monitoring-4/error-v",
  //       title: "LABEL.TEST",
  //       subMenu: [
  //         {
  //           rootPath: "/pharmacist/invoice_monitoring-4/error-v/1",
  //           title: "LABEL.TEST",
  //         },
  //         {
  //           rootPath: "/pharmacist/invoice_monitoring-4/error-v/2",
  //           title: "LABEL.TEST",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   rootPath: "/pharmacist/user-profile",
  //   icon: "/All/users-solid.svg",
  //   title: "LABEL.TEST",
  //   subMenu: null,
  // },
];

// Menu Administrator
export const DataAsideMenuListAdministrator = [
  {
    rootPath: "/administrator/doctor-page",
    icon: "/All/stethoscope-solid.svg",
    title: "LABEL.DOCTOR",
    subMenu: [
      {
        rootPath: "/administrator/doctor-page/list",
        title: "LABEL.DOCTOR_LIST",
        subMenu: null,
      },
    ],
  },
  {
    rootPath: "/administrator/staff-page",
    icon: "/All/users-solid.svg",
    title: "LABEL.STAFF",
    subMenu: [
      {
        rootPath: "/administrator/staff-page/list",
        title: "LABEL.STAFF_LIST",
        subMenu: null,
      },
    ],
  },
  {
    rootPath: "/administrator/report-page",
    icon: "/All/chart-line-solid.svg",
    title: "LABEL.REPORT",
    subMenu: [
      {
        rootPath: "/administrator/report-page/daily-income",
        title: "LABEL.DAILY_INCOME",
        subMenu: null,
      },
    ],
  },
  {
    rootPath: "/administrator/article-page",
    icon: "/All/newspaper-regular.svg",
    title: "LABEL.ARTICLE",
    subMenu: [
      {
        rootPath: "/administrator/article-page/list",
        title: "LABEL.ARTICLE_LIST",
        subMenu: null,
      },
    ],
  },
  {
    rootPath: "/administrator/master-data-page",
    icon: "/All/database-solid.svg",
    title: "LABEL.MASTER_DATA",
    subMenu: [
      {
        rootPath: "/administrator/master-data-page/poli",
        title: "LABEL.POLI",
        subMenu: null,
      },
      {
        rootPath: "/administrator/master-data-page/sevice",
        title: "LABEL.LIST_SERVICE",
        subMenu: null,
      },
      {
        rootPath: "/administrator/master-data-page/medical-type",
        title: "LABEL.MEDICAL_TYPE",
        subMenu: null,
      },
    ],
  },
  {
    rootPath: "/administrator/handling-page/need-closing",
    icon: "/All/exchange-alt-solid.svg",
    title: "LABEL.HANDOVER",
    subMenu: null,
  },
  {
    rootPath: "/administrator/screening-setting",
    icon: "/All/toolbox-solid.svg",
    title: "LABEL.SCREENING_SETTING",
    subMenu: null,
  },
  {
    rootPath: "/administrator/testimonial",
    icon: "/All/comment-dots-solid.svg",
    title: "LABEL.TESTIMONIAL",
    subMenu: null,
  },
];

// Menu Owner
export const DataAsideMenuListOwner = [
  {
    rootPath: "/owner/delivery-monitoring",
    icon: "/All/route-solid.svg",
    title: "LABEL.TEST",
    subMenu: [
      {
        rootPath: "/owner/delivery-monitoring",
        title: "LABEL.TEST",
        subMenu: null,
      },
      {
        rootPath: "/owner/delivery-monitoring-1/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/owner/delivery-monitoring-1/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
      {
        rootPath: "/owner/delivery-monitoring-2/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/owner/delivery-monitoring-2/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
    ],
  },
  {
    rootPath: "/owner/invoice_monitoring",
    icon: "/All/file-invoice-dollar-solid.svg",
    title: "LABEL.TEST",
    subMenu: [
      {
        rootPath: "/owner/invoice_monitoring/contract",
        title: "LABEL.TEST",
        subMenu: null,
      },
      {
        rootPath: "/owner/invoice_monitoring-1/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/owner/invoice_monitoring-1/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
      {
        rootPath: "/owner/invoice_monitoring-2/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/owner/invoice_monitoring-2/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
      {
        rootPath: "/owner/invoice_monitoring-3/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/owner/invoice_monitoring-3/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
      {
        rootPath: "/owner/invoice_monitoring-4/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/owner/invoice_monitoring-4/error-v/1",
            title: "LABEL.TEST",
          },
          {
            rootPath: "/owner/invoice_monitoring-4/error-v/2",
            title: "LABEL.TEST",
          },
        ],
      },
    ],
  },
  {
    rootPath: "/owner/user-profile",
    icon: "/All/users-solid.svg",
    title: "LABEL.TEST",
    subMenu: null,
  },
];
