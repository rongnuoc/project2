import "./widgetLarge.css"

export default function WidgetLarge() {
    const Button = ({ type }) => {
        return <button className={"widgetLargeButton "+type}>{type}</button>
    }
  return (
    <div className="widgetLarge boxShadow p-20">
        <span className="widgetTitle">Pending request</span>
        <table className="app-table WidgetLargeTable">
            <tr className="app-table-row">
                <th className="app-table-th">Cutomers</th>
                <th className="app-table-th">Date</th>
                <th className="app-table-th">Type request</th>
                <th className="app-table-th">Status</th>
            </tr>
            <tr className="app-table-th">
                <td className="widgetLargeTableInfo">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="widgetSmallImg" />
                    <span className="widgetName">Kai Walker</span>
                </td>
                <td className="widgetLargeDate"> 5 May 2022</td>
                <td className="widgetLargeTypeRequest"> Question </td>
                <td className="widgetLargeStatus">
                    <Button type="Pending"/>
                </td>
            </tr>
            <tr className="app-table-th">
                <td className="widgetLargeTableInfo">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="widgetSmallImg" />
                    <span className="widgetName">Kai Walker</span>
                </td>
                <td className="widgetLargeDate"> 5 May 2022</td>
                <td className="widgetLargeTypeRequest">Need a help</td>
                <td className="widgetLargeStatus">
                    <Button type="Inprogress"/>
                </td>
            </tr>
            <tr className="app-table-th">
                <td className="widgetLargeTableInfo">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="widgetSmallImg" />
                    <span className="widgetName">Kai Walker</span>
                </td>
                <td className="widgetLargeDate"> 5 May 2022</td>
                <td className="widgetLargeTypeRequest">Need a help</td>
                <td className="widgetLargeStatus">
                    <Button type="Completed"/>
                </td>
            </tr>
        </table>
    </div>
  )
}
