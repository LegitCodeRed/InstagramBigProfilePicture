getPic();
function getPic() {
    let doc = document.getElementsByTagName("pre");
    let index = doc[0]['textContent'].indexOf('hd_profile_pic_url_info');
    doc = doc[0]['textContent'].slice(index);
    index = doc.indexOf('https');
    doc = doc.slice(index-1);
    let newUrl = doc.split('"')[1];
    openInNewTab(newUrl);
}

function openInNewTab(url) {
    var win = window.open(url, '_blank'); 
}
