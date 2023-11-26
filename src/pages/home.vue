<template>
  <div id="home" class="fill-height flex-center">
    <section class="section-form">
      <h4 class="tcenter-mobile no-margin-mobile">
        ¡Bienvenido a <br> <span class="primary-span">METADEMOCRACIA!</span>
      </h4>

      <h4 class="mb-1 italic tcenter-mobile">Unete a la Venezuela digital</h4>
      <p class="tcenter-mobile">registrando tu correo con el cual generas tu billetera que funciona como tu
        identidad digital (NFT).<br class="delete-mobile">
        <br>Desde ya puedes proponer ideas y participar en procesos autónomos donde manifestarás tu voluntad comenzando con la consulta del 3 de diciembre.
      </p>

      <v-form ref="form" @submit.prevent="register">
        <v-text-field
        v-model="email"
        variant="outlined"
        placeholder="Correo electrónico"
        flat
        :rules="[globalRules.required, globalRules.email]"
        density="compact"
        class="input"
        rounded="0"
        ></v-text-field>

        <v-text-field
        v-model="cedula"
        variant="outlined"
        placeholder="Cédula de indentidad"
        flat
        :rules="[globalRules.required]"
        density="compact"
        class="input"
        rounded="0"
        ></v-text-field>

        <v-text-field
        v-model="phone"
        variant="outlined"
        placeholder="Teléfono"
        flat
        :rules="[globalRules.required]"
        density="compact"
        class="input"
        rounded="0"
        ></v-text-field>

        <v-btn class="btn btn-mobile" type="submit" :loading="loadingForm" @click="createRegister()">Registrarse</v-btn>
      </v-form>
    </section>

    <section class="section-prueba">
      <img src="@/assets/sources/images/meta-registro.png" alt="Meta Background">
    </section>

    <img src="@/assets/sources/images/meta-registro.png" alt="Meta Background" class="img-bg">

    <!-- Snack -->
    <v-snackbar
      v-model="snackbar"
      content-class="snack-green"
      location="top"  
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="#02ecf3"
          variant="text"
          @click="snackbar = false"
          style="font-weight: 700!important;"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>

    <v-snackbar
      v-model="snackbarError"
      content-class="snack-error"
      location="top" 
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="#B00020"
          variant="text"
          @click="snackbarError = false"
          style="font-weight: 700!important;"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import '@/assets/styles/pages/home.scss'
import variables from '@/mixins/variables';
import { ref, computed } from 'vue';
import axios from "axios";


export default{
  setup(){
    const loadingForm = ref(false);
    const { globalRules } = variables;
    const email = ref(null);
    const cedula = ref(null);
    const phone = ref(null);
    const snackbar = ref(false);
    const text = ref('');
    const snackbarError = ref(false);

    
    return{
      loadingForm,
      globalRules,
      email,
      cedula,
      phone,
      snackbar,
      text,
      snackbarError,
    }
  },

  methods:{
    async createRegister() {
      const { valid } = await this.$refs.form.validate()

      if (valid) {
        this.loadingForm = true;

      const postDataRegister = {
        email: this.email,
        cedula: this.cedula,
        phone: this.phone,
      }
      
      axios.post( `${process.env.API_URL}/subscription/`, postDataRegister)
        .then((response) => {
          console.log(response.data)
          this.loadingForm = false;
          this.text = 'Registro creado exitosamente';
          this.snackbar = true;
        })
        .catch((error) => {
          console.log(error)
          this.text = error.response.data
          this.snackbarError = true;
          this.loadingForm = false;
        });
      }
    },
  },
}
</script>
