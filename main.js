const menu = document.querySelector(".menu");
const burger1 = document.querySelector(".burger1");
const burger2 = document.querySelector(".burger2");
const burger3 = document.querySelector(".burger3");
const rotate = document.querySelector(".navigation-chev");
const ulHide = document.querySelector(".choices");

menu.addEventListener("click", () => {
  burger1.classList.toggle("peristrofi1");
  burger2.classList.toggle("peristrofi2");

  burger3.classList.toggle("diagrafi");

  rotate.classList.toggle("rotated");
  ulHide.classList.toggle("hiden");
});

// gamw to spiti sas
const clicks = document.querySelectorAll(".clicks");
const main = document.querySelector("main");

clicks.forEach((click, index) => {
  click.addEventListener("click", () => {
    if (index == 0) {
      main.innerHTML = firstIn;
    }

    if (index == 1) {
      main.innerHTML = secondIn;
    }
    if (index == 2) {
      main.innerHTML = thirdIn;
    }
    if (index == 3) {
      main.innerHTML = polla;
    }
    if (index == 4) {
      main.innerHTML = lastIn;
    }

    remove();
    add();
  });

  function remove() {
    clicks.forEach((cWhite) => {
      cWhite.classList.remove("cW");
    });
  }

  function add() {
    click.classList.add("cW");
  }
});

let firstIn = `    <section class="about">
<div class="about-one">
  <h1>Go beyond music. Immerse your senses through vibration.</h1>
  <img src="images/img2/section-about-1.jpg" alt="" />
</div>
<div class="about-two">
  <div class="about-img">
      <img src="images/img2/BS1_NYC_Home.webp" alt="" />
    </div>
  <div class="content">
    <h2>DESIGN ALCHEMY</h2>
    <p>
      The fundamentals of good design are eternal. Innovation is
      essential. We balance rigorous design with an openness to
      experimentation in our mission to create products that enrich your
      life.
    </p>
    <p>
      The creation of an excellent product is not a matter of simple
      fabrication. Our long heritage of master craftsmanship, from the
      materials we select to how we craft each product, imbues everything
      we make with precision and feeling.
    </p>
  </div>
  
</div>
</section>`;

let secondIn = ` <section class="about3">
      
<div class="same-img">
    <img src="images/img2/section-voyager.jpg" alt="" />
  </div>
<div class="same-cnt">
  <h2>The Lounger </h2>
  <p>
    The Lounger is your trans-sensory vessel to audio-haptic pleasure. Precision sculpted from luxe material, this high-tech pod is calibrated for comfort and inspired by the Japanese art of origami. Through its seamlessly integrated tablet, it delivers a rich and varied playlist of full-body experiences, with tracks updated monthly. 
  </p>
  <p>
    Produced in the Eu, this limited edition lounger is suitable for events, clubs, airlines, hotels, workplaces and indulgence-seeking individuals.
  </p>
  <p>Available from February 2018</p>
</div>

</section>`;

const thirdIn = `  <section class="about3">
      
<div class="same-img">
    <img src="images/img2/section-experience-1.jpg" alt="" />
  </div>
<div class="same-cnt">
  <h2>Sounds Like Home</h2>
  <p>There’s this feeling. It’s like your favorite song; like home. Maybe it’s hard to explain, but you know it. It’s when everything is in sync and you are free to decompress, create, design, entertain. It’s that atmosphere created when every element comes together in perfect harmony.</p>
  <p>
    When it comes to composing a home, people explore design differently to curate their space. And the beauty of that freedom is that there is more than one correct answer. As long as you pick elements that make you feel at home, you’re on the right track. Maybe it’s a lamp, or a chair. Maybe even a plant, or the music playing in the background. These things aren’t just there by chance - they mean something.
  </p>
 
</div>

</section>`;

const polla = `   <section class="polla">


<div class="video">
    <video autoplay muted  src="images/img2/Magical_Home.mp4"></video>
</div>


<div class="meText">
    <h3>AN ALCHEMY OF DESIGN, CRAFT AND SOUND.</h3>
    <h2>Exist to Create.</h2>
    <span>SOUND</span>
    <span>DESIGN</span>
    <span>CRAFT</span>
    <p>We define our world through imagination.</p>
</div>

<div class="reverse">
    <article>
        <div class="tIMG"><img src="images/img2/ETC_6.webp" alt=""></div>
        <div class="lastText">
            <h3>Sound Alchemy</h3>
            <h2>A feeling for sound </h2>
            <p>The power of music is without bounds, it goes straight to our hearts. Our job is to do justice to that power. We make that feeling thrive by creating the most impactful, accurate and immersive sound experience possible.</p>
        </div>
    </article>
    <article>
        <div class="tIMG"><img src="images/img2/ETC_5.webp" alt=""></div>
        <div class="lastText">
            <h3>Sound Architecture</h3>
            <h2>Everything Starts with Architecture</h2>
            <p>Join us in a conversation among a concept developer, an acoustic engineer and a technical project manager taking us through the creation process of a new, ground breaking product</p>
        </div>
    </article>
</div>

</section>`;

const lastIn = `<section class="about3">
      
<div class="same-img">
    <img src="images/img2/section-composition4.jpg" alt="" />
  </div>
<div class="same-center">
    <img src="images/img2/h9-argilla-bright-hero-1000x1000.webp" alt="">
  <h2>Beoplay H9</h2>
  <p>Argilla Bright</p>
  <p>
    500$
  </p>
  <button>Buy</button>
</div>

</section>`;
