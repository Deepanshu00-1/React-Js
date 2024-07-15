
function UserInfo(props){
    return(
        <>
            <div className="header">
                <div className="name">
                    <h2>{props.Name}</h2>
                    <h3>{props.jobRole}</h3>
                </div>
                <div className="social">
                    <p className="portfolio">{props.Portfolio}</p><div className="verticalLine"></div>
                    <p className="linkedin">{props.Linkedin}</p><div className="verticalLine"></div>
                    <p className="github">{props.Github}</p><br/>
                    <div className="Address">
                    <p className="phone">Phone: {props.phoneNo}</p>
                    <p className="email">{props.email}</p>
                    <p className="address">{props.address}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserInfo