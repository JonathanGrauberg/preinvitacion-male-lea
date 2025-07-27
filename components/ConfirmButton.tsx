'use client';

export default function ConfirmButton() {
  const handleClick = () => {
    const url = 'https://forms.gle/c1Dfi2KMqA4GQLoC8'; 
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-marron-100 text-white px-4 py-2 mt-9 rounded-md font-ligth text-[0.8rem] sm:text-base hover:bg-white hover:text-black transition"
    >
      CONFIRMAR ASISTENCIA A LA CELEBRACIÓN
    </button>
  );
}
