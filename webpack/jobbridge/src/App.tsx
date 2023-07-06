import React from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/mainsection";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Jobs from "./components/jobs";
import JobDetails from "./components/jobdetails";
import PageNotFound from "./components/pagenotfound";
import { legacy_createStore as createStore  } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

//create store over here
const store = createStore(reducer);

let subheading = '"We help you to bridge your aspirations and the exact opportunity here find the perfect job that you desreve and apply easily from wherever you want."'
function App(): any {
  return (
    //Add provider here
    <Provider store={store}>
    <div>
      <Header></Header>
      <Routes>
        <Route index element={<Main heading="Find your job here.." subheading={subheading}/>} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="details/:id" element={<JobDetails />} />
        <Route path="*" element={<PageNotFound />} />
        {/* Write the code here for handling PageNotFound functionality */}
      </Routes>

      <Footer></Footer>
    </div>
    </Provider>
  );
}

export default App;
