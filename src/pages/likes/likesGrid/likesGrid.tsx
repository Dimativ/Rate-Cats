import style from "./likesGrid.module.scss"

export const LikesGrid = ({likes}) => {
    return (
        <section className={style.wrapper}>
            {likes.map((obj, index) => (
                <img key={index} src={obj.image.url}></img>
            ))}
        </section>
    )
}
