import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home () {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<><Link className={`${utilStyles.someLinks}`} href="/skills"><a>Skills</a></Link> | </>
				<><Link className={`${utilStyles.someLinks}`} href="/work-experience"><a>Work Experience</a></Link></>
			</section>
			<section className={`${utilStyles.headingMd} animate__animated animate__fadeInRight`}>
				<p>
					Full Stack programmer / Software Engineer with experience in both .NET and LAMP stacks. I’ve developed applications and worked on websites using ASP.NET MVC framework, C#, mongoDB, and jQuery. I have years of programming with PHP, MySQL, Angularjs, Javascript and responsive web design. I’ve also messed around with serverless, nodejs, React/React Native.
				</p>
			</section>
		</Layout>
	)
}
