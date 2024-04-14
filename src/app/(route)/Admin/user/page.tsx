import AdminNavContainer from '@/app/components/admin/containers/AdminNavContainer';
import Header from '@/app/components/layout/Header';
import React from 'react';

const page = () => {
    return (
        <section className="flex flex-col min-h-screen">
      <Header isAdmin={true} />
      <div className="flex w-[full] h-[980px]">
        <AdminNavContainer selected={'dashboard'} />
        <div className="">
        </div>
      </div>
    </section>
    );
};

export default page;