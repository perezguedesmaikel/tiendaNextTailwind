import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/NavBar';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Tienda de Ropa Online</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex justify-center m-2'>
     <NavBar/>
     </div>
    
     
    </div>
  )
}
