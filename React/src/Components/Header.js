import { LOGO_URL } from "../utils/links";

const Header = () => {
    return (
        <div className="header">
            <div className="image">
                <img
                    src={LOGO_URL}
                    alt=""
                />
            </div>

            <div className="items">
                <ul>
                    <li>Home </li>
                    <li>About </li>
                    <li>Cart </li>
                </ul>
            </div>
        </div>
    );
};
export default Header;