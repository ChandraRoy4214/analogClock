const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const btn = document.querySelector(".btn");
const clock = document.querySelector(".clock");

btn.addEventListener("click", (e) => {
    document.body.classList.toggle("white");
   clock.classList.toggle("light");
   if(clock.classList.contains("light")){
       btn.textContent = `dark mode`;
       btn.style.backgroundColor = "#fff";
   }else{
       btn.textContent = `light mode`;
       btn.style.backgroundColor = "#1c093d";
   }
})

setInterval(() => {
    let date = new Date();

    let hrs = date.getHours() *30;
    let min = date.getMinutes() * 6;
    let sec = date.getSeconds() * 6;
    
    hr.style.transform = `rotateZ(${hrs + (min / 12)}deg)`;
    mn.style.transform = `rotateZ(${min}deg)`;
    sc.style.transform = `rotateZ(${sec}deg)`;
    
});

console.log(new Date().getHours() *30);

