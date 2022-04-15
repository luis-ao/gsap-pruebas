gsap.registerPlugin(ScrollTrigger); //llamamos al plugin

// star: el primer top hace referencia al top de nuestro elemento y el segundo al top de la pantalla con end aplica el mismo principio

// scrub hace que la animación retroceda con el scroll en reversa, por defeto tien el parametro 'true' pero podemos agregar un delay para alentar la animación, en este ejemplo 4

// pin hace que la animación siempre se vea en la pantalla

/* var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.ejem_1',// elegimos a que elemento se va animar
        markers: 'true', // activamos las marcas 
        start: 'top top',
        end : '+=900 0',
        scrub: '4',
        pin: '.ejem_2', // podemos poner true para clavar todos los elementos del contenedor o poner sólo la que queremos clavar como en este ejemplo
    }
});

tl.to('.ejem_1',{ x: '1000', duration: 2}); */

// Para animar dos objetos deben estar ambos dentro del mismo contenedor, siempre vamos a tener la libertad de que se va animar dentro de ese contenedor

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: 'contenedor__img', // el contenedor debe ir aquí 
        markers: 'true',
        start: 'top top',
        end : '+=400 0',
        scrub: '2',
        pin: 'true',
    }
});

tl.to('.ejem_1',{ x: '1000', duration: 2});
tl.to('.ejem_2',{ x: '1000', duration: 2}, '-=.2');
