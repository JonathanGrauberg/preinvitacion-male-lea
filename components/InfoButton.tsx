'use client';

export default function InfoButton() {
  const handleClick = () => {
    const phone = '+5493434662121'; 
    const message = encodeURIComponent(
      '¡Hola Male y Lea! 🎶 Quiero saber don puedo alojarme para asistir a su casamiento. ¿Me pueden ayudar?'
    );
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="inline-block text-[1vh] tracking-wide uppercase border border-marron-100 text-grayblack px-6 py-2 rounded transition-colors duration-300 hover:bg-marron-100 hover:text-black"
    >
      MÁS INFORMACIÓN
    </button>
  );
}
