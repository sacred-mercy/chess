import Tile from "./Tile.tsx";

// array list for horizontal and vertical axis
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8]

// interface for pieces
interface piece {
    imagePath: string
    hAxis: number
    vAxis: number
}

// array list for initial pieces position
const pieces: piece[] = [];

// loop for black pawns
for (let i = 1; i <= 8; i++) {
    pieces.push({imagePath: "pb.png", hAxis: 7, vAxis: i})
}

// loop for white pawns
for (let i = 1; i <= 8; i++) {
    pieces.push({imagePath: "pw.png", hAxis: 2, vAxis: i})
}

// loop for black and white pieces
for (let p = 0; p < 2; p++) {
    const color = (p === 0) ? "b" : "w";
    const hAxis = (p === 0) ? 8 : 1;

    pieces.push({imagePath: `r${color}.png`, hAxis, vAxis: 1});
    pieces.push({imagePath: `r${color}.png`, hAxis, vAxis: 8});
    pieces.push({imagePath: `kt${color}.png`, hAxis, vAxis: 7});
    pieces.push({imagePath: `kt${color}.png`, hAxis, vAxis: 2});
    pieces.push({imagePath: `b${color}.png`, hAxis, vAxis: 6});
    pieces.push({imagePath: `b${color}.png`, hAxis, vAxis: 3});
    pieces.push({imagePath: `k${color}.png`, hAxis, vAxis: 5});
    pieces.push({imagePath: `q${color}.png`, hAxis, vAxis: 4});
}

// function to grab the piece
function grabPiece(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = event.target as HTMLDivElement;
    target.style.cursor = "grabbing";
    target.style.backgroundImage = "";
    target.style.backgroundColor = "transparent";
}

export default function Chessboard() {

    // array list for chessboard
    const board = [];

    let isWhiteTile = true;

    // loop for chessboard
    for (let j = verticalAxis.length; j > 0; j--) {
        for (let i = 1; i <= horizontalAxis.length; i++) {
            let image = undefined;

            // set image path for tiles which have a piece
            pieces.forEach(p => {
                if (p.hAxis === j && p.vAxis === i) {
                    console.log(p.hAxis)
                    image = p.imagePath;
                }
            })
            board.push(<Tile key={`${i},${j}`} image={image} booleanForWhite={isWhiteTile}/>)
            isWhiteTile = (!isWhiteTile);
        }
        isWhiteTile = (!isWhiteTile);
    }
    return (
        <div onMouseDown={event => grabPiece(event)}
             className="grid grid-rows-8 grid-cols-8">
            {board}
        </div>
    )
}