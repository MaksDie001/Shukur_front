import "./home.scss"
import "../bootstrap-grid.scss"
import home_img from "./home_one.png"
import card_img from "./Rectangle 18.png"
import left from "./left.svg"
import right from "./right.svg"
import Header from "../header/header";
function Home(){
    return(
        <div>
        <Header />
        <div className={"base"}>
            <div className={"row"}>
                <div className={"col-lg-5 home_one_text"}>
                    <h2>О нас</h2>
                    <p>Shukur - мобильное приложение, которое сканирует электронные коды продуктов и легко распознает,
                        является ли еда халяльной, содержит ли она запрещенные ингредиенты или какие-либо химические добавки.
                        Он служит удобным инструментом для людей, которые придерживаются исламских законов о питании (Халяль),
                        гарантируя, что потребляемая ими пища соответствует их религиозным требованиям. Идея – создать мобильное приложение «Shukur»,
                        которое обеспечит простой и удобный доступ к информации о соответствии продукции стандартам Халяль.
                        Мы стремимся упростить повседневную жизнь людей,
                        следующих халяльным требованиям, и помочь им принять решение о выборе продуктов и мест для посещения.</p>
                    <p id={"home_text"}>Миссия нашего проекта — обеспечить доступность информации о халяльной продукции и услугах всем пользователям,
                        независимо от их религиозных убеждений.
                        Мы стремимся сделать процесс выбора халяльной продукции более удобным и найти все ваши потребности в одном приложении.</p>
                </div>
                <div className={"col-lg-7 home_two"}>
                        <img src={home_img}/>
                </div>
            </div>
            <div className={"home_three"}>
                <h2>Новости и статьи</h2>
                <div className={'row card'}>
                    <img className={"card_left"} src={left}/>
                    <img className={"card_right"} src={right}/>

                    <div className={"home_card col-md-3"}>
                        <div  className={"card_shell"}>
                            <a href={"/"}>
                                <img src={card_img}/>
                                <div className={"card_text"}>Особенности Исламской экономики</div>
                                <div className={"card_data"}>27 сентября 2023</div>
                            </a>
                        </div>
                    </div>

                    <div className={"home_card col-md-3"}>
                        <div  className={"card_shell"}>
                            <a href={"/"}>
                            <img src={card_img}/>
                            <div className={"card_text"}>Особенности Исламской экономики</div>
                            <div className={"card_data"}>27 сентября 2023</div>
                            </a>
                        </div>
                    </div>

                        <div className={"home_card col-md-3"}>
                        <div  className={"card_shell"}>
                            <a href={"/"}>
                            <img src={card_img}/>
                            <div className={"card_text"}>Особенности Исламской экономики</div>
                            <div className={"card_data"}>27 сентября 2023</div>
                            </a>
                        </div>
                    </div>

                            <div className={"home_card col-md-3"}>
                        <div  className={"card_shell"}>
                            <a href={"/"}>
                            <img src={card_img}/>
                            <div className={"card_text"}>Особенности Исламской экономики</div>
                            <div className={"card_data"}>27 сентября 2023</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={"home_balls"}>
                    <div className='home_ball custom_home_ball'>-</div>
                    <div className='home_ball'>-</div>
                    <div className='home_ball'>-</div>
                    <div className='home_ball'>-</div>
                    <div className='home_ball'>-</div>
                    <div className='home_ball'>-</div>
                    <div className='home_ball'>-</div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Home