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
    // Вместо ручного скрытия циклом просто вызываем общую фильтрацию
    look_but(); 
}
function mosc(){
    window.localStorage.setItem("code_city","Москва");
    document.querySelector(".span_city").innerHTML="Москва";
    look_but();
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
let account=document.querySelector(".account")
function login1(){
    account.classList.add("active")
}
account.onclick=function(a){
    if (a.target==account){
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
//появление крестика и функции удаления строки поиск и фильтра
let searchinput=document.querySelector(".stroke_input");
let clearbut=document.querySelector(".clear_but");
searchinput.addEventListener("input",function(){
    if(searchinput.value){
        clearbut.style.display="flex";
    }
    else{
        clearbut.style.display="none";
    }
})
function clear_poisk(){
    searchinput.value="";
    clearbut.style.display="none";
    searchinput.focus();
}
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
function clear1(){
    sell1.value="";
    clear_price1.style.display="none";
    sell1.focus();
}
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
function clear2(){
    sell2.value="";
    clear_price2.style.display="none";
    sell2.focus();
}
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
    kup.classList.toggle("active");
    snat.classList.remove("active");
}
function snat(){
    let kup=document.querySelector(".kup");
    let snat=document.querySelector(".snat");
    
    snat.classList.toggle("active");
    kup.classList.remove("active");
}
//поиск
function but_iskat(){
    let input_stroke=document.querySelector(".stroke_input");
    window.localStorage.setItem("pass_poisk",input_stroke.value);
    let card=document.querySelectorAll(".card");
    let input=input_stroke.value.toUpperCase();
    let city=window.localStorage.getItem("code_city");
    let moki=false;
    let target_id="";
    if(city==="Краснодар"){
        target_id="id_kras";
    }else{
        target_id="id_mosc";
    }
    for(let i=0;i<card.length;i++){
        let t1=card[i].querySelector(".t1").innerHTML.toUpperCase();
        let t2=card[i].querySelector(".t2").innerHTML.toUpperCase();
        if(card[i].id===target_id&&(t1.indexOf(input)>-1||t2.indexOf(input)>-1)){
            if(input!==""){
                card[i].style.display="flex";
                moki=true;
            }else{
                card[i].style.display="none";
            }
        }else{
            card[i].style.display="none";
        }
    }
    let not=document.querySelector(".not");
    if(moki===false||input===""){
        not.style.display="flex";
    }else{
        not.style.display="none";
    }
}
//фильтрация
function look_but(){
    let filter=document.querySelector(".win_filter");
    let current_city=window.localStorage.getItem("code_city");
    if(current_city===null){
        current_city="Москва";
    }
    let look_city="";
    if(current_city==="Краснодар"){
        look_city="id_kras";
    } else {
        look_city="id_mosc";
    }
    let kup=document.querySelector(".kup").classList.contains("active");
    let snat=document.querySelector(".snat").classList.contains("active");
    let studia=document.querySelector(".studia .input_box").checked;
    let kvartira=document.querySelector(".rum .input_box").checked;
    let input_ot=document.querySelector(".input_sell1").value;
    let input_do=document.querySelector(".input_sell2").value;
    let price_ot=Number(input_ot.replaceAll(' ', ''));
    if(isNaN(price_ot)){
        price_ot=0;
    }
    let price_do=Number(input_do.replaceAll(' ', ''));
    if(isNaN(price_do)||input_do.trim()===""){
        price_do=Infinity;
    }
    window.localStorage.setItem("filter_price_ot",input_ot);
    window.localStorage.setItem("filter_price_do",input_do);
    window.localStorage.setItem("filter_studio",studia);
    window.localStorage.setItem("filter_kvartira",kvartira);
    let card=document.querySelectorAll(".card");
    let moki=false;
    for(let i=0;i<card.length;i++){
        let type=card[i].querySelector(".t1").innerText.trim();
        let sum_text=card[i].querySelector(".sum").innerText;
        let cleanPrice=sum_text.replaceAll(' ','').replaceAll('₽','').replaceAll('/мес.','');
        let price=Number(cleanPrice); 
        let card_kup=card[i].querySelector(".p_kup")!==null;
        let card_snat=card[i].querySelector(".p_snat")!==null;
        let visible=true;
        if(card[i].id!==look_city){
            visible=false;
        } 
        else{
            if(kup===true&&card_kup===false)visible=false;
            if(snat===true&&card_snat===false)visible=false;
            if(studia===true||kvartira===true){
                let match=false;
                if(studia===true&&type==="Студия")match=true;
                if(kvartira===true&&type==="Квартира")match=true;
                if(match===false)visible=false;
            }
            if(price<price_ot)visible=false;
            if(price>price_do)visible=false;
        }
        if(visible===true){
            card[i].style.display="flex";
            moki=true;
        } 
        else{
            card[i].style.display="none";
        }
    }
    let not=document.querySelector(".not");
    if(moki===false){
        not.style.display="flex";
    } 
    else{
        not.style.display="none";
    }
    if(filter!==null){
        filter.classList.remove("active");
    }
    if(window.location.pathname.indexOf("poisk.html")===-1){
        window.open("poisk.html");
    }
}
let save_filter=window.localStorage.getItem("deal_type");
let kup_el=document.querySelector(".kup");
let snat_el=document.querySelector(".snat");
if(save_filter==="kup"){
    kup_el.classList.add("active");
    snat_el.classList.remove("active");
}
if(save_filter==="snat"){
    snat_el.classList.add("active");
    kup_el.classList.remove("active");
}
if(save_filter==="all"){
    kup_el.classList.remove("active");
    snat_el.classList.remove("active");
}
if(window.localStorage.getItem("filter_studio")==="true"){
    document.querySelector(".studia .input_box").checked=true;
}
else{
    document.querySelector(".studia .input_box").checked=false;
}
if(window.localStorage.getItem("filter_kvartira")==="true"){
     document.querySelector(".rum .input_box").checked=true;
}
else{
    document.querySelector(".rum .input_box").checked=false;
}
let p_ot=window.localStorage.getItem("filter_price_ot");
if(p_ot!==null){
    document.querySelector(".input_sell1").value=p_ot;
}
let p_do=window.localStorage.getItem("filter_price_do");
if(p_do!==null){
    document.querySelector(".input_sell2").value=p_do;
}
look_but();
//очистить все фильтры
function clear_all(){
    let kup=document.querySelector(".kup");
    let snat=document.querySelector(".snat");
    kup.style.backgroundColor="#e5e7e9";
    kup.style.color="black";
    kup.classList.remove("active");
    snat.style.backgroundColor="#e5e7e9";
    snat.style.color="black";
    snat.classList.remove("active");
    let checkboxes=document.querySelectorAll(".input_box");
    for (let i=0;i<checkboxes.length;i++){
        checkboxes[i].checked=false;
    }
    let priceinputs=document.querySelectorAll(".input_sell1, .input_sell2");
    for (let i=0;i<priceinputs.length;i++){
        priceinputs[i].value="";
    }
    document.querySelector(".clear_price1").style.display="none";
    document.querySelector(".clear_price2").style.display="none";
    window.localStorage.removeItem("filter_isStudio");
    window.localStorage.removeItem("filter_isFlat");
    window.localStorage.removeItem("filter_priceFrom");
    window.localStorage.removeItem("filter_priceTo");
    window.localStorage.setItem("deal_type","all");
}
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
    });
}