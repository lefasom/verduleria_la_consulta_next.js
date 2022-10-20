import Image from 'next/image'
import Link from 'next/link'

import Nav from '../components/Nav.jsx'
import WSP from '../components/Whatsapp.jsx'
import Blog from '../components/Blog.jsx'
import Producto from '../components/Producto.jsx'
import Pie from '../components/Pie.jsx'
import Mail from '../components/Mail.jsx'
import Galeria from './Galeria.jsx'


import styles from '../styles/Home.module.css'

export default function Home() {
  // const AnyReactComponent = ({text})=><div>{text}</div>
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom:11
  // }

  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <Nav />
        <Producto />
        <Galeria />
        <WSP />
        <Blog />
        <Mail />
        <Pie />
      </div>
    </div>
  )
}
