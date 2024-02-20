export const Discover = () => {
  return (
    <div className="grid grid-cols-2 gap-4 place-content-center h-screen w-screen">
      <div className="flex flex-col items-end self-center">
        <h1 className="text-4xl p-4">Discover new music</h1>
        <div className="flex justify-around w-[350px] p-4">
          <div className="bg-[#212027] py-2 px-5">
            <img src="src/assets/microphone.svg"></img>
            <p>Charts</p>
          </div>
          <div className="bg-[#212027] py-2 px-5">
            <img src="src/assets/albums.svg"></img>
            <p>Albums</p>
          </div>
          <div className="bg-[#212027] py-2 px-5">
            <img src="src/assets/more.svg"></img>
            <p>More</p>
          </div>
        </div>
        <p className="p-4">
          By joining you can benefit by listening to the latest albums released.
        </p>
      </div>
      <div>
        <img src="src/assets/covers.jpg"></img>
      </div>
    </div>
  );
};
