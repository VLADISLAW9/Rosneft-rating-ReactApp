import React, { FC } from 'react'
import { ISpecialist } from '../../../../../models/ISpecialist'
import { Modal } from 'antd'

interface SpecialistModalWindowProps {
	spec: ISpecialist
	isOpen: boolean
	handleCancel: () => void
}

const SpecialistModalWindow: FC<SpecialistModalWindowProps> = ({
	spec,
	isOpen,
}) => {
	return (
		<Modal footer={null}  open={isOpen}>
			SpecialistModalWindow
		</Modal>
	)
}

export default SpecialistModalWindow
