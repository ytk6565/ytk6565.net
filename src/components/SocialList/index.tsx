import { FC } from 'react';

import logoGitHub from '../assets/image/logo/github.png';
import logoQiita from '../assets/image/logo/qiita.png';
import logoTwitter from '../assets/image/logo/twitter.png';
import logoZenn from '../assets/image/logo/zenn.png';

type Link = {
  url: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const links: Record<string, Link> = {
  twitter: {
    url: 'https://twitter.com/ytk6565',
    src: logoTwitter,
    alt: 'Twitter',
    width: 300,
    height: 300,
  },
  gitHub: {
    url: 'https://github.com/ytk6565',
    src: logoGitHub,
    alt: 'GitHub',
    width: 300,
    height: 300,
  },
  zenn: {
    url: 'https://zenn.dev/ytk6565',
    src: logoZenn,
    alt: 'Zenn',
    width: 300,
    height: 300,
  },
  qiita: {
    url: 'https://qiita.com/ytk6565',
    src: logoQiita,
    alt: 'Qiita',
    width: 300,
    height: 300,
  },
};

const AppSocial: FC<{ className: string }> = (props) => {
  return (
    <ul
      className={`flex items-center justify-center -ml-8 -mr-8 ${props.className}`}
    >
      {Object.entries(links).map(([key, link]) => {
        return (
          <li key={key} className={'ml-8 mr-8'}>
            <a
              href={link.url}
              target="_black"
              rel="noopener"
              className={'btn-opacity block w-48 h-48'}
            >
              <img
                src={link.src}
                alt={link.alt}
                width={link.width}
                height={link.height}
                className={'block w-full h-auto'}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default AppSocial;
