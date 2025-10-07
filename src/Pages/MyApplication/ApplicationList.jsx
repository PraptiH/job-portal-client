import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';


const ApplicationList = ({myApplicationsPromise}) => {
    const applicationList = use(myApplicationsPromise)
    return (
        <div>
            <h3>Job applied so far {applicationList.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        applicationList.map((application, index)=><JobApplicationRow
                        key={application._id}
                        application={application}
                        index={index}
                        applicationList={applicationList}
                        ></JobApplicationRow>)
                       }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;