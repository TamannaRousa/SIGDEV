   //JS Part9 Practice Questions

   //1
   let body = document.querySelector('body');
   let input = document.createElement('input');
   let btn = document.createElement('button');
   body.append(input);
   body.append(btn);
   btn.innerText = 'Click me';
   document.querySelector('btn');

   //2
   input.setAttribute =("placeholder", "username");
   btn.setAttribute = ("id","btn");

   //3
  let btn = document.querySelector('#btn');
   document.getElementById('btn');
   btn.style.color = "white";
   btn.style.backgroundColor = "blue";

   //4
   let h1 = document.createElement('h1');
   body.prepend(h1);
   h1.innerText = "DOM Practice";
   // h1.innerHTML = "<u>DOM Practice</u>";
   h1.style.color ="purple";
   h1.style.textDecoration ="underline";

   //5
   let p = document.createElement('p');
   body.append(p);
   p.innerText= 'Apna College Delta Practice';
   p.style.textDecoration = "bold";

   
