import Vue from "vue";
import App from "./App.vue";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  uri: process.env.VUE_APP_GRAPHCMS_API_URL
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
