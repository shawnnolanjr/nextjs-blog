import Layout, { name, siteTitle } from '../../components/layout'
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import { getSkillsData } from '../../lib/skills'

export default function Skills({ skillData }) {
	return (
		<Layout>
			<Head>
				<title>{name} {siteTitle} - Software Engineer - Skills</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<h1>My Skills</h1>
				<ul>
					{skillData.map(({ id, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/skills/${title.replace(' ', '-').toLowerCase()}`}>
								<a>{title}</a>
							</Link>
						</li>
					))}
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
