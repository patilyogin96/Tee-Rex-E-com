price = 0;
var quanityT;
var inc ;

function decrease(decV) {

    let dec = document.getElementById(decV)

    if(dec.value <=  1)
    {
        dec.value=1;
        alert("Quantity should be more that 0")
    }
    else{
        dec.value--;


    }
    
    


}

function increase(incV)
{
     inc = document.getElementById(incV)

    if(inc.value>=3)
    {
        alert("Only 3 available")
        inc.value=3;
    }
    else{
        inc.value++;

    }

    
    
}



function loadAndRenderCartpage() {
  let cart_list = localStorage.getItem("tees");
  console.log(cart_list);

  cart_list = JSON.parse(cart_list);
  // console.log(cart_list);

  cart_list.forEach((element) => {
    const html = `<div class="final-selected" >
         <img src="${element.img}" alt="">
        <div>
            <h3>${element.name}</h3>
           
            <p id="price" onclick=checkcc()>${element.price}</p>
        </div>

        <div>
        <p style="
        text-align: center;">Quantity <br>
        ${element.quantityOfTees}
        
        </p>
        

        </div>

        
       
       
        <button id="del-btn">Delete</button> 

    </div>`;

    document.getElementById("fin-sec").innerHTML += html;

    price = document.getElementById("price");

    var del = document.getElementById('del-btn');

    del.addEventListener('click',function(e){
        // e.target;
    
        // console.log(e.target.parentElement.parentElement);
    
        e.target.parentElement.parentElement.remove()
    })
    
    // console.log(price);
    // var qnt = document.getElementById("qnum");
    // console.log(qnt.value);
    price = price.innerHTML * element.quantityOfTees;

  

    // var quanity = document.getElementById("quant");
    // console.log(quanity.value);

    if (price == 0) {
      document.getElementById("sum").innerHTML += 0.0;
    } else {
      document.getElementById("sum").innerHTML += price;
    }
  });

  // console.log(price.innerHTML);
}

// console.log(price.innerHTML);

window.onload = loadAndRenderCartpage();
