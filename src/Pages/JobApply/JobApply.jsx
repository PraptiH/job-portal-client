import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Link, useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2'

const JobApply = () => {
    const { user } = useAuth()
    const { id } = useParams()
    console.log(user)

    const handleApplyFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const github = form.github.value;
        const linkdin = form.linkdin.value;
        console.log(name, github, linkdin)

        const application = {
            jobId: id,
            applicant: user.email,
            linkdin,
            github,
        }
        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <h3 className='text-4xl font-semibold text-center mt-10'>Apply for this job <br /> <Link className='border-1 rounded-xl  font-medium text-xl p-2 shadow-2xl' to={`/jobs/${id}`}>View Details</Link></h3>
            <form onSubmit={handleApplyFormSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 my-10 mx-auto">

                <label className="label">Name</label>
                <input type="text" name='name' className="input" placeholder="Enter your Name" />

                <label className="label">Github Link</label>
                <input type="url" name='github' className="input" placeholder="Enter your Github Link" />

                <label className="label">LinkdIn Link</label>
                <input type="url" name='linkdin' className="input" placeholder="Enter your Github Link" />

                <button type='submit' className='btn btn-primary'>Apply</button>

            </form>
        </div>
    );
};

export default JobApply;