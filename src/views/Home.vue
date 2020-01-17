<template>
    <span>
        <!-- {{this.username}} -->
        <home-hero></home-hero>
        <home-details></home-details>
        <home-plans></home-plans>
    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import HomeDetails from '@/components/HomeDetails';
import HomePlans from '@/components/HomePlans';
import localStore from '@/localStore.js';

export default {
    name: 'home',
    components: {
        HomeHero,
        HomeDetails,
        HomePlans
    },
    data () {
        return localStore;
    }
};
</script>