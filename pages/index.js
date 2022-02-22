import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import styles from '../styles/Home.module.css';

const SafeInfo = dynamic(() => import('../components/SafeInfo'), {
  ssr: false,
});

const SafeInfoWeb3Modal = dynamic(
  () => import('../components/SafeInfoWeb3Modal'),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <SafeInfo />
      <SafeInfoWeb3Modal />
    </>
  );
}
