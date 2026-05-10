export function getInitials(name: string): string {
  const uppers = name.match(/[A-Z]/g) ?? []
  if (uppers.length >= 2) return uppers[0] + uppers[1]
  return name.charAt(0).toUpperCase()
}
