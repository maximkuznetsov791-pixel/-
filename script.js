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
//появление окна входа и регистрации
let account = document.querySelector(".account")
function login1(){
    account.classList.add("active")
}
account.onclick = function(a){
    if (a.target == account){
        account.classList.remove("active")
    }
}
//появление окна с входом
function reg(){
    document.querySelector(".account_login").style.display="none";
    document.querySelector(".account_registr").style.display="flex";
}
//появление окна с регистрацией
function log(){
    document.querySelector(".account_login").style.display="flex";
    document.querySelector(".account_registr").style.display="none";
}
//перевод входа/регистрации русский
function ru(){
    document.querySelector(".h_login").innerHTML="Вход";
    let inputlog_log_ru=document.querySelector(".log_input_login");
    inputlog_log_ru.placeholder="Логин";
    let inputlog_pass_ru=document.querySelector(".log_input_pass");
    inputlog_pass_ru.placeholder="Пароль";
    document.querySelector(".but_vxod").innerHTML="Войти";
    document.querySelector(".log-reg_registr").innerHTML="зарегестрироваться";
    document.querySelector(".h_reg").innerHTML="Регистрация";
    let inputreg_log_ru=document.querySelector(".reg_input_login");
    inputreg_log_ru.placeholder="Создайте логин";
    let inputreg_pass_ru=document.querySelector(".reg_input_pass");
    inputreg_pass_ru.placeholder="Придумайте пароль";
    let inputreg_email_ru=document.querySelector(".reg_input_email");
    inputreg_email_ru.placeholder="Введите почту";
    document.querySelector(".but_reg").innerHTML="Зарегестрироваться";
    document.querySelector(".log-reg_login").innerHTML="есть аккаунт? Войти";
}
//перевод входа/регистрации английский
function eu(){
    document.querySelector(".h_login").innerHTML="Entrance";
    let input_log_ru= document.querySelector(".log_input_login");
    input_log_ru.placeholder="Login";
    let input_pass_ru= document.querySelector(".log_input_pass");
    input_pass_ru.placeholder="Password";
    document.querySelector(".but_vxod").innerHTML="Log in";
    document.querySelector(".log-reg_registr").innerHTML="register";
    document.querySelector(".h_reg").innerHTML="Registration";
    let inputreg_log_ru=document.querySelector(".reg_input_login");
    inputreg_log_ru.placeholder="Create login";
    let inputreg_pass_ru=document.querySelector(".reg_input_pass");
    inputreg_pass_ru.placeholder="Create password";
    let inputreg_email_ru=document.querySelector(".reg_input_email");
    inputreg_email_ru.placeholder="Enter email";
    document.querySelector(".but_reg").innerHTML="Register";
    document.querySelector(".log-reg_login").innerHTML="Have an account? Log in";
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
//переход на страницу с личным кабинетом
function lk(){
    if(window.open("lk.html")){
        window.close("index.html");
    }
}
//сохранение имени при входе
let new_nickname=window.localStorage.getItem("login_nickname");
document.querySelector(".login_login").innerHTML=new_nickname;
//появление крестика и функции удаления строки поиск и фильтра
let searchinput=document.querySelector(".stroke_input");
let clearbut=document.querySelector(".clear_but");
searchinput.addEventListener("click",function(){
    if(searchinput.value){
        clearbut.style.display="flex";
    }
    else{
        clearbut.style.display="none";
    }
})
clearbut.addEventListener("click",function(){
        searchinput.value="";
        clearbut.style.display="none";
        searchinput.focus();
    }
)
let sell1=document.querySelector(".input_sell1");
let clear_price1=document.querySelector(".clear_price1");
sell1.addEventListener("input",function(){
    if(sell1.value){
        clear_price1.style.display="flex";
    }
    else{
        clear_price1.style.display="none";
    }
})
clear_price1.addEventListener("click",function(){
        sell1.value="";
        clear_price1.style.display="none";
        sell1.focus();
    }
)
let sell2=document.querySelector(".input_sell2");
let clear_price2=document.querySelector(".clear_price2");
sell2.addEventListener("input",function(){
    if(sell2.value){
        clear_price2.style.display="flex";
    }
    else{
        clear_price2.style.display="none";
    }
})
clear_price2.addEventListener("click",function(){
        sell2.value="";
        clear_price2.style.display="none";
        sell2.focus();
    }
)
//появление окна фильтрации
let window_filter=document.querySelector(".win_filter")
function filter1(){
    window_filter.classList.add("active");
}
window_filter.onclick=function(f){  
    if(f.target==window_filter){
        window_filter.classList.remove("active")
    }
}
//анимация выбора категорий
function kup(){
    let kup=document.querySelector(".kup");
    let snat=document.querySelector(".snat");
    if(kup.style.backgroundColor !== "rgb(51, 173, 91)"){
        kup.style.backgroundColor="#33ad5b";
        kup.style.color="white";
        snat.style.backgroundColor ="#e5e7e9";
        snat.style.color="black";
    } 
    else{
        kup.style.backgroundColor="#e5e7e9";
        kup.style.color="black";
    }
}
function snat(){
    let kup=document.querySelector(".kup");
    let snat=document.querySelector(".snat");
    if (snat.style.backgroundColor !== "rgb(51, 173, 91)"){
        snat.style.backgroundColor="#33ad5b";
        snat.style.color="white";
        kup.style.backgroundColor="#e5e7e9";
        kup.style.color="black";
    } 
    else{
        snat.style.backgroundColor="#e5e7e9";
        snat.style.color="black";
    }
}
//сбросить фильтры
document.querySelector(".reset_filter").addEventListener("click",function(){
    let kup=document.querySelector(".kup");
    let snat=document.querySelector(".snat");
    kup.style.backgroundColor="#e5e7e9";
    kup.style.color="black";
    snat.style.backgroundColor="#e5e7e9";
    snat.style.color="black";
    let checkboxes=document.querySelectorAll(".input_box");
    for(let i=0;i<checkboxes.length;i++){
        let checkbox=checkboxes[i];
        checkbox.checked=false;
    }
    let priceinputs=document.querySelectorAll(".input_sell1,.input_sell2");
    for(let i=0;i<priceinputs.length;i++){
        let input=priceinputs[i];
        input.value="";
    }
    clear_price1.style.display="none";
    clear_price2.style.display="none";
})
//пересылает на страницу с фильтром по покупки
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
//пересылает на страницу с фильтром по аренды
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
//пересылает на страницу с фильтром по квартирам
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
//пересылает на страницу с фильтром по сутудии
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
//сохраняет текст в поиске в локалку
function send(){
    let poisk=document.querySelector(".stroke_input").value;
    window.localStorage.setItem("pass_poisk",poisk);
    window.open("poisk.html");
}
//сохраняет выбор фильтра в локалку
function look_but(){
    localStorage.setItem("filter_price_ot",document.querySelector(".input_sell1").value);
    localStorage.setItem("filter_price_do",document.querySelector(".input_sell2").value);
    localStorage.setItem("filter_studio",document.querySelector(".studia .input_box").checked);
    localStorage.setItem("filter_kvartira",document.querySelector(".rum .input_box").checked);
    window.open("poisk.html");
}
//пересылает на страницу с товаром
let cards=document.querySelectorAll(".card");
for(let i=0;i<cards.length;i++){
    cards[i].addEventListener("click",function(){
        let photos_cards=cards[i].getAttribute("data-photos");
        localStorage.setItem("code_mass_photo",photos_cards);
        let info=cards[i].querySelector(".t1").innerHTML;
        let city=cards[i].querySelector(".t2").innerHTML;
        let price=cards[i].querySelector(".t3").innerHTML;
        let img=cards[i].querySelector("img").src;
        localStorage.setItem("code_info",info);
        localStorage.setItem("code_city",city);
        localStorage.setItem("code_price",price);
        localStorage.setItem("code_img",img);
        window.open("tovar.html");
    }
)}