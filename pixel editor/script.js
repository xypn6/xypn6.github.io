var penColour = "black"

function changeColour(colour) {
    penColour = colour;
}

function setPixelColour(pixel) {
    pixel.style.backgroundColor = penColour;

    var col = (pixel.id).split(",")[0]
    var row = (pixel.id).split(",")[1]

    console.log("==========================================")
    console.log("Column Index: " + col + " | Row Index: " + row + " | Colour: " + penColour);
    console.log(col + "," + row + "," + penColour)
    console.log("==========================================")
}

function togglePixelBordersOn() {
    document.getElementById("art").style.borderSpacing = "1px";
}

function togglePixelBordersOff() {
    document.getElementById("art").style.borderSpacing = "0px";
}