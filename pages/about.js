import React from 'react';

import Wrapper from '../helpers/Wrapper';
import Button from '../containers/Button';
import Message from '../containers/Message';
import DynamicHead from '../components/DynamicHead';

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
