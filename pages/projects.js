import { Container } from '../layouts/Container';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <Container title="Projects - Braydon Coyer">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-purple-900 uppercase dark:text-teal-400">
          Projects
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-2xl font-bold leading-10 text-center sm:text-5xl">
        From all my enormous routine, there are a few that makes me feel really alive.
        </span>
      </h1>
      <div className="grid grid-cols-1 gap-x-12 gap-y-24 md:grid-cols-3">
        <div className="col-span-1">
          <h2 className="mt-0">Speaking</h2>
          <p>
          I speak on stages to talk on topics around personal development. I speak on
          in training session to teach communication skills.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-purple-900 dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
          >
            My Speaking Engagement
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-purple-900 md:h-[450px] h-auto">
              <Image
                className="absolute "
                objectFit="fit"
                src="/assets/Work with me.jpg"
                placeholder="blur"
                blurDataURL="/assets/Work with me.jpg"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt="Jaw War Final Round"
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">Writing</h2>
          <p>
          Yes, I told you writing is one of those routines that makes me feel really alive.
          You’ve got a great book idea and you want a co-authorship deal? I’m sure
          together is more. And we can together break limits as co-authors. Well, please
          note that I may not be available 100% of the time to say a yes to a coauthorship deal.
          </p>
          <Link href='/blog'>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-purple-900 dark:bg-gray-200 dark:text-midnight general-ring-state"          >
            My Writing
          </a>
          </Link>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative h-auto col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-purple-900">
              <Image
                className="absolute top-0 left-0"
                objectFit="fill"
                src="/assets/Books.jpg"
                placeholder="blur"
                blurDataURL="/assets/Books.jpg"
                width={1978}
                height={1713}
                layout="intrinsic"
                alt={'Writing'}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="mt-0">Content Strategy and Creation</h2>
          <p>
          I think. I love creative thinking. And I can work with your team to strategize
          some cool stuffs.
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-purple-900 dark:bg-gray-200 dark:text-midnight general-ring-state"
           >
            My Content
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-purple-900 md:h-[450px] h-auto">
              <Image
                className="absolute top-5 md:top-0 "
                objectFit="fill"
                src="/assets/desk-gd6a95046b_1920.jpg"
                placeholder="blur"
                blurDataURL="/assets/desk-gd6a95046b_1920.jpg"
                width={5110}
                height={3139}
                layout="intrinsic"
                alt={'Content Strategy'}
              />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="mt-0">Personal Development Coaching</h2>
          <p>
          Martin Luther King Jr. had a dream. I also have a dream. No, I have dreams.
          One of my dreams is to see as many youths as possible becoming MORE. Do
          you feel like getting in touch as a group or as an individual for your tailor-made
          coaching session?
          Use the contact me form.
           Name
           Email address
           Mobile number
           What can we do together?
          </p>
          <a
            className="items-center justify-center w-full px-12 py-3 font-medium text-white no-underline rounded-full cursor-pointer md:w-auto md:inline-flex bg-purple-900 dark:bg-gray-200 dark:text-midnight general-ring-state"
            href="mailto:abdulazeezabass@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Contact me
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="relative h-auto col-span-5 overflow-hidden bg-gray-100 rounded-lg dark:bg-purple-900">
              <Image
                className="absolute top-0 left-0"
                objectFit="fill"
                src="/assets/Get in touch.jpg"
                placeholder="blur"
                blurDataURL="/assets/Get in touch.jpg"
                width={1978}
                height={1713}
                layout="intrinsic"
                alt={'Content Management'}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
