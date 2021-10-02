import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Button } from '../components/button/Button';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next.js 100</title>
        <meta
          name="Description"
          content="Build a PWA with Next.js to achieve 100 lighthouse score."
        />
      </Head>
      <div>Next.js 100</div>
      <Button />
    </>
  );
};

export default Home;
