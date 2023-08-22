<template>
    <div>
        <div class="bg-zinc-900 p-4 rounded-xl text-white">
            <div class="w-full grid lg:grid-cols-[20%,40%,40%] grid-cols-[100%]">
                <div class="w-full flex justify-center items-center mb-0 lg:mb-6">
                    <div class="px-6 max-w-xs">
                        <img class="w-full" :src="player.img" alt="Player Image" />
                    </div>
                </div>
                <div class="grid grid-cols-3 mb-0 lg:mb-6">
                    <div class="col-span-1 py-2 px-4">
                        <div class="flex justify-between py-1 border-t border-b border-white border-solid">
                            <div>PAC</div>
                            <div>{{ player.pac.average }}</div>
                        </div>
                        <div v-for="key in getObjectKeys(player.pac)" class="pt-4 flex justify-between text-xs md:text-sm">
                            <div>{{ formatPropertyName(key) }}</div>
                            <div>{{ player.pac[key] }}</div>
                        </div>
                    </div>
                    <div class="col-span-1 py-2 px-4">
                        <div class="flex justify-between py-1 border-t border-b border-white border-solid">
                            <div>SHO</div>
                            <div>{{ player.sho.average }}</div>
                        </div>
                        <div v-for="key in getObjectKeys(player.sho)" class="pt-4 flex justify-between text-xs md:text-sm">
                            <div>{{ formatPropertyName(key) }}</div>
                            <div>{{ player.sho[key] }}</div>
                        </div>
                    </div>
                    <div class="col-span-1 py-2 px-4">
                        <div class="flex justify-between py-1 border-t border-b border-white border-solid">
                            <div>PAS</div>
                            <div>{{ player.pas.average }}</div>
                        </div>
                        <div v-for="key in getObjectKeys(player.pas)" class="pt-4 flex justify-between text-xs md:text-sm">
                            <div>{{ formatPropertyName(key) }}</div>
                            <div>{{ player.pas[key] }}</div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-3 mb-0 lg:mb-6">
                    <div class="col-span-1 py-2 px-4">
                        <div class="flex justify-between py-1 border-t border-b border-white border-solid">
                            <div>DRI</div>
                            <div>{{ player.dri.average }}</div>
                        </div>
                        <div v-for="key in getObjectKeys(player.dri)" class="pt-4 flex justify-between text-xs md:text-sm">
                            <div>{{ formatPropertyName(key) }}</div>
                            <div>{{ player.dri[key] }}</div>
                        </div>
                    </div>
                    <div class="col-span-1 py-2 px-4">
                        <div class="flex justify-between py-1 border-t border-b border-white border-solid">
                            <div>DEF</div>
                            <div>{{ player.def.average }}</div>
                        </div>
                        <div v-for="key in getObjectKeys(player.def)" class="pt-4 flex justify-between text-xs md:text-sm">
                            <div>{{ formatPropertyName(key) }}</div>
                            <div>{{ player.def[key] }}</div>
                        </div>
                    </div>
                    <div class="col-span-1 py-2 px-4">
                        <div class="flex justify-between py-1 border-t border-b border-white border-solid">
                            <div>PHY</div>
                            <div>{{ player.phy.average }}</div>
                        </div>
                        <div v-for="key in getObjectKeys(player.phy)" class="pt-4 flex justify-between text-xs md:text-sm">
                            <div>{{ formatPropertyName(key) }}</div>
                            <div>{{ player.phy[key] }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-white mt-6">
            <div class="flex justify-start items-end">
                <div class="text-3xl">
                    {{ player.name }}
                </div>
                <div class="ml-6 text-gray-500 border-b border-dotted">View all cards</div>
            </div>
            <div class="w-full flex justify-between md:flex-row flex-col mt-6">
                <div class="md:block flex justify-between md:p-0 py-3">
                    <div class="md:text-gray-500 text-white pb-3">Club</div>
                    <div>FC Barcelona</div>
                </div>
                <hr class="md:border-r border-t border-200-gray h-auto"/>
                <div class="md:block flex justify-between md:p-0 py-3">
                    <div class="md:text-gray-500 text-white pb-3">League</div>
                    <div>Spain Primera Division</div>
                </div>
                <hr class="md:border-r border-t border-200-gray h-auto"/>

                <div class="md:block flex justify-between md:p-0 py-3">
                    <div class="md:text-gray-500 text-white pb-3">Nation</div>
                    <div>Argentina</div>
                </div>
                <hr class="md:border-r border-t border-200-gray h-auto"/>

                <div class="md:block flex justify-between md:p-0 py-3">
                    <div class="md:text-gray-500 text-white pb-3">Strong Foot</div>
                    <div>Left</div>
                </div>
                <hr class="md:border-r border-t border-200-gray h-auto"/>

                <div class="md:block flex justify-between md:p-0 py-3">
                    <div class="md:text-gray-500 text-white pb-3">Age</div>
                    <div>33</div>
                </div>
                <hr class="md:border-r border-t border-200-gray h-auto"/>

                <div class="md:block flex justify-between md:p-0 py-3">
                    <div class="md:text-gray-500 text-white pb-3">Height</div>
                    <div>170cm|5'7</div>
                </div>
                <hr class="md:border-r border-t border-200-gray h-auto"/>

                <div class="md:block flex justify-between md:p-0 py-3">
                    <div class="md:text-gray-500 text-white pb-3">Workrates</div>
                    <div>Medium/low</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['player'],
    methods: {
        getObjectKeys(obj) {
            return Object.keys(obj);
        },
        formatPropertyName(propertyName) {
            const words = propertyName.split(/(?=[A-Z])/);

            const formattedName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            return formattedName;
        }
    }
}
</script>