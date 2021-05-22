<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading</p>
      <p v-else-if="isError">Error</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No Data
      </p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
    BaseButton
  },
  data() {
    return {
      results: [],
      isLoading: false,
      isError: false
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      fetch(
        'https://vue-http-demo-99a21-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json'
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating
            });
          }
          this.results = results;
        })
        .catch(err => {
          this.isLoading = false;
          this.isError = true;
          console.log(err);
        });
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
