import { FC } from 'react'
import styles from './Footer.module.css'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__logoBlock}>
				<img className={styles.logoBlock__logo} src='/Logo.svg' />
			</div>
		</div>
	)
}

export default Footer
