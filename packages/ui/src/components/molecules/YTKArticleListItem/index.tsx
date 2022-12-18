import iconExternal from '@ytk6565.net/assets/image/icons/external.png';

import type { ArticleItem } from '@ytk6565.net/domain/dist/Article';
import type { FC } from 'react';

type Props = {
  articleItem: ArticleItem;
  className?: string;
};

const YTKArticleListItem: FC<Props> = (props) => {
  const isExternal = props.articleItem.permalink.indexOf('http') === 0;
  const target = isExternal ? '_blank' : '_self';

  return (
    <li
      className={`flex items-center justify-center max-w-md ${props.className}`}
    >
      <a
        href={props.articleItem.permalink}
        target={target}
        rel="noopener"
        className={`btn-opacity block w-full ${
          isExternal ? '' : 'pointer-events-none'
        }`}
      >
        <h4 className="text-md mt-8">
          <span className={`inline align-middle ${isExternal ? 'mr-8' : ''}`}>
            {props.articleItem.title}
          </span>
          {isExternal && (
            <img
              src={iconExternal}
              alt=""
              width={64}
              height={64}
              className={'inline align-middle -mt-4'}
              style={{ width: '1em', height: '1em' }}
            />
          )}
        </h4>

        <p className="text-xs text-gray mt-8">
          {props.articleItem.description}
        </p>

        <div className="text-xs text-gray mt-16">
          <div>Created at {props.articleItem.createdAt}</div>
          {props.articleItem.updatedAt && (
            <div>Updated at {props.articleItem.updatedAt}</div>
          )}
        </div>
      </a>
    </li>
  );
};

export default YTKArticleListItem;
