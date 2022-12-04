import type { ArticleItem } from '@ytk6565.net/domain/dist/Article';
import type { FC } from 'react';

type Props = {
  className?: string;
  articleItem: ArticleItem;
};

const YTKArticleListItem: FC<Props> = (props) => {
  const target =
    props.articleItem.permalink.indexOf('http') === 0 ? '_blank' : '_self';

  return (
    <li
      className={`flex items-center justify-center max-w-xs p-16 shadow ${props.className}`}
    >
      <a
        href={props.articleItem.permalink}
        target={target}
        rel="noopener"
        className={'btn-opacity block w-full'}
      >
        <div
          style={{
            paddingTop: (630 / 1200) * 100 + '%',
            backgroundImage: `url(${props.articleItem.thumbnail}`,
          }}
          className={'bg-no-repeat bg-cover'}
        />

        <h4 className="text-md font-normal mt-8">{props.articleItem.title}</h4>

        <p className="text-xs text-gray mt-8">
          {props.articleItem.description}
        </p>

        {/* <hr className='mt-8 mb-8 border-gray' /> */}

        <div className="text-xs text-gray mt-8">
          <div>created at {props.articleItem.createdAt}</div>
          <div>updated at {props.articleItem.updatedAt}</div>
        </div>
      </a>
    </li>
  );
};

export default YTKArticleListItem;
