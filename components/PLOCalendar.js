import { useEffect } from 'react'

export default function PCOCalendar() {
  useEffect(() => {
    callCalendar()
  }, [])

  function callCalendar() {
    var rs = document.createElement('script')
    rs.type = 'text/javascript'
    rs.async = true
    rs.src =
      '//calendar.planningcenteronline.com/widgets/eJxj4ajmsGLLz2RSmWvFlVqcX1BSzW7FVuypxJ-YkxOfWpaaV1LMZsXmGmLFVprJfCyN2Yq7ILEoMbe4mgEA5k8RKQ==077396d85b25afa5d2593b07cded4bd445f36ba3.js'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(rs, s)
  }

  return (
    <div id='resources_calendar_widget' class='styled'>
      <div class='loader'>Loading...</div>
    </div>
  )
}
