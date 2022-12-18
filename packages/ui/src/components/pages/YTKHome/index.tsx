import type { ArticleItem } from '@ytk6565.net/domain/dist/Article';
import type { FC } from 'react';

import YTKArticleListItem from '@/components/molecules/YTKArticleListItem';
import YTKSocialList from '@/components/organisms/YTKSocialList';

type Props = {
  articleItems: ArticleItem[];
  className?: string;
};

const YTKHome: FC<Props> = (props) => (
  <main className={`pt-64 pb-64 ${props.className}`}>
    <div className="container pr-24 pl-24">
      <h2 className="mb-16 text-center text-2xl">Yutaka Kaneko</h2>

      <p className="text-center text-gray">I am Front-End Engineer.</p>

      <YTKSocialList className="mt-48" />

      <div className="mt-64">
        {/* TODO: Contentful に移行 */}
        <section>
          <h2 className="mt-32 mb-16 text-xl">Skills</h2>
          <section>
            <h3 className="mt-16 mb-8 text-lg">Programing language</h3>
            <p>TypeScript, JavaScript</p>
          </section>
          <section>
            <h3 className="mt-16 mb-8 text-lg">Library / Framework</h3>
            <p>Vue.js, Jest, Cypress, Storybook</p>
          </section>
        </section>

        <section>
          <h2 className="mt-32 mb-16 text-xl">Career</h2>
          <ul>
            <li>
              Markup Engineer. (<time>2017.09 - 2018.03</time>)
            </li>
            <li>
              Markup Engineer. (<time>2018.04 - 2018.07</time>)
            </li>
            <li>
              Front-End Engineer. (<time>2018.08 - 2021.03</time>)
            </li>
            <li>
              Front-End Engineer. (<time>2021.04 -</time>)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mt-32 mb-16 text-xl">Articles</h2>

          <ul className="-mt-16">
            {props.articleItems.map((articleItem) => (
              <YTKArticleListItem
                key={articleItem.id}
                articleItem={articleItem}
                className="py-16 border-b border-gray"
              />
            ))}
          </ul>
        </section>
      </div>
    </div>
  </main>
);

export default YTKHome;
