import * as tsx from 'vue-tsx-support'

type Link = {
  url: string
  src: string
  alt: string
  width: number
  height: number
}

export const AppSocial = tsx.component({
  name: 'AppSocial',
  computed: {
    links(): { [k: string]: Link } {
      return {
        twitter: {
          url: 'https://twitter.com/ytk6565',
          src: require('~/assets/image/logo-twitter.png'),
          alt: 'Twitter',
          width: 300,
          height: 300,
        },
        gitHub: {
          url: 'https://github.com/ytk6565',
          src: require('~/assets/image/logo-github.png'),
          alt: 'GitHub',
          width: 300,
          height: 300,
        },
        zenn: {
          url: 'https://zenn.dev/ytk6565',
          src: require('~/assets/image/logo-zenn.png'),
          alt: 'Zenn',
          width: 300,
          height: 300,
        },
        qiita: {
          url: 'https://qiita.com/ytk6565',
          src: require('~/assets/image/logo-qiita.png'),
          alt: 'Qiita',
          width: 300,
          height: 300,
        },
      }
    },
  },
  render() {
    return (
      <ul class={'flex items-center justify-center -ml-8 -mr-8'}>
        {Object.keys(this.links).map((key) => {
          const link = this.links[key]

          return (
            <li class={['ml-8', 'mr-8']}>
              <a
                href={link.url}
                target="_black"
                rel="noopener"
                class={['btn-opacity', 'block', 'w-40', 'h-40', 'btn-opacity']}
              >
                <img
                  src={link.src}
                  alt={link.alt}
                  width={link.width}
                  height={link.height}
                  class={['block', 'w-full', 'h-auto']}
                />
              </a>
            </li>
          )
        })}
      </ul>
    )
  },
})
