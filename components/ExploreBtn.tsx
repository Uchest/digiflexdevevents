'use client';
import Image from 'next/image';

const ExploreBtn = () => {
  const handleClick = () => {
    const element = document.getElementById('events');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      id="explore-btn"
      onClick={handleClick}
      className="mt-7 mx-auto flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
    >
      Explore Events
      <Image
        src="/icons/arrow-down.svg"
        alt="arrow-down"
        width={24}
        height={24}
      />
    </button>
  );
};

export default ExploreBtn;
