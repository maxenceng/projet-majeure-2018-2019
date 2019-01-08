import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const DynamicHelmet = ({ title, description, keywords }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
  </Head>
);

DynamicHelmet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
};

export default DynamicHelmet;
