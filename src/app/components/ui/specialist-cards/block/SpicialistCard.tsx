import { Avatar, Progress, Statistic } from 'antd'
import { FC, useState, useEffect } from 'react'
import { GoPeople } from 'react-icons/go'
import { LiaDumbbellSolid } from 'react-icons/lia'
import { PiGraduationCapLight } from 'react-icons/pi'
import { ISpecialist } from '../../../../../models/ISpecialist'
import Rscoin from '../../rscoin/Rscoin'
import styles from './SpecialistCard.module.css'
import SpecialistModalWindow from '../modal/SpecialistModalWindow'
import CountUp from 'react-countup'
import { convertToProcent } from '../../../../../utils/convertToProcent'

interface SpicialistCardProps {
	spec: ISpecialist
}

const SpicialistCard: FC<SpicialistCardProps> = ({ spec }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [currentScience, setCurrentScience] = useState(0)
	const [currentSocial, setCurrentSocial] = useState(0)
	const [currentSport, setCurrentSport] = useState(0)

	const showModal = () => {
		setIsModalOpen(true)
	}

	const handleCancel = () => {
		setIsModalOpen(false)
	}

	useEffect(() => {
		const duration = 2 // Animation duration in seconds
		const interval = 10 // Interval between progress updates in milliseconds
		const steps = Math.ceil((duration * 1000) / interval)
		const targetScience = spec.science
		const targetSocial = spec.social
		const targetSport = spec.sport
		let currentStep = 0

		const scienceIncrement = targetScience / steps
		const socialIncrement = targetSocial / steps
		const sportIncrement = targetSport / steps

		const intervalId = setInterval(() => {
			setCurrentScience(prevScience => prevScience + scienceIncrement)
			setCurrentSocial(prevSocial => prevSocial + socialIncrement)
			setCurrentSport(prevSport => prevSport + sportIncrement)
			currentStep++

			if (currentStep >= steps) {
				clearInterval(intervalId)
				setCurrentScience(targetScience)
				setCurrentSocial(targetSocial)
				setCurrentSport(targetSport)
			}
		}, interval)

		return () => {
			clearInterval(intervalId)
		}
	}, [])

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
						Научные достижения - <CountUp end={spec.science} /> шт.
					</p>
				</div>
				<Progress
					percent={convertToProcent(
						currentScience,
						currentSocial + currentSport + currentScience
					)}
					status='active'
					strokeColor={'#f8d108'}
					showInfo={false}
				/>
				<div className={styles.statistics__header}>
					<GoPeople className='w-6 h-6 text-[#f8d108]' />
					<p className='text-[#f8d108] ml-0.5 text-[13px]'>
						Общественная деятельность - <CountUp end={spec.social} />
						шт.
					</p>
				</div>
				<Progress
					percent={convertToProcent(
						currentSocial,
						currentSocial + currentSport + currentScience
					)}
					status='active'
					strokeColor={'#f8d108'}
					showInfo={false}
				/>
				<div className={styles.statistics__header}>
					<LiaDumbbellSolid className='w-7 h-7 text-[#EF6b01]' />
					<p className='text-[#EF6b01] text-[13px]'>
						Спортивные достижения - <CountUp end={spec.sport} /> шт.
					</p>
				</div>
				<Progress
					percent={convertToProcent(
						currentSport,
						currentSocial + currentSport + currentScience
					)}
					status='active'
					strokeColor={'#EF6b01'}
					showInfo={false}
				/>
			</div>
			<div className={styles.card__buttonBlock}>
				<button onClick={showModal} className={styles.card__button}>
					Подробнее
				</button>
			</div>
			<SpecialistModalWindow
				handleCancel={handleCancel}
				isOpen={isModalOpen}
				spec={spec}
			/>
		</li>
	)
}

export default SpicialistCard
