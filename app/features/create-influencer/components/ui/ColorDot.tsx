interface ColorDotProps {
  color: string | null;
}

export default function ColorDot({ color }: ColorDotProps) {
  if (!color) {
    return (
      <span className="w-5 h-5 flex items-center justify-center text-white/50 text-lg shrink-0">
        +
      </span>
    );
  }

  return (
    <span
      className="w-5 h-5 rounded-full shrink-0 border border-white/20"
      style={{ backgroundColor: color }}
    />
  );
}