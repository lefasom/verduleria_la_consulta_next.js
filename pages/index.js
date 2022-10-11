import Image from 'next/image'
import Link from 'next/link'
// Node.js program to demonstrate the
// process.traceDeprecation Property

// Include process module
// const process = require('process');

// // Printing process.traceDeprecation property value
// console.log(process.traceDeprecation);


import Nav from '../components/Nav.jsx'
import Info from '../components/Info.jsx'
import WSP from '../components/Whatsapp.jsx'
import Blog from '../components/Blog.jsx'
import Producto from '../components/Producto.jsx'
import Pie from '../components/Pie.jsx'
import Mail from '../components/Mail.jsx'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.flex}>
      <div className={styles.container}>
      {/*  <div className={styles.buscador} >
           <Link href="/Mapa">
              <Image layout="fill" src="/img/mapa2.png" />
          </Link>
        </div> */}
        <Nav />
        <Producto />
        {/*<Info />*/}
        <WSP />
        <Blog />
        <Mail />
        <Pie />
      </div>
    </div>
  )
}
