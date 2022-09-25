// library imports

import { CheckCircleIcon } from '@heroicons/react/24/solid'

const CustomButton = ({ text, handleCompletedThing }) => {
  return (
    <button
      className='flex items-center space-x-3 text-2xl bg-white px-6 py-3 rounded-md text-red-600 focus:outline-none focus-visible:ring-4 ring-white   hover:opacity-80 transition-opacity disabled:opacity-50'
      autoFocus
      onClick={handleCompletedThing}
    >
      <span className="pointer-events-none">{text}</span>
      <CheckCircleIcon className='pointer-events-none w-12 h-12' />
    </button>
  )
}

export default CustomButton