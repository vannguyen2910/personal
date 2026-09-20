// size: xs | sm | md | lg | xl   tone: purple | yellow | dark | success | ...
export default function Avatar({ size = 'md', tone, src, alt = '', className = '', children }) {
  const classes = ['avatar', `avatar--${size}`, tone && `avatar--${tone}`, src && 'avatar--image', className]
    .filter(Boolean)
    .join(' ')
  return (
    <div className={classes}>
      {src ? <img src={src} alt={alt} /> : <div className="avatar__inner">{children}</div>}
    </div>
  )
}

export function AvatarGroup({ small = false, children }) {
  return <div className={`avatar-group${small ? ' avatar-group--sm' : ''}`}>{children}</div>
}
