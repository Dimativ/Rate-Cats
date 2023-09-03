import style from "./dislikesGrid.module.scss";

export const DislikesGrid = ({dislikes}) => {
    return (
        <section className={style.wrapper}>
            {dislikes.map((obj, index) => (
                <img key={index} src={obj.image.url}></img>
            ))}
        </section>
    )
}
