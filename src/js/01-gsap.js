/* podemos animar aspectos de css pero debemos reemplazar los espacios por una mayuscula ejemplo border-radius = borderRadius

para personalizar la curva de animación podemos previsualizar en https://greensock.com/ease-visualizer */

/* gsap.to('.cuadrado_1',{
    duration: 3,
    x: 600,
    delay: 1,
    borderRadius: '50%',
    ease: 'bounce.out',
}); */

/* CREANDO LÍNEAS DE TIEMPO */
// podemos nombrar como nosotros queramos a la variable pero comunmente se le nombra tl
// para que inicien todas al mismo tiempo podemos agregar }'-=el tiempo que le quieras restar');
let tl = gsap.timeline({
    repeat:0, 
    yoyo: true,
});

tl.to('.cuadrado_1', {
    duration: 1.5,
    scale: 2,
    x: 500,
}, '-=0.5');

tl.from('.cuadrado_2', {
    duration: 1.5,
    scale: 0.3,
    x: 500,
}, '-=1');

tl.to('.cuadrado_3', {
    duration: 1.5,
    borderRadius: '50%',
    x: 500,
}, '-=1');

tl.from('.cuadrado_4', {
    duration: 1.5,
    rotate: 360,
    x: 500,
}, '-=1');