import React from 'react'
import Link from 'next/link'
import styles from '/styles/galeria.module.css'
import SliderVideos from '/components/SliderVideos.jsx'

function Galeria() {
	return (
		<div id="Galeria">

			<div className={styles.titulo}><img src="/img/camera (1).png" alt=""/></div>
			<div className={styles.parent}>
				<div>
					<img src="/img/jugo.webp" alt="producto" />
				</div>
				<div>
					<img src="/img/jengibre.webp" alt="producto" />
				</div>
				<div>
					<img src="/img/frutilla.jpg" alt="producto" />
				</div>
				<div>
					<img src="/img/kale.webp" alt="producto" />
				</div>
			</div>


			
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
			</div>

		</div>
	)
}

export default Galeria