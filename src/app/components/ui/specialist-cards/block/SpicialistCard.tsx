import { Avatar } from 'antd'
import { FC, useState } from 'react'
import { GoPeople } from 'react-icons/go'
import { LiaDumbbellSolid } from 'react-icons/lia'
import { PiGraduationCapLight } from 'react-icons/pi'
import { ISpecialist } from '../../../../../models/ISpecialist'
import Rscoin from '../../rscoin/Rscoin'
import styles from './SpecialistCard.module.css'
import SpecialistModalWindow from '../modal/SpecialistModalWindow'

interface SpicialistCardProps {
	spec: ISpecialist
}

const SpicialistCard: FC<SpicialistCardProps> = ({ spec }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const showModal = () => {
		setIsModalOpen(true)
	}

	return (
		<li className={styles.card}>
			<div className={styles.card__fio}>
				<Avatar
					src='https://t3.ftcdn.net/jpg/01/85/04/84/360_F_185048418_X1kohHSgyAbPJQxPHurs4uXCTmcRSNAp.jpg'
					className={styles.card__avatar}
					size={90}
				/>
				<h1 className={styles.fio__name}>
					{spec.surname} {spec.name} <br /> {spec.familyname}
				</h1>
			</div>
			<div className={styles.card__coins}>
				<Rscoin />
				<p className={styles.coins__count}>{spec.rscoin}</p>
			</div>
			<div className={styles.card__statistics}>
				<div className={styles.statistics__header}>
					<PiGraduationCapLight className='w-7 h-7 text-[#FA9d12]' />
					<p className='text-[#FA9d12] text-[13px]'>
						Научные достижения - {spec.science} шт.
					</p>
				</div>
				<div className='w-[100%] h-2 mt-3 rounded-full bg-[#FA9d12]'></div>
				<div className={styles.statistics__header}>
					<GoPeople className='w-6 h-6 text-[#f8d108]' />
					<p className='text-[#f8d108] ml-0.5 text-[13px]'>
						Общественная деятельность - {spec.social} шт.
					</p>
				</div>
				<div className='w-[50%] h-2 mt-3 rounded-full bg-[#f8d108]'></div>
				<div className={styles.statistics__header}>
					<LiaDumbbellSolid className='w-7 h-7 text-[#EF6b01]' />
					<p className='text-[#EF6b01] text-[13px]'>
						Спортивные достижения - {spec.sport} шт.
					</p>
				</div>
				<div className='w-[80%] h-2 mt-3 rounded-full bg-[#EF6b01]'></div>
			</div>
			<div className={styles.card__buttonBlock}>
				<button onClick={showModal} className={styles.card__button}>
					Подробнее
				</button>
			</div>
			<SpecialistModalWindow  isOpen={isModalOpen} spec={spec} />
		</li>
	)
}

export default SpicialistCard
