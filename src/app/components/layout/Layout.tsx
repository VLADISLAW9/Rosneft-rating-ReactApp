import { FC, ReactNode } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import styles from './Layout.module.css';

interface LayoutProps{
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
	return (
		<div className={styles.layout}>
			<Header/>
			<main className={styles.layout__content}>
				{children}
			</main>
			<Footer/>
		</div>
	)
}

export default Layout
