import { Avatar } from 'antd'
import { FC } from 'react'
import { GoPeople } from 'react-icons/go'
import { LiaDumbbellSolid } from 'react-icons/lia'
import { PiGraduationCapLight } from 'react-icons/pi'
import { ISpecialist } from '../../../../../models/ISpecialist'
import Rscoin from '../../rscoin/Rscoin'
import styles from './SpecialistCard.module.css'
import CountUp from 'react-countup'

interface SpicialistCardProps {
	spec: ISpecialist
	index: number
}

const SpicialistCard_list: FC<SpicialistCardProps> = ({ spec, index }) => {
	return (
		<li className={styles.card}>
			<div className={styles.card__fio}>
				<Avatar
					src='https://t3.ftcdn.net/jpg/01/85/04/84/360_F_185048418_X1kohHSgyAbPJQxPHurs4uXCTmcRSNAp.jpg'
					className={styles.card__avatar}
					size={100}
				/>
				<div className={styles.fio__name}>
					<h1>
						{spec.surname} {spec.name} {spec.familyname}
					</h1>
					<div className={styles.card__coins}>
						<Rscoin />
						<p className={styles.coins__count}>{spec.rscoin}</p>
					</div>
				</div>
			</div>

			<div className={styles.card__statistics}>
				<div className={styles.statistics__header}>
					<PiGraduationCapLight className='w-7 h-7 text-[#FA9d12]' />
					<p className='text-[#FA9d12] text-[14px]'>
						Научные достижения - <CountUp end={spec.science} /> шт.
					</p>
				</div>
				<div className='w-[100%] h-2 mt-3 mb-3  rounded-full bg-[#FA9d12]'></div>
				<div className={styles.statistics__header}>
					<GoPeople className='w-6 h-6 text-[#f8d108]' />
					<p className='text-[#f8d108] ml-0.5 text-[14px]'>
						Общественная деятельность - <CountUp end={spec.social} /> шт.
					</p>
				</div>
				<div className='w-[50%] h-2 mt-3 mb-3 rounded-full bg-[#f8d108]'></div>
				<div className={styles.statistics__header}>
					<LiaDumbbellSolid className='w-7 h-7 text-[#EF6b01]' />
					<p className='text-[#EF6b01] text-[14px]'>
						Спортивные достижения - <CountUp end={spec.sport} /> шт.
					</p>
				</div>
				<div className='w-[80%] h-2 mt-3 rounded-full bg-[#EF6b01]'></div>
			</div>
			<div className={styles.card__buttonBlock}>
				<button className={styles.card__button}>Подробнее</button>
			</div>
		</li>
	)
}

export default SpicialistCard_list
