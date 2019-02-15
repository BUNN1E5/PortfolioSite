var pages = [];

//Find out which pages

var currUrl = document.URL;
currUrl = currUrl.substring(currUrl.indexOf("/"), currUrl.lastIndexOf('/')+1);

var urlBase = document.URL + "Week"
for(var i = 1; i < 52; i++){
    var url = urlBase + i;
    console.log("checking " + url);
    if(is404(url)){
        break;
    }
    console.log("found " + url);
    pages.push(url);
    addPage(url);
}


function addPage(url){
    document.getElementById("list").innerHTML += "<div class=\"container\"><iframe src=\"" + url + "\"></iframe></div>";
}



function is404(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return (http.status == 404)
}
