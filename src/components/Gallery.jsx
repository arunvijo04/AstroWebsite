import React from "react";

function Gallery() {
  return (
    <div className="w-[1209px] h-[640px] px-6 pt-[42px] pb-[71px] bg-gradient-to-r from-[#c9def4] via-[#f5ccd4] to-[#d5c6e0] rounded-[25px] flex-col justify-start items-center gap-[54px] inline-flex overflow-hidden">
    <div className="text-center text-[#192a51] text-[55px] font-normal font-['Felix Titling'] leading-[42px]">Club gallery</div>
    <div className="w-[1117px] h-[403px] bg-white justify-start items-start gap-6 inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <img className="self-stretch h-[330px]" src="https://via.placeholder.com/356x330" />
            <div className="self-stretch h-[65px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-[#2d2d2d] text-xl font-semibold font-['Epilogue'] leading-[30px]">chenda melam</div>
                <div className="self-stretch"></div>
            </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <img className="self-stretch h-[330px]" src="https://via.placeholder.com/356x330" />
            <div className="self-stretch h-[65px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-[#2d2d2d] text-xl font-semibold font-['Epilogue'] leading-[30px]">pookalam</div>
                <div className="self-stretch"></div>
            </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <img className="self-stretch h-[330px]" src="https://via.placeholder.com/356x330" />
            <div className="self-stretch h-[65px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-[#2d2d2d] text-xl font-semibold font-['Epilogue'] leading-[30px]">kathakali</div>
                <div className="self-stretch"></div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Gallery;
