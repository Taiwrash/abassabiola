import { Views } from '../lib/types.ts';
import { fetcher } from '../lib/fetcher.ts';
import useSWR from 'swr';

const PageViews = ({ slug }) => {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher, {
    refreshInterval: 5000
  });

  const views = new Number(data?.total);

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>;
};

export default PageViews;
