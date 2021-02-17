## Delete posts do instagram automaticamente

![https://www.cyberghostvpn.com/privacyhub/wp-content/uploads/2020/06/shutterstock_1164497764-scaled.jpg](https://www.cyberghostvpn.com/privacyhub/wp-content/uploads/2020/06/shutterstock_1164497764-scaled.jpg)

Esse final de semana recebi a missão de apagar 1.800 posts de uma conta no instagram, tarefa nada facil, mas consegui concluir em 4 dias com a ajuda de 2 scripts que escrevi. 

O primeiro deles é um script de browser que se aproveita de um formato do Feed que só fica disponivel para mobile no browser. Com isso voce precisa abrir o browser em seu computador, acessar o instagram, ir em perfil, abra o inspecionar da pagina e selecione para simular um dispositivo mobile(Nexus 5X) e atualize a pagina onde o icone de feed ira apareer. Para iniciar cole o codigo abaixo no console e precione enter.

```js
setInterval(() => {
    if (document.querySelectorAll('button.wpO6b ')[0].length === 0) return;

    if (window.location.href !== 'https://www.instagram.com/cleitin.bot/feed/') {
        window.location.href = 'https://www.instagram.com/cleitin.bot/feed/'
        return;
    }

    document.querySelectorAll('button.wpO6b ')[1].click()
    setTimeout(() => {
        if (document.querySelectorAll('button.aOOlW').length === 0) return;
        // -Cab_ 
        document.querySelectorAll('button.aOOlW')[0].click()

        setTimeout(() => {
            if (document.querySelectorAll('button.aOOlW').length === 0) return;
            document.querySelectorAll('button.aOOlW')[0].click()
        }, 1500)
    }, 3000)

}, 5000)
```

###### Observacoes e consideracoes sobre este primeiro script:
Ele não é pratico mas funciona, lentamente mas funciona. Porem depois de alguns posts apagados o instagram "bloqueia" as acoes de delete na conta, o que exige uma pausa na execucao das acoes, por em pedia de 8 horas. Porem depois de persistir a execucao das acoes o bloqueio pode chegar a até 1 dia. 

Pensando em uma forma de contornar o bloqueio de acao, a segunda alternativa é utilizar uma API oficial do Instagram para isso. Com isso encontrei um package no NPM que facilita e muito a utilizacao da WEB API do instagram o pacote se chama [instagram-web-api](https://www.npmjs.com/package/instagram-web-api), e ela aé muito clara e facil de ser usada. Mas apatir dela criei o segundo script, que consegue apagar em media ate 790 posts por dia, porem ainda assim o instagram bloqueia por um breve periodo as acoes. Esse tempo agora é de em torno de 5 minutos, e voce ja pode roda o script novamente. 

E é isso, em mais ou menos 3 dias apaguei 1.800 posts :D
