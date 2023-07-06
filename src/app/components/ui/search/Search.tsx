import { FC } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import styles from './Search.module.css'

const Search: FC = () => {
	return (
		<div className={styles.search}>
			<input placeholder='Поиск' className={styles.search__input} />
			<div className={styles.search__buttonBlock}>
				<button className={styles.search__button}>
					<AiOutlineSearch className={styles.button__icon} />
				</button>
			</div>
		</div>
	)
}

export default Search
