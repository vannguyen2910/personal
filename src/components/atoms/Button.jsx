// variant: contained | outlined | text | soft
// color: primary | secondary | error ...   size: sm | md | lg
// Renders an <a> when `href` is given, otherwise a <button>.
export default function Button({
  variant = 'contained',
  color = 'primary',
  size = 'md',
  icon = false,
  href,
  className = '',
  children,
  ...rest
}) {
  const classes = ['btn', `btn--${variant}`, `btn--${color}`, `btn--${size}`, icon && 'btn--icon', className]
    .filter(Boolean)
    .join(' ')
  if (href) return <a className={classes} href={href} {...rest}>{children}</a>
  return <button className={classes} {...rest}>{children}</button>
}
