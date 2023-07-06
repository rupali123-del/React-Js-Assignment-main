import { useState } from "react";
import "./jobs.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export interface Job {
  jobId: number;
  jDate: string;
  jTitle: string;
  jStatus: boolean;
  jCategory: string;
  jVacancies: number;
  jDescription: string;
  jExp: number;
  jCompany: string;
  jMail: string;
}

function Jobs() {
  //Here is the list of all jobs
  const alljobs: Job[] = [
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



  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(alljobs);

  const handleSearch = (event:any) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    filterData(searchTerm);
  };

  // Function to filter the data based on the search term
  const filterData = (searchTerm:any) => {
    const filteredData = alljobs.filter((item) =>
      item.jTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <div className="container">
      <br></br>
      <h1 className="h1 align-self-center col-6">List of jobs</h1>
      <br></br>
      <div className="btn-group align-self-center col-12 col-sm-12 col-md-8 col-lg-6">
        <h5 className="align-self-center col-6">Search By Job Title</h5>
        {/* Write logic to search the job based on the Job title */}
        {

        }
        <input
          type="search"
          name="searchBy"
          aria-label="search-input"
          className="col-6 col-sm-4"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <br></br>
      <br></br>
      <table className="table ">
        <thead className="table-warning ">
          <tr>
            <th scope="col">
              <h1 className="h5 ">Job ID</h1>
            </th>
            <th scope="col">
              <h1 className="h5 fw-bold">Job Posted Date</h1>
            </th>
            <th scope="col">
              <h1 className="h5 fw-bold">Job Title</h1>
            </th>
            <th scope="col">
              <h1 className="h5 fw-bold">Job Status</h1>
            </th>
            <th scope="col">
              <h1 className="h5 fw-bold">Show Details</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((j: any) => (
            <tr key={j.jobId} className="table-active">
              <td>
                <h1 className="h6">{j.jobId}</h1>
              </td>
              <td>
                <h1 className="h6">{new Date(j.jDate).toDateString()}</h1>
              </td>
              <td>
                <h1 className="h6">{j.jTitle}</h1>
              </td>
              <td>{j.jStatus ? "Open" : "Close"}</td>
              <td>
                <Link  to={`/details/${j.jobId}`} className="btn btn-primary" >Details</Link>
                {/* Add logic here to implement the routing to the details page of the job with the help of job id */}
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-new">
        <nav aria-label="Page navigation ">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <br></br>
    </div>
  );
}

export default Jobs;
