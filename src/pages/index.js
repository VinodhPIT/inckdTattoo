import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import SearchField from "@/components/searchField";
import { useGlobalState } from "@/context/Context";
import {useRouter} from 'next/router'
import HomLoading from '@/components/Loading/homeLoading'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router =useRouter()
  const {
    state ,serverLoad
  } = useGlobalState();
  // href={`}

  const test = (tets)=>{
    serverLoad(true)
    
router.push(`/search?term=${""}&category=${tets}`)

  }


  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        
        <SearchField isPage={"all"} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "20%",
            "margin-top": "30px",
          }}
        >
          <Link
           href={'/'}
            onClick={() => test("tattoo")}
          >
            Tattoo
          </Link>
          <Link
           href={'/'}
            onClick={() => test("artist")}
          >
            Artist
          </Link>
          <Link
             href={'/'}
            onClick={() => test("flash")}
          >
            Flash
          </Link>
        </div>


       
{state.serverLoad &&   <HomLoading/> } 

      </main>
    </>
  );
}
