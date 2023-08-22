<template>
  <div class="min-w-screen min-h-screen bg-zinc-800">
    <div class="max-w-screen-xl mx-auto h-full bg-zinc-950 m-auto p-5 overflow-auto">
      <div v-if="showPlayerDetails" @click="handleBack" class="text-white py-4 underline cursor-pointer">go back</div>
      <DetailComponent v-if="showPlayerDetails" :player="fifaPlayer" />
      <TableComponent v-else :fifaList="fifaList" :onPlayerClick="handlePlayerClick" />
    </div>
  </div>
</template>

<script>
import TableComponent from '../components/table.vue'
import DetailComponent from '../components/details.vue'
import { getFifaPlayerList } from '../api/fifa';

const getRes = async() => {
  const res = await getFifaPlayerList();
  console.log(res);
}

getRes();

export default {
  async fetch() {
    try {
      const list = await getFifaPlayerList();
      this.fifaList = list;
    } catch (error) {
      console.error('Error fetching data:', error);
      this.fifaList = [];
    }
  },

  name: 'IndexPage',
  components: {
    TableComponent,
    DetailComponent
  },
  data() {
    return {
      fifaPlayer: null,
      fifaList: [],
      showPlayerDetails: false,
    };
  },
  methods: {
    handlePlayerClick(player) {
      this.fifaPlayer = player;
      this.showPlayerDetails = true;
    },
    handleBack() {
      this.fifaPlayer = null,
      this.showPlayerDetails = false;
    }
  },
}
</script>
