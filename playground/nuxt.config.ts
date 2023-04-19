export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/apollo'],
  runtimeConfig: {
    public: {
      apollo: {
        clients: {
          todos: {
            httpEndpoint: 'https://nuxt-gql-server-2gl6xp7kua-ue.a.run.app/query',
          }
        }
      }
    }
  },
  colorMode: {
    preference: 'light',
    storageKey: 'na-color-scheme'
  },

  apollo: {
    clients: {
      default: './apollo/default.ts',
      github: {
        httpEndpoint: 'https://api.github.com/graphql',
        tokenStorage: 'localStorage'
      },
      todos: {
        wsEndpoint: 'wss://nuxt-gql-server-2gl6xp7kua-ue.a.run.app/query',
        httpLinkOptions: {
          headers: {
            'X-CUSTOM-HEADER': 123
          }
        }
      }
    }
  }
})
