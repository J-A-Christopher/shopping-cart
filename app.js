var cart=document.querySelectorAll('.cart');

let products=[
  {
    name:'Bella Heels',
    tag:'BellaHeels',
    price:4.59,
    incart:0
  },
  {
    name:'Leather Black Yoshaku',
    tag:'LBY',
    price:8.59,
    incart:0
  },
  {
    name:'Ihsan Heels',
    tag:'IHeels',
    price:3.80,
    incart:0
  },
  {
    name:'Indian Lofas',
    tag:'Ilofas',
    price:1.25,
    incart:0
  },
  {
    name:'Scotland Lofas',
    tag:'SLofas',
    price:6.83,
    incart:0
  },
  {
    name:'Open Shoes',
    tag:'OShoes',
    price:1.04,
    incart:0
  }
]
for(i=0;i<cart.length;i++) {
  cart[i].addEventListener('click',()=>{
    dCart(products[i])
  })
}


function onLoadCartNumbers() {
  let productNumbers=localStorage.getItem('cartNumbers');
  
  if(productNumbers) {
    document.getElementById('c-span').textContent=productNumbers;
  }
}

function dCart(product) {
  product=products[0]
  console.log('the product clicked is',product) 
 let productNumbers=localStorage.getItem('cartNumbers');
 
  productNumbers=parseInt(productNumbers)
  
  if(productNumbers) {
    localStorage.setItem('cartNumbers',productNumbers + 1);
    document.getElementById('c-span').textContent=productNumbers +1;
  } else{
    localStorage.setItem('cartNumbers',1);
    document.getElementById('c-span').textContent=1
  }
 
}

onLoadCartNumbers()