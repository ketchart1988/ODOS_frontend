import { Link } from "react-router-dom";

export default function DropDown(props) {

    const { routeList, routeName } = props;

    return (
            <ul className="absolute right-0 bottom-0 w-full sm:w-[40%] bg-white translate-y-full">
                {
                    routeList.slice(0, 3).map((e, i) => 
                        <li className="list-none h-16 flex justify-center items-center">
                            <Link to={e}>{routeName[i]}</Link>  
                        </li> 
                )
                }
                <li className="list-none h-16 flex justify-center items-center">
                    <p><Link to={routeList[routeList.length - 2]}>{routeName[routeName.length - 2]}</Link> | <Link to={routeList[routeList.length - 1]}>{routeName[routeName.length - 1]}</Link></p>
                </li>
            </ul>
    )
}
