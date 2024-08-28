import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import avaterImage from "../../assets/avater.png";
const Friends = () => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((user) => user.login.loggedIn);
  const location = useLocation();
  const navigateTo = useNavigate();
  const db = getDatabase();
  const [friends, setFriends] = useState([]);

  // Show friend
  useEffect(() => {
    setIsLoading(true);
    const starCountRef = ref(db, "friends");
    onValue(starCountRef, (snapshot) => {
      let data = [];
      snapshot.forEach((item) => {
        if (
          item.val().senderId === user.uid ||
          item.val().receiverId === user.uid
        ) {
          data.push({ ...item.val(), id: item.key });
        }
      });
      setFriends(data);
      setIsLoading(false);
    });
  }, [db, user.uid]);
  return (
    <div
      className={`${
        location.pathname === "/"
          ? "rounded-md md:shadow-md md:mt-5 md:mb-5 bg-white"
          : "bg-[#FBFBFB]"
      } px-5 lg:px-8 pt-3 pb-5  max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-webkit`}
    >
      <h1 className="text-xl font-fontBold text-black">
        Friends {friends.length ? `(${friends.length})` : null}
      </h1>
      {isLoading ? (
        <>
          <p className="mt-5">Loading...</p>
        </>
      ) : (
        <>
          {friends.length ? (
            <>
              {friends.map((item, index) => (
                <div
                  className="flex items-center justify-between mt-5"
                  key={index}
                >
                  <div className="flex items-center gap-x-2">
                    <div className="w-12 h-12 rounded-full bg-black overflow-hidden">
                      {user.uid === item.receiverId ? (
                        <img
                          src={item.senderProfile || avaterImage}
                          alt={item.senderName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={item.receiverProfile || avaterImage}
                          alt={item.receiverName}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <h3 className="text-lg font-fontRegular text-black">
                      {user.uid === item.receiverId
                        ? item.senderName
                        : item.receiverName}
                    </h3>
                  </div>
                  {location.pathname === "/" && (
                    <div className="text-black cursor-pointer flex gap-x-2 items-center">
                      <button
                        onClick={() => {
                          navigateTo("/messages");
                        }}
                        className="text-white bg-[#4A81D3] focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center"
                      >
                        Message
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </>
          ) : (
            <>
              <p className="mt-5">No Friends</p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Friends;
