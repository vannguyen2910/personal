// variant: filled | outlined | soft   color: default | primary | secondary | info | success | warning | error
export default function Chip({ variant = 'filled', color = 'default', size, onDelete, className = '', children }) {
  const classes = ['chip', `chip--${variant}`, `chip--${color}`, size === 'sm' && 'chip--sm', className]
    .filter(Boolean)
    .join(' ')
  return (
    <span className={classes}>
      {children}
      {onDelete && (
        <span className="chip__delete" role="button" onClick={onDelete}>✕</span>
      )}
    </span>
  )
}
