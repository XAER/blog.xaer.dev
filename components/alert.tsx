import Container from './container'

type Props = {
  showAlert?: boolean
  alertMessage?: string
}

const Alert = ({ showAlert, alertMessage }: Props) => {
  if (!showAlert) return null;

  return (
    <div className="border-b bg-red-600 border-red-400 text-white">
      <Container>
        <div className="py-2 text-center text-sm">
          <p className="font-bold">{alertMessage}</p>
        </div>
      </Container>
    </div>
  );
}

export default Alert
