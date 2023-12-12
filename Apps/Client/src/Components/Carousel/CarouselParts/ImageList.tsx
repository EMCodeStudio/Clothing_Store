

interface ImageListProps {
    dataProps: {
        id: number;
        alt: string;
        image: string;
        // Otras propiedades según tu estructura de datos
    };
}
const ImageList: React.FC<ImageListProps> = ({ dataProps }) => {

    return (
        <>
            {
                <img
                    // loading='lazy'
                    alt={dataProps.alt}
                    src={dataProps.image}
                />
            }

        </>
    )
}

export default ImageList