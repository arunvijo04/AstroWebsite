import React from "react";

function Contact() {
  return (
    <div className="w-[1252px] h-[417px] relative">
    <div className="w-[1252px] h-[417px] left-0 top-0 absolute bg-gradient-to-b from-[#eae4e9] to-[#d5c6e0]">
        <div className="w-[626px] left-[35px] top-[57px] absolute"><span class="text-[#2d2d2d] text-[32px] font-normal font-['Castoro Titling'] leading-[42px]">Reach Out to the </span><span class="text-[#192a51] text-[32px] font-normal font-['Castoro Titling'] leading-[42px]">STARS!</span></div>
        <div className="w-[1204px] h-[108px] left-[35px] top-[121px] absolute justify-start items-start gap-[142px] inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-[42px] inline-flex">
                <div className="self-stretch h-[108px] flex-col justify-start items-start gap-[42px] flex">
                    <div className="self-stretch text-[#2d2d2d] text-[17px] font-normal font-['Epilogue'] leading-[27px]">Reach out to us across the galaxy! <br/><br/>Share your thoughts, ask a question, or simply say hello. <br/>Send us a message and let's explore the universe together!</div>
                </div>
            </div>
        </div>
        <div className="w-[108px] h-6 left-[35px] top-[257px] absolute">
            <div className="w-6 h-6 left-[42px] top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden" />
            <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden">
                <div className="w-[18px] h-[18px] relative">
                </div>
            </div>
            <div className="w-6 h-6 left-[84px] top-0 absolute flex-col justify-start items-start inline-flex overflow-hidden" />
        </div>
    </div>
    <div className="w-[364px] h-12 left-[786px] top-[161px] absolute">
        <div className="w-[364px] h-12 left-0 top-0 absolute bg-white rounded-lg border border-[#d9d9d9]" />
        <div className="left-[17.84px] top-[14.40px] absolute text-[#5e548e] text-base font-normal font-['Syne'] leading-none">Email</div>
        <div className="w-[26.17px] h-[26.40px] left-[318.20px] top-[10.80px] absolute  overflow-hidden" />
    </div>
    <div className="w-[364px] h-12 left-[786px] top-[78px] absolute">
        <div className="w-[364px] h-12 left-0 top-0 absolute bg-white rounded-lg border border-[#d9d9d9]" />
        <div className="left-[17.84px] top-[14.40px] absolute text-[#5e548e] text-base font-normal font-['Syne'] leading-none">Name</div>
    </div>
    <div className="w-[261px] h-11 p-2.5 left-[837px] top-[260px] absolute bg-gradient-to-r from-[#d5c6e0] to-[#9f86c0] rounded-[20px] shadow-[0px_6px_8.699999809265137px_0px_rgba(159,134,192,0.45)] justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-[22px] font-semibold font-['Syne'] leading-9">Submit</div>
    </div>
</div>
  );
}

export default Contact;

