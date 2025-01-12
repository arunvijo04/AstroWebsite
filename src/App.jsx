import React from "react";
import Hero from "./components/Hero";
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import img4 from "./assets/img4.png"


function App() {
  return (
    <div className="max-w-screen-xl mx-auto bg-[#eae4e9]  overflow-hidden">
    <Hero />
    <div className="w-[565px] h-[174px] left-[342px] top-[770px] absolute text-center text-[#192a51] text-[55px] font-normal font-felix">aBOUT us</div>
    <div className="w-[565px] h-[174px] left-[343px] top-[1353px] absolute text-center text-[#192a51] text-[55px] font-normal font-felix">eVENTS</div>
    <div className="w-[1209px] h-[640px] px-6 pt-[42px] pb-[71px] left-[22px] top-[2619px] absolute bg-gradient-to-r from-[#c9def4] via-[#f5ccd4] to-[#d5c6e0] rounded-[25px] flex-col justify-start items-center gap-[54px] inline-flex overflow-hidden">
        <div className="text-center text-[#192a51] text-[55px] font-normal font-felix leading-[42px]">Club gallery</div>
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
    <div className="w-[1252px] h-[60px] left-[-1px] top-[4186px] absolute bg-gradient-to-b from-[#9f86c0] to-[#d5c6e0]  overflow-hidden">
        <div className="w-[210px] h-5 left-[16px] top-[15px] absolute text-[#666666] text-base font-normal font-['Syne'] leading-[27px]">astroclub@rset</div>
        <div className="left-[1104px] top-[18px] absolute text-[#666666] text-base font-normal font-['Syne'] leading-normal">Copyright © 2024 </div>
        <div className="w-20 h-[41px] left-[586px] top-[9px] absolute">
            <div className="w-5 h-5 left-[30px] top-0 absolute  overflow-hidden" />
            <div className="left-0 top-[14px] absolute text-[#192a51] text-sm font-normal font-['Epilogue'] leading-[27px]">Back to top</div>
        </div>
    </div>
    <div className="h-[326px] px-[115px] pt-[100px] pb-[66px] left-0 top-[3378px] absolute bg-[#eae4e9] flex-col justify-center items-center gap-8 inline-flex">
        <div className="text-center text-[#192a51] text-5xl font-normal font-garamond leading-[56px]">Join the Cosmic Journey!</div>
        <div className="text-center text-[#2d2d2d] text-lg font-normal font-['Syne'] leading-normal">Ready to explore the wonders of the universe? Become a part of our astronomy club today<br/>and discover a whole new world!<br/></div>
    </div>
    <div className="w-[1252px] h-[417px] left-0 top-[3769px] absolute">
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
    <img className="w-[709px] h-[649px] left-[992px] top-[706px] absolute" src={img4} />
    <img className="w-[662px] h-[702px] left-[294px] top-[3202px] absolute" src={img2} />
    <img className="w-[709px] h-[649px] left-[-266px] top-[706px] absolute" src={img3} />
    <div className="left-[242px] top-[926px] absolute text-center text-[#192a51] text-2xl font-normal font-garamond">Empowering curiosity and fostering a passion for the cosmos, our astronomy club<br/> at Manipal strives to create an inclusive space for students to explore the wonders of <br/>the universe. Through stargazing events, educational outreach, and collaborative<br/> projects, we aim to inspire a deeper appreciation for astronomy and cultivate a<br/> community that celebrates the beauty of the night sky. Join us on a journey of <br/>discovery as we explore the mysteries of the cosmos together.</div>
    <div className="w-[1300px] h-[939px] left-[-23px] top-[1587px] absolute">
        <div className="w-[354px] h-[371px] left-0 top-0 absolute bg-[#a6a7ab]/40 rounded-[30px]" />
        <div className="w-[354px] h-[371px] left-[946px] top-0 absolute bg-[#a6a7ab]/40 rounded-[30px]" />
        <div className="w-[354px] h-[371px] left-[473px] top-0 absolute bg-[#a6a7ab]/40 rounded-[30px]" />
        <div className="w-[329px] h-[450px] left-[105px] top-[489px] absolute bg-[#a6a7ab]/40 rounded-[30px]" />
    </div>
    <div className="w-[261px] h-11 p-2.5 left-[450px] top-[2430px] absolute bg-gradient-to-r from-[#d5c6e0] to-[#9f86c0] rounded-[20px] shadow-[0px_6px_8.699999809265137px_0px_rgba(159,134,192,0.45)] justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-[22px] font-semibold font-['Syne'] leading-9">Explore</div>
    </div>
</div>
  );
}

export default App;