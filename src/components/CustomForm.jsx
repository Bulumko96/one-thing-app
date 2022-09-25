// library imports

import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const Form = ({ thing, handleInput, handleSubmit }) => {
  return (
    <>
      <h1 className="text-3xl sm:text-6xl font-bold text-center">
        What is your “One Thing”?
      </h1>
      <form
        className="flex ring-4 rounded-md ring-white focus-within:ring-stone-100 focus-within:ring-offset-4 bg-inherit text-black"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="bg-inherit rounded-md font-sans text-white py-2 px-6 focus:outline-none text-xl sm:text-2xl placeholder:text-white  appearance-none w-full"
          placeholder="Enter One Thing"
          autoFocus
          maxLength="64"
          value={thing}
          onInput={handleInput}
        />
        <button className="bg-inherit rounded-md font-sans text-white  py-2 px-6 focus:outline-none text-xl sm:text-2xl placeholder:text-white appearance-none w-full">
          <ArrowRightCircleIcon className="h-12 w-12 pointer-events-none" />
        </button>
      </form>
    </>
  );
};

export default Form;
