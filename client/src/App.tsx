import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import HomeCards from "./components/HomeCards";
// import JobListings from "./components/JobListings";
// import ViewAllJobs from "./components/ViewAllJobs";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import JobTypes from "./constants/valueTypes";
import { jobLoader } from "./utils/dataLoaders";
import './assets/stylesheets/main.scss';

const App = () => {
  // Add new job
  const addJob = async (newJob: JobTypes) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    if (!res.ok) {
      // Handle response error (e.g., display an error message)
      console.error("Failed to add job");
      return;
    }
  }
  // Delete job
  const deleteJob = async (id: string) => {
    console.log(id);
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      // Handle response error (e.g., display an error message)
      console.error("Failed to add job");
      return;
    }
  }

  // Update job
  const updateJob = async (job: JobTypes) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    if (!res.ok) {
      // Handle response error (e.g., display an error message)
      console.error("Failed to add job");
      return;
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />

        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}
export default App;

// return (
//   <>
//     <Navbar />
//     <Hero />
//     <HomeCards />
//     <JobListings />
//     <ViewAllJobs />
//   </>

// )