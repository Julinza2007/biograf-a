document.addEventListener('click', handleClick);
        let name = prompt('Ingresa tu nombre porfa');

        function handleClick(event){
            if(event.target.textContent == 'Mi Biografia') {
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

            if (event.target.id == 'btnContinuar') {
                let pregunta = document.createElement('p');
                pregunta.textContent = `${name}, a ver si me conocés bien... ¿En qué mes nací?`;
                pregunta.classList.add('pregunta');
                document.querySelector('#parrafoBiogra').append(pregunta);
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
                
                    let preg2 = document.createElement('p');
                    preg2.textContent = `A ver ${name}, si sos tan crack... ¿Cuál es mi color favorito?`;
                    preg2.classList.add('pregunta');
                    videoContainer.append(preg2);

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
                    videoContainer.append(boton1Color);
                    videoContainer.append(boton2Color);
                    videoContainer.append(boton3Color);
                    videoContainer.append(boton4Color);

                    if(event.target.classList.contains('btnPreg2')){
                        let resultadoColor = document.querySelector('#resultadoColor');
                        if(event.target.textContent == 'Azul'){
                            resultadoColor.textContent = `Muy bien, ${name}, ¿Cómo es que sabés tanto de mí? Nah mentira no sabés un carajo... Hay más cosas pero no puedo ponerlas acá...`;
                        } else{
                            resultadoColor.textContent = `MUY MAL FLACO encima te llamas ${name}, que nombre de pelotudo mamita querida. Me caes muy mal ahora, te odio.`;
                        }
                    }
                } else {
                    let videoContainer = document.querySelector('#videoContainer');
                    videoContainer.innerHTML = '';
                    resultado.textContent = `La respuesta es incorrecta. Está bien nunca te quise igual :(`;
                }
            }
        }