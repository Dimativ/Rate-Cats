import style from "./voteImgAndButtons.module.scss"
import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
    <ContentLoader
        className={style.skeleton}
        speed={2}
        width={640}
        height={360}
        viewBox="0 0 640 360"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="20" ry="20" width="640" height="360" />
    </ContentLoader>
)
