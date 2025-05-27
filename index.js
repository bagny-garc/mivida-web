
        // Frases románticas aleatorias
        const romanticPhrases = [
            "El amor no se busca, se encuentra cuando menos lo esperas...",
            "Contigo cada día es como un sueño hecho realidad 💫",
            "Eres la razón por la que creo en los cuentos de hadas 🧚‍♀",
            "Mi corazón eligió amarte antes de que mi mente lo entendiera 💕",
            "Contigo he aprendido que el amor verdadero sí existe ✨",
            "Eres mi lugar favorito en todo el universo 🌟",
            "Cada momento contigo es un tesoro que guardo en mi corazón 💎",
            "Tu sonrisa es mi motivación diaria para ser mejor persona 😊",
            "Contigo el tiempo se detiene y a la vez vuela tan rápido ⏰",
            "Eres la melodía más hermosa que mi corazón ha escuchado 🎵"
        ];

        // Imágenes románticas (usando Unsplash)
        const romanticImages = [
            "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=300&h=300&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=300&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300&h=300&fit=crop&crop=center"
        ];

        // Crear corazones flotantes
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '💖';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
            document.getElementById('hearts').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 6000);
        }

        // Crear destellos
        function createSparkle() {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.innerHTML = '✨';
            sparkle.style.left = Math.random() * 100 + 'vw';
            sparkle.style.top = Math.random() * 100 + 'vh';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            document.getElementById('sparkles').appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }

        // Cambiar frase aleatoria cada 4 segundos
        function changeRandomPhrase() {
            const phraseElement = document.getElementById('randomPhrase');
            const randomPhrase = romanticPhrases[Math.floor(Math.random() * romanticPhrases.length)];
            phraseElement.style.opacity = '0';
            
            setTimeout(() => {
                phraseElement.innerHTML = "${randomPhrase}";
                phraseElement.style.opacity = '1';
            }, 300);
        }

        // Cambiar imagen aleatoria cada 6 segundos
        function changeRandomImage() {
            const imageElement = document.getElementById('romanticImage');
            const randomImage = romanticImages[Math.floor(Math.random() * romanticImages.length)];
            
            imageElement.style.opacity = '0';
            setTimeout(() => {
                imageElement.src = randomImage;
                imageElement.style.opacity = '1';
            }, 500);
        }

        // Manejar respuesta "Sí"
        function handleYes() {
            document.getElementById('mainCard').style.display = 'none';
            document.getElementById('celebration').classList.add('show');
            
            // Crear muchos corazones de celebración
            for(let i = 0; i < 20; i++) {
                setTimeout(createHeart, i * 100);
            }
            
            // Crear muchos destellos
            for(let i = 0; i < 15; i++) {
                setTimeout(createSparkle, i * 150);
            }
        }

        // Manejar respuesta "No" (redirige a la misma función)
        function handleNo() {
            handleYes(); // Ambas opciones llevan al mismo resultado 😉
        }

        // Enviar mensaje de WhatsApp
        function sendWhatsApp() {
            const message = "A partir de hoy voy a cuidarte, respetarte, y darte todo lo bonito del mundo. Al final, eres novia de Bagny Daniel 💕";
            const encodedMessage = encodeURIComponent(message);
            
            // Reemplaza este número con el número de WhatsApp de la persona
            const phoneNumber = "+51 917224831"; // Ejemplo: "1234567890"
            
            if (phoneNumber) {
                window.open('https://wa.me/${phoneNumber}?text=${encodedMessage}', '_blank');
            } else {
            
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = message;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                document.execCommand('copy');
                document.body.removeChild(tempTextArea);
                
                alert('Mensaje copiado al portapapeles: ' + message);
            }
        }

        // Inicializar animaciones
        setInterval(createHeart, 1000);
        setInterval(createSparkle, 2000);
        setInterval(changeRandomPhrase, 4000);
        setInterval(changeRandomImage, 6000);

        // Agregar transiciones suaves
        document.getElementById('randomPhrase').style.transition = 'opacity 0.3s ease';
        document.getElementById('romanticImage').style.transition = 'opacity 0.5s ease';
