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
          className="w-[170px] h-[30px] text-[0.8rem] border border-doradoboda text-grayblack rounded flex items-center justify-center hover:bg-doradoboda hover:text-white transition"
    >
      Agendar celebración
    </button>
  );
}
