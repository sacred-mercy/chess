export default Tile

// interface for Tile
interface prop {
    image?: string;
    booleanForWhite: boolean;
}

function Tile({booleanForWhite, image}: prop) {
    if (booleanForWhite) {
        // return a div with a background color of gray
        return (
            <div className="bg-gray-100 h-16 flex content-center">

                {/* if image is not undefined, then render the image
                    if image is not undefined, then render the image
                    otherwise, render nothing this is called short-circuit evaluation
                */}
                {image && <div
                    style={{backgroundImage: `url(${image})`}}
                    className="hover:cursor-grab active:cursor-grabbing w-16 h-16">
                </div>}
            </div>
        )
    } else {
        // return a div with a background color of green
        return (
            <div className="bg-green-500 h-16 flex content-center">
                {image && <div
                    style={{backgroundImage: `url(${image})`}}
                    className="hover:cursor-grab active:cursor-grabbing w-16 h-16">
                </div>}
            </div>
        )
    }
}