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
    window.open("poisk.html");
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
    window.open("poisk.html");
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
    window.open("poisk.html");
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
    window.open("poisk.html");
}
let mass_photo=[];
let index_photo=0;
function update_photo(){
    let img=document.querySelector(".main_img");
    img.src=mass_photo[index_photo];
    let dots=document.querySelectorAll(".dot");
    if (dots.length>0){
        for (let i=0;i<dots.length;i++){
            dots[i].classList.remove("active_dot");
        }
        if(dots[index_photo]){
            dots[index_photo].classList.add("active_dot");
        }
    }
}
let save=localStorage.getItem("code_mass_photo");
if (save){
    mass_photo=save.split(",");
    index_photo=0;
    let dotsContainer=document.getElementById("dots");
    if (dotsContainer){
        dotsContainer.innerHTML=""; 
        for (let i=0;i<mass_photo.length;i++){
            dotsContainer.innerHTML+=`<div class="dot"></div>`;
        }
    }
    update_photo(); 
}
function nazad(){
    index_photo--;
    if(index_photo<0){
        index_photo=mass_photo.length-1;
    }
    update_photo();
}
function vpered(){
    index_photo++;
    if(index_photo>=mass_photo.length){
        index_photo=0;
    }
    update_photo();
}
if(localStorage.getItem("code_info")){
    document.querySelector(".info_h").innerHTML=localStorage.getItem("code_info");
    document.querySelector(".city_p").innerHTML=localStorage.getItem("code_city");
    document.querySelector(".price").innerHTML=localStorage.getItem("code_price");
    document.querySelector(".main_img").src=localStorage.getItem("code_img");
    let save=localStorage.getItem("code_mass_photo");
    if(save){
        mass_photo=save.split(",");
        update_photo();
    }
}
function call_but(){
    let call=document.querySelector(".call_but");
    call.style.backgroundColor="#eceef0"; 
    call.style.color="#33ad5b";
    call.innerHTML="8 800 555 35 55";
    call.style.fontSize="20px";
}
function back_but(){
    if(window.history.length>1){
        window.history.back();
    } 
    else{
        window.location.href="index.html"; 
    }
}