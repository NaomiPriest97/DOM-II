// Your code goes here

//1. mouse enter event for images
const image = document.querySelectorAll("img").forEach(image => {
   image.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.2)";
    image.style.transition = "transform 0.2s";
  });
   image.addEventListener("mouseleave", () => {
     image.style.transform = "scale(1)"; 
   });
})


// mouse enter for h2s
const intro = document.querySelectorAll("h2").forEach(intro => {
    intro.addEventListener("mouseenter", () => {
        intro.style.transform = "scale(1.2)";
        intro.style.transition = "transform 0.2s";
    });
    intro.addEventListener("mouseleave", () => {
        intro.style.transform = "scale(1)";
    })
})


//mouse enter for h4s
const h4 = document.querySelectorAll("h4").forEach(h4 => {
    h4.addEventListener("mouseenter", () => {
        h4.style.transform = "scale(1.2)";
        h4.style.transition = "transform 0.2s";
    });
    h4.addEventListener("mouseleave", () => {
        h4.style.transform = "scale(1)";
    })
})


//mouse enter for ps
const sections = document.querySelectorAll("p").forEach(sections => {
    sections.addEventListener("mouseenter", () => {
        sections.style.transform = "scale(1.2)";
        sections.style.transition = "transform 0.2s";
    });
    sections.addEventListener("mouseleave", () => {
        sections.style.transform = "scale(1)";
    })
})




//2. click event
document.querySelectorAll("h2").forEach(el => {
    el.addEventListener("click", () => {
      el.style.color = "#FF7F50";
    });

});

document.querySelectorAll("h4").forEach(el => {
    el.addEventListener("click", () => {
      el.style.color = "#00BFFF";
    });
});





//3. scroll event
let last_known_scroll_position = 0;
let ticking = false;
  
function doSomething(scroll_pos) {
   console.log("scrolling");
  }
  
window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
        });
      ticking = true;
    }
  });





//4. click background color
const body = document.querySelector("body");
body.addEventListener("click", () => {
  body.style.backgroundColor = "#74efef";
  body.style.backgroundImage = "linear-gradient(180deg, #74efef 6%, #ebdf86 100%)";
});

const cardGroup = document.querySelector(".home");
  cardGroup.addEventListener("click", () => {
  cardGroup.style.backgroundColor = "#ebdf86";
  
});


//5. stop propagation event
const card = document.querySelector(".content-section");
    card.addEventListener("click", () => {
    card.style.backgroundColor = "#E0FFFF";
    event.stopPropagation();
    console.log("stopping propagation ");
});




//6. wheel
const wheel = document.querySelector("h1");
wheel.addEventListener("wheel", function (el){
    el.target.style.color = "salmon";
    console.log("wheeling out homie");
});



//7. blur event
const navBlur = document.querySelectorAll("nav")[0];
navBlur.addEventListener("blur", (doSomething) => {
    doSomething.target.style.color = "salmon";
    console.log("blurrrred out");
}, true);



////8. resize event
const sizeImg = document.getElementsByTagName("img")[1];
window.addEventListener("resize", () => {
  sizeImg.src = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
  console.log(sizeImg);
  console.log("sizing my image");
});


//9. prevent default event
const stopLink = document.querySelector(".nav");
stopLink.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("stopped the link");
})



////10. doubleclick event
const changeImg = document.getElementsByTagName("img")[3];
changeImg.addEventListener("dblclick", () => {
  changeImg.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/cat-lambda.png";
  console.log("changed the image");
});