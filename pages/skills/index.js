import Layout, { name, siteTitle } from '../../components/layout'
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import { getSkillsData } from '../../lib/skills'

export default function Skills({ skillData }) {
	return (
		<Layout>
			<Head>
				<title>{name} - {siteTitle} - Skills</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<h1>My Skills</h1>
				<ul>
					{skillData.map(({ id, title, content }) => {
						return (
							<li className={`${utilStyles.listItem} animate__animated animate__bounceIn`} key={id}>
								{content && (
									<Link href={`/skills/${title.replace(' ', '-').toLowerCase()}`}>
										<a>{title}</a>
									</Link>
								)}
								{!content && ( <>{title}</> ) }
							</li>
						)
					})}
				</ul>
			</section>
		</Layout>
	)
}

export async function getStaticProps() {
	const skillData = getSkillsData()
	return {
		props: {
			skillData
		}
	}
}
