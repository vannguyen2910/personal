export default function Toggle({ label, color = 'primary', size, labelAtEnd = false, className = '', ...inputProps }) {
  const classes = ['toggle', `toggle--${color}`, size === 'sm' && 'toggle--sm', labelAtEnd && 'toggle--end', className]
    .filter(Boolean)
    .join(' ')
  return (
    <label className={classes}>
      <input type="checkbox" {...inputProps} />
      <span className="toggle__track"><span className="toggle__thumb"></span></span>
      <span className="toggle__label">{label}</span>
    </label>
  )
}
