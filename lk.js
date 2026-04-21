//появление меню
function togglemenu(open){
    let menu=document.querySelector("#menu");
    let darkfon=document.querySelector("#darkfon");
    if (open){
        menu.style.width="300px";
        darkfon.style.display="block";
    } 
    else{
        menu.style.width="0";
        darkfon.style.display="none";
    }
}
//выпадающий список городов
function city_but(){
    let list=document.querySelector(".city_group");
    if(list.style.display==="flex"){
        list.style.display="none";
    } 
    else{
        list.style.display="flex";
    }
}
//выбор города краснодар
function kras(){
    window.localStorage.setItem("code_city","Краснодар");
    let span_city=document.querySelector(".span_city");
    span_city.innerHTML="Краснодар";
    let id_mosc=document.querySelectorAll("#id_mosc");
    let id_kras=document.querySelectorAll("#id_kras");
    for(let i=0;i<id_mosc.length;i++){
        id_mosc[i].style.display="none";
    }
    for(let i=0;i<id_kras.length;i++){
        id_kras[i].style.display="flex";
    }
}
//выбор города москвы
function mosc(){
    window.localStorage.setItem("code_city","Москва");
    let span_city=document.querySelector(".span_city");
    span_city.innerHTML="Москва";
    let id_kras=document.querySelectorAll("#id_kras");
    let id_mosc=document.querySelectorAll("#id_mosc");
    for(let i=0;i<id_kras.length;i++){
        id_kras[i].style.display="none";
    }
    for(let i=0;i<id_mosc.length;i++){
        id_mosc[i].style.display="flex";
    }
}
//сохранение города на всех страницах
let code_city=window.localStorage.getItem("code_city");
if(code_city==="Краснодар"){
    kras();
} 
else{
    mosc();
}
//создание аккаунта
let users={
    id:{
        name:"admin",
        parol:"admin",
        email:"undefined"
    }
}
let newuser={
    name:"undefined",
    parol:"undefined",
    email:"undefined",
}
let id_number=0;
let user_name="id";
function registr(){
    let login=document.querySelector(".reg_input_login").value;
    let password=document.querySelector(".reg_input_pass").value;
    let pochta=document.querySelector(".reg_input_email").value;
    if(login!=""&&password!=""&&pochta!=""){
        id_number+=1;
        let id_name=user_name+String(id_number);
        newobject=Object.create(newuser);
        newobject.name=login;
        newobject.parol=password;
        newobject.email=pochta;
        users[id_name]=newobject;
        console.log(users)
        document.querySelector(".account_login").style.display="flex";
        document.querySelector(".account_registr").style.display="none";
    }
    else{
        alert("Не заполнены поля")
    }
}
let wrong=false;
function login(){
    let login=document.querySelector(".log_input_login").value;
    let pass=document.querySelector(".log_input_pass").value;
    let akk_nickname=document.querySelector(".log_input_login").value;
    window.localStorage.setItem("login_nickname",akk_nickname);
        let akk_phone=document.querySelector(".reg_input_phone").value;
    window.localStorage.setItem("login_phone",akk_phone);
    let akk_email=document.querySelector(".reg_input_email").value;
    window.localStorage.setItem("login_email",akk_email);
    for(let i in users){
        if(users[i].name==login&&users[i].parol==pass){
            alert("Вход успешный")
            wrong=true;
            window.localStorage.setItem("lk","Личный кабинет");
            document.querySelector(".account").style.display="none";
            document.querySelector(".login_login").style.display="flex";
            document.querySelector(".logout_span").style.display="none";
            document.querySelector(".login_login").innerHTML="Личный кабинет";
            break
        }
    }
    if(wrong!==true){
        alert("Ошибка входа")
    }
}
window.addEventListener("load",function(){
    if(window.localStorage.getItem("lk")==="Личный кабинет"){
        document.querySelector(".account").style.display="none";
        document.querySelector(".logout_span").style.display="none";
        document.querySelector(".login_login").style.display="flex";
        document.querySelector(".login_login").innerHTML="Личный кабинет";
    }
});
//сохранение имени при входе
let new_nickname=window.localStorage.getItem("login_nickname");
document.querySelector(".name_st").innerHTML=new_nickname;
let new_phone=window.localStorage.getItem("login_phone");
document.querySelector(".phone_st").innerHTML=new_phone;
let new_email=window.localStorage.getItem("login_email");
document.querySelector(".email_st").innerHTML=new_email;
function exit_lk(){
    window.localStorage.removeItem("lk");
    window.open("index.html");
    window.close("lk.html");
}
