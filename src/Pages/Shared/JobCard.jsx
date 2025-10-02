import React from 'react';
import { NavLink } from 'react-router';

const JobCard = ({ job }) => {
    const { title, category, company, company_logo, description, jobType, location, requirements, salaryRange } = job
    return (
        <div>
            <div className="card bg-base-100 w-96 h-93 p-5 shadow-sm border-2">
                <div className='flex items-center justify-around'>
                    <figure>
                        <img
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <p className='text-lg font-medium '>{company}</p>
                        <p className="">{location}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{jobType}</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                    </div>
                    <div>
                        {
                            requirements.map((skill, index) =>
                                <p key={index} className="badge">{skill}</p>)
                        }
                    </div>
                    <div className='flex items-center mt-2'>
                        <p className='font-medium text-lg'>{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
                        <NavLink to={`/jobs/${job._id}`}><button className='btn btn-primary'>Apply Now</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;