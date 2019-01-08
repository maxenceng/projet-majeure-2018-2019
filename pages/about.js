import React from 'react';

import Wrapper from '../src/helpers/Wrapper';
import Button from '../src/containers/Button';
import Message from '../src/containers/Message';
import DynamicHead from '../src/components/DynamicHead';

const About = () => (
  <div>
    <DynamicHead
      title="About"
      description="About page | School project"
      keywords="About school project CPE"
    />
    <p className="example">About NextJS</p>
    <Button text="About Button" message="About OK!" />
    <Message />
  </div>
);

export default Wrapper(About);
