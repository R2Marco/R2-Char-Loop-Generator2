        function realizarReemplazo() {
            var inputText = document.getElementById('inputText').value;
            var charToReplace = document.getElementById('charToReplace').value;
            var replacementNumber = parseInt(document.getElementById('replacementNumber').value, 10);
            var outputText = document.getElementById('outputText');

            if (inputText && charToReplace && replacementNumber) {
                var result = '';

                for (var i = 1; i <= replacementNumber; i++) {
                    result += inputText.replace(new RegExp(charToReplace, 'g'), i) + '\n';
                }

                outputText.value += result;
            } else {
                alert('Por favor, completa todos los campos.');
            }
        }