import React, { useContext } from 'react';
import AdminContext from '../AdminContext';

function Card(jobTitle) {
    const { jobs, deletePostedJob, approveJob } = useContext(AdminContext);

    // Filter jobs that are not approved
    const unapprovedJobs = jobs.filter(job => !job.isApproved);
    const approvedJobs = jobs.filter(job => job.isApproved)

    return (
        <div className=''>
            <div className='card flex justify-around'>
                <div className='w-1/2'>

                <h1 className='text-black/50 text-center'>Unapproved Jobs : {unapprovedJobs.length}</h1>
                {
                    unapprovedJobs.length > 0 && unapprovedJobs.map((item, index) => (
                        <div key={index} className='card container px-1 md:py-2 py-14 rounded flex justify-between'>
                            <div>
                                <h1 className='text-black font-bold'>Job Title : {item.jobTitle}</h1>
                                <h3 className='text-black/50'> Compony Name : {item.companyName}</h3>
                                <h3 className='text-black/50'>Job Location : {item.jobLocation}</h3>
                                <h3 className='text-black/50'>Experience Level : {item.exprienceLevel}</h3>
                                <h3 className='text-black/50'>Salary : {item.minPrice} to {item.maxPrice}</h3>
                                <h3 className='text-black/50'> Salary Type : {item.salaryType}</h3>
                                
                                {/* Render other job details if needed */}
                            </div>
                            <div className=''>
                                <button className="mt-12 bg-green-800 text-white font-semibold px-4 py-2 rounded-sm cursor-pointer mx-3" onClick={() => approveJob(item._id)}>
                                    Approve
                                </button>
                                <button className="mt-12 bg-red-800 text-white font-semibold px-4 py-2 rounded-sm cursor-pointer mx-1" onClick={() => deletePostedJob(item._id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                }
                </div>

                <div className='w-1/3'>

<h1 className='text-black/50 text-center'>Approved Jobs : {approvedJobs.length}</h1>

{
                    approvedJobs.length > 0 && approvedJobs.map((item, index) => (
                        <div key={index} className='card container mx-auto px-2 md:py-2 py-14 rounded flex justify-between'>
                            <div>
                                <h1 className='text-black font-bold'>Job Title : {item.jobTitle}</h1>
                                <h3 className='text-black/50'> Compony Name{item.companyName}</h3>
                                <h3 className='text-black/50'>Job Location : {item.jobLocation}</h3>
                                <h3 className='text-black/50'>Experience Level : {item.exprienceLevel}</h3>
                                <h3 className='text-black/50'>Salary : {item.minPrice} to {item.maxPrice}</h3>
                                <h3 className='text-black/50'> Salary Type : {item.salaryType}</h3>
                                
                                {/* Render other job details if needed */}
                            </div>
                            <div className=''>
                                <button className="mt-12 bg-red-800 text-white font-semibold px-4 py-2 rounded-sm cursor-pointer mx-1">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                }
                </div>

            </div>
        </div>
    );
}

export default Card;
