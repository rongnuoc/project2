import './widgetSmall.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSmall() {
  return (
    <div className="widgetSmall boxShadow p-20">
        <span className="widgetTitle">New Members</span>
        <ul className="widgetSmallList app-list">
            <li className="widgetSmallListItem app-list-item">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="widgetSmallImg" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUserName">Anna John</span>
                    <span className="widgetSmallTitle">Normal User</span>
                    <span className="widgetSmallGender">Male</span>
                </div>
                <button className="widgetSmallButton">
                    <VisibilityIcon/>
                    Display
                </button>
            </li>

            <li className="widgetSmallListItem app-list-item">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="widgetSmallImg" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUserName">Anna John</span>
                    <span className="widgetSmallTitle">Normal User</span>
                    <span className="widgetSmallGender">Male</span>
                </div>
                <button className="widgetSmallButton">
                    <VisibilityIcon/>
                    Display
                </button>
            </li>
            <li className="widgetSmallListItem app-list-item">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="widgetSmallImg" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUserName">Anna John</span>
                    <span className="widgetSmallTitle">Normal User</span>
                    <span className="widgetSmallGender">Male</span>
                </div>
                <button className="widgetSmallButton">
                    <VisibilityIcon/>
                    Display
                </button>
            </li>
            <li className="widgetSmallListItem app-list-item">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="widgetSmallImg" />
                <div className="widgetSmallUser">
                    <span className="widgetSmallUserName">Anna John</span>
                    <span className="widgetSmallTitle">Normal User</span>
                    <span className="widgetSmallGender">Male</span>
                </div>
                <button className="widgetSmallButton">
                    <VisibilityIcon/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
