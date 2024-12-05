export function formatDate(date: Date): string {
  const formattedDate = date
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
    .replaceAll('/', '.')
  const formattedTime = date.toLocaleTimeString('en-GB', {
    minute: '2-digit',
    hour: '2-digit',
    hour12: false,
  })

  return `${formattedDate} at ${formattedTime}`
}
