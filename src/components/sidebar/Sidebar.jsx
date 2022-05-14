import "./sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AddTaskIcon from '@mui/icons-material/AddTask';
import HistoryIcon from '@mui/icons-material/History';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import MarkChatUnreadRoundedIcon from '@mui/icons-material/MarkChatUnreadRounded';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <HomeIcon/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <LeaderboardIcon/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Users</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PersonIcon/>
                            List users
                        </li>
                        <li className="sidebarListItem">
                            <EditIcon/>
                            Edit user
                        </li>
                        <li className="sidebarListItem">
                            ....
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Requests</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <AddTaskIcon/>
                            Open request
                        </li>
                        <li className="sidebarListItem">
                            <TaskAltIcon/>
                            Closed request
                        </li>
                        <li className="sidebarListItem">
                            <FormatListBulletedIcon/>
                            List request
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            Create notifications
                        </li>
                        <li className="sidebarListItem">
                            List notifications
                        </li>
                        <li className="sidebarListItem">
                            Schedule notifications
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Contact</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MarkChatUnreadRoundedIcon/>
                            Open chat
                        </li>
                        <li className="sidebarListItem">
                            <AddCommentRoundedIcon/>
                            Request chat
                        </li>
                        <li className="sidebarListItem">
                            <HistoryIcon/>
                            History
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Survey</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            Open chat
                        </li>
                        <li className="sidebarListItem">
                            Request chat
                        </li>
                        <li className="sidebarListItem">
                            History
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
