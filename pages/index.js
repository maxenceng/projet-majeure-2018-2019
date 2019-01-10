import React from 'react';

import Wrapper from '../src/helpers/Wrapper';
import DynamicHead from '../src/components/DynamicHead';

const Index = () => (
  <div>
    <DynamicHead
      title="Index"
      description="Index page | School project"
      keywords="index school project CPE"
    />
    <p className="example">Hello NextJS</p>
  </div>
);

export default Wrapper(Index);
