'use client';

export default function CalendarButton() {
  const handleClick = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('macintosh')) {
      // Dispositivo Apple: descarga archivo .ics
      window.open('/casamiento.ics', '_blank');
    } else {
      // Resto: abre Google Calendar
      const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Casamiento+Male+y+Lea&dates=20260214T210000Z/20260215T020000Z&details=¡Nos+casamos!&location=Santa+Fe,+Argentina`;
      window.open(url, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-block text-[1vh] tracking-wide uppercase border border-marron-100 text-grayblack px-6 py-2 rounded transition-colors duration-300 hover:bg-marron-100 hover:text-black"
    >
      Agendar celebración
    </button>
  );
}
