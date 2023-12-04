import "./products.css"
import product from "./pngegg (36) 1.png"
function Products(){
    return(
        <div className={"products"}>
            <h2 className={"pr_h2"}>Продукты</h2>
            <ul className={"pr_bar"}>
                <li><a href={"/"}>Все товары</a></li>
                <li><a href={"/"}>Гамаки</a></li>
                <li><a href={"/"}>Чехлы</a></li>
                <li><a href={"/"}>Крепеж</a></li>
            </ul>
            <h2 className={"pr_h2_two"}>Халяльные продукты</h2>
            <div className={"product_row row"}>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
                <div className={"col-lg-2 pr_card"}>
                    <div className={"img_layer"}><img src={product}/></div>
                    <div className={"text_layer"}>
                        <p className={"pr_card_bolt"}>Название товара</p>
                        <p className={"pr_card_text"}>Описание гамака, основные параметры, материал</p>
                        <p className={"pr_card_label"}>Халяльный</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Products