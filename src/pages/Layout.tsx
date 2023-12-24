import { FC, ReactNode } from 'react';

import { Navbar } from '../components/Navbar';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
