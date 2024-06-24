import react from "react"
import './References.css';

const references = [
    {
        "ref": "Nedopil, C. (2024). China Belt and road initiative (BRI) Investment Report 2023. China Belt and Road Initiative (BRI) Investment Report 2023. https://greenfdc.org/wp-content/uploads/2024/02/Nedopil-2024_China-BRI-Investment-Report-2023.pdf"
    },
    {
        "ref": "Dube, R., & Steinhauser, G. (2023, January 20). China’s global mega-projects are falling apart - WSJ. China’s Global Mega-Projects Are Falling Apart. https://www.wsj.com/articles/china-global-mega-projects-infrastructure-falling-apart-11674166180"
    },
    {
        "ref": "Deng, Y. (2024, April 25). China grapples with the institutional future of the belt and road initiative. East Asia Forum. https://eastasiaforum.org/2024/04/26/china-grapples-with-the-institutional-future-of-the-belt-and-road-initiative/"
    },
    {
        "ref": "ASEAN, C. R. (2023, November 9). The jakarta-bandung high-speed railway will create job opportunities and drive economic development along the route. United States. https://www.prnewswire.com/apac/news-releases/the-jakarta-bandung-high-speed-railway-will-create-job-opportunities-and-drive-economic-development-along-the-route-301983509.html"
    },
    {
        "ref": "Robert Lawrence Kuhn ,2023) Xinhua. (BRF2023) Guest Opinion: The Belt and Road at 10: Vision, Accomplishments, Challenges (https://english.news.cn/20231018/158f7a0d219347ae9fb41be3a65812a3/c.html)"
    },
    {
        "ref": "UNEP, 2024) United Nations Environment Programme (UNEP): https://www.unep.org/regions/asia-and-pacific/regional-initiatives/belt-and-road-initiative-international-green (https://www.unep.org/regions/asia-and-pacific/regional-initiatives/belt-and-road-initiative-international-green"
    },
    {
        "ref": "State Department. (2022, July). Forced Labor: The Hidden Cost of China's Belt and Road Initiative. U.S. Department of State. https://www.state.gov/wp-content/uploads/2022/07/Forced-Labor-The-Hidden-Cost-of-Chinas-Belt-and-Road-Initiative.pdf"
    },
    {
        "ref": "International Labour Organization. (2017, June 21). Belt and Road Initiative and the World of Work: A Briefing Note for Social Partners. https://www.ilo.org/resource/news/ilo-broadens-cooperation-its-chinese-partners-under-belt-and-road"
    },
    {
        "ref": "Chausson, A., et al. (2022, June 21). Belt and Road Initiative and Environmental Sustainability. Frontiers in Environmental Science. https://www.frontiersin.org/articles/10.3389/fenvs.2022.913928"
    },
    {
        "ref": "Radford, A., Geddes, J. A., Gallagher, K., & Larson, B. A. (2021). Open-source methods for estimating health risks of fine particulate matter from coal-fired power plants: A demonstration from Karachi, Pakistan. Environmental Impact Assessment Review, 91, 106638. https://doi.org/10.1016/j.eiar.2021.106638"
    },
    {
        "ref": "Scott, J. C. (1998). Taming Nature: An Agriculture of Legibility and Simplicity. In Seeing Like a State: How Certain Schemes to Improve the Human Condition Have Failed (pp. 262–306). Yale University Press. http://www.jstor.org/stable/j.ctt1nq3vk.13"
    },
    {
        "ref": "Rajah, R., Dayant, A., & Pryke, J. (2019). Ocean of debt?: Belt and Road and debt diplomacy in the Pacific. Lowy Institute for International Policy. http://www.jstor.org/stable/resrep19796"
    },
    {
        "ref": "Gunasekara, S., & Travelli, A. (2023, November 8). U.S. finance agency lends to Sri Lankan Port to counter Chinese influence. The New York Times."
    },
    {
        "ref": "Peerenboom, R. P. (2007). China modernizes threat to the west or model for the rest? Oxford University Press."
    },
    {
        "ref": "Anwar, A. (2019). Belt and Road Initiative: What’s in it for China? East-West Center. http://www.jstor.org/stable/resrep25013"
    },
    {
        "ref": "Petkova, M., & van der Putten, F.-P. (2020). Building the ‘Belt and Road’ in Europe?: Chinese construction companies and transport infrastructure in the European Union. Clingendael Institute. http://www.jstor.org/stable/resrep24642"
    },
    {
        "ref": "Geeraerts, G. (2019). Europe and China’s Belt and Road Initiative: Growing Concerns, More Strategy. Egmont Institute. http://www.jstor.org/stable/resrep21398"
    },
    {
        "ref": "Yean, T. S. (2024). Greening China’s Belt and Road Initiative in Malaysia: Rhetoric versus Reality. Journal of Southeast Asian Economies, 41(1), Pgs 19-23. https://www.jstor.org/stable/27306812"
    },
    {
        "ref": "Roy-Chaudhury, S. (2019). China, the Belt and Road Initiative, and the Hambantota Port Project. St Antony’s International Review, 15(1), Pgs 157–160. https://www.jstor.org/stable/27027759"
    }
];


const referencespic = [
    {"ref":"The Russian Presidential Press and Information Office (2017) Before the beginning of the Belt and Road international forum. Retrieved June 21, 2025 from http://en.kremlin.ru/events/president/trips/54504/photos/48320"},
    {"ref":"Reuters (2022) China ready to work with U.S. on B3W initiative. Retrieved June 21, 2025 from https://www.globalvillagespace.com/china-ready-to-work-with-u-s-on-b3w-initiative/"},
    {"ref":"Paresh Nath (2022), National View: Hypocrisy more than abundant at just-concluded climate summit. Retrieved June 21, 2025 from https://www.duluthnewstribune.com/opinion/columns/national-view-hypocrisy-more-than-abundant-at-just-concluded-climate-summit"}
]

const referencedata = [
    {"ref": "Nedopil, C. (2024). China Belt and road initiative (BRI) Investment Report 2023. China Belt and Road Initiative (BRI) Investment Report 2023. https://greenfdc.org/wp-content/uploads/2024/02/Nedopil-2024_China-BRI-Investment-Report-2023.pdf"},
    {"ref":"Marcus Lu (April 2024), Ranked: The Top 20 Countries in Debt to China, Retrieved June 21, 2025 from https://www.visualcapitalist.com/ranked-the-top-20-countries-in-debt-to-china/"}
]


const References = () => {
    return (
        <div className="reference">
            <h2>References</h2>
            <ul>
                {references.map((ref, index) => (
                    <li key={index}>
                        {`${ref.ref}`}
                    </li>
                ))}
            </ul>

            <h2>Data References</h2>
            <ul>
                {referencedata.map((ref, index) => (
                    <li key={index}>
                        {`${ref.ref}`}
                    </li>
                ))}
            </ul>

            <h2>Photo/Graphics Credit</h2>
            <ul>
                {referencespic.map((ref, index) => (
                    <li key={index}>
                        {`${ref.ref}`}
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default References;