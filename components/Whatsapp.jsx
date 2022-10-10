import styles from '/styles/whatsapp.module.css'

function Whatsapp() {
	return (
		<div className={styles.containerWsp}>
			<a href="https://api.whatsapp.com/send?phone=2622432057">
				<img src="/img/wps2.png" alt="" />
			</a>
			
		</div>
	)
}

export default Whatsapp