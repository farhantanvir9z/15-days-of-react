function Counter({ userCount, onSettingUserCount, onAddingUser }) {
  return (
    <div className="w-48 flex justify-around items-center">
      <span className="bg-red-300   size-16 rounded-full flex justify-center text-white font-bold items-center">
        {userCount}
      </span>
      <button
        className="bg-blue-500 w-20 h-10 rounded-sm text-white text-2xl"
        onClick={() => {
          onSettingUserCount(() => userCount + 1);
          onAddingUser();
        }}
      >
        +
      </button>
    </div>
  );
}
export default Counter;
