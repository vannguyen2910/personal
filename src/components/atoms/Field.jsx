import { useId } from 'react'

// Floating-label text input. Extra props go to the <input>.
export default function Field({ label, size, error = false, disabled = false, hint, className = '', ...inputProps }) {
  const id = useId()
  const classes = ['input-field', size === 'sm' && 'input-field--sm', error && 'input-field--error', disabled && 'input-field--disabled', className]
    .filter(Boolean)
    .join(' ')
  return (
    <>
      <div className={classes}>
        <input id={id} placeholder=" " disabled={disabled} {...inputProps} />
        <label htmlFor={id}>{label}</label>
      </div>
      {hint && <p className="form-hint">{hint}</p>}
    </>
  )
}
