import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost-light';

type CommonProps = { variant?: Variant; size?: 'md' | 'lg'; children: ReactNode; className?: string };

type LinkProps = CommonProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>;
type NativeButtonProps = CommonProps & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>;

/** Botón reutilizable. Con `href` se renderiza como enlace; sin él, como <button>. */
export function Button(props: LinkProps | NativeButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children, ...rest } = props;
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
