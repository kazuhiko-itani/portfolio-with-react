import BlogLog from '../assets/img/blog-log.jpg';
import RecommendLine from '../assets/img/recommend-line.jpg';
import Portfolio from '../assets/img/my-portfolio.jpg';

interface works {
    title: string;
    period: string;
    text: string;
}

interface data{
    title: string;
    year: string;
    text: string;
    img: string;
    url: string;
    github: string
}

export const worksData: works[] = [
    {
        title: '自社サイトで利用するWordpressテーマを作成',
        period: '2018年11月〜2018年12月',
        text: `Wordpressテーマのコーティングを行いました（デザインは別）。
            HTML、CSSのコーディングだけでなく、jQueryを用いた動き付け、Webpackを利用してのsassファイル、jsファイルの分割なども行いました。
            また、function.phpへの関数追加なども経験しました。`
    },
    {
        title: 'CakePHPを用いた中〜大規模サイトの、Laravelへのフルリプレイス',
        period: '2019年2月〜',
        text: `月間150万PVを超えるサイトのフルリプレイスを担当しています（主にフロントエンド）。
            bladeファイルにVueコンポーネントを埋め込む形での実装です。`
    },
    {
        title: 'ファッション系マッチングサービスの新規開発',
        period: '2019年1月〜',
        text: `こちらのプロジェクトには副業という形で参加しています。
            利用技術はexpressとNuxt.js。フロントエンドが私一人なので、設計〜実装の全てを担当しています。
            uiコンポーネントとしてelement-uiを利用しています。また、AWSのアーキテクチャ設計、実装も担当しました。`
    }
];

export const portfolioData: data[] = [
    {
        title: 'ぶろぐろぐ',
        year: '2018年',
        text: 'フリーランス・ブロガー向けの作業時間記録サービス',
        img: BlogLog,
        url: 'https://blog-log.herokuapp.com',
        github: 'https://github.com/kazuhiko-itani/blog-log'
    },
    {
        title: 'おすすめ本通知アプリ',
        year: '2018年',
        text: '毎日18時にAmazon人気本ランキングから一冊レコメンドしてくれるサービス。LINEbot使用',
        img: RecommendLine,
        url: 'https://line.me/R/ti/p/%40ioc4848r',
        github: 'https://github.com/kazuhiko-itani/recommend_line_bot'
    },
    {
        title: 'ポートフォリオサイト',
        year: '2018年',
        text: `Vue.jsを使って作成したポートフォリオサイトです。
            このサイトと似ていますが別物です（このサイトはReact.jsを利用しています）`,
        img: Portfolio,
        url: 'https://akashixi-portfolio-site.netlify.com',
        github: 'https://github.com/kazuhiko-itani/portfolio-site',
    }
];