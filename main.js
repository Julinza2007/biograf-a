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
            videoContainer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/IMfAOTmnyp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
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
        let resultadoColor = document.querySelector('#resultadoColor');
        if(event.target.textContent == 'Azul'){
            resultadoColor.textContent = `Muy bien, ${name}, ¿Cómo es que sabés tanto de mí? Nah mentira no sabés un carajo... Hay más cosas pero no puedo ponerlas acá...`;
            document.querySelector('#botonesColor').remove();
            let imagen = document.querySelector('#imagen');
            imagen.style.textAlign= "center";
            imagen.innerHTML= '<p class="parrafos">Ese soy yo</p><img src="YO.jpg" width="200px" height="190px"></a>';

            let reset = document.createElement('button');
            reset.textContent= 'RESETEAR TODO';
            reset.classList.add('btnReset');
            document.querySelector('#reset').append(reset);

        } else {
            resultadoColor.textContent = `MUY MAL FLACO encima te llamas ${name}, que nombre de pelotudo mamita querida. Me caes muy mal ahora, te odio.`;
            document.querySelector('#botonesColor').remove();
        }
    }

    if(event.target.classList.contains('btnReset')){
        if(event.target.textContent == 'RESETEAR TODO'){
            document.querySelector('body').innerHTML= '<h1>Estoy re contra inspirado.</h1><h2>Por lo tanto voy a hacer alta pagina web con javascript.</h2><div id="btn"><button>Mi Biografia</button></div> <p id="parrafoBiogra" class="parrafos"></p> <p id="pregMes"></p> <div id="botones"></div><p id="resultado" class="parrafos"></p><div id="videoContainer"></div><p id="pregColor"></p><div id="botonesColor"></div><p id="resultadoColor" class="parrafos"></p><div id="imagen"></div><div id="reset"></div> <div id="secreto"><button class="secret">?</button></div>';
            event.target.remove();
        }
    }

    if(event.target.classList.contains('secret')){
        if(event.target.textContent == '?'){
            document.body.innerHTML = `<h1>¿ESTOY ENAMORADO? Si, de vos ${name}</h1> <div id="container-img"><a href="poemas/poemas.html"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" width="500px" height="525px"></a></div>`;
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
