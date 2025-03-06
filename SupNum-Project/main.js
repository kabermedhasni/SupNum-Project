//Start background
const bubbles = document.querySelectorAll(".bubble");
const maxSize = 300;
const minSize = 100;

function getRandomPosition() {
  return {
    x: Math.random() * (window.innerWidth - maxSize),
    y: Math.random() * (window.innerHeight - maxSize),
  };
}

function getRandomSize() {
  return Math.random() * (maxSize - minSize) + minSize;
}

function getRandomDuration() {
  return Math.random() * 5000 + 50000; // 10-15 seconds
}

function getRandomDeformation() {
  const baseShape = "50%";
  const maxDeform = 20;
  return `${baseShape} ${baseShape} ${50 - Math.random() * maxDeform}% ${
    50 + Math.random() * maxDeform
  }% / ${50 + Math.random() * maxDeform}% ${
    50 - Math.random() * maxDeform
  }% ${baseShape} ${baseShape}`;
}

function moveBubble(bubble) {
  const targetPos = getRandomPosition();
  const targetSize = getRandomSize();
  const duration = getRandomDuration();
  const deformation = getRandomDeformation();

  bubble.style.transition = `transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1), width ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1), height ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1), border-radius ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
  bubble.style.transform = `translate(${targetPos.x}px, ${targetPos.y}px)`;
  bubble.style.width = `${targetSize}px`;
  bubble.style.height = `${targetSize}px`;
  bubble.style.borderRadius = deformation;

  setTimeout(() => moveBubble(bubble), duration);
}

bubbles.forEach((bubble, index) => {
  const startPos = getRandomPosition();
  const startSize = getRandomSize();
  const startDeformation = getRandomDeformation();

  bubble.style.transform = `translate(${startPos.x}px, ${startPos.y}px)`;
  bubble.style.width = "0px";
  bubble.style.height = "0px";
  bubble.style.borderRadius = startDeformation;

  const initialDelay = index * 200;
  const scalingDuration = 8000;

  setTimeout(() => {
    bubble.style.opacity = "0.8";
    bubble.style.transition = `width ${scalingDuration}ms ease, height ${scalingDuration}ms ease, border-radius ${scalingDuration}ms ease`;
    bubble.style.width = `${startSize}px`;
    bubble.style.height = `${startSize}px`;

    setTimeout(() => moveBubble(bubble), scalingDuration);
  }, initialDelay);
});
//End background

//start Cardes

const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");

const originalContent1 = card1.innerHTML;
const originalContent2 = card2.innerHTML;
const originalContent3 = card3.innerHTML;

let toggled1 = false;
let toggled2 = false;
let toggled3 = false;

const cards = document.querySelectorAll(".carde");
const cardContainers = document.querySelectorAll(".carde-content");

// Track if we're hovering on each card
let isHovering = new Array(cards.length).fill(false);

// Update card tilt based on mouse position
cards.forEach((card, index) => {
  card.addEventListener("mousemove", (e) => {
    if (!isHovering[index]) return;

    // Get card dimensions and mouse position
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    // Convert to percentage (-50 to 50)
    const xRotation = (y / rect.height - 0.5) * -20; // -10 to 10 degrees
    const yRotation = (x / rect.width - 0.5) * 20; // -10 to 10 degrees

    // Apply the rotation
    card.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.02)`;

    // Adjust shadow based on tilt
    // const shadowX = yRotation * 2;
    // const shadowY = xRotation * 2;
    // const shadowBlur = Math.abs(xRotation) + Math.abs(yRotation) + 30;
    // card.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(67, 97, 238, 0.3)`;
  });

  // Start tracking when mouse enters
  card.addEventListener("mouseenter", () => {
    isHovering[index] = true;
  });

  // Reset card when mouse leaves
  card.addEventListener("mouseleave", () => {
    isHovering[index] = false;
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    card.style.boxShadow = "none";
  });
});

