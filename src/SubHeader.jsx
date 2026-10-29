import Counter from "./Counter.jsx";

function SubHeader({ userCount, onSettingUserCount, onAddingUser }) {
  return (
    <section className="p-2 flex justify-end md:justify-center shadow-md h-20 rounded-md">
      <Counter userCount={userCount} onSettingUserCount={onSettingUserCount}
        onAddingUser={onAddingUser}
      />
    </section>
  );
}
export default SubHeader;
