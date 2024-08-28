import Userlist from "../components/Userlist";
import FriendRequest from "../components/FriendRequest";
import Friends from "../components/Friends";
const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[2fr,4fr] gap-x-0 lg:gap-x-5 xl:gap-x-10">
        <div className="w-full bg-[#FBFBFB]">
          <Userlist />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 gap-x-3 lg:gap-x-5 xl:gap-x-10 md:pr-10">
          <div className="w-full h-full bg-white rounded-md">
            <FriendRequest />
          </div>
          <div className="w-full h-full bg-white rounded-md">
            <Friends />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
