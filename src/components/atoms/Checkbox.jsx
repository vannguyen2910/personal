export default function Checkbox({ label, color = 'primary', size, className = '', ...inputProps }) {
  const classes = ['checkbox', `checkbox--${color}`, size === 'sm' && 'checkbox--sm', className].filter(Boolean).join(' ')
  return (
    <label className={classes}>
      <input type="checkbox" {...inputProps} />
      <span className="checkbox__control"></span>
      <span className="checkbox__label">{label}</span>
    </label>
  )
}
