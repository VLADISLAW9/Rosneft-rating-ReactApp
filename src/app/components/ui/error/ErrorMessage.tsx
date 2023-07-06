import { FC } from 'react'

interface ErrorMessageProps {
	message: string
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
	return <div>{message}</div>
}

export default ErrorMessage
