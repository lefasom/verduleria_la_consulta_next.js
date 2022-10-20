import React from 'react'
import Link from 'next/link'
import styles from '/styles/galeria.module.css'


function Galeria() {
	return (
		<div id="Galeria">
{/*			<Link href="/">INICIO</Link>
			<Link href="/Videos">Reels</Link>*/}
			
			<div className={styles.titulo}><img src="/img/video.png" alt=""/></div>
			<div className={styles.parent}>
				<div>
					<video src="/img/video1.mp4" alt="La Consulta"  controls/>
				</div>
				<div>
					<video src="/img/video2.mp4" alt="La Consulta" controls/>
				</div>
			</div>

			<div className={styles.titulo}><img src="/img/camera (1).png" alt=""/></div>
			<div className={styles.parent}>
				<div>
					<img src="/img/jengibre.webp" alt="producto" />
				</div>
				<div>
					<img src="/img/aa.jpg" alt="producto" />
				</div>
			</div>

			<div className={styles.titulo}><img src="/img/gif.png" alt=""/></div>
			<div className={styles.parent}>
				<div>
					<img src="/img/gif.webp" alt="gifs" />
				</div>
				<div>
					<img src="/img/gif2.webp" alt="gifs" />
				</div>
			</div>
		</div>
	)
}

export default Galeria