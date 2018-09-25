<template>
    <div class="master-cms">
        <div class="flex">
            <left-menu />
            <div class="content-right">
                <div class="menu-right">
                    Content
                </div>
                <div>
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import appProduct from './appProduct.vue'
import addProduct from './addProduct.vue'
import leftMenu from './leftMenu.vue'
export default {
    components: {
        appProduct, addProduct, leftMenu
    }
}
</script>

<style>

</style>
