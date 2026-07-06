import * as Icons from "lucide-react";

/**
 * DynamicIcon — Renders a Lucide icon by name string.
 * Falls back to a Circle icon if not found.
 */
export default function DynamicIcon({ name, size = 24, className = "", ...props }) {
  const IconComponent = Icons[name] || Icons.Circle;
  return <IconComponent size={size} className={className} {...props} />;
}
