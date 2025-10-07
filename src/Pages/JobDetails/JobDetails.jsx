import React from 'react';
import { Link, NavLink, useLoaderData } from 'react-router';

const JobDetails = () => {

    const { _id, title, category, company, company_logo, responsibilities, description, jobType, location, requirements, salaryRange } = useLoaderData()

    return (
        <div className='w-11/12 mx-auto my-10'>
            <div className='text-center w-1/2 mx-auto mb-8'>
                <img src={company_logo} alt="" className='mx-auto max-w-xs h-auto object-contain' />
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th colSpan={5} className='text-center font-bold text-4xl'>Employment Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='font-semibold text-2xl'>Title</td>
                            <td className='font-medium text-lg'>{title}</td>
                        </tr>
                        <tr>
                            <td className='font-semibold text-2xl'>Category</td>
                            <td className='font-medium text-lg'>{category}</td>
                        </tr>
                        <tr>
                            <td className='font-semibold text-2xl'>Job Type</td>
                            <td className='font-medium text-lg'>{jobType}</td>
                        </tr>
                        <tr>
                            <td className='font-semibold text-2xl'>Location</td>
                            <td className='font-medium text-lg'>{location}</td>
                        </tr>
                        <tr>
                            <td className='font-semibold text-2xl'>Description</td>
                            <td className='font-medium text-lg'>{description}</td>
                        </tr>
                        <tr>
                            <td className='font-semibold text-2xl'>Skills</td>
                            <td>{requirements.map((req, i) => (
                                <p className='font-medium text-lg' key={i}>
                                    {req}<br />
                                </p>
                            ))}</td>
                        </tr>
                        <tr>
                            <td className='font-semibold text-2xl'>Responsibilities</td>
                            <td>{responsibilities.map((res, i) => (
                                <p className='font-medium text-lg' key={i}>{res}</p>
                            ))}</td>
                        </tr>
                        <tr>
                            <td className='font-semibold text-2xl'>Salary Range</td>
                            <td className='font-medium text-lg'>{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='text-center mt-8'>
                <Link to={`/jobapply/${_id}`}><button className='btn btn-primary'>Apply Now</button></Link>
            </div>
        </div>
    );
};

export default JobDetails;
