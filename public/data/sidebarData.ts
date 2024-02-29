type sidebarProps = {
  id: number;
  icon: String | any;
  menu: String;
  sub: {
    path: String;
    menus: String;
  }[];
};

export const sidebarMenus: sidebarProps[] = [
  {
    id: 1,
    icon: "ri:school-line",
    menu: "Manage Schools",

    sub: [{ path: "/dashboard/Schools", menus: "Schools" }],
  },
  {
    id: 2,
    icon: "lucide:user-round",
    menu: "Super Admin",
    sub: [{ path: "/dashboard/Owners", menus: "Owners" }],
  },
  {
    id: 3,
    icon: "lucide:user-round",
    menu: "Admin/Master",
    sub: [{ path: "/dashboard/Account", menus: "Account" }],
  },
  {
    id: 4,
    icon: "lucide:users-round",
    menu: "Students/Parents",
    sub: [
      { path: "/dashboard/Students", menus: "Students" },
      // { path: "/dashboard/Student/view-student", menus: "Promote student" },
    ],
  },
  {
    id: 5,
    icon: "lucide:users-round",
    menu: "Manage Users",
    sub: [
      // { path: "/dashboard/Staffs/", menus: "Staffs" },
      { path: "/dashboard/Teachers", menus: "Teachers" },
      { path: "/dashboard/Others", menus: "Others" },
    ],
  },

  {
    id: 6,
    icon: "fluent-emoji-high-contrast:classical-building",
    menu: "Classes & Subject",
    sub: [
      { path: "/dashboard/Class", menus: "Class" },
      { path: "/dashboard/Sections", menus: "Sections" },
      { path: "/dashboard/Routines", menus: "Routines" },
      { path: "/dashboard/Subjects", menus: "Subjects" },
      // { path: "/dashboard/Syllabuses", menus: "Syllabuses" },
      { path: "/dashboard/Materials", menus: "Materials" },
    ],
  },
  {
    id: 7,
    icon: "codicon:book",
    menu: "Examination",
    sub: [
      // { path: "/dashboard/Subject/view-subject", menus: "Exams" },
      { path: "/dashboard/Grade", menus: "Exam" },
      { path: "/dashboard/Grade", menus: "Test" },
      { path: "/dashboard/Grade", menus: "Gradebook" },
      { path: "/dashboard/Grade", menus: "Report" },
    ],
  },
  // {
  //   icon: "material-symbols:assignment-outline-sharp",
  //   menu: "Assignment",
  //   sub: [
  //     { path: "/dashboard/Assignment/insert-assignment", menus: "Assignments" },
  //   ],
  // },
  {
    id: 8,
    icon: "heroicons:building-office-2",
    menu: "Manage Office",
    sub: [
      { path: "/dashboard/NoticeBoard", menus: "NoticeBoard" },
      // { path: "/dashboard/Messages", menus: "Messages" },
      // { path: "/dashboard/Occassions", menus: "Occassions" },
    ],
  },
  {
    id: 9,
    icon: "material-symbols:payments-outline-sharp",
    menu: "Payment",
    sub: [
      { path: "/dashboard/Salaries", menus: "Salaries" },
      { path: "/dashboard/Fees", menus: "Fees" },
    ],
  },
];

export const BillingData = {
  starter1: {
    price: "800",
    plan: "Golden Package",
    numberOfStudent: "200",
    features: [
      "Number of students : 200",
      "Student Enrollment Management",
      "  Attendance Tracking",
      " Grade and Transcript Management",
      " Communication Portal (Teachers, Parents, and Students)",
      "  Basic Reporting",
      "  Announcements and Events Calendar",
      "  Timetable Creation and Management",
      " Student Behavior Tracking",
    ],
  },
  starter2: {
    price: "1750",
    plan: "Silver Package",
    numberOfStudent: "500",
    features: [
      "Number of students : 500",
      "Exam and Assignment Management",
      "Library Management",
      "Event Calendar",
    ],
  },
  starter3: {
    price: "3000",
    plan: "Diamond Package",
    numberOfStudent: "1000",
    features: [
      "Number of students : 1000",
      " Online Exam and Quiz Platform",
      " Parent-Teacher Meeting Scheduling",
      " Advanced Reporting and Analytics",
      " Customizable Dashboards",
    ],
  },

  starter4: {
    price: "5000",
    plan: "Premium Package",
    numberOfStudent: "2000",
    features: [
      "Number of students : 2000",
      " Online Exam and Quiz Platform",
      " Parent-Teacher Meeting Scheduling",
      " Advanced Reporting and Analytics",
      "  Customizable Dashboards",
      "  School Financial Management (Fee Collection, Expense Tracking)",
    ],
  },
};
