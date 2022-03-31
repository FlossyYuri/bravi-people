import { AxiosResponse } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { DashboardInterface } from '../interfaces/common';
import { APIKit } from '../services/api';

function Dashboard() {
  const [dashboard, setDashboard] = useState<DashboardInterface>();
  const fetchData = useCallback((params?) => {
    APIKit.get<DashboardInterface>('/dashboard', { params }).then(
      (response: AxiosResponse<DashboardInterface>) => {
        setDashboard(response.data);
      }
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <section className='p-8 w-full h-full flex flex-col justify-center items-center'>
      <div className='w-48 h-48 bg-main-gray rounded-full flex justify-center items-center text-8xl font-bold'>
        {dashboard?.totalContacts}
      </div>
      <h1 className='text-2xl font-bold mt-4'>Total Contacts</h1>
    </section>
  );
}

export default Dashboard;
