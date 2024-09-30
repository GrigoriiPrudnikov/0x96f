export function formatDate(date: Date): string {
  const givenDate = new Date(date)
  const today = new Date()

  today.setHours(0, 0, 0, 0)

  const yesterday = new Date(today)
  yesterday.setDate(today.getDate() - 1)

  function isSameDay(d1: Date, d2: Date) {
    return d1.toDateString() === d2.toDateString()
  }

  const formattedDate = givenDate
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    .replaceAll('/', '.')
  const formattedTime = givenDate.toLocaleTimeString('en-GB', {
    minute: '2-digit',
    hour: '2-digit',
    hour12: false,
  })

  if (isSameDay(givenDate, today)) return formattedTime
  if (isSameDay(givenDate, yesterday)) return 'Yesterday'

  return formattedDate
}
