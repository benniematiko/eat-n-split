import React from 'react'

const initialFriends = [
  {
    id:118836,
    name: "Dotel",
    image: "",
    balance: -7,
  },
  {
    id:933372,
    name: "Sarah",
    image: "",
    balance: 20,
  },
  {
    id:499476,
    name: "Antoni",
    image: "",
    balance: 0,
  }
];

const FriendsList = () => {

    const friends = initialFriends;
  return (
    <div>

        <ul>
           {friends.map((friend)=>(
            <Friend friend={friend} key={friend.id} />
           ))}
        </ul>
      
    </div>
  )
}




const Friend = ({friend}) => {

    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && <p className="red">You owe {friend.name} Kshs {Math.abs(friend.balance)}</p>}
            {friend.balance > 0 && <p className="green">{friend.name} owes you Kshs {Math.abs(friend.balance)}</p>}
            {friend.balance === 0 && <p className="red">You and {friend.name} are even </p>}

            <button className="button">Select</button>

        </li>
    )

}

export default FriendsList
