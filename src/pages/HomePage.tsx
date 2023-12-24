import { useClientStore } from '../store/clientStore';

export const HomePage = () => {
  const { clients, addClient } = useClientStore();

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
