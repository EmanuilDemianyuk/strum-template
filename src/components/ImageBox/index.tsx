import { ImageBoxProps } from "src/types";


export const ImageBox = ({ title, image, imageWebP, loading, className }: ImageBoxProps) => {
    return (
        <picture>
            <source srcSet={imageWebP} type="image/webp" />
            <img
                className={className}
                src={image}
                alt={title}
                loading={loading || "lazy"}
            />
        </picture>
    )
}

export default ImageBox;


