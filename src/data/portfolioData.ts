interface data{
    title: string;
    year: string;
    text: string;
    img: string;
    url: string;
    github: string
}

export const portfolioData: data[] = [
    {
        "title": "ぶろぐろぐ",
        "year": "2018年",
        "text": "フリーランス・ブロガー向けの作業時間記録サービス",
        "img": "http://vr-blogs.com/wp-content/uploads/2018/10/blog-log.jpg",
        "url": "https://blog-log.herokuapp.com",
        "github": "https://github.com/kazuhiko-itani/blog-log"
    },
    {
        "title": "おすすめ本通知アプリ",
        "year": "2018年",
        "text": "毎日18時にAmazon人気本ランキングから一冊レコメンドしてくれるサービス。LINEbot使用",
        "img": "http://vr-blogs.com/wp-content/uploads/2018/10/recommend-line.jpg",
        "url": "https://line.me/R/ti/p/%40ioc4848r",
        "github": "https://github.com/kazuhiko-itani/recommend_line_bot"
    }
];