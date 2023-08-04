import './ErrorMessage.scss';

export const ErrorMessage:React.FC<{message: string}> = ({message}): JSX.Element => {
  return (
    <span className="error">{message}</span>
  )
}