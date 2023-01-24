import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  pageTitle = "IGS Design";
  pageImage =
    "https://user-images.githubusercontent.com/26682297/191368584-c36a95f6-f4d1-428c-8014-c22f89fae56a.jpg";
  description =
    "A IGS Design é uma empresa localizada em Santa Luzia - MG, especializada em desenvolvimento de sites e design gráfico personalizado. Oferecemos soluções de última geração e tendências de mercado, incluindo lojas virtuais e integrações com redes sociais e Google Maps, para garantir que sua empresa esteja sempre na vanguarda. Nossa equipe altamente qualificada trabalha incansavelmente para garantir que o site dos seus sonhos se torne realidade.";

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta property="og:title" content={this.pageTitle} />
          <meta property="og:description" content={this.description} />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={this.pageTitle} />
          <meta property="og:image" content={this.pageImage} />
          <meta property="og:image:secure_url" content={this.pageImage} />
          <meta property="og:image:alt" content="Thumbnail" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:title" content={this.pageTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@igor_ssc" />
          <meta name="twitter:creator" content="@igor_ssc" />
          <meta name="twitter:image" content={this.pageImage} />
          <meta name="twitter:image:src" content={this.pageImage} />
          <meta name="twitter:image:alt" content="Thumbnail" />
          <meta name="twitter:image:width" content="1200" />
          <meta name="twitter:image:height" content="620" />

          <meta
            name="keywords"
            content="Desenvolvimento de sites, Design gráfico, Lojas virtuais, Integrações sociais, Google Maps, Revisões ilimitadas, Personalização, Qualidade, Sucesso, Destaque, Inovação, Tecnologia, Empresa local, Santa Luzia, Minas Gerais, Desenvolvimento web, Criação de logotipos, Cartões de visita, Panfletos, Banners, Flyers, Convites, Gráficos, Impressos, Design personalizado, Atendimento ao cliente, Marketing, Comunicação visual, Identidade visual, Criação de marca, Web design, E-commerce, Loja virtual, SEO, Otimização para mecanismos de busca, Integrações, Aplicativos, Redes sociais, Conteúdo, Gerenciamento de conteúdo, Dashboards, Análise de dados, Design responsivo, Mobile, HTML, CSS, JavaScript, PHP, Programação, Banco de dados, Hospedagem, E-mail personalizado, Suporte, Manutenção, Atualizações, Backup, Segurança, Cópia de segurança, Cloud, Armazenamento, Recursos extras, Comunicação, Transparência, Honestidade, Ética, Profissionalismo, Experiência, Conhecimento, Habilidade, Criatividade, Inovação, Flexibilidade, Escalabilidade, escalável, Eficiência, Eficácia, Qualidade, Garantia, Confiança, Referências, Testemunhos, Estudos de caso, Casos de sucesso, Portfólio, Trabalhos anteriores, Parcerias, Colaborações, Desenvolvimento de projetos, Projetos personalizados, Projetos únicos, Projetos criativos, Projetos inovadores, Projetos de sucesso, Projetos de destaque, Projetos de última geração, Projetos de tendência, Projetos de qualidade, Projetos de garantia, Projetos de confiança, Projetos de resultado"
          />

          <link rel="icon" href="./favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
