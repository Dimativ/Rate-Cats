import style from "./favouriteGrid.module.scss"
import unfavourButton from "../../../pics/favourite/unfavourButton.png"
export const FavouriteGrid = ({favourite, onClickDeleteFavourite}) => {
    return (
        <section className={style.wrapper}>
            {favourite.map((obj, index) => (
                <div key={index} className={style.container}>
                    <img src={obj.image.url}></img>
                    <div className={style.overlay}>
                        <img onClick={() => onClickDeleteFavourite(obj.id)} src={unfavourButton}></img>
                    </div>
                </div>
            ))}
        </section>
    )
}
