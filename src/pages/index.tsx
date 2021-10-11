import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import {Header} from '../components/Header/Header'

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
      <Header />
    </>
  );
};

export default Home;
