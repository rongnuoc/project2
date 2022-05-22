import "./userList.css";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";

export default function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'Full name',
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userInfo">
            <img className="userInfoImg" src={params.row.avatar} alt="" />
            {params.row.fullName}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 150 },
    {
      field: 'age',
      headerName: 'Age',
      width: 90,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 90,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/user/" + params.row.id}><button className="userEdit">Edit</button></Link>

            {/* <EditIcon /> */}
          </div>
        )
      }
    },]

  const rows = [
    { id: 1, fullName: 'Snow', email: 'Jon@gmail.com', age: 35, phone: '+8466722192', status: 'active', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' },
    { id: 2, fullName: 'Snow', email: 'Jon@gmail.com', age: 35, phone: '+8466722192', status: 'active', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' },
    { id: 3, fullName: 'Snow', email: 'Jon@gmail.com', age: 35, phone: '+8466722192', status: 'active', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' },
    { id: 4, fullName: 'Snow', email: 'Jon@gmail.com', age: 35, phone: '+8466722192', status: 'active', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' },
    { id: 5, fullName: 'Snow', email: 'Jon@gmail.com', age: 35, phone: '+8466722192', status: 'active', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' },
    { id: 6, fullName: 'Snow', email: 'Jon@gmail.com', age: 35, phone: '+8466722192', status: 'active', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' },
    { id: 7, fullName: 'Snow', email: 'Jon@gmail.com', age: 35, phone: '+8466722192', status: 'active', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' },
    { id: 8, fullName: 'Snow', email: 'Jon@gmail.com', age: 35, phone: '+8466722192', status: 'active', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' },
  ];
  return (
    <div className="userList">
      <div className="detailTopContainer">
        <h1>
          List users
        </h1>
        <div className="buttonContainer">
          <Link to="/newUser">
          <button className="buttonDetailPage">New</button>
          </Link>
        </div>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
