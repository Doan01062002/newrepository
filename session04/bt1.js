var form = document.getElementById("myForm");
let count = 0;

var names = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var forgot = document.getElementById("forgot");
var gender = document.getElementsByName("gender");

let student = JSON.parse(localStorage.getItem("student"))||[];

form.addEventListener('submit', function(event){
    event.preventDefault();

    let valueGender = null;
    for(let i=0; i<gender.length; i++){
        if(gender[i].checked === true){
            valueGender = gender[i].value;
        };
    };

    var phoneNumber = /^(0|\+84)(3[2-9]|5[2689]|7[06789]|8[1-9]|9[0-9])\d{7}$/;

    if(names.value === ''){
        alert("vui lòng không để trống họ và tên");
    }else if(email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1){
        alert("Email không hợp lệ");
    }else if(!phoneNumber.test(phone.value)){
        alert("Số điện thoại không hợp lệ");
    }else if(forgot.value === ''){
        alert("Quê quán không được để trống");
    }else if(!valueGender){
        alert("Vui lòng chọn giới tính");
    }else{
        count++;
    let obj = {
        id: count,
        name: names.value,
        email: email.value,
        phone: phone.value,
        forgot: forgot.value,
        gender: valueGender
    };
    student.push(obj);

    localStorage.setItem("student",JSON.stringify(student));

    console.log(student);

    render();

    names.value = "";
    email.value = "";
    phone.value = "";
    forgot.value = "";
    for(let i=0; i<gender.length; i++){
        gender[i].checked = false;
    };
    };

});

function render(){

    let text = "";
    for(let i=0; i<student.length; i++){
        text +=
        `
        <tr>
            <td>${student[i].id}</td>
            <td>${student[i].name}</td>
            <td>${student[i].email}</td>
            <td>${student[i].phone}</td>
            <td>${student[i].forgot}</td>
            <td>${student[i].gender}</td>
            <td ><a onclick = "fix(${i})"; href="#">Sửa</a></td>
            <td><a onclick = "deletes(${i})"; href="#">Xóa</a></td>
            <td></td>
        </tr>
        `
    };
    document.getElementById("tbody").innerHTML = text;
};

render();

function deletes(index){
    student.splice(index,1);
    localStorage.setItem("student", JSON.stringify(student));
    render();
};

function fix(index){

    names.value = student[index].name;
    email.value = student[index].email;
    phone.value = student[index].phone;
    forgot.value = student[index].forgot;
    gender.value = student[index].gender;

    student.splice(index,1);
    
    render();
};

function search(){
    let searchs = document.getElementById("searchs").value.toLowerCase();
    let mySearch = searchs.replace('');
    for(let i=0; i<student.length;i++){
        var myName = student[i].name.toLowerCase();
        var myNameSearch = myName.replace('');
        var idName = student[i].id;
    };
    if(mySearch === myNameSearch){
        alert("Sinh viên này có id là: " + idName);
    }else{
        alert("không có sinh viên");
    };
};


function arrange(){
    for(let i=0; i<student.length; i++){
        
    };
};

