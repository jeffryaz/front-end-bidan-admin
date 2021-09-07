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
    rootPath: "/teller/delivery-monitoring",
    icon: "/All/route-solid.svg",
    title: "LABEL.TEST",
    subMenu: [
      {
        rootPath: "/teller/delivery-monitoring",
        title: "LABEL.TEST",
        subMenu: null,
      },
      {
        rootPath: "/teller/delivery-monitoring-1/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/teller/delivery-monitoring-1/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
      {
        rootPath: "/teller/delivery-monitoring-2/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/teller/delivery-monitoring-2/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
    ],
  },
  {
    rootPath: "/teller/invoice_monitoring",
    icon: "/All/file-invoice-dollar-solid.svg",
    title: "LABEL.TEST",
    subMenu: [
      {
        rootPath: "/teller/invoice_monitoring/contract",
        title: "LABEL.TEST",
        subMenu: null,
      },
      {
        rootPath: "/teller/invoice_monitoring-1/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/teller/invoice_monitoring-1/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
      {
        rootPath: "/teller/invoice_monitoring-2/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/teller/invoice_monitoring-2/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
      {
        rootPath: "/teller/invoice_monitoring-3/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/teller/invoice_monitoring-3/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
      {
        rootPath: "/teller/invoice_monitoring-4/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/teller/invoice_monitoring-4/error-v/1",
            title: "LABEL.TEST",
          },
          {
            rootPath: "/teller/invoice_monitoring-4/error-v/2",
            title: "LABEL.TEST",
          },
        ],
      },
    ],
  },
  {
    rootPath: "/teller/user-profile",
    icon: "/All/users-solid.svg",
    title: "LABEL.TEST",
    subMenu: null,
  },
];

// Menu Pharmacist
export const DataAsideMenuListPharmacist = [
  // {
  //   rootPath: "/pharmacist/delivery-monitoring",
  //   icon: "/All/route-solid.svg",
  //   title: "LABEL.TEST",
  //   subMenu: [
  //     {
  //       rootPath: "/pharmacist/delivery-monitoring",
  //       title: "LABEL.TEST",
  //       subMenu: null,
  //     },
  //     {
  //       rootPath: "/pharmacist/delivery-monitoring-1/error-v",
  //       title: "LABEL.TEST",
  //       subMenu: [
  //         {
  //           rootPath: "/pharmacist/delivery-monitoring-1/error-v/1",
  //           title: "LABEL.TEST",
  //         },
  //       ],
  //     },
  //     {
  //       rootPath: "/pharmacist/delivery-monitoring-2/error-v",
  //       title: "LABEL.TEST",
  //       subMenu: [
  //         {
  //           rootPath: "/pharmacist/delivery-monitoring-2/error-v/1",
  //           title: "LABEL.TEST",
  //         },
  //       ],
  //     },
  //   ],
  // },
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
    rootPath: "/administrator/delivery-monitoring",
    icon: "/All/route-solid.svg",
    title: "LABEL.TEST",
    subMenu: [
      {
        rootPath: "/administrator/delivery-monitoring",
        title: "LABEL.TEST",
        subMenu: null,
      },
      {
        rootPath: "/administrator/delivery-monitoring-1/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/administrator/delivery-monitoring-1/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
      {
        rootPath: "/administrator/delivery-monitoring-2/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/administrator/delivery-monitoring-2/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
    ],
  },
  {
    rootPath: "/administrator/invoice_monitoring",
    icon: "/All/file-invoice-dollar-solid.svg",
    title: "LABEL.TEST",
    subMenu: [
      {
        rootPath: "/administrator/invoice_monitoring/contract",
        title: "LABEL.TEST",
        subMenu: null,
      },
      {
        rootPath: "/administrator/invoice_monitoring-1/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/administrator/invoice_monitoring-1/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
      {
        rootPath: "/administrator/invoice_monitoring-2/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/administrator/invoice_monitoring-2/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
      {
        rootPath: "/administrator/invoice_monitoring-3/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/administrator/invoice_monitoring-3/error-v/1",
            title: "LABEL.TEST",
          },
        ],
      },
      {
        rootPath: "/administrator/invoice_monitoring-4/error-v",
        title: "LABEL.TEST",
        subMenu: [
          {
            rootPath: "/administrator/invoice_monitoring-4/error-v/1",
            title: "LABEL.TEST",
          },
          {
            rootPath: "/administrator/invoice_monitoring-4/error-v/2",
            title: "LABEL.TEST",
          },
        ],
      },
    ],
  },
  {
    rootPath: "/administrator/user-profile",
    icon: "/All/users-solid.svg",
    title: "LABEL.TEST",
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
