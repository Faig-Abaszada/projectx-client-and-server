import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Spinner from "./Spinner";
import JobTypes from "../constants/valueTypes";

const JobListings = ({ isHome = false }) => {

    const [jobs, setJobs] = useState<JobTypes[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiURL = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
            try {
                const res = await fetch(apiURL);
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchJobs()
    }, [isHome]);


    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recent Jobs' : 'All Jobs'}
                </h2>

                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {
                            jobs.map((job) => (
                                <JobCard
                                    key={job.id}
                                    job={job}
                                />
                            ))
                        }
                    </div>
                )}



            </div>
        </section>
    )
}

export default JobListings
