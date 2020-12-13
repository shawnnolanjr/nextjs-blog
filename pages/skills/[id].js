import Layout, { name, siteTitle } from '../../components/layout'
import { getSkillsData } from '../../lib/skills';
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export default function Skill({ skillData }) {
	return (
		<Layout skill>
			<Head>
				<title>{name} - {siteTitle} - {skillData.title}</title>
			</Head>
			<article className="animate__animated animate__bounceInRight">
				<h1 className={utilStyles.headingXl}>{skillData.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: skillData.content }} />
			</article>
		</Layout>
	)
}

export async function getStaticPaths() {
	const skills = getSkillsData()
	const paths = skills.map(skill => {
		return {
			params: {
				id: skill.title.replace(' ', '-').toLowerCase()
			}
		}
	})
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const skills = getSkillsData()
	const skill = skills.find((res) => res.title.replace(' ', '-').toLowerCase() === params.id)
	const id = skill.id
	return {
		props: {
			skillData: {
				id,
				...skill
			}
		}
	}
}
