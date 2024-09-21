import { all_routes } from "../../../feature-module/router/all_routes";
const routes = all_routes;

export const SidebarData = [
  {
    label: "MAIN",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Main",
    submenuItems: [
      {
        label: "Dashboard",
        icon: "ti ti-layout-dashboard",
        submenu: true,
        showSubRoute: false,

        submenuItems: [
          { label: "Dashboard Admin", link: routes.adminDashboard },
          { label: "Dashboard Enseignant", link: routes.teacherDashboard },
          { label: "Dashboard Étudiant", link: routes.studentDashboard },
          { label: "Dashboard Parent", link: routes.parentDashboard },
        ],
      },
    ],
  },
  {
    label: "Les Personnes",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Les Personnes",

    submenuItems: [
      {
        label: "Étudiants",
        icon: "ti ti-school",
        submenu: true,
        showSubRoute: false,

        submenuItems: [
          {
            label: "Tous les Étudiants",
            link: routes.studentGrid,
            subLink1: routes.addStudent,
            subLink2: routes.editStudent,
          },
          { label: "La liste des Étudiants", link: routes.studentList },
          {
            label: "Details d'un Étudiant",
            link: routes.studentDetail,
            subLink1: routes.studentLibrary,
            subLink2: routes.studentResult,
            subLink3: routes.studentFees,
            subLink4: routes.studentLeaves,
            subLink5: routes.studentTimeTable,
          },
          { label: "Student Promotion", link: routes.studentPromotion },
        ],
      },
      {
        label: "Parents",
        icon: "ti ti-user-bolt",
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Tous les Parents", link: routes.parentGrid },
          { label: "La liste des parents", link: routes.parentList },
        ],
      },
      {
        label: "Gardiens",
        icon: "ti ti-user-shield",
        showSubRoute: false,
        submenu: true,
        submenuItems: [
          { label: "Tous les Gardiens", link: routes.guardiansGrid },
          { label: "La Liste des Gardiens", link: routes.guardiansList },
        ],
      },
      {
        label: "Enseignants",
        icon: "ti ti-users",
        submenu: true,
        showSubRoute: false,

        submenuItems: [
          {
            label: "Tous les enseignants",
            link: routes.teacherGrid,
            subLink1: routes.addTeacher,
            subLink2: routes.editTeacher,
          },
          { label: "La liste des enseignants", link: routes.teacherList },
          {
            label: "Details d'un enseignant",
            link: routes.teacherDetails,
            subLink1: routes.teacherLibrary,
            subLink2: routes.teacherSalary,
            subLink3: routes.teacherLeaves,
          },
          { label: "Routine", link: routes.teachersRoutine },
        ],
      },
    ],
  },
  {
    label: "Académique",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Académique",

    submenuItems: [
      {
        label: "Les Classes",
        icon: "ti ti-school-bell",
        submenu: true,
        showSubRoute: false,

        submenuItems: [
          { label: "Toutes les classes", link: routes.classes },
          { label: "Planning des classes", link: routes.sheduleClasses },
        ],
      },
      {
        label: "Salle de classe",
        link: routes.classRoom,
        icon: "ti ti-building",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Routine des classes",
        link: routes.classRoutine,
        icon: "ti ti-bell-school",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Sections",
        link: routes.classSection,
        icon: "ti ti-square-rotated-forbid-2",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Matière",
        link: routes.classSubject,
        icon: "ti ti-book",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Emploi du temps",
        link: routes.classTimetable,
        icon: "ti ti-table",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Dévoirs",
        link: routes.classHomeWork,
        icon: "ti ti-license",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Examinations & Séances",
        icon: "ti ti-hexagonal-prism-plus",
        submenu: true,
        showSubRoute: false,

        submenuItems: [
          { label: "Examens", link: routes.exam },
          { label: "Calendrier des tests", link: routes.examSchedule },
          { label: "Les notes", link: routes.grade },
          { label: "Participation aux examens", link: routes.examAttendance },
          { label: "Résultat des examens", link: routes.examResult },
        ],
      },
    ],
  },
  {
    label: "MANAGEMENT",
    submenuOpen: true,
    submenuHdr: "Management",
    submenu: false,
    showSubRoute: false,
    submenuItems: [
      {
        label: "Collection des frais",
        icon: "ti ti-report-money",
        submenu: true,
        showSubRoute: false,

        submenuItems: [
          { label: "Groupe de frais", link: routes.feesGroup },
          { label: "Type de frais", link: routes.feesType },
          { label: "Frais des honoraires", link: routes.feesMaster },
          { label: "Frais attribuer", link: routes.feesAssign },
          { label: "Frais aperçus", link: routes.collectFees },
        ],
      },
      {
        label: "Bibliothèque",
        icon: "ti ti-notebook",
        submenu: true,
        showSubRoute: false,

        submenuItems: [
          { label: "Membres de la bibliothèque", link: routes.libraryMembers },
          { label: "Livres", link: routes.libraryBooks },
          { label: "Livres emprunté", link: routes.libraryIssueBook },
          { label: "Livres réndus", link: routes.libraryReturn },
        ],
      },
      {
        label: "Sports",
        link: routes.sportsList,
        icon: "ti ti-run",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Players",
        link: routes.playerList,
        icon: "ti ti-play-football",
        showSubRoute: false,
        submenu: false,
      },
    ],
  },
  {
    label: "GRH",
    submenuOpen: true,
    submenuHdr: "GRH",
    submenu: false,
    showSubRoute: false,
    submenuItems: [
      {
        label: "Personnels",
        link: routes.staff,
        subLink1: routes.addStaff,
        subLink2: routes.editStaff,
        icon: "ti ti-users-group",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Départements",
        link: routes.departments,
        icon: "ti ti-layout-distribute-horizontal",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Désignation",
        link: routes.designation,
        icon: "ti ti-user-exclamation",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Liste des Présences",
        icon: "ti ti-calendar-share",
        submenu: true,
        showSubRoute: false,

        submenuItems: [
          { label: "Présence des Étudiants", link: routes.studentAttendance },
          { label: "Présence des enseignants", link: routes.teacherAttendance },
          { label: "Présence du personnels", link: routes.staffAttendance },
        ],
      },
      {
        label: "Absences",
        icon: "ti ti-calendar-stats",
        submenu: true,
        showSubRoute: false,

        submenuItems: [
          { label: "Liste des absences", link: routes.listLeaves },
          {
            label: "Demande des absences approuvés",
            link: routes.approveRequest,
          },
        ],
      },
      {
        label: "Congés",
        link: routes.holidays,
        icon: "ti ti-briefcase",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Paiements",
        link: routes.payroll,
        icon: "ti ti-moneybag",
        showSubRoute: false,
        submenu: false,
      },
    ],
  },
  {
    label: "Finance & Comptabilité",
    submenuOpen: true,
    submenuHdr: "Finance & Comptabilité",
    submenu: false,
    showSubRoute: false,
    submenuItems: [
      {
        label: "Comptabilité",
        icon: "ti ti-swipe",
        submenu: true,
        showSubRoute: false,
        submenuItems: [
          { label: "Dépenses", link: routes.expense },
          { label: "Catégorie des depenses", link: routes.expenseCategory },
          { label: "Revenus", link: routes.accountsIncome },
          {
            label: "Factures",
            link: routes.accountsInvoices,
            subLink1: routes.addInvoice,
            subLink2: routes.editInvoice,
          },
          { label: "Affichage de factures", link: routes.invoice },
          { label: "Transactions", link: routes.accountsTransactions },
        ],
      },
    ],
  },
  {
    label: "Annonces",
    submenuOpen: true,
    submenuHdr: "Annonces",
    submenu: false,
    showSubRoute: false,
    submenuItems: [
      {
        label: "Tableau d'affichag",
        link: routes.noticeBoard,
        icon: "ti ti-clipboard-data",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Événements",
        link: routes.events,
        icon: "ti ti-calendar-question",
        showSubRoute: false,
        submenu: false,
      },
    ],
  },
  {
    label: "Gestion des utilisateurs",
    submenuOpen: true,
    submenuHdr: "Sales",
    submenu: false,
    showSubRoute: false,
    submenuItems: [
      {
        label: "Utilisateurs",
        link: routes.manageusers,
        icon: "ti ti-users-minus",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Roles & Permissions",
        link: routes.rolesPermissions,
        icon: "ti ti-shield-plus",
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Demande de suppression de compte",
        link: routes.deleteRequest,
        icon: "ti ti-user-question",
        showSubRoute: false,
        submenu: false,
      },
    ],
  },
  {
    label: "Support",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Finance & Comptabilité",
    submenuItems: [
      {
        label: "Contact Messages",
        link: routes.contactMessages,
        icon: "ti ti-message",
        showSubRoute: false,
        submenu: false,
      },
    ],
  },
  {
    label: "Paramètres",
    submenu: true,
    showSubRoute: false,
    submenuHdr: "Paramètres",
    submenuItems: [
      {
        label: "Paramètres généraux",
        submenu: true,
        showSubRoute: false,
        icon: "ti ti-shield-cog",
        submenuItems: [
          { label: "Paramètres de compte", link: routes.profilesettings },
          { label: "Paramètres de securité", link: routes.securitysettings },
          {
            label: "Paramètres de notification",
            link: routes.notificationssettings,
          },
        ],
      },
      {
        label: "Paramètres de l'application",
        submenu: true,
        showSubRoute: false,
        icon: "ti ti-device-laptop",
        submenuItems: [
          {
            label: "Paramètres de l'ecole",
            link: routes.companySettings,
            showSubRoute: false,
          },
        ],
      },
      {
        label: "Paramètres Académiques",
        submenu: true,
        showSubRoute: false,
        icon: "ti ti-calendar-repeat",
        submenuItems: [
          {
            label: "Paramètres de l'ecole",
            link: routes.schoolSettings,
            showSubRoute: false,
          },
        ],
      },
    ],
  },
];
