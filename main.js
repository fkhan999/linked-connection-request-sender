//code to genrate random time between 5-10 second
function time_generate() {
    let t=Math.floor(Math.random() * (11 - 5) ) + 5;
    return t*1000;
  }

function main(){
	button_all=document.querySelectorAll('*[id^="ember"]');
	console.log("len",button_all.length);
    for(let i=0; i<button_all.length;i++){
        if (button_all[i].innerText=="Connect"){
            setTimeout(() => {
                console.log(i,"click")
                button_all[i].click();
                setTimeout(() => {
                    button_new = document.querySelectorAll('*[id^="ember"]');
                for(let j=0; j<button_new.length;j++){
                    if (button_new[j].innerText == "Send") {button_new[j].click();}}
                    
                }, 2000);
                
            }, time_generate());


    }
}}


                
    
    
function linkedin(){
    //a=document.getElementsByClassName("search-results-container")[0];
	a=document.getElementById("search-reusables__filters-bar")
    a.innerHTML+=`<div id="wrapper_linked">
    <label for="yes_no_radio">Do you want to enable the extension? </label>
    <input type="button"  value="YES" id="linkedin_yes"></input>
    <input type="button" value="NO" id="linkedin_no"></input>
    <style>#wrapper_linked{border: 1px solid #888;padding:10px;}</style>
    </div>`;
    element_no=document.getElementById("linkedin_no");
    element_no.addEventListener("click", function() {
        document.getElementById("wrapper_linked").remove()
        });
	element_yes=document.getElementById("linkedin_yes");
	element_yes.addEventListener("click", function() {
        main();
        });
}



(function() {
       window.addEventListener("load",()=>{setTimeout(function(){ linkedin() }, 5000);})
    
        // Your code here...
    })();

