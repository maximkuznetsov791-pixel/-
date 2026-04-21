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
    document.querySelector(".span_city").innerHTML="Краснодар";
}
function mosc(){
    window.localStorage.setItem("code_city","Москва");
    document.querySelector(".span_city").innerHTML="Москва";
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
//переход на страницу с личным кабинетом
function lk(){
    if(window.open("lk.html")){
        window.close("poisk.html");
    }
}
//сохранение имени при входе
let new_nickname=window.localStorage.getItem("login_nickname");
document.querySelector(".login_login").innerHTML=new_nickname;
function kup_but(){
    window.localStorage.setItem("deal_type","kup");
    window.localStorage.setItem("filter_isStudio","false");
    window.localStorage.setItem("filter_isFlat","false");
    if(window.location.pathname.indexOf("poisk.html")!==-1){
        document.querySelector(".kup").classList.add("active");
        document.querySelector(".snat").classList.remove("active");
        document.querySelector(".studia .input_box").checked=false;
        document.querySelector(".rum .input_box").checked=false;
        look_but();
    }
}
function snat_but(){
    window.localStorage.setItem("deal_type","snat");
    window.localStorage.setItem("filter_isStudio","false");
    window.localStorage.setItem("filter_isFlat","false");
    if(window.location.pathname.indexOf("poisk.html")!==-1){
        document.querySelector(".snat").classList.add("active");
        document.querySelector(".kup").classList.remove("active");
        document.querySelector(".studia .input_box").checked=false;
        document.querySelector(".rum .input_box").checked=false;
        look_but();
    }
}
function kvar_but(){
    window.localStorage.setItem("deal_type","all");
    window.localStorage.setItem("filter_isStudio","false");
    window.localStorage.setItem("filter_isFlat","true");
    if(window.location.pathname.indexOf("poisk.html")!==-1){
        document.querySelector(".kup").classList.remove("active");
        document.querySelector(".snat").classList.remove("active");
        document.querySelector(".studia .input_box").checked=false;
        document.querySelector(".rum .input_box").checked=true;
        look_but();
    }
}
function stud_but(){
    window.localStorage.setItem("deal_type","all");
    window.localStorage.setItem("filter_isStudio","true");
    window.localStorage.setItem("filter_isFlat","false");
    if(window.location.pathname.indexOf("poisk.html")!==-1){
        document.querySelector(".kup").classList.remove("active");
        document.querySelector(".snat").classList.remove("active");
        document.querySelector(".studia .input_box").checked=true;
        document.querySelector(".rum .input_box").checked=false;
        look_but();
    }
}
function faq_bot(element){
    let parent=element.parentElement;
    parent.classList.toggle("active");
}