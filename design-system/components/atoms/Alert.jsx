// variant: filled | outlined   severity: info | success | warning | error
export default function Alert({ variant = 'outlined', severity = 'info', icon = '!', className = '', children }) {
  return (
    <div className={['alert', `alert--${variant}`, `alert--${severity}`, className].filter(Boolean).join(' ')}>
      <span className="alert__icon">{icon}</span>
      <span className="alert__message">{children}</span>
    </div>
  )
}
