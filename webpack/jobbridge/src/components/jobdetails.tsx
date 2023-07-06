import "./jobdetails.css";
import { useParams, Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";

function JobDetails(props : any) {
  let { id } = useParams();
  const Apply =()=>{
    alert(" “Applied successfully!!!” ")
  }

  //Here write the code to read the state from redux store
  const alljobs:any = props.alljobs;
  console.log(alljobs)
  

  //Write the logic to find the job from with the help of Job id.
  const jobfound = alljobs.find((e:any) => e.jobId==id)
  console.log(alljobs)
  // const jobfound = {
  //   jTitle: "",
  //   jDate: "",
  //   jDescription: "",
  //   jCompany: "",
  //   jVacancies: "",
  //   jExp: 1,
  //   jMail: "",
  //   jCategory: "",
  // };

  return (
    <div className="container">
      <br></br>
      <div className="row">
        <h2>Job Detail: {id}</h2>
        <div className="col">
          <h2>
            Try you luck for{" "}
            <span className="bg-warning"> {jobfound.jTitle} </span>!
          </h2>
          <div className="col "></div>
          <div className="col">
            <div className=" col">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td className="h6">Job Title:</td>
                    <td>{jobfound.jTitle}</td>
                  </tr>
                  <tr>
                    <td className="h6">Job Posted on:</td>
                    <td>{new Date(jobfound.jDate).toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <td className="h6">Job Description</td>
                    <td>{jobfound.jDescription}</td>
                  </tr>

                  <tr>
                    <td className="h6">Company Name</td>
                    <td>{jobfound.jCompany}</td>
                  </tr>

                  <tr>
                    <td className="h6">No of vacancies</td>
                    <td>{jobfound.jVacancies}</td>
                  </tr>
                  <tr>
                    <td className="h6">Job Category</td>
                    <td>{jobfound.jCategory}</td>
                  </tr>
                  <tr>
                    <td className="h6">Experience Required</td>
                    <td>{jobfound.jExp}yrs</td>
                  </tr>
                  <tr>
                    <td className="h6">Executive Email</td>
                    <td>
                      <a href="mailto:info@support.com">{jobfound.jMail}</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* Need to write the event handler for this Apply button */}
              {
             
              }
              <button className="btn btn-success" onClick={Apply}> Apply </button>
              &nbsp; &nbsp;
              <Link to="/jobs" className="btn btn-success ">
                Back{" "}
              </Link>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

//Need to write the redux logic to connect the store to this component.
const mapStateToProps = (state:any) => {
  return {
    alljobs: state.jobs 
  };
};


export default connect(mapStateToProps)(JobDetails);

// export default JobDetails;
