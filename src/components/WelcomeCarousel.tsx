import { useEffect, useState } from "react";

const items: App.CarouselItem[] = [
  {
    label: "slider_1",
    desc: "Desc of slider_1",
    alt: "slider_1",
    src: "images/carousel/slider_1.webp",
  },
  {
    label: "slider_2",
    desc: "Desc of slider_2",
    alt: "slider_2",
    src: "images/carousel/slider_2.webp",
  },
  {
    label: "slider_3",
    desc: "Desc of slider_3",
    alt: "slider_3",
    src: "images/carousel/slider_3.webp",
  },
  {
    label: "slider_4",
    desc: "Desc of slider_4",
    alt: "slider_4",
    src: "images/carousel/slider_4.webp",
  },
  {
    label: "slider_5",
    desc: "Desc of slider_5",
    alt: "slider_5",
    src: "images/carousel/slider_5.webp",
  },
  {
    label: "slider_6",
    desc: "Desc of slider_6",
    alt: "slider_6",
    src: "images/carousel/slider_6.webp",
  },
];

export const WelcomeCarousel = () => {
  let [currentItem, setCurrentItem] = useState(0);

  function prevItem() {
    if (items.length === 0) return;

    if (currentItem === 0) setCurrentItem(items.length - 1);
    else {
      setCurrentItem(currentItem - 1);
    }
  }
  function nextItem() {
    if (items.length === 0) return;

    if (currentItem === items.length - 1) setCurrentItem(0);
    else {
      setCurrentItem(currentItem + 1);
    }
  }

  useEffect(() => {}, [null]);

  return (
    <>
      <div className="relative">
        <div className="relative w-full overflow-hidden ">
          <img
            src={items[currentItem].src}
            className="w-[100vw] h-[1000px] max-h-[100vh] transition-all"
            alt="..."
          />
        </div>

        <div className="absolute bottom-20 left-0 right-0 z-[2] list-none flex justify-center gap-2 p-0">
          {items.map((i, index: number) => (
            <button
              key={`bot_${index}`}
              type="button"
              className={`w-8 h-1 ${currentItem === index ? "bg-red-400" : "bg-red-200"}`}
              onClick={() => setCurrentItem(index)}
            />
          ))}
        </div>

        <PrevButton handle={prevItem} />
        <NextButton handle={nextItem} />
      </div>
    </>
  );
};

const PrevButton = (props: { handle: Function }) => {
  const { handle } = props;

  return (
    <button
      className="absolute left-10 top-[50%] p-2 rounded-full text-red-200"
      type="button"
      onClick={() => handle()}
    >
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-10 w-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        ></path>
      </svg>
    </button>
  );
};

const NextButton = (props: { handle: Function }) => {
  const { handle } = props;
  return (
    <button
      className="absolute right-10 top-[50%] p-2 rounded-full text-red-200"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="h-10 w-10"
        onClick={() => handle()}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        ></path>
      </svg>
    </button>
  );
};
