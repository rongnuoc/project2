import "./sidebar.css"
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TaskRoundedIcon from '@mui/icons-material/TaskRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import HistoryIcon from '@mui/icons-material/History';
import AddCommentRoundedIcon from '@mui/icons-material/AddCommentRounded';
import MarkChatUnreadRoundedIcon from '@mui/icons-material/MarkChatUnreadRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import NotificationAddRoundedIcon from '@mui/icons-material/NotificationAddRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import PollRoundedIcon from '@mui/icons-material/PollRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <HomeIcon />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <LeaderboardIcon />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Users</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PersonIcon />
                                List users
                            </li>
                        </Link>
                        <Link to="/newUser" className="link">
                        <li className="sidebarListItem">
                            <EditIcon />
                            New user
                        </li>
                        </Link>
                        {/* <li className="sidebarListItem">
                            ....
                        </li> */}
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Requests</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <AssignmentRoundedIcon />
                            Open request
                        </li>
                        <li className="sidebarListItem">
                            <TaskRoundedIcon />
                            Closed request
                        </li>
                        <li className="sidebarListItem">
                            <FormatListBulletedIcon />
                            List request
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <NotificationAddRoundedIcon/>
                            Create notifications
                        </li>
                        <li className="sidebarListItem">
                            <NotificationsActiveRoundedIcon/>
                            List notifications
                        </li>
                        <li className="sidebarListItem">
                            <EventNoteRoundedIcon/>
                            Schedule notifications
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Contact</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MarkChatUnreadRoundedIcon />
                            Open chat
                        </li>
                        <li className="sidebarListItem">
                            <AddCommentRoundedIcon />
                            Request chat
                        </li>
                        <li className="sidebarListItem">
                            <HistoryIcon />
                            History
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Survey</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PollRoundedIcon/>
                            My Survey
                        </li>
                        <li className="sidebarListItem">
                            <FeedRoundedIcon/>
                            List customer feedback
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
