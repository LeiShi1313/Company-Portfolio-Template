import React from 'react';
import Schedule from './Schedule';
import Use from './Use';


const Plan = () => (
  <div className="main-page plan">
    <section>
      <Schedule/>
    </section>
    <section>
      <Use/>
    </section>
  </div>
);

export default Plan;
