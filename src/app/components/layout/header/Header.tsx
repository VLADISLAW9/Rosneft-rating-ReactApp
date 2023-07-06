import { Avatar } from 'antd'
import { FC } from 'react'
import Search from '../../ui/search/Search'
import styles from './Header.module.css'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__logoBlock}>
				<img className={styles.logoBlock__logo} src='/Logo.svg' />
			</div>
			<ul className={styles.header__navbar}>
				<li className={styles.navbar__link}>Ссылка</li>
				<li className={styles.navbar__link}>Ссылка</li>
				<li className={styles.navbar__link}>Ссылка</li>
				<li className={styles.navbar__link}>Ссылка</li>
				<li className={styles.navbar__link}>Ссылка</li>
			</ul>
			<div>
				<Search />
			</div>
			<div className={styles.header__user}>
				<Avatar
					src='https://t3.ftcdn.net/jpg/01/85/04/84/360_F_185048418_X1kohHSgyAbPJQxPHurs4uXCTmcRSNAp.jpg'
					size={48}
				/>
				<p className={styles.user__name}>Васильев Василий Васильевич</p>
			</div>
		</div>
	)
}

export default Header
