import Image from 'next/image'
import Link from 'next/link'

import Nav from '../components/Nav.jsx'
import WSP from '../components/Whatsapp.jsx'
import Blog from '../components/Blog.jsx'
import Producto from '../components/Producto.jsx'
import Pie from '../components/Pie.jsx'
import Mail from '../components/Mail.jsx'
import Nosotros from '../components/Nosotros.jsx'
import Galeria from './Galeria.jsx'


import styles from '../styles/Home.module.css'




export default function Home() {



  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <Nav />
        <Producto />
        <Galeria />
        <Nosotros />
        <WSP />
        <Blog />
        <Mail />
        <Pie />
      </div>
    </div>
  )


}
