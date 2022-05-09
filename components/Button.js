import { ButtonType } from '../lib/types.ts'

// type Props = {
//   buttonType: ButtonType;
//   onButtonClick: Function;
// };

export const Button = ({
  buttonType,
  onButtonClick,
  children
}) => {
  return (
    <button
      aria-label="button"
      type="button"
      className={`md:w-auto md:inline-flex py-3 px-2 md:px-12 rounded-full w-full ${
        buttonType === ButtonType.PRIMARY
          ? 'bg-purple-900 text-white dark:bg-gray-200 dark:text-midnight'
          : buttonType === ButtonType.SECONDARY
          ? 'bg-gray-200 dark:bg-midnight text-purple-900 dark:text-white'
          : null
      } items-center justify-center general-ring-state font-medium`}
      onClick={() => onButtonClick()}
    >
      {children}
    </button>
  );
};
