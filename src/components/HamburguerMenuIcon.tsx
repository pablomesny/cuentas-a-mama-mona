import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPressed: boolean;
}

export const HamburguerMenuIcon = ({
  className,
  isPressed,
  ...props
}: Props) => {
  return (
    <div>
      <button className={`relative ${className}`} {...props}>
        <div className="relative flex h-[40px] w-[40px] transform items-center justify-center overflow-hidden rounded-full bg-slate-700 shadow-md transition-all duration-200 ">
          <div
            className={`flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300 ${
              isPressed ? '-translate-x-1.5 rotate-180' : ''
            }`}
          >
            <div
              className={`h-[2px] w-7 origin-left transform bg-white transition-all delay-150 duration-300 ${
                isPressed ? 'w-2/3 rotate-[42deg]' : ''
              }`}
            ></div>
            <div
              className={`h-[2px] w-7 transform rounded bg-white transition-all duration-300 ${
                isPressed ? 'translate-x-10' : ''
              }`}
            ></div>
            <div
              className={`h-[2px] w-7 origin-left transform bg-white transition-all delay-150 duration-300 ${
                isPressed ? 'w-2/3 -rotate-[42deg]' : ''
              }`}
            ></div>
          </div>
        </div>
      </button>
    </div>
  );
};
