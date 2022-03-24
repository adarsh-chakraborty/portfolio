import React from 'react';
import Tech from './Tech';

const Skillset = () => {
  return (
    <>
      <section className="mt-8 flex justify-center items-center gap-3">
        <div className="w-14 bg-emerald-500 h-2"></div>
        <h1 className="text-2xl font-Baloo font-bold">My Technical Skillset</h1>
        <div className="w-14 bg-emerald-500 h-2"></div>
      </section>

      <section className="mt-8 flex items-center justify-center ">
        <div className="grid grid-cols-4 gap-4">
          <Tech skill="MongoDB" />
          <Tech skill="Express" />
          <Tech skill="React" />
          <Tech skill="Node" />
          <Tech skill="Tailwindcss" />
          <Tech skill="SocketIO" />
          <Tech skill="NextJS" />
          <Tech skill="Git" />
        </div>
      </section>
    </>
  );
};

export default Skillset;
