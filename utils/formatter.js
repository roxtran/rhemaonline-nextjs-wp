export const formatDate = (date) => {
  const newDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  return newDate
}

// Shorten a string to less than maxLength characters without truncating words.
export const shortenString = (str, maxLength, separator = ' ') => {
  if (str.length >= maxLength) {
    str = str.substring(0, str.lastIndexOf(separator, maxLength))
  }
  return str
}
