export default function Friend({friend}){
    const {name, email} = friend
    // console.log(friend)
 return(
    <div className="box">
        <h4>Name: {name}</h4>
        <p>E-Mail: {email}</p>
    </div>
 )
}