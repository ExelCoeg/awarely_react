import React from 'react'
interface ErrorMessageProps{
    error?: string;
}
export const ErrorMessage: React.FC<ErrorMessageProps> = ({error=""}) => {
  return (
    <div className="p-4 mb-4 text-red-800 bg-red-100 border border-red-300 rounded-lg">
        {error}
    </div>
  )
}

export default ErrorMessage