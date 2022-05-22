import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <div className="detailTopContainer">
                <h1>
                    Add new user
                </h1>
                <div className="buttonContainer">
                    <button className="buttonDetailPage">Submit</button>
                    <button className="buttonDetailPage">Cancel</button>
                </div>
            </div>
            <form action="/users" className="newUserForm">
                <div className="newUserInput">
                    <label>Username</label>
                    <input type="text" placeholder="Input username" />
                </div>
                <div className="newUserInput">
                    <label>Fullname</label>
                    <input type="text" placeholder="Input fullname" />
                </div>

                <div className="newUserInput">
                    <label>Phone number</label>
                    <input type="text" placeholder="Input phone number" />
                </div>
                <div className="newUserInput">
                    <label>Email</label>
                    <input type="text" placeholder="Input username" />
                </div>
                <div className="newUserInput">
                    <label>Location</label>
                    <input type="text" placeholder="Input username" />
                </div>
                <div className="newUserInput">
                    <label>Gender</label>
                    <div>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="male" value="male" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="female" value="female" />
                    </div>
                </div>
                <div className="newUserInput">
                    <button className="buttonSubmitForm buttonDetailPage">Submit</button>
                </div>
            </form>
        </div>
    )
}
