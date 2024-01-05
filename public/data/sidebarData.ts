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
    icon: "ph:chalkboard-teacher-light",
    menu: "Teachers",
    sub: [
      { path: "", menus: "Insert Teacher" },
      { path: "", menus: "View Teacher" },
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
