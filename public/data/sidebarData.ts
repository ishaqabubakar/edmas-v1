type sidebarProps = {
  icon: String|any;
  menu: String;
  sub: {
    path: String;
    menus: String;
  }[];
};

export const sidebarMenus: sidebarProps[] = [
  {
    icon: "ri:school-line",
    menu: "Manage Schools",
    sub: [
      { path: "/dashboard/Schools", menus: "Schools" },
    ],
  },
  {
    icon: "lucide:user-round",
    menu: "Super Admin",
    sub: [
      { path: "/dashboard/Owners", menus: "Owners" },
    ],
  },
  {
    icon: "lucide:user-round",
    menu: "Admin/Master",
    sub: [
      { path: "/dashboard/Account", menus: "Account" },
    ],
  },
  {
    icon: "lucide:users-round",
    menu: "Students/Parents",
    sub: [
      { path: "/dashboard/Students", menus: "Students" },
      // { path: "/dashboard/Student/view-student", menus: "Promote student" },
    ],
  },
  {
    icon: "lucide:users-round",
    menu: "Manage Users",
    sub: [
      // { path: "/dashboard/Staffs/", menus: "Staffs" },
      { path: "/dashboard/Teachers", menus: "Teachers" },
      { path: "/dashboard/Others", menus: "Others" },
    ],
  },

  {
    icon: "fluent-emoji-high-contrast:classical-building",
    menu: "Classes & Subject",
    sub: [
      { path: "/dashboard/Class", menus: "Class" },
      { path: "/dashboard/Sections", menus: "Sections" },
      { path: "/dashboard/Routines", menus: "Routines" },
      { path: "/dashboard/Subjects", menus: "Subjects" },
      { path: "/dashboard/Syllabuses", menus: "Syllabuses" },
      { path: "/dashboard/Materials", menus: "Materials" },
    ],
  },
  {
    icon: "codicon:book",
    menu: "Examination",
    sub: [
      // { path: "/dashboard/Subject/view-subject", menus: "Exams" },
      { path: "/dashboard/Examination", menus: "Grade" },
     
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
    icon: "heroicons:building-office-2",
    menu: "Manage Office",
    sub: [
      { path: "/dashboard/NoticeBoard", menus: "NoticeBoard" },
      { path: "/dashboard/Messages", menus: "Messages" },
      { path: "/dashboard/Occassions", menus: "Occassions" },
    ],
  },
  {
    icon: "material-symbols:payments-outline-sharp",
    menu: "Payment",
    sub: [
      { path: "/dashboard/Salaries", menus: "Salaries" },
      { path: "/dashboard/Fees", menus: "Fees" },
    ],
  },

];
