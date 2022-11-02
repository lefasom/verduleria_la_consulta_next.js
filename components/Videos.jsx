import React, { useState } from 'react'
import Link from 'next/link'
import styles from '/styles/galeria.module.css'

function Videos() {
  const [valor, setValor] = useState('ver-mas')


  if(valor=="ver-mas"){
    return (
      <div id="Galeria">
        <div className={styles.titulo}><img src="/img/video.png" alt=""/></div>
        <div className={styles.parent}>
          <div>
            <video src="/img/video2.mp4" alt="La Consulta" controls/>
          </div>
          <button onClick={()=>setValor('ver-menos')}>
            ver más 
          </button>
        </div>
      </div>
  )
  }else{
  return (
    <div id="Galeria">    
      <div className={styles.titulo}><img src="/img/video.png" alt=""/></div>
      <div className={styles.parent}>
        <div>
          <video src="/img/video2.mp4" alt="La Consulta" controls/>
        </div>
        <div>
          <video src="/img/video1.mp4" alt="La Consulta"  controls/>
        </div>
        <div>
          <video src="/img/video1.mp4" alt="La Consulta"  controls/>
        </div>
        <div>
          <video src="/img/video2.mp4" alt="La Consulta" controls/>
        </div>
          <button onClick={()=>setValor('ver-mas')}>
          ver ménos
        </button>
      </div>
    </div>
  )
}
}

export default Videos