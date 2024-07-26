

function Header1(){
    const doSomething= () =>{
        return(
            <h1>Hello it's a logo</h1>
        )
    }
    return(
        <header className="header1">
            <div className="logo">
                <h3>{doSomething()}</h3>
            </div>
            <div className="nav">
                <h2>Courses</h2>
                <h2>Lectures</h2>
                <h2>Guidence</h2>
            </div>
            <div className="login">
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </header>
    )
}
export default Header1