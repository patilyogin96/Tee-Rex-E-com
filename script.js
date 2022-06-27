const inpVal = document.getElementById("search-r");

var checkhtml = document.getElementById("box-f");

const cartList = [];
window.localStorage.setItem("tees", JSON.stringify(cartList));

function addToCart(value, qnum) {
  // console.log(value);
  var qqq = document.getElementById(qnum);
  console.log(qqq.value);

  if (localStorage.getItem("tees") === null) {
    // console.log("true")
  } else {
    let cartList = localStorage.getItem("tees");
    // console.log(cartList);

    cartList = JSON.parse(cartList);
    // console.log(cartList);

    let t_name = "";
    let t_price = "";
    let t_img = "";
    let start = 0;
    let end = 0;

    for (let i = 0; i < value.length; i++) {
      if (value.charAt(i) == "-" && t_name == 0) {
        end = i;

        t_name = value.substring(start, end);
        console.log(t_name);
        start = i + 1;
        end = i + 1;
      } else if (value.charAt(i) == "-" && t_price == 0) {
        end = i;

        t_price = value.substring(start, end);
        console.log(t_price);
        start = i + 1;
        end = i + 1;
      } else if (i == value.length - 1 && t_img == 0) {
        end = i + 1;

        t_img = value.substring(start, end);
        console.log(t_img.in);
        start = i + 1;
        end = i + 1;
      }
    }

    var isTeePresent = false;

    if (!isTeePresent) {
      cartList.push({
        name: t_name,
        price: t_price,
        img: t_img,
        quantityOfTees: qqq.value,
      });
      alert("Added to fav");
    }

    window.localStorage.setItem("tees", JSON.stringify(cartList));
  }
}

// function to display searched t-shirts

function displayTshirts(tname) {
  // document.getElementById("box-f").innerHTML+="";
  tname.forEach((element) => {
    // console.log(element);

    var name = element.name;
    // console.log(name);
    var nameL = name.toLowerCase();
    var img = element.imageURL;
    var price = element.price;
    var type = element.type;
    var gender = element.gender;
    var color = element.color;
    // console.log(name);
    // console.log(inpVal.value);

    if (inpVal.value == nameL || inpVal.value == name) {
      const html = ` <div class="card">
             <h4>${name}</h4>
            <img src="${img}" alt="">
    
            <div>
            <p>Rs ${price}</p>
            <ul>
              <li><button onclick ="decrease('qnum')">-</button></li>
              <li><input type="text" value="1" id="qnum"></li>
              <li><button onclick = increase('qnum')>+</button></li>
              
            </ul>
            
            <button type="click" id="add-to-cart" onclick="addToCart('${name}-${price}-${img}', 'qnum')" value="${name}-${price}-${img}">Add to Cart</button>
            </div>
            
    
        </div>`;

      document.getElementById("box-f").innerHTML += html;
    } else if (inpVal.value == type || inpVal.value == type.toLowerCase()) {
      const html = ` <div class="card">
      <h4>${name}</h4>
            <img src="${img}" alt="">
    
            <div>
            <p>Rs ${price}</p>

            <ul>
              <li><button onclick ="decrease('qnum')">-</button></li>
              <li><input type="text" value="1" id="qnum"></li>
              <li><button onclick = increase('qnum')>+</button></li>
              
            </ul>
            
            <button type="click" id="add-to-cart" onclick="addToCart('${name}-${price}-${img}', 'qnum')" value="${name}-${price}-${img}">Add to Cart</button>
            </div>
            
    
        </div>`;

      document.getElementById("box-f").innerHTML += html;
    } else if (inpVal.value == gender || inpVal.value == gender.toLowerCase()) {
      const html = ` <div class="card">
      <h4>${name}</h4>
            <img src="${img}" alt="">
    
            <div>
            <p>Rs ${price}</p>

            <ul>
              <li><button onclick ="decrease('qnum')">-</button></li>
              <li><input type="text" value="1" id="qnum"></li>
              <li><button onclick = increase('qnum')>+</button></li>
              
            </ul>
            
            <button type="click" id="add-to-cart" onclick="addToCart('${name}-${price}-${img}', 'qnum')" value="${name}-${price}-${img}">Add to Cart</button>
            </div>
            
    
        </div>`;

      document.getElementById("box-f").innerHTML += html;
    } else if (inpVal.value == color || inpVal.value == color.toLowerCase()) {
      const html = ` <div class="card">
      <h4>${name}</h4>
            <img src="${img}" alt="">
    
            <div>
            <p>Rs ${price}</p>

            <ul>
              <li><button onclick ="decrease('qnum')">-</button></li>
              <li><input type="text" value="1" id="qnum"></li>
              <li><button onclick = increase('qnum')>+</button></li>
              
            </ul>
            
            <button type="click" id="add-to-cart" onclick="addToCart('${name}-${price}-${img}', 'qnum')" value="${name}-${price}-${img}">Add to Cart</button>
            </div>
            
    
        </div>`;

      document.getElementById("box-f").innerHTML += html;
    }
  });
}

// search results

function searchResult() {
  if (inpVal.value.length < 2 || inpVal == "") {
    alert("Enter a valid  name");
  } else {
    // console.log(inpVal.value);
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((response) => response.json())
      .then((data) => {
        var tname = data;
        // console.log(tname);

        // document.getElementById("box-f").innerHTML.remove();

        if (tname == null) {
          alert("Search Results Not Found");
        } else {
          document.getElementById("box-f").innerHTML = null;

          displayTshirts(tname);
        }
      });
  }
}

// code for cart
