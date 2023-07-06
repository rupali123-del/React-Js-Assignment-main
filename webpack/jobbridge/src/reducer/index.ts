
import { Job } from "../components/jobs";


const jobs: Job[]=[
  {
    jobId: 10134,
    jDate: "3-Jan-2023",
    jTitle: "React Developer",
    jStatus: true,
    jCategory: "Engineering",
    jVacancies: 4,
    jDescription:
      " Developing the latest user-facing features using React.js,Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model,Thorough understanding of React.js and its core principles ,Experience in Redux, saga , Experience with RESTful APIs ,Familiarity with HTML / CSS , GIT experience , Designing a modern highly responsive web-based user interface ",
    jCompany: " Hitachi",
    jExp: 4,
    jMail: "hr@hitachi.com",
  },
  {
    jobId: 56256,
    jDate: "4-April-2023",
    jTitle: "FullStack Developer",
    jStatus: true,
    jCategory: "Engineering",
    jVacancies: 4,
    jDescription:
      " Solid experience with the ASP.NET framework, SQL Server and design/architectural patterns (e.g. Model-View-Controller (MVC), Min.3 years of development experience using C# .NET ,Min 3 years of strong experience in .NET languages (e.g. C#, Visual Basic .NET) and HTML5/CSS3, Develop technical interfaces, specifications, and architecture, Use and adapt existing web applications for apps,Create and test software prototypes.,evelop client displays and user interfaces, 3+ years of experience with architecture styles/APIs (REST, RPC) , Solid understanding and knowledge of Agile methodologies, Strong attention to detail ,Excellent troubleshooting and communication skills,Knowledge of REST and RPC APIs,Able to work well in a team setting.",
    jCompany: " Hitachi",
    jExp: 4,
    jMail: "hr@hitachi.com",
  },
  {
    jobId: 16334,
    jDate: "7-May-2023",
    jTitle: "Java Developer",
    jStatus: true,
    jCategory: "Engineering",
    jVacancies: 2,
    jDescription:
      "Solid experience with the ASP.NET framework, SQL Server and design/architectural patterns (e.g. Model-View-Controller (MVC), Min.3 years of development experience using C# .NET ,Min 3 years of strong experience in .NET languages (e.g. C#, Visual Basic .NET) and HTML5/CSS3, Develop technical interfaces, specifications, and architecture, Use and adapt existing web applications for apps,Create and test software prototypes.,evelop client displays and user interfaces, 3+ years of experience with architecture styles/APIs (REST, RPC) , Solid understanding and knowledge of Agile methodologies, Strong attention to detail ,Excellent troubleshooting and communication skills,Knowledge of REST and RPC APIs,Able to work well in a team setting. ",
    jCompany: " Anaplan",
    jExp: 3,
    jMail: "hr@anaplan.com",
  },
  {
    jobId: 135343,
    jDate: "15-April 2023",
    jTitle: "FullStack Developer",
    jStatus: false,
    jCategory: "Engineering",
    jVacancies: 4,
    jDescription:
      "Solid experience with the ASP.NET framework, SQL Server and design/architectural patterns (e.g. Model-View-Controller (MVC), Min.3 years of development experience using C# .NET ,Min 3 years of strong experience in .NET languages (e.g. C#, Visual Basic .NET) and HTML5/CSS3, Develop technical interfaces, specifications, and architecture, Use and adapt existing web applications for apps,Create and test software prototypes.,evelop client displays and user interfaces, 3+ years of experience with architecture styles/APIs (REST, RPC) , Solid understanding and knowledge of Agile methodologies, Strong attention to detail ,Excellent troubleshooting and communication skills,Knowledge of REST and RPC APIs,Able to work well in a team setting. ",
    jCompany: " Rogers",
    jExp: 4,
    jMail: "hr@rogers.com",
  },
  {
    jobId: 343556,
    jDate: "2- May 2023",
    jTitle: "HR Assistant Manager",
    jStatus: true,
    jCategory: "Human Resource",
    jVacancies: 4,
    jDescription:
      "Solid experience with the ASP.NET framework, SQL Server and design/architectural patterns (e.g. Model-View-Controller (MVC), Min.3 years of development experience using C# .NET ,Min 3 years of strong experience in .NET languages (e.g. C#, Visual Basic .NET) and HTML5/CSS3, Develop technical interfaces, specifications, and architecture, Use and adapt existing web applications for apps,Create and test software prototypes.,evelop client displays and user interfaces, 3+ years of experience with architecture styles/APIs (REST, RPC) , Solid understanding and knowledge of Agile methodologies, Strong attention to detail ,Excellent troubleshooting and communication skills,Knowledge of REST and RPC APIs,Able to work well in a team setting. ",
    jCompany: " Verizon",
    jExp: 4,
    jMail: "hr@verizon.com",
  },
];


const initialState = {
  jobs: jobs
   
};

const reducer = (state = initialState) => {
  return state;
};

export default reducer;
