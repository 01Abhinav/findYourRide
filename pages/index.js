import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/header";
import CardHolder from "../components/card-holder";
import Navbar from "../components/navbar";
//import Header from '../components/header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <CardHolder />
      <footer className={styles.footer}>
        <Link href="/temp">made by abhinav</Link>
      </footer>
    </div>
  );
}
