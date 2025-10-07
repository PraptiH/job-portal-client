import React from 'react';
import useAuth from '../../Hooks/useAuth';

const AddJob = () => {
    const {user}= useAuth()

    const handleAddJob = e=>{
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        const {minSalary, maxSalary, currency, ...newJob} = data
        newJob.salaryRange = {minSalary, maxSalary, currency}
        const requirementsString = newJob.requirments;
        const unmodifiedRequirments = requirementsString.split(',');
        const modifiedRequirments = unmodifiedRequirments.map(req=>req.trim())
        newJob.requirments = modifiedRequirments
        const responsibilitiesString = newJob.responsibilities;
        const unmodifiedResponsibilities = responsibilitiesString.split(',');
        const modifiedResponsibilities = unmodifiedResponsibilities.map(req=>req.trim())
        newJob.responsibilities = modifiedResponsibilities
        console.log(newJob)
    }

    return (
        <div>
            <h2>Please Add a job</h2>
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4 mx-auto">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Title</label>
                    <input type="text" name='title' className="input" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input type="text" name='company' className="input" placeholder="Company Name" />

                    <label className="label">Company Location</label>
                    <input type="text" name='location' className="input" placeholder="Company Location" />

                    <label className="label">Company Logo</label>
                    <input type="url" name='companyLogo' className="input" placeholder="Company Logo" />

                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4 mx-auto">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobtype" aria-label="All" />
                        <input className="btn" type="radio" name="jobtype" value="On-Site" aria-label="On-site" />
                        <input className="btn" type="radio" name="jobtype" value="Remote" aria-label="Remote" />
                        <input className="btn" type="radio" name="jobtype" value="Hybrid" aria-label="Hybrid" />
                    </div>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4 mx-auto">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select defaultValue="Job Category" name='category' className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Data-Scientest</option>
                    </select>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4 mx-auto">
                    <legend className="fieldset-legend">Application Deadline</legend>

                    <input type="date" name='date' className="input" />
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4 mx-auto">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input type="text" name='minSalary' className="input" placeholder="Minimum Salary" />
                        </div>
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input type="text" name='maxSalary' className="input" placeholder="Minimum Salary" />
                        </div>
                        <div>
                            <label className="label">Currency</label>
                            <select defaultValue="Select a Currency" name='currency' className="select">
                                <option disabled={true}>Select a Currency</option>
                                <option>BDT</option>
                                <option>USD</option>
                                <option>EU</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4 mx-auto">
                    <legend className="fieldset-legend"> Job Description</legend>
                    <textarea className="textarea" name='description' placeholder="Job Description"></textarea>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4 mx-auto">
                    <legend className="fieldset-legend">Job Requirments</legend>
                    <textarea className="textarea" name='requirments' placeholder="Requirments (separate by comma)"></textarea>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4 mx-auto">
                    <legend className="fieldset-legend">Job Responsibilities</legend>
                    <textarea className="textarea" name='responsibilities' placeholder="Job Responsibilities (separate by comma)"></textarea>
                </fieldset>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4 mx-auto">
                    <legend className="fieldset-legend">HR Related Info</legend>

                    <label className="label">HR Name</label>
                    <input type="text" name='hr_name' className="input" placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input type="email" name='hr_email' className="input" value={user.email} readOnly />

                </fieldset>

                <div className='text-center my-6'>
                    <input className='btn shadow-2xl' type="submit" value="Add Job" />
                </div>

            </form>
        </div>
    );
};

export default AddJob;