//Logic for hanburger menu.
let open = document.querySelector(".open");
let close = document.querySelector(".close");
let side_bar = document.querySelector(".side-bar");

open.addEventListener("click",function(){
    close.style.display = 'block';
    side_bar.style.display = "flex";
})

close.addEventListener("click",function(){
    close.style.display = 'none';
    side_bar.style.display = "none";
})


//This variable call data from data.json file
const FetchData = 'https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';


// In This function all the menu items are render on the display from json file.
document.addEventListener("DOMContentLoaded", function(){

  let cardSection = document.querySelector(".card-section");

  function getMenu(){
    
    fetch(FetchData).then(response => {
      return response.json();
    }).then(data => {
      data.forEach((items) => {
        cardSection.innerHTML += `
        <div class="card">
            <img src=${items.imgSrc} alt="" class="card-main-img">
            <div class="card-content">
                <div class="card-start-content">
                    <p class="food-name">${items.name}</p>
                    <p class="cost">$${items.price}/-</p>
                </div>
                <div class="card-end-content">
                    <img src="img/Group 4.png" alt="">
                </div>
            </div>
        </div>
        `
      })
    })
  }

  getMenu();


  // In This function random order for burger are placed.
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = [
          { name: "Cheese Burger", price: 5.99 },
          { name: "Veggie Burger", price: 6.49 },
          { name: "Bacon Burger", price: 7.49 },
          { name: "Chicken Burger", price: 6.99 },
          { name: "Mushroom Burger", price: 6.79 },
          { name: "Double Cheese Burger", price: 8.99 },
          { name: "BBQ Burger", price: 7.99 },
          { name: "Fish Burger", price: 7.29 },
          { name: "Turkey Burger", price: 6.49 },
          { name: "Spicy Burger", price: 7.49 }
        ];
  
        const randomBurgers = [];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * burgers.length);
          randomBurgers.push(burgers[randomIndex]);
        }
  
        resolve(randomBurgers);
      }, 2500);
    });
  }
  


  // In This function the status of order and payment statuse are returned.
  function orderPrep(){
    return new Promise(resolve => {
      setTimeout(() => {
        let orderPrepObj = {order_status:true, paid:false}
        resolve(orderPrepObj);
      },1500);
    })
  }


  // In This function the status of order and payment statuse are returned.
  function payOrder(){
    return new Promise(resolve => {
      setTimeout(() => {
        let payOrderObj = {order_status:true, paid:true};
        resolve(payOrderObj);
      }, 1000);
    })
  }


  //In this fuction a thankyou message is returned after the payment is done.
  function thankyou(){
    alert('thankyou for eating with us today!');
  }


  //This is the main function which control the flow of all the function.
  function main() {
    takeOrder()
      .then(order => {
        console.log('Your Order:', order);
        return orderPrep(); // Return the promise
      })
      .then(orderStatus => {
        console.log('Order Preparation Status:', orderStatus);
        return payOrder(); // Return the promise
      })
      .then(payOrderStatus => {
        console.log('Payment Status:', payOrderStatus);
        if (payOrderStatus && payOrderStatus.paid) {
          thankyou();
        }
      })
  }
  

  main();
})

function secondScreen(){
  let hideMainImg = document.querySelector('.main_hero_img');
  hideMainImg.style.display = 'none';
};
