import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export const name = 'Shawn Nolan'
export const siteTitle = 'Software Engineer'

export default function Layout({ children, home, skill }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				<div>
					<><Link href="https://github.com/shawnnolanjr"><a target="_blank">Github</a></Link> | </>
					<><Link href="https://twitter.com/intractvmedia"><a target="_blank">Twitter</a></Link> | </>
					<><Link href="https://www.linkedin.com/in/snolan760"><a target="_blank">LinkedIn</a></Link></>
				</div>
				{home ? (
					<>
						<img
							src="/images/profile2.JPG"
							className={`${styles.headerHomeImage} ${utilStyles.borderCircle} animate__animated animate__fadeInLeft`}
							alt={name}
						/>
						<h1 className={`${utilStyles.heading2Xl} animate__animated animate__fadeInLeft`}>{name}</h1>
					</>
				) : (
					<>
						<Link href="/">
							<a>
								<img
									src="/images/profile2.JPG"
									className={`${styles.headerImage} ${utilStyles.borderCircle}`}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/">
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
				<div>
					{!home && skill && ( <><Link href="/skills"><a>← Skills</a></Link> | </> )}
					{!home && ( <><Link href="/"><a>Home</a></Link></> )}
				</div>
			</header>
			<main>{children}</main>
		</div>
	)
}
