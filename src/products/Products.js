import React from 'react';
import './Products.css';

import Supply from './Supply';
import Usage from './Usage';
import Mechanism from './Mechanism';
import Value from './Value';

const OverviewGoods = () => (
  <div className="main-page overview_goods">
    <section>
      <Supply/>
    </section>
    <section>
      <Usage/>
    </section>
    <section>
      <Mechanism/>
    </section>
    <section>
      <Value/>
    </section>
  </div>
);

export default OverviewGoods;
