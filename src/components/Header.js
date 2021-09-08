import { Button } from "./Button";

const Header = ({showAdd, onShowAdd}) => {
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color={showAdd?'red':'steelblue'} text={showAdd?'Close':'Add'} onClick={onShowAdd}/>
        </header>
    )
};
export default Header