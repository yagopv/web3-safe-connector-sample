import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import styles from '../styles/Home.module.css';
import React from 'react';

const SafeInfo = dynamic(() => import('../components/SafeInfo'), {
  ssr: false,
});

export default function Home() {
  return <SafeInfo />;
}
