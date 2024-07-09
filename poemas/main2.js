document.addEventListener('click', handleClick);

function handleClick(event) {
    if (event.target.id == 'explicacion') {
        document.querySelector('#centrar').remove();

        document.body.style.backgroundColor = `black`;

        let h1 = document.createElement('h1');
        h1.textContent = `¡¡Felicidades por llegar hasta acá!!`;
        h1.style.textAlign= 'center';
        h1.style.margin = '20px 350px 0px 350px';
        h1.style.border = '5px solid black';
        h1.style.borderRadius = '10px';
        h1.style.background = 'gold';
        h1.style.boxShadow = '4px 4px 5px gray';
        h1.style.fontWeight = 'bold';

        let h2 = document.createElement('h2');
        h2.textContent = 'Aquí va mi explicación';
        h2.style.textAlign = 'center';
        h2.style.margin = '20px 475px 0px 475px';
        h2.style.border = '5px solid black';
        h2.style.borderRadius = '10px';
        h2.style.background = 'skyblue';
        h2.style.boxShadow = '4px 4px 5px gray';
        h2.style.fontWeight = 'bold';

        let explicacion = document.createElement('p');
        explicacion.textContent = 'Bueno la explicación es sencilla... Ya lo dije antes, estoy bastante inspirado, y nada va a cambiar esto definitivamente... Pero la inspiración llegó a tal punto que me estoy pasando, así que voy a parar de hacer este tipo de cosas raras. La razón de los poemas... bueno, mmmmm digamos que estoy un poco enamorado, bueno digo digamos porque la verdad que no se si es enamoramiento. En fin, como llegaste hasta acá podrías presionar la imagen de goku que está ahí abajo...';
        explicacion.style.background = 'limegreen';
        explicacion.style.borderRadius = '5px';
        explicacion.style.fontSize = '1.25em';
        explicacion.style.padding= '5px';
        explicacion.style.margin= '0px 10px 0px 10px';
        document.body.append(h1);
        document.body.append(h2);
        document.body.append(explicacion);

        let divContainer = document.createElement('div');
        document.body.append(divContainer);
        divContainer.style.textAlign = 'center';

        let img = document.createElement('img');
        img.src = '2.jpg';
        img.style.width = '175px';
        img.style.height = '400px';
        divContainer.append(img);

        // Agregamos eventos a la imagen y el contenedor
        img.addEventListener('mouseover', () => {
            img.src = '1.gif';
            img.style.cursor = 'pointer'; // Agrega este estilo de cursor
          });
          
          img.addEventListener('mouseout', () => {
            img.src = '2.jpg';
            img.style.cursor = 'default'; // Restaura el estilo de cursor predeterminado
          });

        divContainer.addEventListener('click', () => {
            window.location.href = 'https://julinza2007.github.io/julinza/';
        });
    }
}