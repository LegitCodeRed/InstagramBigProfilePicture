let pid = window._sharedData['entry_data']['ProfilePage'][0]['logging_page_id'];
extractPid()
function extractPid() {
    pid = pid.replace( /^\D+/g, '');
    pid = parseInt(pid);
    let url = 'https://i.instagram.com/api/v1/users/' + pid + '/info/';
    openInNewTab(url);
   

}


function openInNewTab(url) {
    var win = window.open(url, '_blank'); 
}
