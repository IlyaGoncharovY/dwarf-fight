import {FC} from 'react';

import {ArenaPvpItem} from '@/pages/arenaPVP/item/ArenaPVPItem.tsx';

interface IArenaPVP {
  onNavigate: (path: string) => void;
}

export const ArenaPVP: FC<IArenaPVP> = ({ onNavigate }) => {

  const handleBackNavigate = () => {
    onNavigate('/');
  };

  return (
    <div>
      ArenaPVP
      <ArenaPvpItem/>
      <button onClick={handleBackNavigate}>back</button>
    </div>
  );
};
