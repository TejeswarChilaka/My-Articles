export default function Register(){
    return(
       <form className="register">
        <input type="text" placeholder="name"></input>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <input type="password" placeholder="confirm-password"></input>
        <button>Register</button>
       </form>
    )
}