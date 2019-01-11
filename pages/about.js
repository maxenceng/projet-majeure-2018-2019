import React from 'react';

import Wrapper from '../src/helpers/Wrapper';
import DynamicHead from '../src/components/DynamicHead';
import Button from '../src/containers/Button';

const About = () => (
  <div>
    <DynamicHead
      title="About"
      description="About page | School project"
      keywords="About school project CPE"
    />
    <p className="example">About NextJS</p>
    <Button>test</Button>
  </div>
);

export default Wrapper(About);
