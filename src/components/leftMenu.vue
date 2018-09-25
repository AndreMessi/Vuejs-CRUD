<template>
    <div class="sidebar-left">
        <div class="menu-left">
                <h4>
                    Menu Left
                </h4>
                </div>
                <div class="menu-menu">
                    <router-link to="/">
                        <div class="menu-1">
                            Home
                        </div>
                    </router-link>
                    <router-link to="/sidebar">
                    <div class="menu-1">
                        Product
                    </div>
                    </router-link>
                    <router-link to="/sidebar/product">
                    <div class="menu-1">
                        Add Product
                    </div>
                    </router-link>
                </div>
            </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
