## Anotações importantes sobre a construção do projeto

### Como mudar o ícone que aparece no separador do navegador?

- Baixar a imagem e salvar em um diretório
- Dentro da tag head colocar o seguinte código:

```
<link
      rel="shortcut icon"
      href="./caminho/da-imagem.png"
      type="image/x-icon"
/>
```

### Como usar a fonte do filme?

- Acessar o endereço do cdn fontes, no caso em questão acessamos: https://www.cdnfonts.com/star-wars.font
- Copiar o @import: @import url('https://fonts.cdnfonts.com/css/star-wars') e colocá-lo no arquivo .css

### Ícones das redes sociais

- Acessar o site https://fontawesome.com/ e criar uma conta. Após criar a conta, escolher o kit de ícones
- Copiar o código do kit para o projeto (Será um código com a tag <script>)
- Escolher os ícones Free e para usar no projeto, usar a tag <i>. (Cada ícone tem seu código e classe. Ex: <i class="fa-brands fa-instagram"></i>)
