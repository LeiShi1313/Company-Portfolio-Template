import React from 'react';
import './Overview_of_the_company.css';

import About from './About';
import CoreMember from './CoreMembers';
import Advisors from './Advisors';
import Partners from './Partners';

const OverviewCompany = () => (
  <div className="main-page overview_company">
    <section className="about">
      <About/>
    </section>
    <section className="people core-member">
      <CoreMember/>
    </section>
    <section className="people advisors">
      <Advisors/>
    </section>
    <section className="people partners">
      <Partners/>
    </section>
  </div>
);

export default OverviewCompany;
