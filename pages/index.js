import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import UseStateHook from './useStateHook'
import Cart from './shopingCart'



export default function Home() {
  return (
    <>
      <Head>
        <title>hooks</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
      </Head>
      {/* <UseStateHook/> */}
      <Cart></Cart>
    </>


  )
}
