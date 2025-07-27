'use client';

export default function SuggestSongButton() {
  const handleClick = () => {
    const url = 'https://forms.gle/pMTxebtFZ1qGcBBQ8'; 
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
          className="w-[300px] h-[30px] text-[0.8rem] border border-doradoboda text-grayblack rounded flex items-center justify-center hover:bg-doradoboda hover:text-white transition"
    >
      SUGERIR CANCIÓN
    </button>
  );
}
