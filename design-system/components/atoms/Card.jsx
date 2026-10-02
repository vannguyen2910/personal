// elevation: 1 | 4 | 8 | 12 | 16 | 20 | 24   interactive lifts on hover   accentBar adds the coloured top bar
export default function Card({ elevation = 1, interactive = false, accentBar = false, as: Tag = 'div', className = '', children, ...rest }) {
  const classes = ['card', `card--z${elevation}`, interactive && 'card--interactive', accentBar && 'card--accent-bar', className]
    .filter(Boolean)
    .join(' ')
  return <Tag className={classes} {...rest}>{children}</Tag>
}
