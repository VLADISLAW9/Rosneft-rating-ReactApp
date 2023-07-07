import { FC, useEffect, useState } from 'react'
import { GoPeople } from 'react-icons/go'
import { LiaDumbbellSolid } from 'react-icons/lia'
import { PiGraduationCapLight } from 'react-icons/pi'
import ErrorMessage from '../../app/components/ui/error/ErrorMessage'
import Loader from '../../app/components/ui/loader/Loader'
import SpicialistCard from '../../app/components/ui/specialist-cards/block/SpicialistCard'
import SpicialistCard_list from '../../app/components/ui/specialist-cards/list/SpicialistCard_list'
import { useFetching } from '../../hooks/use-feching'
import { ISpecialist } from '../../models/ISpecialist'
import SpecialistsService from '../../services/SpecialistsService'
import styles from './Rating.module.css'

const RatingPage: FC = () => {
	const [loading, setLoading] = useState(true)

	const [specialists, setSpecialists] = useState<ISpecialist[]>([])
	const sortedSpecialists = specialists.sort((a, b) => b.rscoin - a.rscoin)
	const bestScience = specialists.sort((a, b) => b.science - a.science)[0]
	const bestSocial = specialists.sort((a, b) => b.social - a.social)[0]
	const bestSport = specialists.sort((a, b) => b.sport - a.sport)[0]

	const [fetchAllSpecialists, isLoadingSpecialists, isErrorSpecialists] =
		useFetching(async () => {
			const response = await SpecialistsService.getSpecialists()
			setSpecialists([...response.data])
		})

	useEffect(() => {
		fetchAllSpecialists()
		setTimeout(() => {
			setLoading(false)
		}, 500)
	}, [])

	return (
		<div className={styles.container}>
			<h1 className={styles.container__header}>Рейтинг молодых специалистов</h1>
			{loading ? (
				<div className='mt-32'>
					<Loader />
				</div>
			) : isErrorSpecialists ? (
				<ErrorMessage message='Произошла ошибка' />
			) : specialists.length > 0 ? (
				<ul className={styles.container__rating}>
					<ul className={styles.rating__best}>
						<li>
							<div className='flex justify-center mb-2'>
								<PiGraduationCapLight className='w-12 h-12 text-[#FA9d12]' />
							</div>
							<SpicialistCard key={bestScience.id} spec={bestScience} />
						</li>
						<li>
							<div className='flex justify-center mb-2'>
								<GoPeople className='w-12 h-12 text-[#f8d108]' />
							</div>
							<SpicialistCard key={bestSocial.id} spec={bestSocial} />
						</li>
						<li>
							<div className='flex justify-center mb-2'>
								<LiaDumbbellSolid className='w-12 h-12 text-[#EF6b01]' />
							</div>
							<SpicialistCard key={bestSport.id} spec={bestSport} />
						</li>
					</ul>
					<ul className={styles.rating__rest}>
						{sortedSpecialists.map((spec, index) => (
							<SpicialistCard_list index={index} key={spec.id} spec={spec} />
						))}
					</ul>
				</ul>
			) : null}
		</div>
	)
}

export default RatingPage
