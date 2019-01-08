import React from 'react';
import Link from 'next/link';

import './index.scss';

import { routes } from '../../helpers/routes.json';


export default () => (
  <header className="Nav">
    {routes.map(route => (
      <Link key={route} href={`/${route}`}>
        {route}
      </Link>
    ))}
  </header>
);
