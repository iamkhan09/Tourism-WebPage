console.log("lets write javascript")
//add event listener to hamburger opening
document.querySelector(".right").addEventListener("click", e => {
    console.log("cross clicked")
    document.querySelector(".right").style.left = "-380px"
})

document.querySelector(".hamburger").addEventListener("click", e => {
    const rght = document.querySelector(".right");
    rght.style.left = "0";
    rght.style.position = "absolute"; // Ensure it can be moved with 'left'
    rght.style.zIndex = "1000"; // Ensure it's on top of other elements

    if (!rght.querySelector(".navitems")) {
        rght.innerHTML += `<div class="navitems">
            <button class="home">HOME</button>
            <button class="about">ABOUT</button>
            <button class="ourservice">OUR SERVICE</button>
            <button class="tourguide">TOUR GUIDE</button>
            <button class="gallery">GALLERY</button>
        </div>`;
    }

    const navItems = rght.querySelector(".navitems");
    navItems.style.display = "block"; // Ensure the nav items are displayed
});
let cardcontainer=document.querySelector(".cards")
cardcontainer.innerHTML=cardcontainer.innerHTML+` <span><img width="300px" height="300px" src="images/pahalgam/cloudslakebg.jpeg" alt="">
                <p>Top Experiences</p>
            </span>
            <span><img width="300px" height="300px" src="images/sonmarg/sonmarg .jpeg" alt="">
                <p>Top Attraction</p>
            </span>
            <span><img width="300px" height="300px" src="images/gulmarg/gulmarg.jpeg" alt="">
                <p>Bucket List</p>
            </span>
            <span><img width="300px" height="300px" src="images/ladakh/ladakhbike.jpeg" alt="">
                <p>DREAM</p>
            </span> 
             <span><img width="300px" height="300px" src="images/gulmarg/gulmarg.jpeg" alt="">
                <p>Bucket List</p>
            </span>
            <span><img width="300px" height="300px" src="images/sonmarg/sonmarg .jpeg" alt="">
                <p>Top Attraction</p>
            </span>`
0

let cont=document.querySelector(".cardbg3")
cont.innerHTML=cont.innerHTML+` <span><img width="300px" height="300px" src="images/bg3/ubud.jpg" alt="">
                <p>All-Inclusive Ubud Private Tour</p>
            </span>
            <span><img width="300px" height="300px" src="images/bg3/bali.jpg" alt="">
                <p> Bali Instagram Tour: The Most Famous Spots</p>
            </span>
            <span><img width="300px" height="300px" src="images/bg3/singapore.jpg" alt="">
                <p>Lion City Bike Tour of Singapore</p>
            </span>
            <span><img width="300px" height="300px" src="images/tajmahal/tajmahal.jpeg" alt="">
                <p>Same Day Taj Mahal, Agra Fort & Baby Taj Tour from Delhi by Car</p>
            </span> 
             <span><img width="300px" height="300px" src="images/bg3/jaipur.jpg" alt="">
                <p>Jaipur City Tour from Delhi by Car or Rail: All Inclusive Package</p>
            </span>
            <span><img width="300px" height="300px" src="images/bg3/ducksingapore.jpg" alt="">
                <p>Singapore Duck Tour</p>
            </span>`

            let bg44=document.querySelector(".cardbg4")
            bg44.innerHTML=bg44.innerHTML+`<span><img width="300px" height="300px" src="images/bg4/ubudindonesia.jpg" alt="">
            <p>Ubud, Indonesia</p>
        </span>
        <span><img width="300px" height="300px" src="images/bg4/pattayathialand.jpg" alt="">
            <p>Pattaya, Thailand</p>
        </span>
        <span><img width="300px" height="300px" src="images/bg4/danangvietnam.jpg" alt="">
            <p>Da Nanag, Vietnam </p>
        </span>
        <span><img width="300px" height="300px" src="images/bg4/lonvala.jpg" alt="">
            <p>Lonavala, india</p>
        </span> 
         <span><img width="300px" height="300px" src="images/bg4/londonuk.jpg" alt="">
            <p>London, UK</p>
        </span>
        <span><img width="300px" height="300px" src="images/bg4/cainsaus.jpg" alt="">
            <p>Cairns, Australia</p>
        </span>`
        let heartfl = document.querySelector(".heart");


    
let heartElements = document.querySelectorAll(".heart");


heartElements.forEach(heartfl => {
    heartfl.addEventListener("click", e => {
        let imgElement = heartfl.querySelector("img"); 
        
        if (imgElement.src.includes("heartfill.svg")) {
            imgElement.src = "images/zlogo/heart.svg";
        } else {
            imgElement.src = "images/zlogo/heartfill.svg";
        }
    });
});

       function clickhandler(){
        alert("Your Book request is submitted kindly wait for approval")
       }
        
