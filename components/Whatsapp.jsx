import styles from '/styles/whatsapp.module.css'
import Image from 'next/image'

function Whatsapp() {
	return (
		<div className={styles.containerWsp}>
			<a href="https://api.whatsapp.com/send?phone=2622432057">
				<Image layout="fill" src="/img/wps2.png" alt="" />
			</a>
			
		</div>
	)
}

export default Whatsapp