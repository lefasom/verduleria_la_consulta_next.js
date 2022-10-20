import React from 'react'
import Link from 'next/link'
import styles from '/styles/videos.module.css'


function Videos() {
	return (
		<div>
			<Link href="/">INICIO</Link>
			<Link href="/Galeria">Fotos</Link>
			<div className={styles.videoContainer}>
				<div>
					<video src="/img/jengibre.webp" alt="" />
				</div>
				<div>
					<video src="/img/aa.jpg" alt="" />
				</div>
				<div>
					<video src="/img/jengibre.webp" alt="" />
				</div>
				<div>
					<video src="/img/aa.jpg" alt="" />
				</div>
				<div>
					<video src="/img/jengibre.webp" alt="" />
				</div>
				<div>
					<video src="/img/jengibre.webp" alt="" />
				</div>
			</div>
		</div>
	)
}

export default Videos