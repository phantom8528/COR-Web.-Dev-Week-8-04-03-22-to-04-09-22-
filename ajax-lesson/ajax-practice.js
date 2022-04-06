//------------------------04/05/22----------------------------------

//-----------------AJAX-------------------------------------

//1st) To start an AJax request, declare the following:
const request = new XMLHttpRequest();//this is an object
//2nd) There is an event listening property on the object called onreadystatechange 
//that will be triggered every time the request updates to the browser.
request.onreadystatechange = function(){
    if(this.readyState === 4){
        console.log(this);
    }
};
//3rd) Specify the kind of request you want to use:
/**--------------------------------------------------------
 * GET | Requests data from a resource 
 * POST | Sends data to create a new resource
 * PATCH |  Sends data to update an existing resource 
 * DELETE | Deletes a specific resource 
 */



//4th) Using the GET request:
request.open('GET', '/Users/corcoding/Desktop/projects/COR-Web.-Dev-Week-8-04-03-22-to-04-09-22-/ajax-lesson/ajax-practice.txt'); //<-- initialize the http response method using the open() function
//first argument/parameter: method, second argument/parameter: url to the resource

//5th) Finally you call the send function to execute the request
request.send();

//--------------Creating a Server---------------

//NOTE: A browser will only fetch data from a server
/**
 * Types of State Changes:
 * --------------------------
 * 0 | Request not initialized
 * 1 | Server connection established 
 * 2 | Request Received
 * 3 | Processing Request
 * 4 | Request finished and response is ready
 */

/**
 * NOTE: Status Codes - by looking at the status code, we can determine if a request was successful
 * -------------------------
 * 100-199 | Informational
 * 200-299 | Successful
 * 300-399 | Redirects
 * 400-499 | Client Errors
 * 500-599 | and Server Errors
 */

//----------------Fetch---------------------
//The .fetch() method is another way making a GET request by default
//This is a shorter approach of doing a GET request
fetch("/Users/corcoding/Desktop/projects/COR-Web.-Dev-Week-8-04-03-22-to-04-09-22-/ajax-lesson/ajax-practice.txt").then((response)=>{
    console.log(response);
});

q
