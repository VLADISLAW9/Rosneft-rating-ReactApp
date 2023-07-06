import { FC } from 'react'
import styles from './Rscoin.module.css'

const Rscoin: FC = () => {
	return (
		<div className={styles.coin}>
			<svg
				className='translate-y-1'
				xmlns='http://www.w3.org/2000/svg'
				width='28'
				height='35'
				viewBox='0 0 24 31'
				fill='none'
			>
				<g filter='url(#filter0_d_124_4)'>
					<path
						d='M10.6983 22.4H8.8V13.1156H10.6983V22.4ZM12.9497 22.4H11.0502V11.2H12.9497V22.4ZM15.2 22.4H13.3013V13.1156H15.2V22.4Z'
						fill='white'
					/>
					<path
						d='M10.647 13.0389H8.67532V2.2485H10.647V13.0389ZM8.31024 16L6.33678 14.0159V4.49755H8.31024M5.97186 13.7515L4 11.9545V6.78223H5.97186M12.9854 10.8289H11.0125V0H12.9854V10.8289ZM15.3227 13.0389H13.3506V2.2485H15.3227V13.0389ZM15.6892 16L17.6616 14.0159V4.49755H15.6892M18.0281 13.7515L20 11.9545V6.78223H18.0281'
						fill='white'
					/>
				</g>
				<defs>
					<filter
						id='filter0_d_124_4'
						x='0'
						y='0'
						width='24'
						height='30.4'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset dy='4' />
						<feGaussianBlur stdDeviation='2' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
						/>
						<feBlend
							mode='normal'
							in2='BackgroundImageFix'
							result='effect1_dropShadow_124_4'
						/>
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_124_4'
							result='shape'
						/>
					</filter>
				</defs>
			</svg>
		</div>
	)
}

export default Rscoin
