document.addEventListener('click', handleClick);
let name = prompt('Ingresa tu nombre porfa');

function handleClick(event){
    if(event.target.textContent == 'Mi Biografia'){
        if(document.querySelector('.secret')){
            document.querySelector('.secret').remove()
        }

        let biografia = document.querySelector('#parrafoBiogra');
        biografia.textContent = `Hola Mí nombre es Julián Martín Linzalata. Bueno, el día de hoy que es: ${new Date().toLocaleDateString()}, estoy aquí para hacer cosas maravillosas como un breve cuestionario hacia usted. Sí, hacia usted ${name}.`;
        document.body.style.backgroundColor = `rgba(129, 128, 127, 0.541)`;

        let preguntaBtn = document.createElement('button');
        preguntaBtn.textContent = 'Continuar...';
        preguntaBtn.id = 'btnContinuar';
        preguntaBtn.classList.add('btnContinuar');
        biografia.append(preguntaBtn);
        event.target.remove();
    }

    if(event.target.id == 'btnContinuar') {
        let pregunta = document.querySelector('#pregMes');
        pregunta.textContent = `${name}, a ver si me conocés bien... ¿En qué mes nací?`;
        pregunta.classList.add('pregunta');
        event.target.remove();

        let boton1 = document.createElement('button');
        let boton2 = document.createElement('button');
        let boton3 = document.createElement('button');
        let boton4 = document.createElement('button');
        boton1.textContent = "Julio";
        boton2.textContent = "Septiembre";
        boton3.textContent = "Noviembre";
        boton4.textContent = "Marzo";
        boton1.classList.add('btnPreg');
        boton2.classList.add('btnPreg');
        boton3.classList.add('btnPreg');
        boton4.classList.add('btnPreg');
        document.querySelector('#botones').append(boton1);
        document.querySelector('#botones').append(boton2);
        document.querySelector('#botones').append(boton3);
        document.querySelector('#botones').append(boton4);
    }

    if(event.target.classList.contains('btnPreg')){
        let resultado = document.querySelector('#resultado');
        if (event.target.textContent == 'Julio') {
            resultado.textContent = `La respuesta es correcta!!! dame un besito. Nah mentira me gustan las mujeres.`;
            let videoContainer = document.querySelector('#videoContainer');
            videoContainer.innerHTML = '<iframe src="https://www.youtube.com/embed/IMfAOTmnyp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
            document.querySelector('#botones').remove();

            let contenedorBtnsColores= document.querySelector('#botonesColor');
            let preg2 = document.querySelector('#pregColor');
            preg2.classList.add('pregunta');
            preg2.textContent = `A ver ${name}, si sos tan crack... ¿Cuál es mi color favorito?`;

            let boton1Color = document.createElement('button');
            let boton2Color = document.createElement('button');
            let boton3Color = document.createElement('button');
            let boton4Color = document.createElement('button');
            boton1Color.textContent= `Rojo`;
            boton2Color.textContent= `Azul`;
            boton3Color.textContent= `Celeste`;
            boton4Color.textContent= `Negro`;
            boton1Color.classList.add('btnPreg2');
            boton2Color.classList.add('btnPreg2');
            boton3Color.classList.add('btnPreg2');
            boton4Color.classList.add('btnPreg2');
            boton1Color.style.background = "salmon";
            boton2Color.style.background = "rgb(155, 155 ,255)";
            boton3Color.style.background = "rgb(95, 220, 234)";
            boton4Color.style.background = "rgb(130, 130, 130)";
            contenedorBtnsColores.append(boton1Color);
            contenedorBtnsColores.append(boton2Color);
            contenedorBtnsColores.append(boton3Color);
            contenedorBtnsColores.append(boton4Color);
        } else {
            let videoContainer = document.querySelector('#videoContainer');
            videoContainer.innerHTML = '';
            resultado.textContent = `La respuesta es incorrecta. Está bien nunca te quise igual :(`;
        }
    }

    if(event.target.classList.contains('btnPreg2')){
        document.querySelector('#botonesColor').remove()
        let resultadoColor = document.querySelector('#resultadoColor');
        if(event.target.textContent == 'Azul'){
            resultadoColor.textContent = `Muy bien, ${name}, ¿Cómo es que sabés tanto de mí? Nah mentira no sabés un carajo... Hay más cosas pero no puedo ponerlas acá...`;
            let imagen = document.querySelector('#imagen');
            imagen.style.textAlign= "center";
            imagen.style.marginBottom= "40px";
            imagen.innerHTML= '<p class="parrafos">Ese soy yo</p><img src="YO.jpg" width="200px" height="190px"></a>';


            let contenedorBtnsComida = document.querySelector('#botonesComida');
            let preg3 = document.querySelector('#pregComida');
            preg3.classList.add('pregunta');
            preg3.textContent= `¿Cuál de estas es mi comida favorita? (muy polémico).`;

            let boton1Comida = document.createElement('button');
            let boton2Comida = document.createElement('button');
            let boton3Comida = document.createElement('button');
            let boton4Comida = document.createElement('button');
            boton1Comida.textContent= 'Milanesa';
            boton2Comida.textContent= 'Fideos';
            boton3Comida.textContent= 'Pizza';
            boton4Comida.textContent= 'Asado';
            boton1Comida.classList.add('btnPreg3');
            boton2Comida.classList.add('btnPreg3');
            boton3Comida.classList.add('btnPreg3');
            boton4Comida.classList.add('btnPreg3');
            contenedorBtnsComida.append(boton1Comida);
            contenedorBtnsComida.append(boton2Comida);
            contenedorBtnsComida.append(boton3Comida);
            contenedorBtnsComida.append(boton4Comida);

            /* BOTÓN DE RESET VA SIEMPRE DESPUÉS DE CONTESTAR LA ÚLTIMA PREGUNTA
            
            let reset = document.createElement('button');
            reset.textContent= 'RESETEAR TODO';
            reset.classList.add('btnReset');
            document.querySelector('#reset').append(reset);

            */

        } else {
            resultadoColor.textContent = `MUY MAL FLACO encima te llamas ${name}, que nombre de pelotudo mamita querida. Me caes muy mal ahora, te odio.`;
        }
    }

    if(event.target.classList.contains('btnPreg3')){

        document.querySelector('#botonesComida').remove();
        let reset = document.createElement('button');
        reset.textContent= 'RESETEAR TODO';
        reset.classList.add('btnReset');
        document.querySelector('#reset').append(reset);

        let resultadoComida = document.querySelector('#resultadoComida');
        if(event.target.textContent == 'Fideos'){
            resultadoComida.textContent= `Que locura ${name} adivinaste, espero que a vos también te gusten los fideos :)`;
        }
        else if(event.target.textContent == 'Milanesa'){
            resultadoComida.textContent= `Te vas a sorprender ${name}... No me gusta la milanesa, para mi suerte ahora la tolero pero de chiquito no la soportaba.`;
        }
        else if(event.target.textContent == 'Pizza'){
            resultadoComida.textContent= `Si ${name}, me gusta la pizza pero no para que sea mi comida favorita, me llena mucho y tiene que estar muy buena realmente, Además es demasiado cara.`;
        }
        else if(event.target.textContent == 'Asado'){
            resultadoComida.textContent= `Buena comida ${name}, además es riquisimo el asado, pero no es mi comida favorita porque no lo como frecuentemente... `;
        }
    }

    if(event.target.classList.contains('btnReset')){
        if(event.target.textContent == 'RESETEAR TODO'){
            document.querySelector('body').innerHTML= '<h1>Estoy re contra inspirado.</h1><h2>Por lo tanto voy a hacer alta pagina web con javascript.</h2><div id="btn"><button>Mi Biografia</button></div> <p id="parrafoBiogra" class="parrafos"></p> <p id="pregMes"></p> <div id="botones"></div><p id="resultado" class="parrafos"></p><div id="videoContainer"></div><p id="pregColor"></p><div id="botonesColor"></div><p id="resultadoColor" class="parrafos"></p><div id="imagen"></div><div id="pregComida"></div><div id="botonesComida"></div><p id="resultadoComida" class="parrafos"></p><div id="reset"></div><div id="secreto"><button class="secret">?</button></div></div>';
            event.target.remove();
        }
    }

    if(event.target.classList.contains('secret')){
        if(event.target.textContent == '?'){
            document.body.innerHTML = `<h1>¿ESTOY ENAMORADO? Si, de vos ${name}</h1> <div id="container-img"><a href="poemas/poemas.html"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" width="500px" height="525px"></a></div><div id="castillo_flotante"><div class="imagen-contenedor"><img src="aincrad.png"></div></div>`;
            createStars(100); // Llama a la función para crear 100 estrellas
        }
    }
}

function createStars(numStars) {
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        document.body.appendChild(star);
    }
}
