/*  gsap.to ---> es empezar por el inicio 
    gsap.from----> arrancamos del final y termina en el lugar inicial
   */
/* gsap.from(".firstBox", {
  duration: 3, //todo lo que ponga en duration son segundos
  x: 600, //todo lo que ponga en x o y , son PX
  delay: 2,
  borderRadius: "50%",
  ease: "elastic.out(1, 0.3)",
}); */

/* let tl1 = gsap.timeline({
  repeat: 0, //esto significa que se repite 1 vez.
});

tl1.to(
  ".firstBox",
  {
    duration: 1.5,
    x: 600,
    delay: 2,
  },
  "=-1.5"
);

tl1.from(
  ".secondBox",
  {
    duration: 1.5,
    scale: 0.3,
    x: 500,
    delay: 2,
  },
  "=-1.5"
);
tl1.to(
  ".thirdBox",
  {
    duration: 1.5,
    borderRadius: "50%",
    x: 500,
    delay: 2,
  },
  "=-1.5"
);
tl1.from(
  ".fourBox",
  {
    duration: 1.5,
    rotate: "360%",
    x: 600,
  },
  "=-1.5"
);
 */

/* gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".firstBox",
    markers: true,
    start: "top top",
    end: "+=900 100%",
    scrub: 5,
    pin: ".secondBox", //Sirve para pinear un elemento en el scroll. Es decir la cja 2, se va ir hasta abajo hasta que temrine 
  },
});
//El pin y el trigger, son las 2 cosas mas importantes de un scrolltrigger
tl.to(".firstBox", { x: "1000", duration: 2 });

//cuando quiero animar 2 o mas objetos, si o si tengo que meter los 2 en el mismo objeto


 */

//--------------------------------------------------------------Slider

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });
const tl = gsap.timeline();

/* tl.from(".section-one", { x: "-100" }); */

tl.from(".section-two", { xPrecent: -100 });
tl.from(".section-three", { xPrecent: 100 });
tl.from(".section-four", { yPrecent: -100 });

ScrollTrigger.create({
  animation: tl,
  trigger: ".animation",
  markers: true,
  start: "top top",
  end: "+=4000",
  pin: true, //el scrol se hace siempre sobre la misma seccion.
  scrub: true,
});