card1.addEventListener("click", function () {
  if (toggled1) {
    card1.innerHTML = originalContent1;
  } else {
    card1.innerHTML = "";
    const replacement = document.createElement("div");
    replacement.innerHTML = `
            <h2 class="cardes-text cardes-text1">Pour le Personnel</h2>
            <h2 class="cardes-text cardes-text2 cardes-text2-2 ">et les Employés</h2>
            <ul class="custom-list">
                <li class="replacement-1">Plateforme d'apprentissage</li>
                <li class="replacement-1">e-Windows</li>
                <li class="replacement-1">Webmail</li>
                <li class="replacement-1">Répertoire de la Faculté</li>
                <li class="replacement-1">Portail des employés</li>
                <li class="replacement-1">Répertoire des téléphones</li>
                <li class="replacement-1">Recherche scientifique</li>
                <li class="replacement-1">lois et Regulatinos</li>
            </ul>
        `;
    card1.appendChild(replacement);

    // Add animation delays
    const items = card1.querySelectorAll(".custom-list li");
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 100}ms`;
    });
  }
  toggled1 = !toggled1;
});

card2.addEventListener("click", function () {
  if (toggled2) {
    card2.innerHTML = originalContent2;
  } else {
    card2.innerHTML = "";
    const replacement = document.createElement("div");
    replacement.innerHTML = `
            <h2 class="cardes-text cardes-text3">Pour les Étudiants</h2>
            <ul class="custom-list">
                <li class="replacement-2">Portail des étudiants</li>
                <li class="replacement-2">Nouveaux étudiants</li>
                <li class="replacement-2">Calendrier académique</li>
                <li class="replacement-2">Moodle</li>
                <li class="replacement-2">Horaire de cours</li>
                <li class="replacement-2">Programmes d'études</li>
                <li class="replacement-2">Frais</li>
                <li class="replacement-2">E-mails</li>
            </ul>
        `;
    card2.appendChild(replacement);

    // Add animation delays
    const items = card2.querySelectorAll(".custom-list li");
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 100}ms`;
    });
  }
  toggled2 = !toggled2;
});

