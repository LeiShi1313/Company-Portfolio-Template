import React from 'react';
import './Overview.css';
import Roadmap from './Roadmap';
import VisionAndMission from './VisionAndMission';

const Index = () => (
  <div className="main-page index">
    <section>
      <VisionAndMission/>
    </section>
    <section>
      <Roadmap/>
    </section>
  </div>
);

export default Index;
