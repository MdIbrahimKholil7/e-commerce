import React from 'react';
import DashBoardLayOut from '../../components/dashboard/DashBoardLayOut';

const CustomerList = () => {
    return (
        <DashBoardLayOut>
            <div className='w-full'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                
                                <th>Name</th>
                                <th>Email</th>
                                <th>Details</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            <tr>
                               
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                              
                                <th>
                                    <button className="btn btn-primary ">details</button>
                                </th>
                            </tr>
                          
                        </tbody>
                      
                    </table>
                </div>
            </div>
        </DashBoardLayOut>
    );
};

export default CustomerList;