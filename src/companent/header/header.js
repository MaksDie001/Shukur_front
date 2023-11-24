import "./header.scss"
import right from "./right.svg"
import left from "./left.svg"
function Header(){
    return(
        <div className={"header_back"}>
            <div className={"base"}>
                <span className={"header_text"}>Находи алтернативные продукты при помощи нашего приложения.
                    Просто отсканируй штрих код, остальное сделает Shukur</span>
            </div>
            <div className={"slaider"}>
                <img src={right} className={"rigth"}/>
                <div className={"balls"}>
                    <span className={"ball"} id={"loc"}>-</span>
                    <span className={"ball"}>-</span>
                    <span className={"ball"}>-</span>
                </div>
                <img src={left} className={"left"}/>
            </div>
        </div>
    )
}

export default Header