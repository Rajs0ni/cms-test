
<template>
<v-container grid-list-md text-xs-center>
    <v-layout row wrap>
       <v-flex xs12>
        <img alt="Vue logo" src="@/assets/logo.png">
      </v-flex>
      <v-flex xs12>
        <HelloWorld msg="Welcome to CMS Test App"></HelloWorld>
      </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import HelloWorld from "@/components/HelloWorld"
export default {
    name:"Home",
    components:{
        HelloWorld
    }
}
</script>

<style>

</style>