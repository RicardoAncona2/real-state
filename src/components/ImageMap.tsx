import { ImageWrapper } from "./styled/PropertyMap.style"
import Image from "next/image"

const ImageMap = () => {
    return (<ImageWrapper>
        <Image
            src="/building.webp"
            alt="Mapa de lotes"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,..." // Base64-encoded tiny version of the image
        />

    </ImageWrapper>)
}
export default ImageMap