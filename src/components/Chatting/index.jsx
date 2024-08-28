import { SmileIcon } from "../../svg/Smile";
import { GalleryIcon } from "../../svg/Gallery";
const Chatting = () => {
  return (
    <>
      <div className="w-[100%] bg-white rounded-md shadow-md overflow-hidden my-2">
        <div className="py-4 bg-[#212121] px-6">
          <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-orange-200"></div>
            <div>
              <span className="text-white font-fontBold">Nguyen Van A</span>
            </div>
          </div>
        </div>
        <div className="h-[425px] bg-white px-6 py-3 overflow-y-auto scrollbar-thin scrollbar-webkit">
          sdasd
        </div>
        <div className="bg-[#F5F5F5] py-1.5 md:py-4 px-1.5 md:px-0">
          <div className="bg-white md:w-[532px] rounded-md mx-auto py-1.5 md:py-3 px-1.5 md:px-0 flex items-center gap-x-0.5 md:gap-x-3 justify-between">
            <div className="flex items-center md:justify-center gap-x-0.5 md:gap-x-3 w-[20%] md:w-[15%">
              <SmileIcon />
              <GalleryIcon />
            </div>
            <input
              type="text"
              placeholder="Type a message"
              className="w-[60%] md:w-[60%] outline-none"
            />
            <div className="w-[20%] md:w-[15%] md:pr-2">
              <button className="w-full py-2 bg-[#4A81D3] text-white rounded-md font-fontBold text-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatting;
