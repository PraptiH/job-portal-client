import React from 'react';
import JobCard from '../Shared/JobCard';
import { useState } from 'react';
import { useEffect } from 'react';

const HotJobs = ({ jobsPromise }) => {
    const [jobs, setJobs] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        jobsPromise
            .then(data => {
                setJobs(data)
                setLoading(false)
            })
            .catch(error=>{
                setError(error)
            })
    },[jobsPromise])

    return (
        <div className='mt-10'>
            <h1 className='font-bold text-5xl text-center '>Jobs</h1>
            <div className='mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-11/12 mx-auto gap-2'>
                {
                    jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;