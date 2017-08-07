import React, { Component } from 'react';
import Grid from '../assets/grid.css';
import Styled from 'styled-components';
import BackToTop from './backToTop';

const H2 = Styled.h2`
            color: #fcc36b;
            font-weight: lighter;
            font-size: 6vh;
            margin-bottom: 10px;
            margin-top: 10px;

`

const Ul = Styled.ul`
            list-style-type: none;
`

const Article = Styled.article`
            color: grey;
            text-decoration: none;
            font-family: 'verdana';

`

const A = Styled.a`
    text-decoration: none;
    color: #ff8673;
`

const Content = () => {
    return <section className='containerContent' id='main'>
        <Article className='direita'>
                    <BackToTop />

            <H2>Direta</H2>
            <span>No campo da política, política de direita descreve
                    uma visão ou posição específica que aceita a hierarquia
                    social ou desigualdade social como inevitável, natural,
                    normal ou desejável. Esta postura política geralmente
                    justifica esta posição com base no direito natural e
                    na tradição.</span><br /><br />
            <A target="_blank" href="https://pt.wikipedia.org/wiki/Direita_(pol%C3%ADtica)" title="Saiba mais">Saiba mais...</A>
        </Article>
        <Article className='esquerda'>
            <H2>Esquerda</H2>
            <span>No campo da política, política de esquerda descreve uma posição que apoia a igualdade social. Normalmente, envolve uma preocupação com os cidadãos que são considerados em desvantagem em relação aos outros e uma suposição de que há desigualdades injustificadas que devem ser reduzidas ou abolidas.</span><br /><br />
            <A target="_blank" href="https://pt.wikipedia.org/wiki/Esquerda_(pol%C3%ADtica)" title="Saiba mais">Saiba mais...</A>

        </Article>
        <Article className='centro'>
            <H2>Centro</H2>
            <span>O Centrismo na política, dentro do conceito da existência de uma Esquerda e Direita (política), é a posição de quem se encontra no centro do espectro ideológico. Para alguns, há apenas duas posições políticas: a de esquerda e a de direita. Porém no conceito da existência de uma Esquerda e Direita política há a visão centrista, que é utilizada pelos moderados. Muitos liberais se encaixam no centro uma vez que defendem pontos de vista considerados de esquerda por quem é da direita tradicional e por defenderem pontos de vistas considerados direitistas pela esquerda tradicional.</span><br /><br />
            <A target="_blank" href="https://pt.wikipedia.org/wiki/Centro_(pol%C3%ADtica)" title="Saiba mais">Saiba mais...</A>

        </Article>
        <Article className='ditadura'>
            <H2>Ditadura</H2>
            <span>Ditadura é um dos regimes não democráticos ou antidemocráticos, ou seja, governos regidos por uma pessoa ou entidade política onde não há participação popular, ou em que a participação ocorre de maneira muito restrita. Na ditadura, o poder está em apenas uma instância, ao contrário do que acontece na democracia, onde o poder está em várias instâncias, como o legislativo, o executivo e o judiciário.Ditadura é uma forma de autoritarismo.</span><br /><br />
            <A target="_blank" href="https://pt.wikipedia.org/wiki/Ditadura" title="Saiba mais">Saiba mais...</A>

        </Article>
        <Article className='lgbt'>
            <H2>LGBT</H2>
            <span>LGBT é a sigla de Lésbicas, Gays, Bissexuais, Travestis, Transexuais e Transgêneros. Em uso desde os anos 1990, o termo é uma adaptação de LGB, que era utilizado para substituir o termo gay para se referir à comunidade LGBT no fim da década de 1980. Ativistas acreditam que o termo "gay" não abrange ou não representa todos aqueles que fazem parte da comunidade.</span><br /><br />
            <A target="_blank" href="https://pt.wikipedia.org/wiki/LGBT" title="Saiba mais">Saiba mais...</A>

        </Article>
        <Article className='comunismo'>
            <H2>Comunismo</H2>
            <span>Comunismo (do latim communis - comum, universal) é uma ideologia política e socioeconômica, que pretende promover o estabelecimento de uma sociedade igualitária, sem classes sociais e apátrida, baseada na propriedade comum dos meios de produção.</span><br /><br />
            <A target="_blank" href="https://pt.wikipedia.org/wiki/Comunismo" title="Saiba mais">Saiba mais...</A>

        </Article>
        <Article className='racismo'>
            <H2>Racismo</H2>
            <span>Racismo consiste no preconceito e na discriminação com base em percepções sociais baseadas em diferenças biológicas entre os povos. Muitas vezes toma a forma de ações sociais, práticas ou crenças, ou sistemas políticos que consideram que diferentes raças devem ser classificadas como inerentemente superiores ou inferiores com base em características, habilidades ou qualidades comuns herdadas. Também pode afirmar que os membros de diferentes raças devem ser tratados de forma distinta.</span><br /><br />
            <A target="_blank" href="https://pt.wikipedia.org/wiki/Racismo" title="Saiba mais">Saiba mais...</A>

        </Article>
        <Article className='capitalismo'>
            <H2>Capitalismo</H2>
            <span>O capitalismo, também conhecido como economia de livre mercado ou economia de livre empreendedorismo, é um sistema econômico onde os meios de produção, distribuição, decisões sobre oferta, demanda, preço e investimentos são em grande parte ou totalmente de propriedade privada, com fins lucrativos. Os lucros são distribuídos para os proprietários que investem em empresas. Predomina o trabalho assalariado. É dominante no mundo ocidental desde o final do feudalismo.</span><br /><br />
            <A target="_blank" href="https://pt.wikipedia.org/wiki/Capitalismo" title="Saiba mais">Saiba mais...</A>

        </Article>
        <Article className='feminismo'>
            <H2>Feminismo</H2>
            <span>Feminismo é um conjunto de movimentos políticos, sociais, ideologias e filosofias que têm como objetivo comum: direitos equânimes (iguais) e uma vivência humana por meio do empoderamento feminino e da libertação de padrões opressores patriarcais, baseados em normas de gênero. Envolve diversos movimentos, teorias e filosofias que advogam pela igualdade entre homens e mulheres, além de promover os direitos das mulheres e seus interesses.</span><br /><br />
            <A target="_blank" href="https://pt.wikipedia.org/wiki/Feminismo" title="Saiba mais">Saiba mais...</A>

        </Article>
        <Article className='ficha-suja'>
            <H2>Ficha limpa</H2>
            <span>Ficha Limpa ou Lei Complementar nº. 135 de 2010 é uma legislação brasileira que foi emendada à Lei das Condições de Inelegibilidade ou Lei Complementar nº. 64 de 1990 originada de um projeto de lei de iniciativa popular idealizado pelo juiz Márlon Reis entre outros juristas que reuniu cerca de 1,6 milhão de assinaturas com o objetivo de aumentar a idoneidade dos candidatos.</span><br /><br />
            <A target="_blank" href="https://pt.wikipedia.org/wiki/Ficha_Limpa" title="Saiba mais">Saiba mais...</A>

        </Article>
        <Article className='impeachment'>
            <H2>Impeachment</H2>
            <span>Impeachment (AFI: [ɪm.ˈpitʃ.mənt]) é um termo inglês que corresponde a um processo político-criminal instaurado por denúncia no Congresso para apurar a responsabilidade do presidente da República, governador, prefeito, ministros do Supremo Tribunal ou de qualquer outro funcionário de alta categoria, por grave delito ou má conduta no exercício de suas funções, cabendo ao Senado, se procedente a acusação, aplicar ao infrator a pena de destituição do cargo. Por metonímia, o termo também designa a destituição resultante desse processo.</span><br /><br />
            <A target="_blank" href="https://pt.wikipedia.org/wiki/Impeachment" title="Saiba mais">Saiba mais...</A>

        </Article>
    </section>
}

export default Content