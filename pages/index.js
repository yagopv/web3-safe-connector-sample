import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import SafeInfo from '../components/SafeInfo';
import SafeInfoWeb3Modal from '../components/SafeInfoWeb3Modal';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <SafeInfo />
      <SafeInfoWeb3Modal />
    </>
  );
}
