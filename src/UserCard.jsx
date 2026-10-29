function UserCard({ user: { name, age, occupation } }) {
  
  return (
    <div className="bg-green-300 p-3 text-lg rounded-md">
      <h2><span className="font-bold">Name:</span> {name}</h2>
      <p><span className="font-bold">Age:</span> {age} </p>
      <p><span className="font-bold">Occupation:</span> {occupation} </p>
    </div>
  )
}
export default UserCard;
