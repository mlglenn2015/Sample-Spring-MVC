
//https://codepen.io/Kamilius/pen/LpObwW

//reactFixedTable.js

class FixedTable extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            items: props.items,
            sortingProp: 'id',
            sortingDirectionAsc: true
        }

        this.scrollSidebar = this.scrollSidebar.bind(this)
        this.scrollBodyListHeader = this.scrollBodyListHeader.bind(this)
    }

    componentDidMount() {
        var $fixedTableBodyList = React.findDOMNode(this.refs.fixedTableBodyList)

        Ps.initialize($fixedTableBodyList)

        $fixedTableBodyList.addEventListener('ps-scroll-y', this.scrollSidebar)
        $fixedTableBodyList.addEventListener('ps-y-reach-start', () => this.scrollSidebar({target: { scrollTop: 0 }}))
        $fixedTableBodyList.addEventListener('ps-scroll-x', this.scrollBodyListHeader)
        $fixedTableBodyList.addEventListener('ps-x-reach-start', () => this.scrollBodyListHeader({target: { scrollLeft: 0 }}))
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            items: nextProps.items,
            sortingProp: 'id',
            sortingDirectionAsc: true
        })
    }

    scrollSidebar(event) {
        React.findDOMNode(this.refs.sidebarList).style.top = `${-event.target.scrollTop}px`
    }

    scrollBodyListHeader(event) {
        React.findDOMNode(this.refs.bodyListHeader).style.left = `${-event.target.scrollLeft}px`
    }

    sortAsc(prop) {
        return this.state.items.sort((a, b) => {
                if (a[prop] > b[prop]) {
            return 1;
        }

        if (a[prop] < b[prop]) {
            return -1;
        }

        return 0;
    })
    }

    sortDesc(prop) {
        return this.state.items.sort((a, b) => {
                if (a[prop] < b[prop]) {
            return 1;
        }

        if (a[prop] > b[prop]) {
            return -1;
        }

        return 0;
    })
    }

    sortBy(prop) {
        if (prop === this.state.sortingProp) {
            if (this.state.sortingDirectionAsc) {
                this.setState({
                    sortingDirectionAsc: false,
                    items: this.sortDesc(prop)
                })
                return
            } else {
                this.setState({
                    sortingDirectionAsc: true,
                    items: this.sortAsc(prop)
                })
                return
            }
        }
        this.setState({
            sortingProp: prop,
            sortingDirectionAsc: true,
            items: this.sortAsc(prop)
        })
    }

    renderFixedList() {
        var items = this.state.items.map((i) => {
                return (
            <div className="fixed-table__row">
            <div className="fixed-table__col">{i.id}</div>
        </div>
    )
    })

        return (
            <div ref="sidebarList"
        className="fixed-table__list fixed-table__list--fixed">
            {items}
            </div>
    )
    }

    renderList() {
        var items = this.state.items.map((i, index) => {
                return (
            <div key={`details-row-${index}`}
        className="fixed-table__row">
            <div className="fixed-table__col">{i.first_name}</div>
        <div className="fixed-table__col">{i.last_name}</div>
        <div className="fixed-table__col">{i.email}</div>
        <div className="fixed-table__col">{i.country}</div>
        <div className="fixed-table__col">{i.ip_address}</div>
        </div>
    )
    })
        return (
            <div ref="fixedTableBodyList"
        onScroll="onBodyListScroll"
        className="fixed-table__list">
            {items}
            </div>
    )
    }
    render() {
        return (
            <div className="fixed-table">
            <div className="fixed-table__sidebar">
            <div className="fixed-table__header">
            <div className="fixed-table__th"
        onClick={this.sortBy.bind(this, 'id')}>Id</div>
        </div>
        <div className="fixed-table__scrollable-sidebar">
            {this.renderFixedList()}
    </div>
        </div>
        <div className="fixed-table__body">
            <div className="fixed-table__header">
            <div ref="bodyListHeader"
        className="fixed-table__scrollable-header">
            <div className="fixed-table__th"
        onClick={this.sortBy.bind(this, 'first_name')}>First Name</div>
        <div className="fixed-table__th"
        onClick={this.sortBy.bind(this, 'last_name')}>Last Name</div>
        <div className="fixed-table__th"
        onClick={this.sortBy.bind(this, 'email')}>Email</div>
        <div className="fixed-table__th"
        onClick={this.sortBy.bind(this, 'country')}>Country</div>
        <div className="fixed-table__th"
        onClick={this.sortBy.bind(this, 'ip_address')}>Ip Address</div>
        </div>
        </div>
        {this.renderList()}
    </div>
        </div>
    )
    }
}

