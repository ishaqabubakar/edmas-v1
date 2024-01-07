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
    icon: "ph:chalkboard-teacher-light",
    menu: "Teachers",
    sub: [
      { path: "/dashboard/Teachers/insert-teacher", menus: "Insert Teacher" },
      { path: "/dashboard/Teachers/view-teachers", menus: "View Teacher" },
    ],
  },
  {
    icon: "ph:student",
    menu: "Student",
    sub: [
      { path: "", menus: "Insert Student" },
      { path: "", menus: "View Student" },
    ],
  },
  {
    icon: "ep:data-board",
    menu: "Class",
    sub: [
      { path: "", menus: "Insert Class" },
      { path: "", menus: "View Class" },
    ],
  },
  {
    icon: "material-symbols:subject",
    menu: "Subject",
    sub: [
      { path: "", menus: "Insert Subject" },
      { path: "", menus: "View Subject" },
    ],
  },
  {
    icon: "ri:parent-line",
    menu: "Parents",
    sub: [
      { path: "", menus: "Insert Parent" },
      { path: "", menus: "View Parent" },
    ],
  },
  {
    icon: "material-symbols:assignment-outline-sharp",
    menu: "Assignment",
    sub: [
      { path: "", menus: "Insert Assignment" },
      { path: "", menus: "View Assignment" },
    ],
  },
  {
    icon: "ph:newspaper-clipping-light",
    menu: "Exams",
    sub: [
      { path: "", menus: "Insert Exam" },
      { path: "", menus: "View Exam" },
    ],
  },
  {
    icon: "mdi:report-bar",
    menu: "Results",
    sub: [
      { path: "", menus: "Insert Result" },
      { path: "", menus: "View Result" },
    ],
  },
];
