import { acceptHMRUpdate, defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const usePlayerStore = defineStore('player', {
    state: () => ({
        fastforward: true,
        includeExited: false
    }),
    actions: {
        toggleFastForward() {
            this.fastforward = !this.fastforward
            this.resetPlayers();
        },
        toggleIncludeExited() {
            this.includeExited = !this.includeExited
            if (this.includeExited) {
                this.fastforward=false
            }
        },
        getWebSocketLocation(logId="") {
            let params = ""
            if (logId) {
                params = "?" + Object.keys(this.$state).map((key) => {
                    return key + '=' + encodeURIComponent(this.$state[key as keyof typeof this.$state]);
                  }).join('&');
            }
            return `${window.location.origin.replace(/^http/, "ws")}/ws/${logId}${params}`
        },
        resetPlayers() {
            console.log("resetting all streams")
        }
    }
})


if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePlayerStore, import.meta.hot))
  }