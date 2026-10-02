export default function Radio({ label, color = 'primary', size, className = '', ...inputProps }) {
  const classes = ['radio', `radio--${color}`, size === 'sm' && 'radio--sm', className].filter(Boolean).join(' ')
  return (
    <label className={classes}>
      <input type="radio" {...inputProps} />
      <span className="radio__control"></span>
      <span className="radio__label">{label}</span>
    </label>
  )
}
