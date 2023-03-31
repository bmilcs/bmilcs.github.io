import { ReactNode } from 'react';

type TProps = {
  tooltip: string;
  children: ReactNode;
};

function DevIcon({ tooltip: name, children }: TProps) {
  return (
    <div className='dev-icon' data-tooltip={name}>
      {children}
    </div>
  );
}

export default DevIcon;
