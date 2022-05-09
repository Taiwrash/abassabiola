// import { convertToArticleList, getPublishedArticles } from '@/lib/notion';

import { ArticleList } from '../components/ArticleList';
import { Button } from '../components/Button';
import { ButtonType } from '../lib/types.ts';
import { Container } from '../layouts/Container';
import Image from 'next/image';
import Link from 'next/link';
// import siteMetadata from '@/data/siteMetadata';
import { useRouter } from 'next/router';
import fs from "fs"
import path from 'path'
import matter from 'gray-matter'


const workExperience = [
  {
    company: 'LogicGate',
    title: 'Front End Developer',
    duration: '2022 -'
  },
  {
    company: 'Cognizant',
    title: 'Full-Stack Engineer',
    duration: '2019 - 2021'
  },
  {
    company: 'projekt202',
    title: 'UI Developer',
    duration: '2018 - 2019'
  },
  {
    company: 'Major 4 Apps',
    title: 'Founder',
    duration: '2011 - 2018'
  }
];

export default function About({ recentArticles }) {
  const { push } = useRouter();
  return (
    <Container title="About Me - Abass Abiola">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-purple-900 uppercase dark:text-teal-400">
          About me
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Here's my story.
        </span>
      </h1>
      <p>
              Have you ever experienced hopelessness, feelings of insecurity, lofty wishes
        that never became reality, procrastination that kills ambitions, sadness while
        still pretending all is well, failures that kill the spirit, and possibly some other
        negative feelings that exist?
        Well yeah, you’re not alone.
        No one, I think, can ever be as hopeless as someone who grew up as a child
        with no self-esteem. Anyone can claim that they feel sad, disappointed or
        downhearted. But a misunderstood introvert like me knows exactly how the
        negative feelings mentioned above really feels.
        I don’t really want to bore you…but I think reading this is very important to
        my interaction with you subsequently.
        Are you still reading?
        Well done!
        Although I experienced low self-esteem that almost killed all possible
        ingenuities in me, I was fortunate to meet some great mentors who helped
        me to find me and kept encouraging me to become MORE.
        Then, I decided in retrospect that my life moving forward, should be much
        about helping others become MORE. Rising above whatever seems like
        obvious limitations…or excuses…or failure…or anything in between.
        My Mission is simple.
        To D.I.E. MORE – That is Do More. Inspire More. Educate More.
        Until I’m able to influence your subconscious and bring out the hero in you, I
        will continue writing.
        Now, you may forget everything you’ve read above. That’s not an offence.
        But don’t forget this…
        You have a new friend here who is always interested in seeing a ‘happier you’
        and wants to see you BecomingMore.
      </p>
      <div className='my-12'>
      <h1>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Here's My Philosophy
        </span>
      </h1>
      <p>
      You can get inspired starting from here, I firmly hope. Everything I do on this
      site is strongly anchored around the following lifelong philosophies I’ve
      committed my mind to.
      1. Eternal is more important than ephemeral.
      2. Do great things: great people will find you, the effect of your great
      stuffs will make you great and you will become capable of making
      others great.
      3. You may die before achieving your next goal – this is a reality and
      uncertainty at the same time – but the fear of death is never an excuse.
      4. Great minds live their lives with the certainty that they will be more
      useful in death than in living. Meaning: they live to impact their world
      and die to continue serving humanity in their graves.
      </p>
      </div>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-x-5">
        {/* <div className="col-span-1">
          <Image
            className="rounded-xl group-hover:opacity-75"
            objectFit="fill"
            src="https://res.cloudinary.com/braydoncoyer/image/upload/v1636553710/avatar.jpg"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1636553710/avatar.jpg"
            width={260}
            height={260}
            layout="responsive"
            alt={'article cover'}
          />
        </div> */}
        <div className="col-span-3">
          <p className="">
            In a past life, I was an indie mobile developer making mobile games
            for iOS and Android, with one of my games outselling Angry Birds.
          </p>
          <p>
            You can find me on <a href="http://twitter.com">Twitter</a> where
            I share tech-related tidbits and build in public, or you can follow
            me on <a href="http://twitter.com">GitHub</a>. I often write about
            my findings on my{' '}
            <Link href="/blog">
              <a>blog</a>
            </Link>{' '}
            and create cool things over on{' '}
            <a href="http://twitter.com">CodePen</a>. I also help run a
            mediocre <a href="https://anchor.fm/florida-man">podcast</a>.
          </p>
        </div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="mt-12 space-y-6">
        <h2 className="m-0 text-gray-900 dark:text-white">Work experience</h2>
        <p>Here's a brief rundown of my most recent experiences.</p>
        <div className="space-y-2">
          {workExperience.map((workItem) => (
            <div
              key={workItem.company}
              className="flex items-center space-x-3 group"
            >
              <span className="flex-none text-gray-900 gover-hover:underline dark:text-white">
                {workItem.company}
              </span>
              <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-700"></span>
              <span className="flex-none">{workItem.title}</span>
              <span className="flex-none">{workItem.duration}</span>
            </div>
          ))}
        </div>
        <div className="inline-flex w-full md:w-auto ">
          <a
            className="items-center justify-center w-full px-4 py-3 text-sm font-medium text-center text-white no-underline rounded-full md:text-xl md:px-12 bg-midnight dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="http://twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            View my resume
          </a>
        </div>
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="mb-12">
        <h2>I love to share my knowledge through writing.</h2>
        <p>Check out a few of my most recent publishings.</p>
        <ArticleList articles={recentArticles} />
      </div>
      <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-12">
        <div className="col-span-3">
          <h2>Interested in my gear?</h2>
          <p>
            I keep a list of software, applications, extensions, hardware and a
            list of supplies I've used to set up my office for those who are
            interested.
          </p>
          <Button
            buttonType={ButtonType.PRIMARY}
            onButtonClick={() => push('/toolbox')}
          >
            Check out my toolbox
          </Button>
        </div>
        {/* <div className="col-span-2">
          <Image
            className="rounded-xl group-hover:opacity-75"
            objectFit="cover"
            src="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186547/toolbox_hardware.jpg"
            placeholder="blur"
            blurDataURL="https://res.cloudinary.com/braydoncoyer/image/upload/v1637186547/toolbox_hardware.jpg"
            width={260}
            height={260}
            layout="responsive"
            alt={'article cover'}
          />
        </div> */}
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
  }
};
