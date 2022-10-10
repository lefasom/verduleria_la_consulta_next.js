import Image from 'next/image'
import Link from 'next/link'


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
        <div className={styles.buscador} >
           <Link href="/Mapa">
              <img src="/img/mapa2.png" alt=""/>
          </Link>
        </div> 
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
