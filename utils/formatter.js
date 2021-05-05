export const formatDate = (date) => {
  const newDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  return newDate
}
