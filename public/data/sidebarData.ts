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
      { path: "/dashboard/School/insert-school", menus: "Schools" },
      { path: "/dashboard/School/view-school", menus: "View" },
    ],
  },
  {
    icon: "lucide:user-round",
    menu: "Owner",
    sub: [
      { path: "/dashboard/Owner/insert-owner", menus: "Insert Owner" },
      { path: "/dashboard/Owner/view-owner", menus: "View Owner" },
    ],
  },
  {
    icon: "lucide:users-round",
    menu: "Manage Students",
    sub: [
      { path: "/dashboard/Students", menus: "Students" },
      { path: "/dashboard/Student/view-student", menus: "Promote student" },
    ],
  },
  {
    icon: "lucide:users-round",
    menu: "Manage Users",
    sub: [
      { path: "/dashboard/Staffs/", menus: "Staffs" },
      { path: "/dashboard/Teachers", menus: "Teachers" },
      { path: "/dashboard/Parent", menus: "Parents" },
    ],
  },

  {
    icon: "fluent-emoji-high-contrast:classical-building",
    menu: "Classes & Subject",
    sub: [
      { path: "/dashboard/Class", menus: "Class" },
      { path: "/dashboaard/Class-section", menus: "Sections" },
      { path: "/dashboard/Class/insert-class", menus: "Routines" },
      { path: "/dashboaard/Class/view-class", menus: "Subjects" },
      { path: "/dashboaard/Class/view-class", menus: "Syllabuses" },
    ],
  },
  {
    icon: "material-symbols:subject",
    menu: "Examination",
    sub: [
      { path: "/dashboard/Subject/view-subject", menus: "Exams" },
      { path: "/dashboard/Subject/view-subject", menus: "Report" },
     
    ],
  },
  {
    icon: "material-symbols:assignment-outline-sharp",
    menu: "Assignment",
    sub: [
      { path: "/dashboard/Assignment/insert-assignment", menus: "Assignment" },
      { path: "/dashboard/Assignment/view-assignment", menus: "View Assignment" },
    ],
  },
  {
    icon: "heroicons:building-office-2",
    menu: "Manage Office",
    sub: [
      { path: "/dashboard/Parents/insert-parent", menus: "Notice Board" },
      { path: "/dashboard/Parents/view-parent", menus: "Messages" },
      { path: "/dashboard/Parents/view-parent", menus: "Holidays & Events" },
    ],
  },
  {
    icon: "material-symbols:payments-outline-sharp",
    menu: "Payment",
    sub: [
      { path: "/dashboard/Exams/insert-exam", menus: "Salaries" },
      { path: "/dashboard/Exams/view-exam", menus: "Fees Payment" },
    ],
  },

];
