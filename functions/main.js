const locationData = [
  {
    id: 1,
    title: 'The Shop',
    address: '3433 SEPULVEDA BLVD TORRANCE, CA 90505',
    contact: '(215) 826-0331', 
    openTime: '10pm'
  },
  {
    id: 2,
    title: 'The Shop',
    address: '1601 KINGDALE AVE REDONDO BEACH, CA 90278',
    contact: '(215) 826-0331', 
    openTime: '10pm'
  },
  {
    id: 3,
    title: 'The Shop',
    address: '22255 S WESTERN AVE, TORRANCE, CA 90505',
    contact: '(215) 826-0331', 
    openTime: '10pm'
  },
  {
    id: 4,
    title: 'The Shop',
    address: '3433 SEPULVEDA BLVD TORRANCE, CA 90505',
    contact: '(215) 826-0331', 
    openTime: '10pm'
  },
  {
    id: 5,
    title: 'The Shop',
    address: '3433 SEPULVEDA BLVD TORRANCE, CA 90505',
    contact: '(215) 826-0331', 
    openTime: '10pm'
  },
  {
    id: 6,
    title: 'The Shop',
    address: '3433 SEPULVEDA BLVD TORRANCE, CA 90505',
    contact: '(215) 826-0331', 
    openTime: '10pm'
  },
  {
    id: 7,
    title: 'The Shop',
    address: '3433 SEPULVEDA BLVD TORRANCE, CA 90505',
    contact: '(215) 826-0331', 
    openTime: '10pm'
  },
  {
    id: 8,
    title: 'The Shop',
    address: '3433 SEPULVEDA BLVD TORRANCE, CA 90505',
    contact: '(215) 826-0331', 
    openTime: '10pm'
  },
  {
    id: 9,
    title: 'The Shop',
    address: '3433 SEPULVEDA BLVD TORRANCE, CA 90505',
    contact: '(215) 826-0331', 
    openTime: '10pm'
  },
  {
    id: 10,
    title: 'The Shop',
    address: '3433 SEPULVEDA BLVD TORRANCE, CA 90505',
    contact: '(215) 826-0331', 
    openTime: '10pm'
  },
]

let usersContainer = document.querySelector(".list");
var filterDiv = document.querySelector('.filter-div')
var filtertBtn = document.querySelector('.filter-btn')
var displayDiv = document.querySelector('.display')
var display = 0;

const mappedUsers = locationData.map((item, index) => {
  return `<div class="item" key={${index}}>
            <div class="open-time">
              <i class="fa-solid fa-location-pin">
                <span>${item.id}</span>
              </i>
              <div class="text-container">
                <p class="open-until">Open until</p>
                <p class="time">${item.openTime}</p>
              </div>
            </div>
            <div class="right-details">
              <div class="loc-details">
                <div>
                  <h4 class='title'>${item.title}</h4>
                  <p clas='adddress'>${item.address}</p>
                  <p><i class="fa-solid fa-phone"></i> ${item.contact}</p>
                </div>
                </div>
                <button class="get-directions">GET DIRECTIONS</button>
                </div>
                <i class="fa-solid fa-angle-right"></i>
          </div>`
}).join('');

function hideShowHandler() {
  console.log('clicked')
  if(display === 1) {
    displayDiv.style.display = 'block'
    filterDiv.style.display = 'none'
    display = 0;
  } else {
    displayDiv.style.display = 'none'
    filterDiv.style.display = 'block'
    display = 1;
  }
}

usersContainer.innerHTML = mappedUsers