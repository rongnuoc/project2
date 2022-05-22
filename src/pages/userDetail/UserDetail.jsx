import "./userDetail.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function UserDetail() {
    return (
        <div className="userDetail">
            <div className="detailTopContainer">
                <h1 className="userDetailTitle">
                    User profile
                </h1>
                <div className="buttonContainer">
                    <button className="buttonDetailPage">Create</button>
                    <button className="buttonDetailPage">Edit</button>
                    <button className="buttonDetailPage">Delete</button>
                </div>
            </div>
            <div className="userBodyContainer">
                <div className="userDetailLeft boxShadow">
                    <div className="userDetailTop">
                        <img className="userDetailImg" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                        <div className="userDetailInfoLeft">
                            <h3 className="userDetailName">Roberto Ronaldinho</h3>
                            <span className="userDetailName">Fullstack Developer</span>
                        </div>
                    </div>
                    <div className="userDetailBottom">
                        <span className="userDetailInfoTitle">Account detail</span>
                        <div className="userDetailInfo">
                            <PermIdentityIcon/>
                            <span>Male</span>
                        </div>
                        <div className="userDetailInfo">
                            <CakeOutlinedIcon/>
                            <span>11.05.1999</span>
                        </div>
                        <span className="userDetailInfoTitle">Contact detail</span>
                        <div className="userDetailInfo">
                            <PhoneIphoneOutlinedIcon/>
                            <span>+85 668 8222</span>
                        </div>
                        <div className="userDetailInfo">
                            <MailOutlinedIcon/>
                            <span>ronaldinho@gmail.com</span>
                        </div>
                        <div className="userDetailInfo">
                            <HomeOutlinedIcon/>
                            <span>New York, USA</span>
                        </div>
                    </div>
                </div>
                <div className="userDetailRight boxShadow">
                    <img className="userDetailImg" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                </div>
            </div>
        </div>
    )
}
