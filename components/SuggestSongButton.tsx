'use client';

export default function SuggestSongButton() {
  const handleClick = () => {
    const phone = '+5493434662121'; 
    const message = encodeURIComponent(
      '¡Hola Male y Lea! 🎶 Quiero sugerir esta canción para la fiesta: '
    );
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="inline-block text-[1vh] tracking-wide uppercase border border-marron-100 text-grayblack px-6 py-2 rounded transition-colors duration-300 hover:bg-marron-100 hover:text-black"
    >
      Sugerir canción
    </button>
  );
}
