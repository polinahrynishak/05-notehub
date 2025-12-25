interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({
  message = "Something went wrong. Please try again later.",
}: ErrorMessageProps) => {
  return (
    <div>
      <p>⚠️ {message}</p>
    </div>
  );
};

export default ErrorMessage;
