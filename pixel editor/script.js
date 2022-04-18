//test

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

function showInstructions() {
    alert("'<col>,<row>,<hex colour>' 1 pixel per line")
}

function loadFromFile() {
    // tried "document.getElementsByClassName("pixel").style.backgroundColor = "white";", didnt work
    // its 3 am so imma just loop through and reset every pixel individually
    // slow but it works

    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            var pos = i + "," + j;
            document.getElementById(pos).style.backgroundColor = "white";
        }
    }
    // not that slow after testing, but is ugly so will fix at later date

    var file = document.getElementById('inputfile');
    var pixel_data = [];
    var fr = new FileReader();
    fr.onload = function() {
        // By lines
        var lines = this.result.split('\n');
        for (var line = 0; line < lines.length; line++) {
            pixel_data = [...pixel_data, ...(lines[line].split(" "))];
        }
    }
    fr.onloadend = function() {
        console.log(pixel_data);
        for (let i = 0; i < pixel_data.length; i++) {
            var data = pixel_data[i];
            var data_post = data.split(";");
            var pos = data_post[0];
            var clr = data_post[1];
            console.log(pos)

            document.getElementById(pos).style.backgroundColor = clr;
        }
    }
    fr.readAsText(file.files[0]);
    console.log("pixel_data")

}
