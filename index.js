

   let ele=  document.querySelector(".comment_container");

    ele.addEventListener("click",(e)=>{

            if(e.target.classList.contains("repl"))
            {
                 let parentele= e.target.parentElement;
                
                 let div= document.createElement("DIV");
                  
                 let sib_ele="null"; 
                 let text="null";

                  if(e.target.parentElement.classList[0]=="main_comment")
                  {
                     sib_ele = e.target.nextSibling.nextSibling;
                     sib_ele.sttyle
                     text = sib_ele.value;
                  }

                  else
                  {
                     sib_ele=  e.target.nextSibling;
                     text= sib_ele.value;

                  }

                  console.log(sib_ele);


                 div.innerHTML='<div class="sub_comment"style="margin-left: 31px;"><h3 class="comment_2">'+text+'</h3><button class="repl">reply</button><input class="inp"></div>';
                 


                 parentele.appendChild(div);

             }
    })

             