import Container from './container'
import cn from 'classnames'
import { PROJECT_PATH } from '../lib/constants'

type Props = {
  showAlert?: boolean
  alertMessage?: string
}

const Alert = ({ showAlert, alertMessage }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'bg-red-600 border-red-400 text-white': showAlert,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {showAlert && (
            <>
              <p className="font-bold">
              {
                alertMessage && alertMessage
              }
              </p>
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert
