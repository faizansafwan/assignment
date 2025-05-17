import Header from "../../components/heaader";
import LeftSideBar from "../../components/leftSideBar";

export default function Dashboard() {

    return (
        <div>
            <div><Header /></div>

            <div className="flex">
                <div><LeftSideBar /></div>
                <div>content...</div>
            </div>
        </div>
    )
}