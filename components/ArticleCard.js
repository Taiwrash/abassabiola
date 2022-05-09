import Image from 'next/image';
import { handleArticleClicked } from '../lib/handleArticleClick';
// import siteMetadata from '@/data/siteMetadata';
import slugify from 'slugify';
import { useIsArticleRead } from '../lib/hooks/useIsArticleRead';
import { useRouter } from 'next/dist/client/router';

export function ArticleCard({ article }) {
  const router = useRouter();
  const slug = slugify(article.slug).toLowerCase()
  return (
    <div>
      <button onClick={() => handleArticleClicked(slug)}>
        <div className="group">
          <Image
            className="rounded-xl group-hover:opacity-75"
            objectFit="cover"

            // src="/hello.png"
            src={article.image}
            placeholder="blur"
            blurDataURL={article.image}
            width={684}
            height={800}
            layout="intrinsic"
            alt={'article cover'}
          />
          <div className="text-left w-full">
            <h3 className="mt-2 text-2xl">{article.title}</h3>
            {/* {JSON.stringify(article)} */}
            <p>{article.summary}</p>
            <span className="text-base font-semibold flex items-center">
              {new Date(article.publishedOn).toLocaleDateString()}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}
