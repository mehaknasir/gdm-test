<template>
    <div class="w-full text-white">
        <div class="min-w-[800px] max-h-[97vh] overflow-y-scroll">
            <table class="w-full">
                <thead class="">
                    <tr class="bg-zinc-900 border-b-4 border-solid border-zinc-950">
                        <th @click="sortBy('name')" class="w-1/5 p-6">
                            <div class="flex justify-center items-center">
                                <div class="pr-2" >Name</div>
                                <div>
                                    <img src="/up-arrow.svg" />
                                    <img src="/down-arrow.svg" />
                                </div>
                            </div>
                        </th>
                        <th class="w-8">
                            <div class="flex justify-center items-center border-white border-solid border-r">
                                <div class="pr-2">OVR</div>
                                <div>
                                    <img src="/up-arrow.svg" />
                                    <img src="/down-arrow.svg" />
                                </div>
                            </div>
                        </th>
                        <th class="w-8">
                            <div class="flex justify-center items-center border-white border-solid border-r">
                                <div class="pr-2">POS</div>
                                <div>
                                    <img src="/up-arrow.svg" />
                                    <img src="/down-arrow.svg" />
                                </div>
                            </div>
                        </th>
                        <th class="w-8">
                            <div class="flex justify-center items-center border-white border-solid border-r">
                                <div class="pr-2">Type</div>
                                <div>
                                    <img src="/up-arrow.svg" />
                                    <img src="/down-arrow.svg" />
                                </div>
                            </div>
                        </th>
                        <th class="w-8">
                            <div class="flex justify-center items-center border-white border-solid border-r">
                                <div class="pr-2">PAC</div>
                                <div>
                                    <img src="/up-arrow.svg" />
                                    <img src="/down-arrow.svg" />
                                </div>
                            </div>
                        </th>
                        <th class="w-8">
                            <div class="flex justify-center items-center border-white border-solid border-r">
                                <div class="pr-2">SHO</div>
                                <div>
                                    <img src="/up-arrow.svg" />
                                    <img src="/down-arrow.svg" />
                                </div>
                            </div>
                        </th>
                        <th class="w-8">
                            <div class="flex justify-center items-center border-white border-solid border-r">
                                <div class="pr-2">PASS</div>
                                <div>
                                    <img src="/up-arrow.svg" />
                                    <img src="/down-arrow.svg" />
                                </div>
                            </div>
                        </th>
                        <th class="w-8">
                            <div class="flex justify-center items-center border-white border-solid border-r">
                                <div class="pr-2">DRI</div>
                                <div>
                                    <img src="/up-arrow.svg" />
                                    <img src="/down-arrow.svg" />
                                </div>
                            </div>
                        </th>
                        <th class="w-8">
                            <div class="flex justify-center items-center border-white border-solid border-r">
                                <div class="pr-2">DEF</div>
                                <div>
                                    <img src="/up-arrow.svg" />
                                    <img src="/down-arrow.svg" />
                                </div>
                            </div>
                        </th>
                        <th class="w-8">
                            <div class="flex justify-center items-center border-white border-solid border-r">
                                <div class="pr-2">PHY</div>
                                <div>
                                    <img src="/up-arrow.svg" />
                                    <img src="/down-arrow.svg" />
                                </div>
                            </div>
                        </th>
                        <th class="w-8">
                            <div class="flex justify-center items-center">
                                <div class="pr-2">WR</div>
                                <div>
                                    <img src="/up-arrow.svg" />
                                    <img src="/down-arrow.svg" />
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in sortedPeople" :key="item.id"
                        class="bg-zinc-900 border-b-4 border-solid border-zinc-950" @click="onPlayerClick(item)">
                        <td class="w-1/5 text-center p-6">
                            {{ item.name }}
                        </td>
                        <td class="w-8 text-center">
                            <div
                                class="rounded-md text-black bg-white h-10 w-fit p-4 m-auto flex justify-center items-center">
                                {{ item.ovr }}
                            </div>
                        </td>
                        <td class="w-8 text-center">
                            <div class="rounded-md bg-black h-10 w-fit p-4 m-auto flex justify-center items-center">
                                {{ item.pos }}
                            </div>
                        </td>
                        <td class="w-8 text-center">
                            <div class="rounded-md bg-black h-10 w-fit p-4 m-auto flex justify-center items-center">
                                {{ item.type }}
                            </div>
                        </td>
                        <td class="w-8 text-center">
                            <div
                                class="rounded-md bg-black border-white border-solid border h-10 w-fit p-4 m-auto flex justify-center items-center">
                                {{ item.pac.average }}
                            </div>
                        </td>
                        <td class="w-8 text-center">
                            <div
                                class="rounded-md bg-black border-white border-solid border h-10 w-fit p-4 m-auto flex justify-center items-center">
                                {{ item.sho.average }}
                            </div>
                        </td>
                        <td class="w-8 text-center">
                            <div
                                class="rounded-md bg-black border-white border-solid border h-10 w-fit p-4 m-auto flex justify-center items-center">
                                {{ item.pas.average }}
                            </div>
                        </td>
                        <td class="w-8 text-center">
                            <div
                                class="rounded-md bg-black border-white border-solid border h-10 w-fit p-4 m-auto flex justify-center items-center">
                                {{ item.dri.average }}
                            </div>
                        </td>
                        <td class="w-8 text-center">
                            <div
                                class="rounded-md bg-black border-white border-solid border h-10 w-fit p-4 m-auto flex justify-center items-center">
                                {{ item.def.average }}
                            </div>
                        </td>
                        <td class="w-8 text-center">
                            <div
                                class="rounded-md bg-black border-white border-solid border h-10 w-fit p-4 m-auto flex justify-center items-center">
                                {{ item.phy.average }}
                            </div>
                        </td>
                        <td class="w-8 text-center">
                            <div class="rounded-md bg-black h-10 w-fit p-4 m-auto flex justify-center items-center">
                                {{ item.wr }}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {

    data() {
      return {
        people: this.fifaList,
        sortKey: "name",
        sortDirection: 1,
      };
    },
    computed: {
      sortedPeople() {
        const key = this.sortKey;
        const direction = this.sortDirection;

        return this.people.slice().sort((a, b) => {
          const aValue = a[key].toLowerCase();
          const bValue = b[key].toLowerCase();

          if (aValue < bValue) return -direction;
          if (aValue > bValue) return direction;
          return 0;
        });
      },
    },
    methods: {
      sortBy(column) {
        if (this.sortKey === column) {
          this.sortDirection *= -1; // Toggle sort direction
        } else {
          this.sortKey = column;
          this.sortDirection = 1; // Default sort direction
        }
      },
    },
    name: 'TableComponent',
    props: ['fifaList', 'onPlayerClick', 'onBack']
}
</script>
