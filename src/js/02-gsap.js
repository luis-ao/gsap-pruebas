gsap.registerPlugin(ScrollTrigger); //llamamos al plugin

// trigger - le da scroll al objeto que le pongamos al parentesis
// markers - nos indica las marcas donde el scroll se activa
// star: el primer top hace referencia al top de nuestro elemento y el segundo al top de la pantalla con end aplica el mismo principio
// scrub hace que la animación retroceda con el scroll en reversa, por defeto tien el parametro 'true' pero podemos agregar un delay para alentar la animación, en este ejemplo 4
// pin hace que la animación siempre se vea en la pantalla

/* var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.ejem_1',
        markers: 'true',
        start: 'top top',
        end : '+=900 0',
        scrub: '4',
        pin: '.ejem_2',
    }
});

tl.to('.ejem_1',{ x: '1000', duration: 2}); */

// Para animar dos objetos deben estar ambos dentro del mismo contenedor, siempre vamos a tener la libertad de que se va animar dentro de ese contenedor

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: 'contenedor__img', // el contenedor debe ir aquí 
        markers: 'true',
        start: 'top top',
        end : '+=200 0',
        scrub: '1',
        pin: 'true',
    }
});

tl.to('.ejem_1',{ x: '1000', duration: 2}, '-=9');
tl.to('.ejem_2',{ x: '1000', duration: 2});
