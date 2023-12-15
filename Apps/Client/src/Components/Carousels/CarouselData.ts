interface ImageData {
    id: number;
    alt: string;
    image: string;
}

const image1 = 'https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA % 3D% 3D'
const image2 = 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid = M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA % 3D % 3D'
const image3 = 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid = M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA % 3D % 3D'
const image4 = 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid = M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA % 3D % 3D'
const image5 = 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid = M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA % 3D % 3D'


const images: string[] = [image1, image2, image3, image4, image5]

const imageByIndex = (index: number): string => images[index % images.length]

const ImageData: ImageData[] = [
    {
        id: 1,
        alt: "The sun shines on the mountains and trees (by Adam Kool on Unsplash)",
        image: image1
    },

    {
        id: 2,
        alt: "A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)",
        image: image2
    },
    {
        id: 3,
        alt: "The sun is setting over a lavender field (by Leonard Cotte on Unsplash)",
        image: image3
    },
    {
        id: 4,
        alt: "A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)",
        image: image4
    },
    {
        id: 5,
        alt: "A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)",
        image: image5
    },
]


export {images, imageByIndex , ImageData}