card3.addEventListener("click", function () {
  if (toggled3) {
    card3.innerHTML = originalContent3;
  } else {
    card3.innerHTML = "";
    const replacement = document.createElement("div");
    replacement.innerHTML = `
            <h2 class="cardes-text cardes-text4">Pour les Visiteurs</h2>
            <ul class="custom-list">
                <li class="replacement-3">Rendez-vous et envoi</li>
                <li class="replacement-3">Annonces d'emploi</li>
                <li class="replacement-3">Examen national</li>
                <li class="replacement-3">Portail des hôpitaux</li>
                <li class="replacement-3">Portail des parents</li>
                <li class="replacement-3">Portail des boursiers</li>
                <li class="replacement-3">Portail des anciens</li>
                <li class="replacement-3">Étudiants diplômés</li>
            </ul>
        `;
    card3.appendChild(replacement);

    // Add animation delays
    const items = card3.querySelectorAll(".custom-list li");
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 100}ms`;
    });
  }
  toggled3 = !toggled3;
});

//end Cardes

//start Mouse Follower
//end Mouse Follower

//start Dates importantes
const creation = document.getElementById("creation");
const nomination = document.querySelector(".title1-date");
const formalites = document.querySelector(".title3-date");
const nominationText = document.querySelectorAll(".Nomination");
const nominationImage = document.querySelector("img.Nomination");

// Store original nomination content
const originalHeadlines = document.querySelector(
  ".dates-left-headlines"
).innerHTML;
const originalParagraphs = document.querySelector(
  ".dates-left-contenue"
).innerHTML;
const originalImage = document.querySelector(".dates-right img").src;

function updateActiveTitle(activeElement) {
  // If already active, do nothing
  if (activeElement.classList.contains("active")) {
    return false;
  }

  // Remove active class from all titles
  document.querySelectorAll(".title-date").forEach((title) => {
    title.classList.remove("active");
  });
  // Add active class to clicked title
  activeElement.classList.add("active");
  return true; // Content should be updated
}

function hideAllContent() {
  // Add fade-out class
  document.querySelector(".dates-left-headlines").classList.add("fade-out");
  document.querySelector(".dates-left-contenue").classList.add("fade-out");
  document.querySelector(".dates-right img").classList.add("fade-out");

  setTimeout(() => {
    nominationText.forEach((element) => (element.style.display = "none"));
    if (nominationImage) nominationImage.style.display = "none";
  }, 300);
}

function showContent(headlines, paragraphs, imagesrc) {
  hideAllContent();

  setTimeout(() => {
    document.querySelector(".dates-left-headlines").innerHTML = headlines;
    document.querySelector(".dates-left-contenue").innerHTML = paragraphs;
    document.querySelector(".dates-right img").src = imagesrc;

    document
      .querySelector(".dates-left-headlines")
      .classList.remove("fade-out");
    document.querySelector(".dates-left-contenue").classList.remove("fade-out");
    document.querySelector(".dates-right img").classList.remove("fade-out");
    document.querySelector(".dates-right img").style.display = "block";
  }, 300);
}

function showNominationContent() {
  // Only update content if title isn't already active
  if (updateActiveTitle(nomination)) {
    showContent(originalHeadlines, originalParagraphs, originalImage);
    nominationText.forEach((element) => {
      setTimeout(() => {
        element.style.display = "block";
      }, 300);
    });
  }
}

function showCreationContent() {
  // Only update content if title isn't already active
  if (updateActiveTitle(creation)) {
    const headlinesContent = `
      <h4 class="headline headline-paragraphe1 headline">Création à Nouakchott de l'Institut </h4>
      <h4 class="headline headline-paragraphe2 headline">Supérieur du Numérique</h4>
      <h4 class="headline headline-paragraphe3 headline">sous le nom de</h4>
      <h4 class="headline headline-paragraphe4 headline">SupNum</h4>
    `;

    const paragraphsContent = `
      <p class="paragraphe1 contenue">Le gouvernement mauritanien a approuvé le 22 septembre 2021, lors de sa réunion hebdomadaire, un</p>
      <p class="paragraphe2 contenue">projet de décret portant création et fonctionnement de l'institut supérieur des technologies numériques.</p>
      <p class="paragraphe3 contenue">Qui vise à se développer et à former dans le domaine numérique, et encadrera des cadres</p>
      <p class="paragraphe4 contenue">hautement qualifiés dans le domaine de la numérisation .</p>
      <p class="paragraphe5 contenue">Commentant le projet, la ministre de l'Enseignement supérieur et de la Recherche a déclaré : système d'études.</p>
      <p class="paragraphe6 contenue">De cet institut sera similaire à un baccalauréat en ingénierie et dépendra plus de la formation professionnelle.</p>
    `;

    showContent(
      headlinesContent,
      paragraphsContent,
      "src/WhatsApp Image 2025-03-03 at 05.59.17_441b826d.jpg"
    );
  }
}

function showFormalitesContent() {
  // Only update content if title isn't already active
  if (updateActiveTitle(formalites)) {
    const headlinesContent = `
      <h4 class="headline headline-paragraphe1 headline">Formalités d'inscription</h4>
      <h4 class="headline headline-paragraphe2 headline">Pour l'année académique</h4>
      <h4 class="headline headline-paragraphe3 headline">en cours à</h4>
      <h4 class="headline headline-paragraphe4 headline">SupNum</h4>
    `;

    const paragraphsContent = `
      <p class="paragraphe1 contenue">Les étudiants orientés vers SupNum sont informés que linscription, pour l'année universitaire 2021-2022 .</p>
      <p class="paragraphe2 contenue">est prévue du lundi 01 novembre au vendredi 07 novembre, pendant les jours ouvrables de 9h à 13h .</p>
      <p class="paragraphe3 contenue">Les cours ont démarré le lundi 8 novembre 2021 à 8h00 .</p>
      <p class="paragraphe4 contenue">Les retardataires sont priés de finaliser leur inscription dans les plus brefs délais</p>
      <p class="paragraphe5 contenue">Les pièces justificatives requises doivent être déposées au secrétariat avant la fin de la période d'inscription .</p>
      <p class="paragraphe6 contenue">Pour toute information complémentaire, veuillez contacter l'administration de SupNum .</p>
    `;

    showContent(
      headlinesContent,
      paragraphsContent,
      "src/WhatsApp Image 2025-03-04 at 21.49.50_6660f828.jpg"
    );
  }
}

// Add click event listeners
nomination.addEventListener("click", showNominationContent);
creation.addEventListener("click", showCreationContent);
formalites.addEventListener("click", showFormalitesContent);

nomination.classList.add("active");
// end Dates importantesk

//start Smooth Scrolling
const scrollSections = document.querySelectorAll(".scroll-section");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Optional: Unobserve after animation
      // scrollObserver.unobserve(entry.target);
    } else {
      // Comment out the next line if you want the animation to occur only once
      entry.target.classList.remove("visible");
    }
  });
}, observerOptions);

scrollSections.forEach((section) => {
  scrollObserver.observe(section);
});

// Smooth scroll for navigation links
// document.querySelectorAll(".nav-bar-right a").forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const targetId = this.getAttribute("href").replace("/#", "");
//     const targetSection = document.getElementById(targetId);

//     if (targetSection) {
//       targetSection.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   });
// });

// Add scroll speed variation
// let lastScrollTop = 0;
// let isThrottled = false;

// window.addEventListener("scroll", () => {
//   if (isThrottled) return;
//   isThrottled = true;

//   setTimeout(() => {
//     const st = window.pageYOffset || document.documentElement.scrollTop;
//     const scrollSpeed = Math.abs(st - lastScrollTop);
//     const slowDownThreshold = 500;

//     if (scrollSpeed > slowDownThreshold) {
//       document.documentElement.style.scrollBehavior = "smooth";
//     } else {
//       document.documentElement.style.scrollBehavior = "auto";
//     }

//     lastScrollTop = st;
//     isThrottled = false;
//   }, 150);
// });
//end Smooth Scrolling

//start Nav Bar Hide/Show
let lastScrollY = window.scrollY;
const navbar = document.querySelector(".nav-bar-container");
const scrollThreshold = 10; // Minimum scroll amount before hiding/showing

function handleNavbarVisibility() {
  const currentScrollY = window.scrollY;

  // Only trigger if we've scrolled more than the threshold
  if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
    // Scrolling down
    if (currentScrollY > lastScrollY) {
      navbar.classList.add("hidden");
    }
    // Scrolling up
    else {
      navbar.classList.remove("hidden");
    }
    lastScrollY = currentScrollY;
  }
}

// Add scroll event listener with throttling for better performance
let isThrottled = false;
window.addEventListener("scroll", () => {
  if (!isThrottled) {
    isThrottled = true;
    window.requestAnimationFrame(() => {
      handleNavbarVisibility();
      isThrottled = false;
    });
  }
});
//End Nav Bar Hide/Show

//start Smooth Scroll

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll implementation using Lenis
  // This is a simplified version of what libraries like Lenis or Locomotive Scroll do
  let scrollY = window.scrollY || window.pageYOffset;
  let currentScrollY = scrollY;
  let targetScrollY = scrollY;
  const ease = 0.055; // Lower = smoother

  // Function to normalize scroll speed across different browsers/devices
  const normalizeWheel = (event) => {
    let pixelY = event.deltaY;

    if (event.deltaMode === 1) {
      // Delta in LINE units
      pixelY *= 40;
    } else if (event.deltaMode === 2) {
      // Delta in PAGE units
      pixelY *= 800;
    }

    return pixelY;
  };

  // Listen for wheel events
  window.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();

      // Get normalized scroll amount
      const scrollAmount = normalizeWheel(event);

      // Update target scroll position
      targetScrollY = Math.max(
        0,
        Math.min(
          document.body.scrollHeight - window.innerHeight,
          targetScrollY + scrollAmount
        )
      );
    },
    { passive: false }
  );

  // Touch support
  let touchStart = 0;
  let touchY = 0;
  let isTouch = false;

  window.addEventListener(
    "touchstart",
    (event) => {
      isTouch = true;
      touchStart = event.touches[0].clientY;
      touchY = touchStart;
    },
    { passive: true }
  );

  window.addEventListener(
    "touchmove",
    (event) => {
      if (!isTouch) return;

      const y = event.touches[0].clientY;
      const delta = touchY - y;
      touchY = y;

      // Update target scroll position
      targetScrollY = Math.max(
        0,
        Math.min(
          document.body.scrollHeight - window.innerHeight,
          targetScrollY + delta * 2
        )
      );

      // Prevent default scrolling
      event.preventDefault();
    },
    { passive: false }
  );

  window.addEventListener(
    "touchend",
    () => {
      isTouch = false;
    },
    { passive: true }
  );

  // Animation loop
  const update = () => {
    // Calculate current scroll position with lerp formula
    currentScrollY = parseFloat(
      (currentScrollY * (1 - ease) + targetScrollY * ease).toFixed(2)
    );

    // Apply the scroll
    window.scrollTo(0, currentScrollY);

    // Update scroll position for next frame
    scrollY = window.scrollY || window.pageYOffset;

    // Call next frame
    requestAnimationFrame(update);
  };

  // Start the animation loop
  update();
});
//