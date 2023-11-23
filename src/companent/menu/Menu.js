import "../base.scss"
import "./menu.scss"
import logo from "./Logo.svg"
import user from "./user 1.svg"
import feater from "./Feather Icon.svg"
import search from "./search (1) 1.png"
function Menu() {
    return (
        <div>
        <div className={"header_back"}>
            <div className={"base"}>
                <nav className={"header_nav"}>
                    <div className={"slogan"}>Теперь поиск продуктов стал еще легче</div>
                    <div>
                    <ul>
                        <li id={"unique_link"}>Главная</li>
                        <li>категории</li>
                        <li>Время намаза</li>
                        <li>Поиск продукта</li>
                        <li>Отзывы</li>
                        <li>Блог</li>
                        <li>Карта</li>

                    </ul>
                    </div>
                </nav>


            </div>
        </div>
        <div className={"menu_back"}>
            <div className={"custom_base"}>
                <span><img src={logo} className={"logo"}/><span className={"logo_text"}>Shukur</span></span>
                <span className={"menu_bt_div"}>
                    <span className={"app_button"}>Cкачать приложение</span>

                    <div className={"menu_button"}>
                        <img src={user} className={"menu_bt_img"}/>
                        <div>Личный кабинет</div>
                    </div>
                    <div className={"menu_button"}>
                        <img src={feater} className={"menu_bt_img"}/>
                        <div>Рейтинги</div>
                    </div>
                    <div className={"menu_button"} id={'menu_bt_last'}>
                        <img src={search} className={"menu_bt_img"}/>
                        <div>Поиск</div>
                    </div>
                </span>
            </div>
        </div>
        </div>
    )
}
export default Menu