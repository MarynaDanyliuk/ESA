!function(){var e={form:document.querySelector(".js-submit-form"),button:document.querySelector(".search-button"),navItemMenu:document.querySelectorAll(".nav_item_menu"),mobileMenu:document.querySelector(".menu-container"),openBurgerBtn:document.getElementById("open_burger_btn"),closeBurgerBtn:document.getElementById("close_burger_btn"),libraryBtnMenu:document.getElementById("library_btn_menu")};function t(t){t.preventDefault(),e.mobileMenu.classList.toggle("open")}e.openBurgerBtn.addEventListener("click",t),e.closeBurgerBtn.addEventListener("click",t),e.form.addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("country").value,n=document.getElementById("city").value,o=document.getElementById("info").value,c=document.getElementById("name").value,u=document.getElementById("tel").value,r=document.getElementById("email").value,l=document.getElementById("comment").value,m=document.getElementById("mailing").checked,a=[];document.querySelectorAll(".category input[type='checkbox']:checked").forEach((function(e){a.push(e.parentElement.textContent.trim())}));var i=[];document.querySelectorAll(".status input[type='checkbox']:checked").forEach((function(e){i.push(e.parentElement.textContent.trim())}));var d,y,s,g={country:t,city:n,info:o,name:c,tel:u,email:r,comment:l,mailing:m,categories:a,statuses:i};console.log(g);try{fetch("http://localhost:3000/submitForm",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}),d=document.querySelector(".js-submit-form"),y=d.querySelectorAll(".form__input"),s=d.querySelectorAll(".checkbox__input"),y.forEach((function(e){e.value=""})),s.forEach((function(e){e.checked=!1}))}catch(e){console.error("Помилка відправки листа:",e)}}))}();
//# sourceMappingURL=index.eb1b9614.js.map
