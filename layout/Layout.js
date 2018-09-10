import Document from "next/document";
import "../style.css";
import Head from "next/head";
import { initGA, logPageView } from "../utils/ga";

class Layout extends Document {
  constructor() {
    super();
  }
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView(this.props.title);
  }
  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.metaDescription} />

          {/* <!-- Schema.org for Google --> */}
          <meta itemProp="name" content={this.props.title} />
          <meta itemProp="description" content={this.props.metaDescription} />

          {/* <!-- Twitter --> */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={this.props.title} />
          <meta
            name="twitter:description"
            content={this.props.metaDescription}
          />
          <meta name="twitter:site" content="@mathiasaurusrex" />
          <meta name="twitter:creator" content="@mathiasaurusrex" />
          {/* <meta
            name="twitter:image:src"
            content="https://www.mathiasrechtzigel.com/static/mathias_picture.jpg"
          /> */}
          {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
          <meta name="og:title" content={this.props.title} />
          <meta name="og:description" content={this.props.metaDescription} />
          {/* <meta
            name="og:image"
            content="https://www.mathiasrechtzigel.com/static/mathias_picture.jpg"
          /> */}
          <meta name="og:url" content={this.props.siteURL} />
          <meta name="og:site_name" content={this.props.title} />
          <meta name="og:type" content="website" />
        </Head>

        {this.props.children}
      </div>
    );
  }
}

export default Layout;
