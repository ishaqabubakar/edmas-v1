type sidebarProps = {
  icon: String;
  menu: String;
  sub: {
    path: String;
    menus: String;
  }[];
};

const sidebarMenus: sidebarProps[] = [
  {
    icon: "",
    menu: "Teachers",
    sub: [
      { path: "", menus: "Insert Teacher" },
      { path: "", menus: "View Teacher" },
    ],
  },
  {
    icon: "",
    menu: "Student",
    sub: [
      { path: "", menus: "Insert Student" },
      { path: "", menus: "View Student" },
    ],
  },
  {
    icon: "",
    menu: "Class",
    sub: [
      { path: "", menus: "Insert Class" },
      { path: "", menus: "View Class" },
    ],
  },
  {
    icon: "",
    menu: "Subject",
    sub: [
      { path: "", menus: "Insert Subject" },
      { path: "", menus: "View Subject" },
    ],
  },
  {
    icon: "",
    menu: "Parents",
    sub: [
      { path: "", menus: "Insert Parent" },
      { path: "", menus: "View Parent" },
    ],
  },
  {
    icon: "",
    menu: "Assignment",
    sub: [
      { path: "", menus: "Insert Assignment" },
      { path: "", menus: "View Assignment" },
    ],
  },
  {
    icon: "",
    menu: "Exams",
    sub: [
      { path: "", menus: "Insert Exam" },
      { path: "", menus: "View Exam" },
    ],
  },
  {
    icon: "",
    menu: "Results",
    sub: [
      { path: "", menus: "Insert Result" },
      { path: "", menus: "View Result" },
    ],
  },
];
