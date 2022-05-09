import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            Home
                        </li>
                        <li className="sidebarListItem">
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Users</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            List users
                        </li>
                        <li className="sidebarListItem">
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            Home
                        </li>
                        <li className="sidebarListItem">
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            Home
                        </li>
                        <li className="sidebarListItem">
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            Sales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
