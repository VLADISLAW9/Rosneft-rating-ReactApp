import React, { FC } from 'react'
import { ISpecialist } from '../../../../../models/ISpecialist'
import { Avatar, Modal } from 'antd'
import { PiGraduationCapLight } from 'react-icons/pi'
import { GoPeople } from 'react-icons/go'
import { LiaDumbbellSolid } from 'react-icons/lia'
import styles from './SpecialistModalWindow.module.css'
import Rscoin from '../../rscoin/Rscoin'

interface SpecialistModalWindowProps {
	spec: ISpecialist
	isOpen: boolean
	handleCancel: () => void
}

const SpecialistModalWindow: FC<SpecialistModalWindowProps> = ({
	spec,
	handleCancel,
	isOpen,
}) => {
	return (
		<Modal
			title='Детализация рейтина'
			onCancel={handleCancel}
			footer={null}
			width={800}
			open={isOpen}
		>
			<li className={styles.card}>
				<div className={styles.card__fio}>
					<Avatar
						src='https://t3.ftcdn.net/jpg/01/85/04/84/360_F_185048418_X1kohHSgyAbPJQxPHurs4uXCTmcRSNAp.jpg'
						className={styles.card__avatar}
						size={120}
					/>
					<div className={styles.info}>
						<h1 className={styles.info__name}>
							{spec.surname} {spec.name} {spec.familyname}
						</h1>
						<h1 className={styles.info__work}>
							Должность:{' '}
							<span className='font-medium'>Инженер 1 категории</span>
						</h1>
						<h1 className={styles.info__work}>
							Подразделение:{' '}
							<span className='font-medium'>Отдел очень серьезных дел</span>
						</h1>
						<h1 className={styles.info__work}>
							Email: <span className='font-medium'>pochta@mail.ru</span>
						</h1>
					</div>
				</div>
				<div className={styles.card__coins}>
					<Rscoin />
					<p className={styles.coins__count}>{spec.rscoin}</p>
				</div>
				<div className={styles.card__statistics}>
					<div className='w-[160px] bg-stone-300 rounded-full h-[160px]'></div>
				</div>
				<div className={styles.card__achivements}>
					<h1 className={styles.achivements__header}>Достижения и награды</h1>
					<ul className={styles.achivements__items}>
						<li className='h-[220px] bg-slate-200 w-[190px]'></li>
						<li className='h-[220px] bg-slate-200 w-[190px]'></li>
						<li className='h-[220px] bg-slate-200 w-[190px]'></li>
						<li className='h-[220px] bg-slate-200 w-[190px]'></li>
						<li className='h-[220px] bg-slate-200 w-[190px]'></li>
						<li className='h-[220px] bg-slate-200 w-[190px]'></li>
					</ul>
				</div>
			</li>
		</Modal>
	)
}

export default SpecialistModalWindow
