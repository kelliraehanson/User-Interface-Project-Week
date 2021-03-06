// JS goes here
class TabLink {
    constructor(element) {
      
      this.element = element;
      
      
      this.data = this.element.dataset.tab;
      
    
      this.itemElement = document.querySelector(`.tabs-item[data-tab = '${this.data}']`);
      
      
      this.tabItem = new TabItem(this.itemElement);
      
      
      this.element.addEventListener("click", () => this.select());
    };
  
    select() {
      
      const links = document.querySelectorAll(".tabs-link"); 
  
      
      Array.from(links).forEach(tab => tab.classList.remove("tabs-link-selected")
  
      );
  
      
      this.element.classList.add("tabs-link-selected");
      
      
      this.tabItem.select(this.itemElement);
  
    }
  }
  
  class TabItem {
    constructor(element) {
      
      this.element = element;
    }
  
    select() {
     
      const items = document.querySelectorAll(".tabs-item"); 
  
      
      items.forEach(item => item.classList.remove("tabs-item-selected"));
      
     
      this.element.classList.add("tabs-item-selected");
    }
  }
  
  
  links = document.querySelectorAll(".tabs-link") 
                                     .forEach(link => new TabLink(link));

  //=====NAV

  class Dropdown {
    constructor(element) {
      
      this.element = element;
      
      this.button = this.element.querySelector(".dropdown-button");
      
      this.content = this.element.querySelector(".dropdown-content");
      
      this.button.addEventListener("click", () => this.toggleContent());
    }
  
    toggleContent() {
      
      this.content.classList.toggle("dropdown-hidden");

    }
  }
  
  
  let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));





  var buttonOther = document.getElementById("buttonClose"), 

    menuConent = document.getElementById("menuContent");


  buttonClose.addEventListener("click", function(){

    if (menuContent.style.display == 'none') {

        menuContent.style.display = 'block';
    
    } else {

        menuContent.style.display = 'none';

    }

}, false);







