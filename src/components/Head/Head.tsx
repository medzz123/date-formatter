import NextHead from 'next/head';
import React from 'react';

import { HeadProps } from './Head.models';

const Head: React.FC<HeadProps> = (props) => {
  const {
    title = 'Date Formatter',
    description = 'Test date formatting abilities and API for Dayjs, Moment and Date-fns',
    keywords = 'Date Formatter, Day Js, Moment, Date-fns, Javascript, Typescript, Npm',
  } = props;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </NextHead>
  );
};

export default Head;
