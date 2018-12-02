import React from 'react';

import Wrapper from '../helpers/Wrapper';
import Button from '../containers/Button';
import Message from '../containers/Message';
import DynamicHead from '../components/DynamicHead';

const Index = () => (
  <div>
    <DynamicHead
      title="Index"
      description="Index page | School project"
      keywords="index school project CPE"
    />
    <p className="example">Hello NextJS</p>
    <Button text="Hello Button" message="Redux OK!" />
    <Message />
  </div>
);

export default Wrapper(Index);
