
/**
 * [getPageX description]
 * @param  {[type]} dataX  [description]
 * @param  {[type]} countX [description]
 * @param  {[type]} titleX [description]
 * @return {[type]}        [description]
 */
function getPageX(dataX, countX,titleX) {
    var output = "";
    var outX = "";
    output = '<div><h1>'+titleX+'</h1><div><ul class="alist">';
    for (var i = 0; i < countX; i++) {
        outX += '<li><p class="subtitle"><a href="'+dataX[i].url+'">' + (i + 1) + '.'+dataX[i].title+'.</a></p> \
                <p class="subline">'+dataX[i].authors+'</li>';
    }
    output += outX;
    output += '</ul></div></div>';
    return output;
}

function getSearchX(dataX, countX,titleX) {
    var output = "";
    var outX = "";
    output = '<div><h1>Foram encontrados resultados</h1><div><ul class="alist">';
    for (var i = 0; i < countX; i++) {
        outX += '<li><p class="subtitle"><a href="'+dataX[i].url+'">' + (i + 1) + '.'+dataX[i].title+'.</a></p> \
                <p class="subline">'+dataX[i].authors+'</li>';
    }
    output += outX;
    output += '</ul></div></div>';
    return output;
}