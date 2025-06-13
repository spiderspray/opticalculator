import type { AnchorHTMLAttributes, FC, ReactNode } from 'react';

type CustomProps = {
  href: string;
  children: ReactNode;
};

type Props = CustomProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const SimpleLink: FC<Props> = ({ href, children, ...rest }) => (
  <a href={href} target='_blank' rel='noopener noreferrer' {...rest}>
    {children}
  </a>
);
