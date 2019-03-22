const form = document.querySelector('#signup');
// saving data
form.addEventListener('submit', (e) => {
    let x= {
        Age: form.age.value,
        Allergy: form.allergy.value,
        Alternate: form.altphone.value,
        Blood_Group: form.blood.value,
        Email_Address: form.exampleInputEmail1.value,
        Full_Name: form.name.value,
        Gender: form.gender.value,
        Height:form.height.value,
        Mobile_Number:form.phone.value,
        Password:form.exampleInputPassword1.value,
        User_Name:form.username.value,
        Weight:form.weight.value
    };
    db.collection('patient').add(x);
});