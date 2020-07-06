import App from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import withDva from '../utils/withDva';
class NextApp extends App {

	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps({ ctx });
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps, dvaStore, router } = this.props;
		return (
			<>
				<Head>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<meta charSet='utf-8' />
					<title>阿基米22</title>
					<link rel='shortcut icon' href='/favicon.ico' type='image/ico' />
					<style jsx global>{`
            * {
              margin: 0;
              padding: 0;
            }
            body {
              font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
            }
          `}
					</style>
				</Head>
				<Provider store={dvaStore}>
					<Layout router={router}>
						<Component {...pageProps} />
					</Layout>
				</Provider>
			</>
		);
	}
}

export default withDva(NextApp);
