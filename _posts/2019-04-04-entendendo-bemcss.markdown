---
layout: post
title:  "Entendendo BEMCSS"
date:   2019-04-04 15:00:00 -0300
categories: 
    - css
    - arquitetura
    - bemcss
tech: "css"
page-name: "post"
online: true
# eng-version:
image:
  path: "../assets/img/bemcss.png"
  width: 600
---

Quando a utilização de CSS deixa de ser apenas a estilização de sites pessoais ou projetos pequenos e passa para projetos grandes, escaláveis e complexos, cria-se a necessidade de organizar e pensar sobre a arquitetura para o CSS. Coisas simples como a nomeação das classes pode se tornar um gigantesco problema na manutenção futura.

Para corrigir problemas como esses, foram criados arquiteturas de organização e metodologias e uma das mais populares é o BEMCSS.
#### Sumário:
[O que é?](#o-que-é)  
[Block](#block)  
[Element](#element)  
[Modifier](#modifier)  
[Uma nova forma de pensar CSS](#uma-nova-forma-de-pensar-css)  
[Conclusão](#conclusão)  
[Fontes](#fontes) 

## O que é?

A sigla vem de Block-Element-Modifier, que é a forma designada para criar nomes para as classes. A idéia é criar um padrão rígido para a nomeação das classes, fazendo com que fique fácil de ler e entender o que a classe faz e a qual componente ela se dirige.
Os nomes das classes seguem a linha:

{% highlight css %}
.bloco__elemento--modificador {}
{% endhighlight %}

Sendo 2 underlines que  separam o bloco do elemento e dois traços que separam o elemento do modificador.

## Block:
O Block é o elemento ou componente que aquela classe é designada. Não precisa respeitar o nome do elemento, a ideia é que ela descreva o que o componente é no escopo do projeto. Por exemplo, se você criar uma classe para um formulário de login, o nome não seria .form, mesmo que no HTML você crie de fato um formulário. 

No escopo do projeto a classe poderia ser **.login**, o que deixaria bem claro para todos do que se trata. Uma regra geral de nomeação é separar os nomes compostos com um traço simples, por exemplo,  **.formulario-de-cadastro** seria a forma correta de escrever um nome com três palavras

## Element:
O Element são partes internas do componente. No exemplo usado acima, dentro do bloco login haveria pelo menos dois inputs para o username ou email, senha e um botão de ação.  

A nomeação desses elementos seria:

{% highlight css %}
.login__email {}
.login__password {}
.login__button {}
{% endhighlight %}

## Modifier:
O modificador normalmente se aplica a alterações e formas variadas pros elementos ou pro próprio bloco como um todo. No exemplo do artigo, quando o usuário colocasse algo que não corresponde a senha ou e-mail nos inputs e houvesse uma verificação para confirmar isso, o feedback visual do erro, por exemplo, poderia ser feito mudando as cores das bordas dos inputs incorretos para vermelho.  

A classe modificadora seria utilizada para criar isso, sendo usada dessa forma: 

{% highlight css %}
.login__email--error
{% endhighlight %}

Os modificadores podem ser usados também para o bloco como um todo, podendo ser aplicado diretamente sobre ele na classe, ignorando a existência dos elementos. Por exemplo:

{% highlight css %}
.login--error
{% endhighlight %}

Lembrando que cada elemento tem sua classe de maneira isolada. Por exemplo, se um elemento tem outro elemento dentro dele, não é correto unir os elementos numa única classe, como:
{% highlight css %}
.bloco__elemento1__elemento2__elemento3 {}
{% endhighlight %}

Nesses casos cada elemento tem sua classe própria, ignorando a ordem da estrutura HTML
{% highlight css %}
.bloco {}
.bloco__elemento1 {}
.bloco__elemento2 {}
.bloco__elemento3 {}
{% endhighlight %}

## Uma nova forma de pensar CSS:

Ao utilizar uma metodologia como o BEM, é interessante pensar que você não está apenas nomeando classes de uma forma padrão. É importante repensar a forma de criar os elementos, pensando no layout de uma forma modular, separando cada pedaço em componentes, que seriam correspondentes aos blocos, elementos e assim por diante.

Separando o layout dessa forma, a própria criação do código se torna mais organizada. Utilizar o BEM é apenas a forma de formalizar essa nova estruturação.
É importante salientar que o BEM é uma metodologia altamente flexível, se adaptando e encaixando em várias arquiteturas de projeto CSS diferentes, outro ponto bem positivo

## Conclusão:

A metodologia é simples, porém muito funcional e útil no dia a dia de desenvolvimento, além de ser algo bastante pedido em vagas de emprego no mercado atual. Criar um CSS escalável e de qualidade evita retrabalho e aumenta a qualidade de um software, por isso, é uma habilidade cada vez mais requisitada em projetos de alto nível.  

### Fontes: 
 - [getbem](http://getbem.com/){:target="_blank"}{:rel="noopener"}
