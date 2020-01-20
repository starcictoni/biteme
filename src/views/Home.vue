<template>
    <span>
        <!-- {{this.username}} -->
        <hero></hero>
        <homekoraci></homekoraci>
    </span>
</template>

<script>
import hero from '@/components/Hero';
import homekoraci from '@/components/HomeKoraci';
import localStore from '@/localStore.js';

export default {
    name: 'home',
    components: {
        hero,
        homekoraci
    },
    data () {
        return localStore;
    }
};
</script>