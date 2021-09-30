new Vue({
    el: '#app',
    data: {
        bg: chrome.extension.getBackgroundPage(),
        proxies: [],
        proxy: 'auto',
    },
    mounted() {
        console.log('mounted')
        this.proxies = this.bg.proxies
        let value = localStorage.getItem('mN2ta_gfmqmYpbai')
        if (value) {
            if (value !== 'direct' && value !== 'auto') {
                let found = false;
                for (let i in this.proxies) {
                    const it = this.proxies[i]
                    if (it.proxy === value) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    value = 'auto';
                    localStorage.setItem('mN2ta_gfmqmYpbai', value)
                }
            }
            this.proxy = value
        }
        this.bg.test_speed()
    },
    methods: {
        setProxy: function (value) {
            if (this.proxy !== value) {
                this.proxy = value;
                localStorage.setItem('mN2ta_gfmqmYpbai', value)
                this.bg.set_proxy(value)
            }
        }
    }
});