/**
 * General script file.
 * Defined functionalities:
 *  - Icon changes
 *  - Img replacements
 */

/**
 * Splits a given string (URL) and returns it's last element.
 * 
 * @param {String} str - String to be operated, expects a URL/path.
 * @param {String} splitChar - Character to be used for the split operation.
 */
const getLastItemFromSplit = function(str, splitChar) {
    return str.split(splitChar).slice(-1)[0];
}

let imgMallorca = document.getElementById("imgMallorca");
let cleanUrl = imgMallorca.src.split(getLastItemFromSplit(imgMallorca.src, "/"))[0];

let lugares = document.getElementById("lugares");

for (let lugar of lugares.childNodes) {

    for (let element of lugar.childNodes) {

        if (element.classList && element.classList.contains("collapsible-header")) {

            element.addEventListener("click", function() {

                // ** Imagen ** 

                let comarca = element.childNodes[1].nodeValue;
                switch(comarca) {
                    case "Serra de Tramuntana":
                        if ("Tramuntana.png" != getLastItemFromSplit(imgMallorca.src, "/")) {
                            imgMallorca.src = cleanUrl + "Tramuntana.png";
                        }
                        else {
                            imgMallorca.src = cleanUrl + "MapaMallorca.png";
                        }
                        break;
                    case "Palma de Mallorca":
                        if ("Palma.png" != getLastItemFromSplit(imgMallorca.src, "/")) {
                            imgMallorca.src = cleanUrl + "Palma.png";
                        }
                        else {
                            imgMallorca.src = cleanUrl + "MapaMallorca.png";
                        }
                        break;
                    case "Comarca del Raiguer":
                        if ("Raiguer.png" != getLastItemFromSplit(imgMallorca.src, "/")) {
                            imgMallorca.src = cleanUrl + "Raiguer.png";
                        }
                        else {
                            imgMallorca.src = cleanUrl + "MapaMallorca.png";
                        }
                        break;
                    case "Pla de Mallorca":
                        if ("Pla.png" != getLastItemFromSplit(imgMallorca.src, "/")) {
                            imgMallorca.src = cleanUrl + "Pla.png";
                        }
                        else {
                            imgMallorca.src = cleanUrl + "MapaMallorca.png";
                        }
                        break;
                    case "Comarca de Migjorn":
                        if ("Mitjorn.png" != getLastItemFromSplit(imgMallorca.src, "/")) {
                            imgMallorca.src = cleanUrl + "Mitjorn.png";
                        }
                        else {
                            imgMallorca.src = cleanUrl + "MapaMallorca.png";
                        }
                        break;
                    case "Comarca de Llevant":
                        if ("Llevant.png" != getLastItemFromSplit(imgMallorca.src, "/")) {
                            imgMallorca.src = cleanUrl + "Llevant.png";
                        }
                        else {
                            imgMallorca.src = cleanUrl + "MapaMallorca.png";
                        }
                        break;
                    default:
                        imgMallorca.src = cleanUrl + "MapaMallorca.png";
                }

                // ** Icono ** 

                if (element.childNodes[0].innerText != "send") {
                    element.childNodes[0].innerText = "send";
                }
                else {
                    element.childNodes[0].innerText = "location_on";
                }

                for (let otrosLugares of lugares.childNodes) {
                    for (let sitio of otrosLugares.childNodes) {
                        if (sitio.classList && sitio.classList.contains("collapsible-header") && sitio != element) {
                            sitio.childNodes[0].innerText = "location_on";
                        }
                    }
                }
            })
        }
    }
}