FixedTable.propTypes = {
    items: React.PropTypes.array.isRequired
}

var items = [
    {
        "id": 1,
        "first_name": "Earl",
        "last_name": "Spencer",
        "email": "espencer0@latimes.com",
        "country": "Vietnam",
        "ip_address": "230.102.136.72"
    }, {
        "id": 2,
        "first_name": "Laura",
        "last_name": "Lawrence",
        "email": "llawrence1@hibu.com",
        "country": "Czech Republic",
        "ip_address": "68.71.237.213"
    }, {
        "id": 3,
        "first_name": "Kathy",
        "last_name": "Schmidt",
        "email": "kschmidt2@marketwatch.com",
        "country": "Philippines",
        "ip_address": "246.77.46.156"
    }, {
        "id": 4,
        "first_name": "Sandra",
        "last_name": "Price",
        "email": "sprice3@posterous.com",
        "country": "Philippines",
        "ip_address": "222.226.217.225"
    }, {
        "id": 5,
        "first_name": "Kathleen",
        "last_name": "Hamilton",
        "email": "khamilton4@prweb.com",
        "country": "Indonesia",
        "ip_address": "141.207.162.250"
    }, {
        "id": 6,
        "first_name": "Terry",
        "last_name": "Jordan",
        "email": "tjordan5@merriam-webster.com",
        "country": "France",
        "ip_address": "26.245.117.95"
    }, {
        "id": 7,
        "first_name": "Dorothy",
        "last_name": "Alvarez",
        "email": "dalvarez6@biglobe.ne.jp",
        "country": "Brazil",
        "ip_address": "123.0.246.196"
    }, {
        "id": 8,
        "first_name": "Shawn",
        "last_name": "Russell",
        "email": "srussell7@jalbum.net",
        "country": "Philippines",
        "ip_address": "195.254.254.142"
    }, {
        "id": 9,
        "first_name": "Kathryn",
        "last_name": "Matthews",
        "email": "kmatthews8@youtube.com",
        "country": "Indonesia",
        "ip_address": "166.154.113.77"
    }, {
        "id": 10,
        "first_name": "Bruce",
        "last_name": "Cunningham",
        "email": "bcunningham9@cmu.edu",
        "country": "Indonesia",
        "ip_address": "197.245.199.148"
    }, {
        "id": 11,
        "first_name": "Michael",
        "last_name": "Wheeler",
        "email": "mwheelera@soundcloud.com",
        "country": "United States",
        "ip_address": "192.42.229.72"
    }, {
        "id": 12,
        "first_name": "Ronald",
        "last_name": "Nguyen",
        "email": "rnguyenb@chron.com",
        "country": "Vietnam",
        "ip_address": "141.69.176.157"
    }, {
        "id": 13,
        "first_name": "Gregory",
        "last_name": "Howell",
        "email": "ghowellc@webs.com",
        "country": "Gambia",
        "ip_address": "7.51.22.138"
    }, {
        "id": 14,
        "first_name": "Samuel",
        "last_name": "Lane",
        "email": "slaned@furl.net",
        "country": "Ivory Coast",
        "ip_address": "12.164.139.66"
    }, {
        "id": 15,
        "first_name": "Maria",
        "last_name": "Sims",
        "email": "msimse@studiopress.com",
        "country": "Brazil",
        "ip_address": "133.30.25.179"
    }, {
        "id": 16,
        "first_name": "Earl",
        "last_name": "Price",
        "email": "epricef@ameblo.jp",
        "country": "China",
        "ip_address": "173.205.16.97"
    }, {
        "id": 17,
        "first_name": "Adam",
        "last_name": "Bennett",
        "email": "abennettg@yellowpages.com",
        "country": "Guatemala",
        "ip_address": "56.244.244.49"
    }, {
        "id": 18,
        "first_name": "Paula",
        "last_name": "Richards",
        "email": "prichardsh@e-recht24.de",
        "country": "Mongolia",
        "ip_address": "185.252.56.17"
    }, {
        "id": 19,
        "first_name": "Nancy",
        "last_name": "Wood",
        "email": "nwoodi@1und1.de",
        "country": "Indonesia",
        "ip_address": "96.234.18.172"
    }, {
        "id": 20,
        "first_name": "Gloria",
        "last_name": "Lynch",
        "email": "glynchj@answers.com",
        "country": "Indonesia",
        "ip_address": "210.183.128.165"
    }, {
        "id": 21,
        "first_name": "Jonathan",
        "last_name": "Reyes",
        "email": "jreyesk@princeton.edu",
        "country": "China",
        "ip_address": "36.52.151.160"
    }, {
        "id": 22,
        "first_name": "Keith",
        "last_name": "Dixon",
        "email": "kdixonl@wordpress.org",
        "country": "Indonesia",
        "ip_address": "93.222.158.136"
    }, {
        "id": 23,
        "first_name": "Bonnie",
        "last_name": "Taylor",
        "email": "btaylorm@dot.gov",
        "country": "Poland",
        "ip_address": "231.103.233.94"
    }, {
        "id": 24,
        "first_name": "Benjamin",
        "last_name": "Meyer",
        "email": "bmeyern@delicious.com",
        "country": "Indonesia",
        "ip_address": "75.252.39.120"
    }, {
        "id": 25,
        "first_name": "Nancy",
        "last_name": "Harper",
        "email": "nharpero@prweb.com",
        "country": "France",
        "ip_address": "209.40.72.145"
    }, {
        "id": 26,
        "first_name": "Bonnie",
        "last_name": "Fuller",
        "email": "bfullerp@ovh.net",
        "country": "Poland",
        "ip_address": "26.114.1.4"
    }, {
        "id": 27,
        "first_name": "Harold",
        "last_name": "King",
        "email": "hkingq@accuweather.com",
        "country": "Indonesia",
        "ip_address": "79.105.188.195"
    }, {
        "id": 28,
        "first_name": "Christopher",
        "last_name": "Bailey",
        "email": "cbaileyr@topsy.com",
        "country": "Dominican Republic",
        "ip_address": "117.131.97.17"
    }, {
        "id": 29,
        "first_name": "Keith",
        "last_name": "Fields",
        "email": "kfieldss@mediafire.com",
        "country": "Vietnam",
        "ip_address": "237.214.120.202"
    }, {
        "id": 30,
        "first_name": "Peter",
        "last_name": "Dixon",
        "email": "pdixont@mac.com",
        "country": "Philippines",
        "ip_address": "67.217.168.218"
    }, {
        "id": 31,
        "first_name": "Ruth",
        "last_name": "Wright",
        "email": "rwrightu@wordpress.org",
        "country": "South Africa",
        "ip_address": "249.57.131.163"
    }, {
        "id": 32,
        "first_name": "Douglas",
        "last_name": "Reynolds",
        "email": "dreynoldsv@spiegel.de",
        "country": "Japan",
        "ip_address": "240.174.178.216"
    }, {
        "id": 33,
        "first_name": "Kenneth",
        "last_name": "Ramos",
        "email": "kramosw@virginia.edu",
        "country": "Russia",
        "ip_address": "117.25.143.201"
    }, {
        "id": 34,
        "first_name": "Marie",
        "last_name": "Rogers",
        "email": "mrogersx@vk.com",
        "country": "Nigeria",
        "ip_address": "41.158.245.248"
    }, {
        "id": 35,
        "first_name": "Carl",
        "last_name": "Scott",
        "email": "cscotty@examiner.com",
        "country": "China",
        "ip_address": "21.83.136.139"
    }, {
        "id": 36,
        "first_name": "Irene",
        "last_name": "Anderson",
        "email": "iandersonz@tinypic.com",
        "country": "Brazil",
        "ip_address": "84.233.26.131"
    }, {
        "id": 37,
        "first_name": "Melissa",
        "last_name": "Hunt",
        "email": "mhunt10@unblog.fr",
        "country": "Bulgaria",
        "ip_address": "173.168.213.137"
    }, {
        "id": 38,
        "first_name": "Alice",
        "last_name": "Young",
        "email": "ayoung11@multiply.com",
        "country": "Indonesia",
        "ip_address": "134.140.230.201"
    }, {
        "id": 39,
        "first_name": "Roy",
        "last_name": "Nguyen",
        "email": "rnguyen12@umich.edu",
        "country": "Venezuela",
        "ip_address": "93.242.135.199"
    }, {
        "id": 40,
        "first_name": "Stephen",
        "last_name": "Peterson",
        "email": "speterson13@census.gov",
        "country": "Poland",
        "ip_address": "77.112.61.62"
    }, {
        "id": 41,
        "first_name": "Jennifer",
        "last_name": "Stevens",
        "email": "jstevens14@purevolume.com",
        "country": "Cyprus",
        "ip_address": "222.230.47.87"
    }, {
        "id": 42,
        "first_name": "Bonnie",
        "last_name": "Olson",
        "email": "bolson15@hhs.gov",
        "country": "Luxembourg",
        "ip_address": "78.249.94.64"
    }, {
        "id": 43,
        "first_name": "Clarence",
        "last_name": "Elliott",
        "email": "celliott16@diigo.com",
        "country": "United Arab Emirates",
        "ip_address": "206.72.156.229"
    }, {
        "id": 44,
        "first_name": "Stephanie",
        "last_name": "Little",
        "email": "slittle17@youtube.com",
        "country": "Russia",
        "ip_address": "136.194.119.185"
    }, {
        "id": 45,
        "first_name": "Gary",
        "last_name": "Lee",
        "email": "glee18@opera.com",
        "country": "Indonesia",
        "ip_address": "13.19.220.149"
    }, {
        "id": 46,
        "first_name": "Jason",
        "last_name": "Bell",
        "email": "jbell19@google.de",
        "country": "Indonesia",
        "ip_address": "195.228.137.209"
    }, {
        "id": 47,
        "first_name": "Joyce",
        "last_name": "Reid",
        "email": "jreid1a@wikimedia.org",
        "country": "Indonesia",
        "ip_address": "104.175.48.105"
    }, {
        "id": 48,
        "first_name": "Kelly",
        "last_name": "Fowler",
        "email": "kfowler1b@prweb.com",
        "country": "Latvia",
        "ip_address": "113.197.93.142"
    }, {
        "id": 49,
        "first_name": "Mildred",
        "last_name": "Rose",
        "email": "mrose1c@4shared.com",
        "country": "Angola",
        "ip_address": "35.13.81.24"
    }, {
        "id": 50,
        "first_name": "Carolyn",
        "last_name": "Kelley",
        "email": "ckelley1d@xrea.com",
        "country": "Russia",
        "ip_address": "49.106.226.150"
    }, {
        "id": 51,
        "first_name": "Dorothy",
        "last_name": "Gray",
        "email": "dgray1e@yale.edu",
        "country": "China",
        "ip_address": "39.174.154.152"
    }, {
        "id": 52,
        "first_name": "Ashley",
        "last_name": "Hamilton",
        "email": "ahamilton1f@example.com",
        "country": "Indonesia",
        "ip_address": "165.48.125.215"
    }, {
        "id": 53,
        "first_name": "Christina",
        "last_name": "Wilson",
        "email": "cwilson1g@pcworld.com",
        "country": "United States",
        "ip_address": "90.230.59.158"
    }, {
        "id": 54,
        "first_name": "Brian",
        "last_name": "Gibson",
        "email": "bgibson1h@g.co",
        "country": "Poland",
        "ip_address": "73.196.138.88"
    }, {
        "id": 55,
        "first_name": "Melissa",
        "last_name": "Hamilton",
        "email": "mhamilton1i@opensource.org",
        "country": "Brazil",
        "ip_address": "121.223.226.93"
    }, {
        "id": 56,
        "first_name": "Lois",
        "last_name": "Brooks",
        "email": "lbrooks1j@va.gov",
        "country": "Sudan",
        "ip_address": "174.244.229.178"
    }, {
        "id": 57,
        "first_name": "Ruth",
        "last_name": "Ryan",
        "email": "rryan1k@list-manage.com",
        "country": "Japan",
        "ip_address": "74.204.71.244"
    }, {
        "id": 58,
        "first_name": "Carlos",
        "last_name": "Willis",
        "email": "cwillis1l@unicef.org",
        "country": "Guyana",
        "ip_address": "7.19.210.176"
    }, {
        "id": 59,
        "first_name": "Alan",
        "last_name": "Hudson",
        "email": "ahudson1m@samsung.com",
        "country": "Colombia",
        "ip_address": "155.147.144.218"
    }, {
        "id": 60,
        "first_name": "Randy",
        "last_name": "Armstrong",
        "email": "rarmstrong1n@mediafire.com",
        "country": "Norway",
        "ip_address": "85.159.27.247"
    }, {
        "id": 61,
        "first_name": "Paul",
        "last_name": "Johnson",
        "email": "pjohnson1o@apple.com",
        "country": "Indonesia",
        "ip_address": "167.75.181.190"
    }, {
        "id": 62,
        "first_name": "Thomas",
        "last_name": "Dean",
        "email": "tdean1p@ycombinator.com",
        "country": "China",
        "ip_address": "73.180.174.153"
    }, {
        "id": 63,
        "first_name": "Ruby",
        "last_name": "Harper",
        "email": "rharper1q@ameblo.jp",
        "country": "Russia",
        "ip_address": "44.21.97.214"
    }, {
        "id": 64,
        "first_name": "Steve",
        "last_name": "Crawford",
        "email": "scrawford1r@opensource.org",
        "country": "Peru",
        "ip_address": "158.221.255.226"
    }, {
        "id": 65,
        "first_name": "Joan",
        "last_name": "Montgomery",
        "email": "jmontgomery1s@reference.com",
        "country": "Brazil",
        "ip_address": "104.29.51.80"
    }, {
        "id": 66,
        "first_name": "Jeremy",
        "last_name": "Olson",
        "email": "jolson1t@usatoday.com",
        "country": "Iran",
        "ip_address": "107.140.136.87"
    }, {
        "id": 67,
        "first_name": "Gerald",
        "last_name": "Edwards",
        "email": "gedwards1u@narod.ru",
        "country": "China",
        "ip_address": "226.253.158.221"
    }, {
        "id": 68,
        "first_name": "Catherine",
        "last_name": "Garcia",
        "email": "cgarcia1v@msu.edu",
        "country": "Yemen",
        "ip_address": "219.178.84.170"
    }, {
        "id": 69,
        "first_name": "Beverly",
        "last_name": "Murphy",
        "email": "bmurphy1w@blogs.com",
        "country": "Netherlands",
        "ip_address": "147.244.20.231"
    }, {
        "id": 70,
        "first_name": "Earl",
        "last_name": "Warren",
        "email": "ewarren1x@ed.gov",
        "country": "Brazil",
        "ip_address": "148.20.83.7"
    }, {
        "id": 71,
        "first_name": "Susan",
        "last_name": "Jackson",
        "email": "sjackson1y@google.fr",
        "country": "Indonesia",
        "ip_address": "78.110.255.106"
    }, {
        "id": 72,
        "first_name": "Joan",
        "last_name": "Gilbert",
        "email": "jgilbert1z@amazon.co.jp",
        "country": "Indonesia",
        "ip_address": "73.35.252.106"
    }, {
        "id": 73,
        "first_name": "Sandra",
        "last_name": "Spencer",
        "email": "sspencer20@washingtonpost.com",
        "country": "Colombia",
        "ip_address": "98.102.59.105"
    }, {
        "id": 74,
        "first_name": "Gary",
        "last_name": "Lane",
        "email": "glane21@people.com.cn",
        "country": "Papua New Guinea",
        "ip_address": "161.255.25.207"
    }, {
        "id": 75,
        "first_name": "Sandra",
        "last_name": "Andrews",
        "email": "sandrews22@google.ca",
        "country": "China",
        "ip_address": "47.4.88.237"
    }, {
        "id": 76,
        "first_name": "Albert",
        "last_name": "Williamson",
        "email": "awilliamson23@bloglines.com",
        "country": "China",
        "ip_address": "3.67.53.90"
    }, {
        "id": 77,
        "first_name": "Catherine",
        "last_name": "Chavez",
        "email": "cchavez24@examiner.com",
        "country": "Ukraine",
        "ip_address": "129.9.127.0"
    }, {
        "id": 78,
        "first_name": "Rachel",
        "last_name": "Reed",
        "email": "rreed25@woothemes.com",
        "country": "Iran",
        "ip_address": "224.52.52.15"
    }, {
        "id": 79,
        "first_name": "Jane",
        "last_name": "Cox",
        "email": "jcox26@ow.ly",
        "country": "Russia",
        "ip_address": "161.209.248.211"
    }, {
        "id": 80,
        "first_name": "Larry",
        "last_name": "Bailey",
        "email": "lbailey27@blog.com",
        "country": "Mongolia",
        "ip_address": "185.20.219.72"
    }, {
        "id": 81,
        "first_name": "Stephen",
        "last_name": "Lane",
        "email": "slane28@engadget.com",
        "country": "Czech Republic",
        "ip_address": "25.46.184.114"
    }, {
        "id": 82,
        "first_name": "Rachel",
        "last_name": "Lopez",
        "email": "rlopez29@amazon.com",
        "country": "Serbia",
        "ip_address": "217.77.106.129"
    }, {
        "id": 83,
        "first_name": "Janet",
        "last_name": "Castillo",
        "email": "jcastillo2a@live.com",
        "country": "Indonesia",
        "ip_address": "16.92.172.223"
    }, {
        "id": 84,
        "first_name": "Lawrence",
        "last_name": "Collins",
        "email": "lcollins2b@twitpic.com",
        "country": "Taiwan",
        "ip_address": "115.122.105.212"
    }, {
        "id": 85,
        "first_name": "Maria",
        "last_name": "Anderson",
        "email": "manderson2c@mozilla.org",
        "country": "Kenya",
        "ip_address": "3.108.52.32"
    }, {
        "id": 86,
        "first_name": "Kimberly",
        "last_name": "Reid",
        "email": "kreid2d@aboutads.info",
        "country": "Malta",
        "ip_address": "83.182.68.158"
    }, {
        "id": 87,
        "first_name": "Emily",
        "last_name": "Palmer",
        "email": "epalmer2e@wix.com",
        "country": "Saint Kitts and Nevis",
        "ip_address": "59.231.81.129"
    }, {
        "id": 88,
        "first_name": "Anne",
        "last_name": "Garcia",
        "email": "agarcia2f@jalbum.net",
        "country": "Tanzania",
        "ip_address": "161.161.115.32"
    }, {
        "id": 89,
        "first_name": "Ernest",
        "last_name": "Lewis",
        "email": "elewis2g@sphinn.com",
        "country": "Russia",
        "ip_address": "19.155.142.237"
    }, {
        "id": 90,
        "first_name": "Lisa",
        "last_name": "Stewart",
        "email": "lstewart2h@opensource.org",
        "country": "France",
        "ip_address": "107.218.126.7"
    }, {
        "id": 91,
        "first_name": "Ashley",
        "last_name": "Walker",
        "email": "awalker2i@marketwatch.com",
        "country": "Philippines",
        "ip_address": "186.170.170.167"
    }, {
        "id": 92,
        "first_name": "Aaron",
        "last_name": "Stevens",
        "email": "astevens2j@netvibes.com",
        "country": "Bolivia",
        "ip_address": "188.215.233.65"
    }, {
        "id": 93,
        "first_name": "Pamela",
        "last_name": "Rogers",
        "email": "progers2k@cmu.edu",
        "country": "Brazil",
        "ip_address": "161.222.96.101"
    }, {
        "id": 94,
        "first_name": "Sandra",
        "last_name": "Carr",
        "email": "scarr2l@fema.gov",
        "country": "China",
        "ip_address": "157.236.176.224"
    }, {
        "id": 95,
        "first_name": "Jonathan",
        "last_name": "Ray",
        "email": "jray2m@dion.ne.jp",
        "country": "South Africa",
        "ip_address": "176.158.164.7"
    }, {
        "id": 96,
        "first_name": "Lisa",
        "last_name": "Simmons",
        "email": "lsimmons2n@hud.gov",
        "country": "Brazil",
        "ip_address": "134.195.9.79"
    }, {
        "id": 97,
        "first_name": "Daniel",
        "last_name": "Daniels",
        "email": "ddaniels2o@google.fr",
        "country": "Egypt",
        "ip_address": "186.229.218.236"
    }, {
        "id": 98,
        "first_name": "Bobby",
        "last_name": "Webb",
        "email": "bwebb2p@globo.com",
        "country": "China",
        "ip_address": "126.126.138.87"
    }, {
        "id": 99,
        "first_name": "Christine",
        "last_name": "Dean",
        "email": "cdean2q@who.int",
        "country": "Greece",
        "ip_address": "168.12.135.232"
    }, {
        "id": 100,
        "first_name": "Sara",
        "last_name": "Roberts",
        "email": "sroberts2r@jalbum.net",
        "country": "Netherlands",
        "ip_address": "127.152.179.113"
    }]

ReactDOM.render(
<FixedTable items={items} /> ,
    document.querySelector('.fixedTableContainer')
)