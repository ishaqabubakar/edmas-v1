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
    menu: "School",
    sub: [
      { path: "/dashboard/School/insert-school", menus: "Insert School" },
      { path: "/dashboard/School/view-school", menus: "View School" },
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
      { path: "/dashboard/Student/insert-student", menus: "Students" },
      { path: "/dashboard/Student/view-student", menus: "Promote student" },
    ],
  },
  {
    icon: "lucide:users-round",
    menu: "Manage Users",
    sub: [
      { path: "/dashboard/Teachers/insert-teacher", menus: "Staffs" },
      { path: "/dashboard/Teachers/view-teachers", menus: "Teachers" },
      { path: "/dashboard/Teachers/view-teachers", menus: "Parents" },
    ],
  },

  {
    icon: "fluent-emoji-high-contrast:classical-building",
    menu: "Classes & Subject",
    sub: [
      { path: "/dashboard/Class/insert-class", menus: "Class" },
      { path: "/dashboaard/Class/view-class", menus: "Class Section" },
      { path: "/dashboard/Class/insert-class", menus: "Class Routines" },
      { path: "/dashboaard/Class/view-class", menus: "Subjects" },
      { path: "/dashboaard/Class/view-class", menus: "Class Syllabus" },
    ],
  },
  {
    icon: "material-symbols:subject",
    menu: "Examination",
    sub: [
      { path: "/dashboard/Subject/view-subject", menus: "Exams" },
      { path: "/dashboard/Subject/view-subject", menus: "Exams Report" },
     
    ],
  },
  {
    icon: "material-symbols:assignment-outline-sharp",
    menu: "Assignment",
    sub: [
      { path: "/dashboard/Assignment/insert-assignment", menus: "Insert Assignment" },
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
