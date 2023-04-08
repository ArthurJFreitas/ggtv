import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = ({ children, meta }: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased bg-black">
    {meta}
    <main className="mx-auto max-w-screen-md">{children}</main>
  </div>
);

export { Main };
