window.addEventListener("DOMContentLoaded", function(){
    const firstNameField = document.getElementById("firstName");

    console.log(firstNameField);

    firstNameField.addEventListener("change",function(event){
        console.log(event.target.value);
    });
});