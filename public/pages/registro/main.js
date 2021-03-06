/* global document */
export default () => {
  const container = document.createElement('div');

  const template = `

    <div class="feed-container"> 
    <div class="policy-alert">
    <h1><i class="fas fa-exclamation-circle fa-2x" style="color: yellow"></i>Alerta:</h1><br>
       <ul class="ul-about">
       <li>Esta rede é destinada a pessoas que se indentifiquem como sendo do gênero feminino.</li><br>
       </ul>
   </div><br><br>
        <h1 class="text-profile">Preencha os campos abaixo:</h1>
        <form class="form-profile">
            <input id="name-register" type="text" placeholder="Nome *" required>
            <input id="last-name-register" type="text" placeholder="Sobrenome *" required>
            <input id="date-of-birth-register" type="date" placeholder="Data de nascimento *" required>
            <input id="email" type="email" placeholder="Email *" required>
            <input id="password" type="password" placeholder="Senha, minímo 6 caracteres *" required>
            <input id="city-register" type="text" placeholder="Cidade *" required>
            <div class="btn-display">
                <input id="back-btn" type="button" value="Voltar">
                <input id="btn-register" type="submit">
            </div>
        </form>
    </div>
    `;
  container.innerHTML = template;
  return container;
};
