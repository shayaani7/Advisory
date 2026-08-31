import { useInView } from '../hooks/useInView'

function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  variant = 'up',
  once = true,
  threshold,
  rootMargin,
  ...rest
}) {
  const [ref, inView] = useInView({ once, threshold, rootMargin })

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant}${inView ? ' is-inview' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
