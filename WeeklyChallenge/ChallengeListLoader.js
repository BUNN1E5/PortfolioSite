var pages = [];

//Find out which pages

var urlBase = "/Week"
for(var i = 1; i < 52; i++){
    var url = urlBase + i;
    console.log("checking " + url);
    if(is404(url)){
        break;
    }
    console.log("found " + url);
    pages.push(url);
}


function addPage(url){
    document.getElementById("list").innerHTML = "";
}



function is404(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    //http.send();
    return (http.status == 404)
}
