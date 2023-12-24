import { Link } from 'react-router-dom';

interface Props {
  handleToggleDrawer: () => void;
  isDrawerClosing: boolean;
}

export const Drawer = ({ handleToggleDrawer, isDrawerClosing }: Props) => {
  return (
    <nav
      className={`${
        isDrawerClosing ? 'animate-fade-in-right' : 'animate-fade-in-left'
      } absolute left-0 top-0 h-screen w-full bg-orange-300`}
    >
      <ul className="flex h-full flex-col justify-center gap-20 pl-14">
        <li>
          <Link
            className="text-3xl font-semibold"
            to="/"
            onClick={handleToggleDrawer}
          >
            Clientes
          </Link>
        </li>
        <li>
          <Link
            className="text-3xl font-semibold"
            to="/"
            onClick={handleToggleDrawer}
          >
            Calculadora
          </Link>
        </li>
      </ul>
    </nav>
  );
};
