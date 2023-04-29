function calculate() {
    var altura = document.getElementById("Altura").value;
    var peso = document.getElementById("Peso").value;
    var imc = (peso / altura ** 2).toFixed(2);
    var text="";
    var image_imc="";
    if (imc < 18.5) {
      text="abaixo do peso";
      image_imc="../images/abaixo_do_peso.png";
    } else if (imc < 24.9) {
      text="peso ideal";
      image_imc="../images/peso_ideal.png";
    } else if (imc < 29.9) {
      text="acima do peso";
      image_imc="../images/acima_do_peso.png";
    } else if (imc < 34.9) {
      text="obesidade grau 1";
      image_imc="../images/obesidade_grau_1.png";
    } else if (imc > 34.9) {
      text="obesidade grau 2";
      image_imc="../images/obesidade_grau_2.png";
    }
    document.getElementById("res").innerText="Seu imc: " + imc + " - " + text;
    document.getElementById("image_imc").src = image_imc;
}