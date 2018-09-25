<template>
    <div>
        <!-- <div v-for="(posting, index) in posts" :key="index">
            <div v-for="(subs, index) in posting" :key="index">
                {{subs.umur}}
            </div>
            {{posting.kelas}}
        </div>
        <h1>Peserta</h1>
        <div v-for="(product, index) in products" :key="index">
            {{product.title}} {{product.categories}} {{product.content}}
        </div> -->
        <div class="top d-flex">
            <b-card v-for="(product, index) in products" :key="index" :title="product.title"
                    :img-src="product.categories"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2">
                <p class="card-text">
                    {{product.content}}
                </p>
                <button type="button" class="btn btn-outline-danger" @click="deleteProducts(product.id)">Delete</button>
            </b-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            posts:
            [
                {
                    nama: 'didik',
                    kelas: 'B',
                    sub: {
                        umur: '10',
                        alamat: 'Jawa Tengah'
                    }
                },
                {
                    nama: 'gawat',
                    kelas: 'D'
                },
                {
                    nama: 'ginanjar',
                    kelas: 'A'
                }
            ],
            products:
            []
        }
    },
    created() {
        this.getProducts()
    },
    methods: {  //ini standar method untuk ambil api dari url online yang disediakan 
        getProducts() {
            return axios.get('http://reduxblog.herokuapp.com/api/posts?key=ginanjar')
            .then(response => {
                this.products = response.data
                console.log(response.data)
            })
        },
        deleteProducts(id) {
            if(confirm('Are You Sure?')) {
              fetch(`http://reduxblog.herokuapp.com/api/posts/${id}?key=ginanjar`, {
                method: 'delete'
              })
                .then(res => res.json())
                .then(data => {
                  alert('Article Removed');
                  this.getProducts();
                })
                .catch(err => console.log(err))
            }
        },
    }

}
</script>

<style>

</style>
