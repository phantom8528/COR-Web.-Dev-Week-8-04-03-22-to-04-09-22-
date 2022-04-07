/**
 * AJAX and Promises Part 1
 * ----------------------------
 * Client Server Model
 * HTTP - Hypertext Transfer Protocol
 * HTTP Methods
 * HTTP Status Codes
 */

//Ex.) Your First API
document.addEventListener("DOMContentLoaded", function(){
    const myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function() {
        console.log('REQUEST STATE',this.readyState);
        console.log('STATUS', this.status);
    }
    myRequest.open('GET', 'http://placekitten.com/400/400');
    myRequest.send();//<-- open ajax.html with liveserever

});