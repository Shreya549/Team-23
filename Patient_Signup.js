const form = document.querySelector('#signup');
// saving data
form.addEventListener('submit', (e) => {
   
});

function signUp(){
    console.log("submit clicked");
    let x= {
        var Age=document.getElementById("age").value;
        var Allergy=document.getElementById("allergy").value;
        var Alternate=document.getElementById("altphone").value;
        var Blood_Group=document.getElementById("blood").value;
        var Email_Address=document.getElementById("exampleInputEmail1").value;
        var Full_Name=document.getElementById("name").value;
        var Gender=document.getElementById("gender").value;
        var Height=document.getElementById("height").value;
        var Mobile_Number=document.getElementById("phone").value;
        var Password=document.getElementById("exampleInputPassword1").value;
        var User_Name=document.getElementById("username").value;
        var Weight=document.getElementById("weight").value;
    };
    db.collection('patient').add(x)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
