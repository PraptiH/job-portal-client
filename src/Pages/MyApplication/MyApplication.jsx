import React, { Suspense } from 'react';
import ApplicationStat from './ApplicationStat';
import ApplicationList from './ApplicationList';
import useAuth from '../../Hooks/useAuth';
import { myApplicationsPromise } from '../../API/applicationApi';


const MyApplication = () => {

    const {user} = useAuth()

    return (
        <div>
            <h2></h2>
            <ApplicationStat></ApplicationStat>
            <Suspense fallback="Loading your application">
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationList>
            </Suspense>
            
        </div>
    );
};

export default MyApplication;