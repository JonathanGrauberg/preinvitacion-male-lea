'use client';

export default function SuggestSongButton() {
  const handleClick = () => {
    const url = 'https://forms.gle/pMTxebtFZ1qGcBBQ8'; 
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
