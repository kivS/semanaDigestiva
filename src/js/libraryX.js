/**
 * [getPageX description]
 * @param  {[type]} dataX  [array di taffy]
 * @param  {[type]} countX [count di taffy]
 * @param  {[type]} titleX [areaC]
 * @return {[type]}        [description]
 */
function getPageX(dataX, countX, titleX) {
    var output = "";
    var outX = "";
    output = '<div><h1>' + titleX + '</h1><div><ul class="alist">';
    for (var i = 0; i < countX; i++) {
        outX += '<li><p class="subtitle"><a href="' + dataX[i].url + '">' + (i + 1) + '.' + dataX[i].title + '.</a></p> \
                <p class="subline">' + dataX[i].authors + '</li>';
    }
    output += outX;
    output += '</ul></div></div>';
    return output;
}

/**
 * [getSearchX description]
 * @param  {[type]} dataX  [array di taffy]
 * @param  {[type]} countX [count di taffy]
 * @return {[type]}        [description]
 */
function getSearchX(dataX, countX) {
    if (countX == 0) {
        return '<div><h1>Não foram encontrados resultados</h1></div>';
    } else {
        var output = "";
        var outX = "";
        output = '<div><h1>Resultados ('+countX+')</h1><div><ul class="alist">';
        for (var i = 0; i < countX; i++) {
            outX += '<li><p class="subtitle"><a href="' + dataX[i].url + '">' + (i + 1) + '.' + dataX[i].title + '.</a></p> \
                <p class="subline">' + dataX[i].authors + '</li>';
        }
        output += outX;
        output += '</ul></div></div>';
        return output;
    }
}