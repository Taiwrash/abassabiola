import { ButtonType, SubscribeSize } from '../lib/types.ts';
import { ArticleList } from '../components/ArticleList';
import { Button } from '../components/Button';
import { Container } from '../layouts/Container';
import Image from 'next/image';
import { Subscribe } from '../components/Subscribe';
import { useRouter } from 'next/router';
import fs from "fs"
import path from 'path'
import matter from 'gray-matter';


export default function Home({ recentArticles }) {
  const { push } = useRouter();
  return (
    <Container showCircles>
      <div>
        <div>
          <div className="grid items-center grid-cols-1 mt-12 text-center md:mt-24 md:text-left md:grid-cols-6">
            <h1 className="order-2 col-span-5 text-4xl leading-tight md:leading-normal md:order-1 sm:text-5xl">
            You can do MORE.
            <span className="text-yellow-600 dark:text-yellow-400"> Become MORE</span>.
              There’s that MORE in you.
              To help you become more, I’m here to D.I.E MORE.<br/>
              <span className="text-yellow-600 dark:text-yellow-400">D.I.E = Do. Inspire. Educate</span>.
            </h1>
            <div className="order-1 md:order-2 rounded-none ">
              <Image
                alt="Abass Abiola"
                height={300}
                width={300}
                src={'/assets/Home Page.jpg'}
                // src={siteMetadata.avatarImage}
                placeholder="blur"
                blurDataURL={'/assets/Home Page.jpg'}
                className="col-span-1 md:opacity-60 md:hover:opacity-100 rounded-lg"
                layout="fixed"
              />
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:space-x-4">
            <Button
              buttonType={ButtonType.PRIMARY}
              onButtonClick={() => push('/blog')}
            >
              Read the blog
            </Button>
            <Button
              buttonType={ButtonType.SECONDARY}
              onButtonClick={() => push('/about')}
            >
              Check me
            </Button>
          </div>
        </div>
        <hr className="hr"></hr>
        <div>
          <h2>I love to share my knowledge through writing.</h2>
          <p>Check out a few of my most recent publishings.</p>
          <ArticleList articles={recentArticles} />
          <div className="my-16">
            <Button
              buttonType={ButtonType.PRIMARY}
              onButtonClick={() => push('/blog')}
            >
              See all articles
            </Button>
          </div>
          <div className="mt-16">
            <Subscribe size={SubscribeSize.LARGE} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps = async () => {
  // let postFile
  // const postPath = path.join('posts')
  // postFile = fs.readdirSync(postPath, 'utf-8')
  // let articles = postFile.map(file=>{
  //   const slug = file.replace(".mdx", "")
  //  const markAndMeta = fs.readFileSync(path.join("posts", file),"utf-8")
  //   const { data} = matter(markAndMeta)
  //   return{
  //     slug,
  //     data
  //   }
  // })

  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)
  // const cmsPosts = postsFromCMS.draft
  const filePosts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    return fs.readFileSync(filePath, 'utf8')
  })

  const posts = [ ...filePosts].map((content) => {
      const { data } = matter(content)
      return data
    })

  return {
    props: {
      // recentArticles: "Helllo"
      recentArticles: posts
    },
    revalidate: 30
  };
};
