import { Link } from "react-router-dom";

    export function AeHeader({}) {
      return (<nav className='ae-aerie-topbar'>
        <ul className="flex h-10 w-full">
          <li className="w-3/5 pt-2 text-blue-950">
          <Link to="/">
            AMERICAN EAGLE
            </Link>
          </li>
          <li className="w-2/5 pt-2 bg-neutral-200 text-green-700">
            aerie
          </li>
        </ul>
      </nav>);
    }
  
  