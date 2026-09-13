interface MaterialIconProps {
  name: string;
  filled?: boolean;
  className?: string;
  size?: number;
}

export function MaterialIcon({ name, filled = false, className = '', size }: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
        fontSize: size ? `${size}px` : undefined,
      }}
    >
      {name}
    </span>
  );
}
