// place files you want to import through the `$lib` alias in this folder.

export const icsTemplate = `
VERSION:2.0
PRODID:-//ical.marudot.com//iCal Event Maker
CALSCALE:GREGORIAN
BEGIN:VTIMEZONE
TZID:Europe/Berlin
LAST-MODIFIED:20240422T053451Z
TZURL:https://www.tzurl.org/zoneinfo-outlook/Europe/Berlin
X-LIC-LOCATION:Europe/Berlin
BEGIN:DAYLIGHT
TZNAME:CEST
TZOFFSETFROM:+0100
TZOFFSETTO:+0200
DTSTART:19700329T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZNAME:CET
TZOFFSETFROM:+0200
TZOFFSETTO:+0100
DTSTART:19701025T030000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTAMP:20241109T121045Z
UID:1731154211030-33327@ical.marudot.com
DTSTART;TZID=Europe/Berlin:20241113T120000
DTEND;TZID=Europe/Berlin:20241113T130000
SUMMARY:Check your fridge!
URL:checkyofridge.net
DESCRIPTION:Look through your fridge and note everything that needs to be eaten soon!
LOCATION:Home
TRANSP:TRANSPARENT
X-MICROSOFT-CDO-BUSYSTATUS:TENTATIVE
CLASS:PRIVATE
BEGIN:VALARM
ACTION:DISPLAY
DESCRIPTION:AVvvvv
TRIGGER:-PT30M
END:VALARM
END:VEVENT
END:VCALENDAR
`

export const download = (filename, text) => {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/calendar;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
